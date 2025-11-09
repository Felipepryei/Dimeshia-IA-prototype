import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedPipelineMeshProps {
  stage: number;
}

const AnimatedPipelineMesh = ({ stage }: AnimatedPipelineMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const getModelConfig = () => {
    switch (stage) {
      case 0:
        return {
          segments: 32,
          wireframe: true,
          color: '#3B82F6',
          metalness: 0.3,
          roughness: 0.8,
          scale: 1,
        };
      case 1:
        return {
          segments: 24,
          wireframe: false,
          color: '#8B5CF6',
          metalness: 0.6,
          roughness: 0.5,
          scale: 1.1,
        };
      case 2:
        return {
          segments: 12,
          wireframe: false,
          color: '#06B6D4',
          metalness: 0.9,
          roughness: 0.2,
          scale: 1.15,
        };
      case 3:
        return {
          segments: 8,
          wireframe: false,
          color: '#10B981',
          metalness: 0.95,
          roughness: 0.1,
          scale: 1.2,
        };
      default:
        return {
          segments: 32,
          wireframe: true,
          color: '#3B82F6',
          metalness: 0.3,
          roughness: 0.8,
          scale: 1,
        };
    }
  };

  const config = getModelConfig();

  return (
    <group ref={groupRef} scale={config.scale}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, config.segments * 4, config.segments]} />
        <meshStandardMaterial
          color={config.color}
          metalness={config.metalness}
          roughness={config.roughness}
          wireframe={config.wireframe}
        />
      </mesh>

      {stage === 1 && (
        <>
          {[...Array(8)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 2,
                Math.sin((i / 8) * Math.PI * 2) * 2,
                0,
              ]}
            >
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} />
            </mesh>
          ))}
        </>
      )}

      {stage === 2 && (
        <>
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[2, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#3B82F6" metalness={0.9} roughness={0.1} />
          </mesh>
        </>
      )}

      {stage === 3 && (
        <>
          <mesh position={[-2.5, 0, 0]} castShadow>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color="#10B981" metalness={0.95} roughness={0.05} />
          </mesh>
          <mesh position={[2.5, 0, 0]} castShadow>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#3B82F6" metalness={0.95} roughness={0.05} />
          </mesh>
          <mesh position={[0, 2.5, 0]} castShadow>
            <coneGeometry args={[0.4, 0.8, 8]} />
            <meshStandardMaterial color="#8B5CF6" metalness={0.95} roughness={0.05} />
          </mesh>
          <mesh position={[0, -2.5, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.95} roughness={0.05} />
          </mesh>
        </>
      )}

      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color={stage === 0 ? '#3B82F6' : stage === 1 ? '#8B5CF6' : stage === 2 ? '#06B6D4' : '#10B981'}
      />
      <pointLight position={[0, 5, 0]} intensity={1} color={config.color} />
    </group>
  );
};

interface PipelineModelViewerProps {
  stage: number;
}

const PipelineModelViewer = ({ stage }: PipelineModelViewerProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-transparent">
            <div className="text-center p-8">
              <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-500 text-xs">Loading 3D Model...</p>
            </div>
          </div>
        }
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <AnimatedPipelineMesh stage={stage} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default PipelineModelViewer;
