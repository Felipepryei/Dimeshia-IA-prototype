import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Eye, EyeOff, Grid3x3 } from 'lucide-react';

// Preset character model - Simplified and guaranteed visible
const CharacterModel = ({ optimized = false, wireframe = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 0.6, 0]} scale={1}>
        <sphereGeometry args={[0.35, optimized ? 8 : 32, optimized ? 8 : 32]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0, 0]} scale={[0.4, 0.8, 0.3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#2563EB" wireframe={wireframe} metalness={0.15} roughness={0.75} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.5, 0.2, 0]} scale={[0.15, 0.6, 0.15]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#D4A574" wireframe={wireframe} metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.5, 0.2, 0]} scale={[0.15, 0.6, 0.15]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#D4A574" wireframe={wireframe} metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.25, -0.6, 0]} scale={[0.15, 0.5, 0.15]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.1} roughness={0.85} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.25, -0.6, 0]} scale={[0.15, 0.5, 0.15]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.1} roughness={0.85} />
      </mesh>

      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, 5]} intensity={0.6} color="#06B6D4" />
    </group>
  );
};

// Generic uploaded model placeholder - Simple and visible
const UploadedModel = ({ wireframe = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#8B5CF6" wireframe={wireframe} metalness={0.4} roughness={0.5} />
      </mesh>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} />
      <directionalLight position={[-4, 4, 4]} intensity={0.6} color="#06B6D4" />
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
  const [canvasReady, setCanvasReady] = useState(true);

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
    <div className="relative w-full h-full bg-black" style={{ width: '100%', height: '100%' }}>
      {canvasReady ? (
        <Canvas 
          style={{ width: '100%', height: '100%', display: 'block' }} 
          gl={{ 
            preserveDrawingBuffer: true,
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true
          }}
          camera={{ position: [0, 0, 2.5], fov: 50 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 2.5]} fov={50} />
          <OrbitControls 
            enableZoom 
            enablePan 
            enableRotate 
            autoRotate 
            autoRotateSpeed={2}
            minDistance={1}
            maxDistance={6}
          />
          {renderModel()}
          <color attach="background" args={['#000000']} />
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">3D Model Viewer</p>
            <p className="text-gray-500 text-xs">WebGL unavailable</p>
          </div>
        </div>
      )}

      {/* Controls - Outside Canvas */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
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
        <div className="absolute bottom-4 left-4 bg-gray-900/90 border border-gray-700 rounded-lg p-4 text-xs space-y-2 max-w-xs z-10">
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
