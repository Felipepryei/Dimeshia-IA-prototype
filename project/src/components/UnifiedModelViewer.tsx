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

// Volcano environment model - High quality
const SceneModel = ({ optimized = false, wireframe = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Volcanic base - rocky ground */}
      <mesh position={[0, -0.8, 0]} scale={[2.5, 0.15, 2.5]}>
        <cylinderGeometry args={[1, 1, 1, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#3F3F3F" wireframe={wireframe} metalness={0.1} roughness={0.95} />
      </mesh>

      {/* Main volcano cone - Large */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[1, 2.2, optimized ? 12 : 32, optimized ? 4 : 8]} />
        <meshStandardMaterial color="#5C3D2E" wireframe={wireframe} metalness={0.15} roughness={0.85} />
      </mesh>

      {/* Darker volcanic rock texture overlay */}
      <mesh position={[0, 0.3, 0]} scale={[0.95, 2.2, 0.95]}>
        <coneGeometry args={[1, 1, optimized ? 12 : 28]} />
        <meshStandardMaterial color="#4A2F24" wireframe={wireframe} metalness={0.12} roughness={0.88} />
      </mesh>

      {/* Crater rim - outer */}
      <mesh position={[0, 1.15, 0]} scale={[0.6, 0.08, 0.6]}>
        <cylinderGeometry args={[1, 0.9, 1, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#2D2D2D" wireframe={wireframe} metalness={0.2} roughness={0.75} />
      </mesh>

      {/* Crater - inner glow */}
      <mesh position={[0, 1.18, 0]} scale={[0.4, 0.05, 0.4]}>
        <cylinderGeometry args={[1, 1, 1, optimized ? 12 : 24]} />
        <meshStandardMaterial color="#FF4500" wireframe={wireframe} metalness={0.8} roughness={0.3} emissive="#FF3300" emissiveIntensity={0.6} />
      </mesh>

      {/* Lava flow 1 - right side */}
      <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, Math.PI / 8]} scale={[0.25, 0.8, 0.15]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#D84500" wireframe={wireframe} metalness={0.85} roughness={0.25} emissive="#FF6600" emissiveIntensity={0.3} />
      </mesh>

      {/* Lava flow 2 - left side */}
      <mesh position={[-0.55, 0.25, 0]} rotation={[0, 0, -Math.PI / 8]} scale={[0.25, 0.85, 0.15]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#D84500" wireframe={wireframe} metalness={0.85} roughness={0.25} emissive="#FF6600" emissiveIntensity={0.3} />
      </mesh>

      {/* Lava flow 3 - front */}
      <mesh position={[0, 0.1, 0.65]} scale={[0.3, 0.7, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#D84500" wireframe={wireframe} metalness={0.85} roughness={0.25} emissive="#FF6600" emissiveIntensity={0.3} />
      </mesh>

      {/* Rocky outcrops - variation */}
      <mesh position={[0.8, -0.4, 0.6]} scale={[0.35, 0.4, 0.3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4A3A2A" wireframe={wireframe} metalness={0.1} roughness={0.9} />
      </mesh>

      <mesh position={[-0.85, -0.35, -0.7]} scale={[0.4, 0.45, 0.35]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4A3A2A" wireframe={wireframe} metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Smoke/steam particles - cyan glow */}
      <mesh position={[0.1, 1.3, 0.1]} scale={[0.3, 0.4, 0.3]}>
        <sphereGeometry args={[1, optimized ? 6 : 12, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#AAAAAA" wireframe={wireframe} metalness={0.05} roughness={0.9} emissive="#06B6D4" emissiveIntensity={0.2} transparent opacity={0.4} />
      </mesh>

      <mesh position={[-0.15, 1.25, -0.1]} scale={[0.25, 0.35, 0.25]}>
        <sphereGeometry args={[1, optimized ? 6 : 12, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#AAAAAA" wireframe={wireframe} metalness={0.05} roughness={0.9} emissive="#06B6D4" emissiveIntensity={0.2} transparent opacity={0.35} />
      </mesh>

      {/* Ambient and volcanic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 3]} intensity={1} color="#FFFFFF" />
      <pointLight position={[0, 1.1, 0]} intensity={1.5} color="#FF6600" distance={2} />
      <pointLight position={[0.5, 0, 0.5]} intensity={0.8} color="#FF4500" distance={1.5} />
    </group>
  );
};

// Product model - Coffee mug
const ProductModel = ({ optimized = false, wireframe = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.007;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main mug body - ceramic */}
      <mesh position={[0, 0.1, 0]} scale={[0.6, 0.9, 0.6]}>
        <cylinderGeometry args={[1, 1, 1, optimized ? 8 : 24, optimized ? 4 : 12]} />
        <meshStandardMaterial color="#E8D5C4" wireframe={wireframe} metalness={0.15} roughness={0.6} />
      </mesh>

      {/* Mug rim - top edge */}
      <mesh position={[0, 0.52, 0]} scale={[0.58, 0.08, 0.58]}>
        <cylinderGeometry args={[1, 1, 1, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#D4C4B8" wireframe={wireframe} metalness={0.2} roughness={0.55} />
      </mesh>

      {/* Coffee inside - dark liquid */}
      <mesh position={[0, 0.15, 0]} scale={[0.52, 0.7, 0.52]}>
        <cylinderGeometry args={[1, 1, 1, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#3D2817" wireframe={wireframe} metalness={0.3} roughness={0.4} emissive="#1A0E08" emissiveIntensity={0.1} />
      </mesh>

      {/* Liquid surface - subtle shine */}
      <mesh position={[0, 0.5, 0]} scale={[0.5, 0.02, 0.5]}>
        <cylinderGeometry args={[1, 1, 1, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#4A3320" wireframe={wireframe} metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Mug handle - torus shape */}
      <mesh position={[0.55, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1, 1]}>
        <torusGeometry args={[0.25, 0.08, optimized ? 6 : 12, optimized ? 8 : 24]} />
        <meshStandardMaterial color="#E8D5C4" wireframe={wireframe} metalness={0.15} roughness={0.6} />
      </mesh>

      {/* Base - bottom of mug */}
      <mesh position={[0, -0.48, 0]} scale={[0.62, 0.08, 0.62]}>
        <cylinderGeometry args={[1, 0.95, 1, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#D4C4B8" wireframe={wireframe} metalness={0.2} roughness={0.65} />
      </mesh>

      {/* Decorative band - brand detail */}
      {!optimized && (
        <mesh position={[0, 0.05, 0]} scale={[0.58, 0.12, 0.58]}>
          <cylinderGeometry args={[1, 1, 1, optimized ? 8 : 20]} />
          <meshStandardMaterial color="#8B5CF6" wireframe={wireframe} metalness={0.3} roughness={0.5} />
        </mesh>
      )}

      {/* Studio lighting - warm */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#FFFFFF" />
      <directionalLight position={[-3, 2, -3]} intensity={0.8} color="#FFD700" />
      <pointLight position={[0.5, 0.3, 0.5]} intensity={0.6} color="#FFFFFF" distance={1.5} />
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

  const renderModel = () => {
    switch (modelType) {
      case 'character':
        return <CharacterModel optimized={optimized} wireframe={wireframe} />;
      case 'scene':
        return <SceneModel optimized={optimized} wireframe={wireframe} />;
      case 'product':
        return <ProductModel optimized={optimized} wireframe={wireframe} />;
      case 'uploaded':
        return <UploadedModel wireframe={wireframe} />;
      default:
        return <CharacterModel optimized={optimized} wireframe={wireframe} />;
    }
  };

  return (
    <div className="relative w-full h-full bg-black" style={{ width: '100%', height: '100%' }}>
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
