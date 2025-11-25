import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface UploadedModel {
  object: THREE.Group | THREE.Object3D;
  name: string;
  format: string;
}

function RealisticCharacter({ showNgons = false, showWireframe = false, uploadedModel }: { showNgons?: boolean; showWireframe?: boolean; uploadedModel?: UploadedModel | null }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (uploadedModel && groupRef.current) {
      // Clear existing children
      while (groupRef.current.children.length > 0) {
        groupRef.current.remove(groupRef.current.children[0]);
      }
      // Add uploaded model
      groupRef.current.add(uploadedModel.object.clone());
    }
  }, [uploadedModel]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      if (!uploadedModel) {
        groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      }
    }
  });


  return (
    <group ref={groupRef}>
      {/* HEAD */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.6, showWireframe ? 8 : 32, showWireframe ? 8 : 32]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF6B6B" : "#C4A47A"} 
          roughness={0.5} 
          metalness={0}
          wireframe={showWireframe}
        />
      </mesh>

      {/* NECK */}
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.4, showWireframe ? 8 : 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} wireframe={showWireframe} />
      </mesh>

      {/* TORSO - WITH NGON VISUALIZATION */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.9, 1.5, 0.6]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF4444" : "#1E3A8A"} 
          roughness={0.6} 
          metalness={0.3}
          wireframe={showWireframe}
        />
      </mesh>

      {/* NGON HIGHLIGHTING - Red polygons showing problematic faces */}
      {showNgons && (
        <>
          {/* N-gon indicators as red overlays on problem areas */}
          <mesh position={[0, 1.2, 0]}>
            <boxGeometry args={[0.9, 1.5, 0.6]} />
            <meshStandardMaterial 
              color="#FF0000" 
              emissive="#FF3333"
              emissiveIntensity={0.6}
              transparent
              opacity={0.4}
              wireframe={false}
            />
          </mesh>

          {/* N-gon edge highlighting */}
          <lineSegments position={[0, 1.2, 0]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={24}
                array={new Float32Array([
                  -0.45, 0.75, 0.3, -0.2, 0.9, 0.15,
                  -0.2, 0.9, 0.15, 0.2, 0.9, 0.15,
                  0.2, 0.9, 0.15, 0.45, 0.75, 0.3,
                  -0.45, 0.3, 0.3, 0.45, 0.3, 0.3,
                  -0.45, -0.3, 0.3, 0.45, -0.3, 0.3,
                  -0.45, -0.75, 0.3, -0.2, -0.9, 0.15,
                  -0.2, -0.9, 0.15, 0.2, -0.9, 0.15,
                  0.2, -0.9, 0.15, 0.45, -0.75, 0.3,
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#FF0000" linewidth={3} />
          </lineSegments>
        </>
      )}

      {/* SHOULDERS ARMOR */}
      <mesh position={[-0.7, 1.8, 0]}>
        <sphereGeometry args={[0.35, showWireframe ? 8 : 16, showWireframe ? 8 : 16]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF8888" : "#4B5563"} 
          roughness={0.4} 
          metalness={0.6}
          wireframe={showWireframe}
        />
      </mesh>
      <mesh position={[0.7, 1.8, 0]}>
        <sphereGeometry args={[0.35, showWireframe ? 8 : 16, showWireframe ? 8 : 16]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF8888" : "#4B5563"} 
          roughness={0.4} 
          metalness={0.6}
          wireframe={showWireframe}
        />
      </mesh>

      {/* LEFT ARM UPPER */}
      <mesh position={[-1.1, 1.5, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.25, 1.2, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} wireframe={showWireframe} />
      </mesh>

      {/* LEFT ARM LOWER */}
      <mesh position={[-1.6, 0.8, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.22, 1, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} wireframe={showWireframe} />
      </mesh>

      {/* LEFT HAND */}
      <mesh position={[-2, 0.2, 0]}>
        <boxGeometry args={[0.35, 0.4, 0.3]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} wireframe={showWireframe} />
      </mesh>

      {/* RIGHT ARM UPPER */}
      <mesh position={[1.1, 1.5, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.25, 1.2, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} wireframe={showWireframe} />
      </mesh>

      {/* RIGHT ARM LOWER */}
      <mesh position={[1.6, 0.8, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.22, 1, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial color="#C4A47A" roughness={0.5} metalness={0} wireframe={showWireframe} />
      </mesh>

      {/* RIGHT HAND (GRIP) */}
      <mesh position={[2, 0.3, 0]}>
        <boxGeometry args={[0.35, 0.5, 0.3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} wireframe={showWireframe} />
      </mesh>

      {/* LEFT LEG UPPER */}
      <mesh position={[-0.35, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1.4, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF7777" : "#1F2937"} 
          roughness={0.6} 
          metalness={0.2}
          wireframe={showWireframe}
        />
      </mesh>

      {/* LEFT LEG LOWER */}
      <mesh position={[-0.35, -0.7, 0]}>
        <capsuleGeometry args={[0.28, 1.2, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF7777" : "#1F2937"} 
          roughness={0.6} 
          metalness={0.2}
          wireframe={showWireframe}
        />
      </mesh>

      {/* LEFT BOOT */}
      <mesh position={[-0.35, -1.6, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.8} metalness={0.3} wireframe={showWireframe} />
      </mesh>

      {/* RIGHT LEG UPPER */}
      <mesh position={[0.35, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1.4, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF7777" : "#1F2937"} 
          roughness={0.6} 
          metalness={0.2}
          wireframe={showWireframe}
        />
      </mesh>

      {/* RIGHT LEG LOWER */}
      <mesh position={[0.35, -0.7, 0]}>
        <capsuleGeometry args={[0.28, 1.2, showWireframe ? 4 : 8, showWireframe ? 8 : 16]} />
        <meshStandardMaterial 
          color={showNgons ? "#FF7777" : "#1F2937"} 
          roughness={0.6} 
          metalness={0.2}
          wireframe={showWireframe}
        />
      </mesh>

      {/* RIGHT BOOT */}
      <mesh position={[0.35, -1.6, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.8} metalness={0.3} wireframe={showWireframe} />
      </mesh>

      {/* SWORD BLADE */}
      <mesh position={[1.8, 1.5, 0.15]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.2, 3.5, 0.05]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.9} wireframe={showWireframe} />
      </mesh>

      {/* SWORD CROSSGUARD */}
      <mesh position={[1.8, 0.2, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, showWireframe ? 8 : 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} metalness={0.7} wireframe={showWireframe} />
      </mesh>

      {/* SWORD POMMEL */}
      <mesh position={[1.8, -0.3, 0.15]}>
        <sphereGeometry args={[0.25, showWireframe ? 6 : 16, showWireframe ? 6 : 16]} />
        <meshStandardMaterial color="#FFD700" roughness={0.4} metalness={0.8} wireframe={showWireframe} />
      </mesh>

      {/* SWORD GRIP */}
      <mesh position={[1.8, -0.05, 0.15]}>
        <cylinderGeometry args={[0.18, 0.18, 0.5, showWireframe ? 8 : 16]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} wireframe={showWireframe} />
      </mesh>

      {/* EYES - LEFT */}
      <mesh position={[-0.2, 2.7, 0.55]}>
        <sphereGeometry args={[0.12, showWireframe ? 6 : 16, showWireframe ? 6 : 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.2} wireframe={showWireframe} />
      </mesh>

      {/* EYES - RIGHT */}
      <mesh position={[0.2, 2.7, 0.55]}>
        <sphereGeometry args={[0.12, showWireframe ? 6 : 16, showWireframe ? 6 : 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.2} wireframe={showWireframe} />
      </mesh>

      {/* FACIAL FEATURES */}
      <mesh position={[0, 2.4, 0.58]}>
        <boxGeometry args={[0.3, 0.15, 0.05]} />
        <meshStandardMaterial color="#A0826D" roughness={0.6} metalness={0} wireframe={showWireframe} />
      </mesh>
    </group>
  );
}

export default function RealisticModel3D({ showNgons = false, showWireframe = false, uploadedModel }: { showNgons?: boolean; showWireframe?: boolean; uploadedModel?: UploadedModel | null }) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-700 bg-gray-950">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={45} />
        <Environment preset="studio" />
        <ambientLight intensity={1} color="#ffffff" />
        <directionalLight position={[8, 12, 8]} intensity={1.2} color="#ffffff" castShadow />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#6366F1" />
        <pointLight position={[5, 3, -5]} intensity={0.6} color="#8B5CF6" />
        
        <RealisticCharacter showNgons={showNgons} showWireframe={showWireframe} uploadedModel={uploadedModel} />
        
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={3} enablePan={false} />
        <gridHelper args={[10, 10]} position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
}
