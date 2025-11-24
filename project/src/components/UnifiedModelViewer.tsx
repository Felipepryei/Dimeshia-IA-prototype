import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Eye, EyeOff, Grid3x3 } from 'lucide-react';

// Preset character model
const CharacterModel = ({ optimized = false, wireframe = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 1.7, 0]}>
        <icosahedronGeometry args={[0.45, optimized ? 3 : 7]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.05} roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.8, 0.08]}>
        <sphereGeometry args={[0.48, optimized ? 12 : 40, optimized ? 12 : 40]} />
        <meshStandardMaterial color="#2D1810" wireframe={wireframe} metalness={0.15} roughness={0.85} side={THREE.BackSide} />
      </mesh>
      <mesh position={[-0.16, 1.82, 0.4]}>
        <sphereGeometry args={[0.1, optimized ? 8 : 20, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#FFFFFF" wireframe={wireframe} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0.16, 1.82, 0.4]}>
        <sphereGeometry args={[0.1, optimized ? 8 : 20, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#FFFFFF" wireframe={wireframe} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <capsuleGeometry args={[0.4, 1.4, optimized ? 6 : 18, optimized ? 24 : 80]} />
        <meshStandardMaterial color="#2563EB" wireframe={wireframe} metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[-0.75, 1.05, 0]} rotation={[0, 0, Math.PI / 6]}>
        <capsuleGeometry args={[0.15, 1.15, optimized ? 6 : 16, optimized ? 24 : 60]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.08} roughness={0.85} />
      </mesh>
      <mesh position={[0.75, 1.05, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <capsuleGeometry args={[0.15, 1.15, optimized ? 6 : 16, optimized ? 24 : 60]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.08} roughness={0.85} />
      </mesh>
      <mesh position={[-0.32, -0.55, 0]}>
        <capsuleGeometry args={[0.17, 1.35, optimized ? 6 : 16, optimized ? 24 : 72]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.1} roughness={0.85} />
      </mesh>
      <mesh position={[0.32, -0.55, 0]}>
        <capsuleGeometry args={[0.17, 1.35, optimized ? 6 : 16, optimized ? 24 : 72]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.1} roughness={0.85} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 14, 10]} intensity={1.4} />
      <pointLight position={[-10, 10, -10]} intensity={0.9} color="#8B5CF6" />
    </group>
  );
};

// Generic uploaded model placeholder
const UploadedModel = ({ wireframe = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.8, 5]} />
        <meshStandardMaterial color="#8B5CF6" wireframe={wireframe} metalness={0.3} roughness={0.6} />
      </mesh>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06B6D4" />
    </group>
  );
};

interface UnifiedModelViewerProps {
  modelType: 'character' | 'scene' | 'product' | 'uploaded';
  optimized?: boolean;
  polygons?: number;
}

export default function UnifiedModelViewer({ modelType, optimized = false, polygons = 0 }: UnifiedModelViewerProps) {
  const [wireframe, setWireframe] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const renderModel = () => {
    switch (modelType) {
      case 'character':
        return <CharacterModel optimized={optimized} wireframe={wireframe} />;
      case 'uploaded':
        return <UploadedModel wireframe={wireframe} />;
      default:
        return <CharacterModel optimized={optimized} wireframe={wireframe} />;
    }
  };

  return (
    <div className="relative w-full h-full">
      <Canvas style={{ width: '100%', height: '100%' }} gl={{ preserveDrawingBuffer: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
        <OrbitControls enableZoom enablePan enableRotate autoRotate autoRotateSpeed={2} />
        {renderModel()}
        <color attach="background" args={['#000000']} />
      </Canvas>

      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setWireframe(!wireframe)}
          className="p-2 bg-gray-900/80 hover:bg-gray-800 rounded-lg border border-gray-700 transition-all"
          title="Toggle Wireframe"
        >
          <Grid3x3 className="w-5 h-5 text-cyan-400" />
        </button>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 bg-gray-900/80 hover:bg-gray-800 rounded-lg border border-gray-700 transition-all"
          title="Toggle Info"
        >
          {showInfo ? <Eye className="w-5 h-5 text-blue-400" /> : <EyeOff className="w-5 h-5 text-gray-400" />}
        </button>
      </div>

      {/* Info Panel */}
      {showInfo && (
        <div className="absolute bottom-4 left-4 bg-gray-900/90 border border-gray-700 rounded-lg p-4 text-xs space-y-2 max-w-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Polygons:</span>
            <span className="text-cyan-400 font-bold">{polygons > 0 ? (polygons / 1000).toFixed(0) : 'N/A'}K</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Mode:</span>
            <span className="text-green-400 font-bold">{wireframe ? 'Wireframe' : 'Solid'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Type:</span>
            <span className="text-blue-400 font-bold capitalize">{modelType}</span>
          </div>
        </div>
      )}
    </div>
  );
}
