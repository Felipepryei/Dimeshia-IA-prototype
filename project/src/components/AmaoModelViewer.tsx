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

  return (
    <group ref={groupRef}>
      {/* Head - High detail or optimized */}
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.4, optimized ? 16 : 32, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#FFB6C1" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Eyes - High detail */}
      <mesh position={[-0.15, 1.75, 0.35]}>
        <sphereGeometry args={[0.1, optimized ? 8 : 16, optimized ? 8 : 16]} />
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.15, 1.75, 0.35]}>
        <sphereGeometry args={[0.1, optimized ? 8 : 16, optimized ? 8 : 16]} />
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Torso - Main body */}
      <mesh position={[0, 0.8, 0]}>
        <capsuleGeometry args={[0.35, 1.2, optimized ? 8 : 16, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#2563EB" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.65, 1.1, 0]} rotation={[0, 0, Math.PI / 6]}>
        <capsuleGeometry args={[0.12, 1, optimized ? 6 : 16, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#FFB6C1" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.65, 1.1, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <capsuleGeometry args={[0.12, 1, optimized ? 6 : 16, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#FFB6C1" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.25, -0.3, 0]}>
        <capsuleGeometry args={[0.15, 1.2, optimized ? 6 : 16, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#1F1F1F" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.25, -0.3, 0]}>
        <capsuleGeometry args={[0.15, 1.2, optimized ? 6 : 16, optimized ? 16 : 32]} />
        <meshStandardMaterial color="#1F1F1F" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
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
