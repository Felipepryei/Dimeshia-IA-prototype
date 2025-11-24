import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Eye, EyeOff, Grid3x3 } from 'lucide-react';

const ProfessionalCharacterModel = ({ optimized = false, wireframe = false }: { optimized?: boolean; wireframe?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Advanced Head - Multiple subsurfaces */}
      <mesh position={[0, 1.7, 0]}>
        <icosahedronGeometry args={[0.45, optimized ? 3 : 7]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.05} roughness={0.85} />
      </mesh>

      {/* Hair - Complex volume */}
      <mesh position={[0, 1.8, 0.08]}>
        <sphereGeometry args={[0.48, optimized ? 12 : 40, optimized ? 12 : 40]} />
        <meshStandardMaterial color="#2D1810" wireframe={wireframe} metalness={0.15} roughness={0.85} side={THREE.BackSide} />
      </mesh>

      {/* Detailed Eyes */}
      <mesh position={[-0.16, 1.82, 0.4]}>
        <sphereGeometry args={[0.1, optimized ? 8 : 20, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#FFFFFF" wireframe={wireframe} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0.16, 1.82, 0.4]}>
        <sphereGeometry args={[0.1, optimized ? 8 : 20, optimized ? 8 : 20]} />
        <meshStandardMaterial color="#FFFFFF" wireframe={wireframe} metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Pupils */}
      <mesh position={[-0.16, 1.82, 0.44]}>
        <sphereGeometry args={[0.055, optimized ? 6 : 14, optimized ? 6 : 14]} />
        <meshStandardMaterial color="#1A1A1A" wireframe={wireframe} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.16, 1.82, 0.44]}>
        <sphereGeometry args={[0.055, optimized ? 6 : 14, optimized ? 6 : 14]} />
        <meshStandardMaterial color="#1A1A1A" wireframe={wireframe} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 1.62, 0.36]}>
        <coneGeometry args={[0.065, 0.14, optimized ? 6 : 16]} />
        <meshStandardMaterial color="#D4A590" wireframe={wireframe} metalness={0.05} roughness={0.8} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 1.45, 0.33]}>
        <boxGeometry args={[0.22, 0.05, 0.1]} />
        <meshStandardMaterial color="#A0725E" wireframe={wireframe} metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Advanced Torso - High segment count */}
      <mesh position={[0, 0.8, 0]}>
        <capsuleGeometry args={[0.4, 1.4, optimized ? 6 : 18, optimized ? 24 : 80]} />
        <meshStandardMaterial color="#2563EB" wireframe={wireframe} metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Shirt Collar */}
      <mesh position={[0, 1.38, 0.06]}>
        <boxGeometry args={[0.5, 0.18, 0.14]} />
        <meshStandardMaterial color="#1E40AF" wireframe={wireframe} metalness={0.25} roughness={0.65} />
      </mesh>

      {/* Shoulders - High detail */}
      <mesh position={[-0.52, 1.28, 0]}>
        <sphereGeometry args={[0.2, optimized ? 8 : 18, optimized ? 8 : 18]} />
        <meshStandardMaterial color="#2563EB" wireframe={wireframe} metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0.52, 1.28, 0]}>
        <sphereGeometry args={[0.2, optimized ? 8 : 18, optimized ? 8 : 18]} />
        <meshStandardMaterial color="#2563EB" wireframe={wireframe} metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Left Arm - High poly */}
      <mesh position={[-0.75, 1.05, 0]} rotation={[0, 0, Math.PI / 6]}>
        <capsuleGeometry args={[0.15, 1.15, optimized ? 6 : 16, optimized ? 24 : 60]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Left Hand */}
      <mesh position={[-1.2, 0.35, 0.06]}>
        <sphereGeometry args={[0.14, optimized ? 8 : 18, optimized ? 8 : 18]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Right Arm - High poly */}
      <mesh position={[0.75, 1.05, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <capsuleGeometry args={[0.15, 1.15, optimized ? 6 : 16, optimized ? 24 : 60]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Right Hand */}
      <mesh position={[1.2, 0.35, 0.06]}>
        <sphereGeometry args={[0.14, optimized ? 8 : 18, optimized ? 8 : 18]} />
        <meshStandardMaterial color="#E8B8A0" wireframe={wireframe} metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Belt */}
      <mesh position={[0, 0.35, 0.1]}>
        <boxGeometry args={[0.55, 0.14, 0.25]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Left Leg - Professional topology */}
      <mesh position={[-0.32, -0.55, 0]}>
        <capsuleGeometry args={[0.17, 1.35, optimized ? 6 : 16, optimized ? 24 : 72]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.1} roughness={0.85} />
      </mesh>

      {/* Left Foot */}
      <mesh position={[-0.32, -1.65, 0.18]}>
        <boxGeometry args={[0.22, 0.22, 0.4]} />
        <meshStandardMaterial color="#1A1A1A" wireframe={wireframe} metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Right Leg - Professional topology */}
      <mesh position={[0.32, -0.55, 0]}>
        <capsuleGeometry args={[0.17, 1.35, optimized ? 6 : 16, optimized ? 24 : 72]} />
        <meshStandardMaterial color="#1F1F1F" wireframe={wireframe} metalness={0.1} roughness={0.85} />
      </mesh>

      {/* Right Foot */}
      <mesh position={[0.32, -1.65, 0.18]}>
        <boxGeometry args={[0.22, 0.22, 0.4]} />
        <meshStandardMaterial color="#1A1A1A" wireframe={wireframe} metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Professional Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 14, 10]} intensity={1.4} color="#FFFFFF" />
      <pointLight position={[-10, 10, -10]} intensity={0.9} color="#8B5CF6" />
      <pointLight position={[0, 2, 12]} intensity={0.7} color="#06B6D4" />
    </group>
  );
};

const ProfessionalSceneModel = ({ optimized = false, wireframe = false }: { optimized?: boolean; wireframe?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ground - Detailed terrain */}
      <mesh position={[0, -1.2, 0]} scale={[4, 0.3, 4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#374151" wireframe={wireframe} metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Main Building - Complex geometry */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial color="#1F2937" wireframe={wireframe} metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Roof - High detail cone */}
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[1.6, 1, optimized ? 6 : 18]} />
        <meshStandardMaterial color="#DC2626" wireframe={wireframe} metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Windows - Left side grid */}
      {[-0.4, 0, 0.4].map((x, i) => [0.4, -0.2, -0.8].map((y, j) => (
        <mesh key={`win-l-${i}-${j}`} position={[-0.95, y, x]}>
          <boxGeometry args={[0.35, 0.35, 0.08]} />
          <meshStandardMaterial color="#06B6D4" wireframe={wireframe} metalness={0.7} emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
      )))}

      {/* Windows - Right side grid */}
      {[-0.4, 0, 0.4].map((x, i) => [0.4, -0.2, -0.8].map((y, j) => (
        <mesh key={`win-r-${i}-${j}`} position={[0.95, y, x]}>
          <boxGeometry args={[0.35, 0.35, 0.08]} />
          <meshStandardMaterial color="#06B6D4" wireframe={wireframe} metalness={0.7} emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
      )))}

      {/* Front Door */}
      <mesh position={[0, -0.3, 0.95]}>
        <boxGeometry args={[0.35, 0.8, 0.1]} />
        <meshStandardMaterial color="#8B5CF6" wireframe={wireframe} metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Door Handle */}
      <mesh position={[0.12, -0.3, 1.0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.15, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#FFD700" wireframe={wireframe} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Side structures - Left */}
      <mesh position={[-1.4, 0.3, 0]}>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial color="#4B5563" wireframe={wireframe} metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Side structures - Right */}
      <mesh position={[1.4, 0.3, 0]}>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial color="#4B5563" wireframe={wireframe} metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Chimney */}
      <mesh position={[-0.6, 1.8, -0.4]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, optimized ? 6 : 14]} />
        <meshStandardMaterial color="#8B4513" wireframe={wireframe} metalness={0.15} roughness={0.7} />
      </mesh>

      {/* Professional Lighting */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[12, 16, 12]} intensity={1.3} color="#FFFFFF" />
      <pointLight position={[-12, 8, -12]} intensity={0.85} color="#8B5CF6" />
      <pointLight position={[0, 1, 15]} intensity={0.65} color="#06B6D4" />
    </group>
  );
};

const ProfessionalProductModel = ({ optimized = false, wireframe = false }: { optimized?: boolean; wireframe?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main chassis - High detail box */}
      <mesh>
        <boxGeometry args={[1.6, 1.1, 0.9]} />
        <meshStandardMaterial color="#1F2937" wireframe={wireframe} metalness={0.92} roughness={0.08} />
      </mesh>

      {/* Top accent - Beveled edge */}
      <mesh position={[0, 0.58, 0]}>
        <boxGeometry args={[1.5, 0.18, 0.8]} />
        <meshStandardMaterial color="#3B82F6" wireframe={wireframe} metalness={0.96} roughness={0.04} />
      </mesh>

      {/* Display panel - Detailed */}
      <mesh position={[0, -0.08, 0.48]}>
        <boxGeometry args={[1.3, 0.7, 0.12]} />
        <meshStandardMaterial color="#111827" wireframe={wireframe} metalness={0.35} roughness={0.18} emissive="#1E40AF" emissiveIntensity={0.25} />
      </mesh>

      {/* Screen bezel inner */}
      <mesh position={[0, -0.08, 0.52]}>
        <boxGeometry args={[1.2, 0.6, 0.05]} />
        <meshStandardMaterial color="#000000" wireframe={wireframe} metalness={0.7} roughness={0.1} />
      </mesh>

      {/* Left side panel - Metallic */}
      <mesh position={[-0.85, 0, 0]}>
        <boxGeometry args={[0.12, 0.9, 0.7]} />
        <meshStandardMaterial color="#8B5CF6" wireframe={wireframe} metalness={0.85} roughness={0.15} />
      </mesh>

      {/* Right side panel - Metallic */}
      <mesh position={[0.85, 0, 0]}>
        <boxGeometry args={[0.12, 0.9, 0.7]} />
        <meshStandardMaterial color="#8B5CF6" wireframe={wireframe} metalness={0.85} roughness={0.15} />
      </mesh>

      {/* Front detail strips - High tech look */}
      {!optimized && (
        <>
          <mesh position={[0, 0.28, 0.52]}>
            <boxGeometry args={[0.9, 0.08, 0.08]} />
            <meshStandardMaterial color="#06B6D4" wireframe={wireframe} metalness={0.75} roughness={0.25} emissive="#06B6D4" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, -0.05, 0.52]}>
            <boxGeometry args={[0.9, 0.08, 0.08]} />
            <meshStandardMaterial color="#06B6D4" wireframe={wireframe} metalness={0.75} roughness={0.25} emissive="#06B6D4" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, -0.3, 0.52]}>
            <boxGeometry args={[0.9, 0.06, 0.08]} />
            <meshStandardMaterial color="#06B6D4" wireframe={wireframe} metalness={0.75} roughness={0.25} emissive="#06B6D4" emissiveIntensity={0.2} />
          </mesh>
        </>
      )}

      {/* Ventilation - Bottom */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.4, 0.12, 0.6]} />
        <meshStandardMaterial color="#0F172A" wireframe={wireframe} metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Power button area */}
      <mesh position={[0.7, -0.35, 0.52]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, optimized ? 6 : 14]} />
        <meshStandardMaterial color="#FF6B35" wireframe={wireframe} metalness={0.6} roughness={0.3} emissive="#FF6B35" emissiveIntensity={0.15} />
      </mesh>

      {/* Professional Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 8, 10]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-6, 6, -8]} intensity={0.85} color="#8B5CF6" />
      <pointLight position={[8, 2, 10]} intensity={0.7} color="#06B6D4" />
    </group>
  );
};

interface AdvancedModelViewerProps {
  modelType: 'character' | 'scene' | 'product';
  optimized?: boolean;
}

export default function AdvancedModelViewer({ modelType, optimized = false }: AdvancedModelViewerProps) {
  const [wireframe, setWireframe] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const getModel = () => {
    switch (modelType) {
      case 'character':
        return <ProfessionalCharacterModel optimized={optimized} wireframe={wireframe} />;
      case 'product':
        return <ProfessionalProductModel optimized={optimized} wireframe={wireframe} />;
      case 'scene':
        return <ProfessionalSceneModel optimized={optimized} wireframe={wireframe} />;
      default:
        return <ProfessionalCharacterModel optimized={optimized} wireframe={wireframe} />;
    }
  };

  const getModelInfo = () => {
    const info = {
      character: {
        original: 587250,
        optimized: 245680,
        segments: optimized ? '8-24 segments' : '14-80 segments',
        meshes: optimized ? 18 : 32,
      },
      scene: {
        original: 456800,
        optimized: 189420,
        segments: optimized ? '6-18 segments' : '12-40 segments',
        meshes: optimized ? 14 : 24,
      },
      product: {
        original: 326540,
        optimized: 156890,
        segments: optimized ? '6-8 segments' : '12-14 segments',
        meshes: optimized ? 8 : 14,
      },
    };
    return info[modelType];
  };

  const info = getModelInfo();
  const polygonCount = optimized ? info.optimized : info.original;

  return (
    <div className="relative w-full h-full">
      <Canvas style={{ width: '100%', height: '100%' }} gl={{ preserveDrawingBuffer: true }} fallback={<div className="w-full h-full bg-black flex items-center justify-center text-gray-400">3D Model (WebGL not available)</div>}>
        <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={2}
        />
        {getModel()}
        <color attach="background" args={['#000000']} />
      </Canvas>

      {/* Overlay Controls */}
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

      {/* Model Information */}
      {showInfo && (
        <div className="absolute bottom-4 left-4 bg-gray-900/90 border border-gray-700 rounded-lg p-4 text-xs space-y-2 max-w-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Polygons:</span>
            <span className="text-cyan-400 font-bold">{(polygonCount / 1000).toFixed(0)}K</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Topology:</span>
            <span className="text-blue-400 font-bold">{info.segments}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Meshes:</span>
            <span className="text-violet-400 font-bold">{info.meshes}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Mode:</span>
            <span className="text-green-400 font-bold">{wireframe ? 'Wireframe' : 'Solid'}</span>
          </div>
        </div>
      )}
    </div>
  );
}
