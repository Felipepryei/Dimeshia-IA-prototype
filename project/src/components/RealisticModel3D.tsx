import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Model3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  // Create a sophisticated 3D object (character-like model)
  const geometry = new THREE.BufferGeometry();

  // Head
  const headGeometry = new THREE.IcosahedronGeometry(1.2, 4);
  const head = new THREE.Mesh(headGeometry, new THREE.MeshStandardMaterial({
    color: 0x8B7355,
    roughness: 0.4,
    metalness: 0.1,
  }));
  head.position.y = 2;

  // Body
  const bodyGeometry = new THREE.CapsuleGeometry(0.8, 2.5, 4, 8);
  const body = new THREE.Mesh(bodyGeometry, new THREE.MeshStandardMaterial({
    color: 0x2563EB,
    roughness: 0.5,
    metalness: 0.2,
  }));
  body.position.y = 0;

  // Left Arm
  const armGeometry = new THREE.CapsuleGeometry(0.3, 2, 4, 8);
  const leftArm = new THREE.Mesh(armGeometry, new THREE.MeshStandardMaterial({
    color: 0x8B7355,
    roughness: 0.4,
    metalness: 0.1,
  }));
  leftArm.position.set(-1.2, 1, 0);
  leftArm.rotation.z = Math.PI / 6;

  // Right Arm
  const rightArm = leftArm.clone();
  rightArm.position.x = 1.2;

  // Left Leg
  const legGeometry = new THREE.CapsuleGeometry(0.35, 2.2, 4, 8);
  const leftLeg = new THREE.Mesh(legGeometry, new THREE.MeshStandardMaterial({
    color: 0x1E3A8A,
    roughness: 0.5,
    metalness: 0.15,
  }));
  leftLeg.position.set(-0.5, -2, 0);

  // Right Leg
  const rightLeg = leftLeg.clone();
  rightLeg.position.x = 0.5;

  // Create a group and add all parts
  const group = new THREE.Group();
  group.add(head, body, leftArm, rightArm, leftLeg, rightLeg);

  return (
    <group ref={meshRef} position={[0, -0.5, 0]}>
      <primitive object={group} />
    </group>
  );
}

function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3B82F6" />
    </mesh>
  );
}

export default function RealisticModel3D() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-700 bg-gray-950">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 1, 4]} fov={50} />
          <Environment preset="studio" />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, 5]} intensity={0.5} color="#8B5CF6" />
          
          <Suspense fallback={<Fallback />}>
            <Model3D />
          </Suspense>
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
