import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedMeshProps {
  optimized: boolean;
}

const AnimatedMesh = ({ optimized }: AnimatedMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  const segments = optimized ? 8 : 32;

  return (
    <group>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, segments * 4, segments]} />
        <meshStandardMaterial
          color={optimized ? '#8B5CF6' : '#3B82F6'}
          metalness={0.8}
          roughness={0.2}
          wireframe={!optimized}
        />
      </mesh>

      {optimized && (
        <>
          <mesh position={[-2.5, 0, 0]} castShadow>
            <sphereGeometry args={[0.4, segments, segments]} />
            <meshStandardMaterial color="#3B82F6" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[2.5, 0, 0]} castShadow>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 2, 0]} castShadow>
            <coneGeometry args={[0.4, 0.8, segments]} />
            <meshStandardMaterial color="#EC4899" metalness={0.9} roughness={0.1} />
          </mesh>
        </>
      )}

      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#8B5CF6"
      />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#3B82F6" />
    </group>
  );
};

interface ThreeDModelViewerProps {
  optimized: boolean;
}

const ThreeDModelViewer = ({ optimized }: ThreeDModelViewerProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1);
        }}
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-center p-8">
              <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400 text-sm">Loading 3D Model...</p>
            </div>
          </div>
        }
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <AnimatedMesh optimized={optimized} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          autoRotate={false}
        />
        <gridHelper args={[10, 10, '#1F2937', '#111827']} position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
