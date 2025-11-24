import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const DetailedCharacterModel = ({ optimized = false }: { optimized?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  // Create advanced high-poly geometry similar to Blender/Maya
  const createHighPolyHead = () => {
    const geometry = new THREE.IcosahedronGeometry(0.45, optimized ? 3 : 6);
    return geometry;
  };

  const createHighPolyTorso = () => {
    const geometry = new THREE.CapsuleGeometry(0.38, 1.3, optimized ? 6 : 16, optimized ? 16 : 64);
    return geometry;
  };

  const createHighPolyArm = () => {
    const geometry = new THREE.CapsuleGeometry(0.14, 1.1, optimized ? 6 : 14, optimized ? 16 : 48);
    return geometry;
  };

  const createHighPolyLeg = () => {
    const geometry = new THREE.CapsuleGeometry(0.16, 1.3, optimized ? 6 : 14, optimized ? 16 : 56);
    return geometry;
  };

  return (
    <group ref={groupRef}>
      {/* Hair Volume - Complex shape */}
      <mesh position={[0, 1.75, 0.1]}>
        <sphereGeometry args={[0.42, optimized ? 12 : 32, optimized ? 12 : 32]} />
        <meshStandardMaterial 
          color="#2D1810" 
          metalness={0.15} 
          roughness={0.85}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Head - High poly isosphere */}
      <mesh position={[0, 1.65, 0]}>
        <primitive object={createHighPolyHead()} />
        <meshStandardMaterial 
          color="#E8B8A0" 
          metalness={0.05} 
          roughness={0.85}
        />
      </mesh>

      {/* Eye whites - Detailed */}
      <mesh position={[-0.16, 1.8, 0.38]}>
        <sphereGeometry args={[0.095, optimized ? 8 : 16, optimized ? 8 : 16]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh position={[0.16, 1.8, 0.38]}>
        <sphereGeometry args={[0.095, optimized ? 8 : 16, optimized ? 8 : 16]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Pupils */}
      <mesh position={[-0.16, 1.8, 0.42]}>
        <sphereGeometry args={[0.05, optimized ? 6 : 12, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.16, 1.8, 0.42]}>
        <sphereGeometry args={[0.05, optimized ? 6 : 12, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose - Stylized */}
      <mesh position={[0, 1.6, 0.35]}>
        <coneGeometry args={[0.06, 0.12, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#D4A590" metalness={0.05} roughness={0.8} />
      </mesh>

      {/* Mouth line */}
      <mesh position={[0, 1.45, 0.32]}>
        <boxGeometry args={[0.2, 0.04, 0.08]} />
        <meshStandardMaterial color="#A0725E" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Torso - Professional subdivision surface quality */}
      <mesh position={[0, 0.8, 0]}>
        <primitive object={createHighPolyTorso()} />
        <meshStandardMaterial 
          color="#2563EB" 
          metalness={0.2} 
          roughness={0.7}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Shirt collar details */}
      <mesh position={[0, 1.35, 0.05]}>
        <boxGeometry args={[0.45, 0.15, 0.12]} />
        <meshStandardMaterial color="#1E40AF" metalness={0.25} roughness={0.65} />
      </mesh>

      {/* Left Shoulder */}
      <mesh position={[-0.5, 1.25, 0]}>
        <sphereGeometry args={[0.18, optimized ? 8 : 16, optimized ? 8 : 16]} />
        <meshStandardMaterial color="#2563EB" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Right Shoulder */}
      <mesh position={[0.5, 1.25, 0]}>
        <sphereGeometry args={[0.18, optimized ? 8 : 16, optimized ? 8 : 16]} />
        <meshStandardMaterial color="#2563EB" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Left Arm - High poly */}
      <mesh position={[-0.72, 1.0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <primitive object={createHighPolyArm()} />
        <meshStandardMaterial color="#E8B8A0" metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Left Hand */}
      <mesh position={[-1.15, 0.35, 0.05]}>
        <sphereGeometry args={[0.12, optimized ? 8 : 14, optimized ? 8 : 14]} />
        <meshStandardMaterial color="#E8B8A0" metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Right Arm - High poly */}
      <mesh position={[0.72, 1.0, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <primitive object={createHighPolyArm()} />
        <meshStandardMaterial color="#E8B8A0" metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Right Hand */}
      <mesh position={[1.15, 0.35, 0.05]}>
        <sphereGeometry args={[0.12, optimized ? 8 : 14, optimized ? 8 : 14]} />
        <meshStandardMaterial color="#E8B8A0" metalness={0.08} roughness={0.85} />
      </mesh>

      {/* Belt */}
      <mesh position={[0, 0.35, 0.08]}>
        <boxGeometry args={[0.5, 0.12, 0.2]} />
        <meshStandardMaterial color="#1F1F1F" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Left Leg - High poly */}
      <mesh position={[-0.3, -0.5, 0]}>
        <primitive object={createHighPolyLeg()} />
        <meshStandardMaterial color="#1F1F1F" metalness={0.1} roughness={0.85} />
      </mesh>

      {/* Left Foot */}
      <mesh position={[-0.3, -1.6, 0.15]}>
        <boxGeometry args={[0.2, 0.2, 0.35]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Right Leg - High poly */}
      <mesh position={[0.3, -0.5, 0]}>
        <primitive object={createHighPolyLeg()} />
        <meshStandardMaterial color="#1F1F1F" metalness={0.1} roughness={0.85} />
      </mesh>

      {/* Right Foot */}
      <mesh position={[0.3, -1.6, 0.15]}>
        <boxGeometry args={[0.2, 0.2, 0.35]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Professional Lighting Setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 12, 8]} intensity={1.2} color="#FFFFFF" />
      <pointLight position={[-8, 8, -8]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[0, 0, 10]} intensity={0.6} color="#06B6D4" />
    </group>
  );
};

const DetailedProductModel = ({ optimized = false }: { optimized?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Body */}
      <mesh>
        <boxGeometry args={[1.5, 1, 0.8]} />
        <meshStandardMaterial color="#1F2937" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Top Accent */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.4, 0.15, 0.7]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Display Panel */}
      <mesh position={[0, -0.1, 0.45]}>
        <boxGeometry args={[1.2, 0.6, 0.1]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.3}
          roughness={0.2}
          emissive="#1E40AF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Side Panels - Left */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.6]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Side Panels - Right */}
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.6]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Front Details - High poly or optimized */}
      {!optimized && (
        <>
          <mesh position={[0, 0.2, 0.5]}>
            <boxGeometry args={[0.8, 0.3, 0.05]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.2, 0.5]}>
            <boxGeometry args={[0.8, 0.2, 0.05]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.7} roughness={0.3} />
          </mesh>
        </>
      )}

      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-5, -5, -10]} intensity={0.6} color="#8B5CF6" />
    </group>
  );
};

const DetailedSceneModel = ({ optimized = false }: { optimized?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ground */}
      <mesh position={[0, -1, 0]} scale={[3, 0.2, 3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#374151" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Main Building */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#1F2937" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 0.85, 0]}>
        <coneGeometry args={[1.3, 0.8, optimized ? 6 : 12]} />
        <meshStandardMaterial color="#DC2626" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Windows - Left side */}
      {[0.3, -0.3].map((y, i) => (
        <mesh key={`window-left-${i}`} position={[-0.8, y, 0.76]}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#06B6D4" metalness={0.7} emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
      ))}

      {/* Windows - Right side */}
      {[0.3, -0.3].map((y, i) => (
        <mesh key={`window-right-${i}`} position={[0.8, y, 0.76]}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#06B6D4" metalness={0.7} emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
      ))}

      {/* Door */}
      <mesh position={[0, -0.4, 0.76]}>
        <boxGeometry args={[0.3, 0.6, 0.05]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Side structures - Detail or optimized */}
      {!optimized && (
        <>
          <mesh position={[-1.2, 0.3, 0]}>
            <boxGeometry args={[0.6, 0.8, 0.6]} />
            <meshStandardMaterial color="#4B5563" metalness={0.2} roughness={0.7} />
          </mesh>
          <mesh position={[1.2, 0.3, 0]}>
            <boxGeometry args={[0.6, 0.8, 0.6]} />
            <meshStandardMaterial color="#4B5563" metalness={0.2} roughness={0.7} />
          </mesh>
        </>
      )}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, 5, -10]} intensity={0.7} color="#8B5CF6" />
    </group>
  );
};

interface AmaoModelViewerProps {
  modelType: 'character' | 'scene' | 'product';
  optimized?: boolean;
}

export default function AmaoModelViewer({ modelType, optimized = false }: AmaoModelViewerProps) {
  const getModel = () => {
    switch (modelType) {
      case 'character':
        return <DetailedCharacterModel optimized={optimized} />;
      case 'product':
        return <DetailedProductModel optimized={optimized} />;
      case 'scene':
        return <DetailedSceneModel optimized={optimized} />;
      default:
        return <DetailedCharacterModel optimized={optimized} />;
    }
  };

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
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
  );
}
