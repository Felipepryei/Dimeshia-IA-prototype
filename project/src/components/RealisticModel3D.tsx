import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RealisticCharacter() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* HEAD */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* NECK */}
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.4, 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* TORSO */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.9, 1.5, 0.6]} />
        <meshStandardMaterial color="#1E3A8A" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* SHOULDERS ARMOR */}
      <mesh position={[-0.7, 1.8, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#4B5563" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0.7, 1.8, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#4B5563" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* LEFT ARM UPPER */}
      <mesh position={[-1.1, 1.5, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.25, 1.2, 8, 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* LEFT ARM LOWER */}
      <mesh position={[-1.6, 0.8, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.22, 1, 8, 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* LEFT HAND */}
      <mesh position={[-2, 0.2, 0]}>
        <boxGeometry args={[0.35, 0.4, 0.3]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* RIGHT ARM UPPER */}
      <mesh position={[1.1, 1.5, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.25, 1.2, 8, 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* RIGHT ARM LOWER */}
      <mesh position={[1.6, 0.8, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.22, 1, 8, 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} />
      </mesh>

      {/* RIGHT HAND (GRIP) */}
      <mesh position={[2, 0.3, 0]}>
        <boxGeometry args={[0.35, 0.5, 0.3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* LEFT LEG UPPER */}
      <mesh position={[-0.35, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1.4, 8, 16]} />
        <meshStandardMaterial color="#1F2937" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* LEFT LEG LOWER */}
      <mesh position={[-0.35, -0.7, 0]}>
        <capsuleGeometry args={[0.28, 1.2, 8, 16]} />
        <meshStandardMaterial color="#1F2937" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* LEFT BOOT */}
      <mesh position={[-0.35, -1.6, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.8} metalness={0.3} />
      </mesh>

      {/* RIGHT LEG UPPER */}
      <mesh position={[0.35, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1.4, 8, 16]} />
        <meshStandardMaterial color="#1F2937" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* RIGHT LEG LOWER */}
      <mesh position={[0.35, -0.7, 0]}>
        <capsuleGeometry args={[0.28, 1.2, 8, 16]} />
        <meshStandardMaterial color="#1F2937" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* RIGHT BOOT */}
      <mesh position={[0.35, -1.6, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.8} metalness={0.3} />
      </mesh>

      {/* SWORD BLADE */}
      <mesh position={[1.8, 1.5, 0.15]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.2, 3.5, 0.05]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* SWORD CROSSGUARD */}
      <mesh position={[1.8, 0.2, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* SWORD POMMEL */}
      <mesh position={[1.8, -0.3, 0.15]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#FFD700" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* SWORD GRIP */}
      <mesh position={[1.8, -0.05, 0.15]}>
        <cylinderGeometry args={[0.18, 0.18, 0.5, 16]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* EYES - LEFT */}
      <mesh position={[-0.2, 2.7, 0.55]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* EYES - RIGHT */}
      <mesh position={[0.2, 2.7, 0.55]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* FACIAL FEATURES */}
      <mesh position={[0, 2.4, 0.58]}>
        <boxGeometry args={[0.3, 0.15, 0.05]} />
        <meshStandardMaterial color="#A0826D" roughness={0.6} metalness={0} />
      </mesh>
    </group>
  );
}

export default function RealisticModel3D() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-700 bg-gray-950">
      <Canvas>
          <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={45} />
          <Environment preset="studio" />
          <ambientLight intensity={1} color="#ffffff" />
          <directionalLight position={[8, 12, 8]} intensity={1.2} color="#ffffff" castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.8} color="#6366F1" />
          <pointLight position={[5, 3, -5]} intensity={0.6} color="#8B5CF6" />
          
          <RealisticCharacter />
          
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={3} enablePan={false} />
          <gridHelper args={[10, 10]} position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
}
