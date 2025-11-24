import * as THREE from 'three';

export const createCharacterModel = (): THREE.Group => {
  const group = new THREE.Group();

  // Head
  const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
  const headMaterial = new THREE.MeshStandardMaterial({
    color: '#FFB6C1',
    metalness: 0.1,
    roughness: 0.8,
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 1.6;
  group.add(head);

  // Eyes
  const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: '#333333',
    metalness: 0.5,
    roughness: 0.3,
  });
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.15, 1.75, 0.35);
  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.15, 1.75, 0.35);
  group.add(leftEye, rightEye);

  // Body/Torso
  const torsoGeometry = new THREE.CapsuleGeometry(0.35, 1.2, 16, 32);
  const torsoMaterial = new THREE.MeshStandardMaterial({
    color: '#2563EB',
    metalness: 0.2,
    roughness: 0.7,
  });
  const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
  torso.position.y = 0.8;
  group.add(torso);

  // Left Arm
  const armGeometry = new THREE.CapsuleGeometry(0.12, 1, 16, 32);
  const armMaterial = new THREE.MeshStandardMaterial({
    color: '#FFB6C1',
    metalness: 0.1,
    roughness: 0.8,
  });
  const leftArm = new THREE.Mesh(armGeometry, armMaterial);
  leftArm.position.set(-0.65, 1.1, 0);
  leftArm.rotation.z = Math.PI / 6;
  group.add(leftArm);

  // Right Arm
  const rightArm = new THREE.Mesh(armGeometry, armMaterial);
  rightArm.position.set(0.65, 1.1, 0);
  rightArm.rotation.z = -Math.PI / 6;
  group.add(rightArm);

  // Left Leg
  const legGeometry = new THREE.CapsuleGeometry(0.15, 1.2, 16, 32);
  const legMaterial = new THREE.MeshStandardMaterial({
    color: '#1F1F1F',
    metalness: 0.1,
    roughness: 0.8,
  });
  const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
  leftLeg.position.set(-0.25, -0.3, 0);
  group.add(leftLeg);

  // Right Leg
  const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
  rightLeg.position.set(0.25, -0.3, 0);
  group.add(rightLeg);

  group.scale.set(1.5, 1.5, 1.5);
  return group;
};

export const createProductModel = (): THREE.Group => {
  const group = new THREE.Group();

  // Main product body - sleek futuristic design
  const bodyGeometry = new THREE.BoxGeometry(1.5, 1, 0.8);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#1F2937',
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 1,
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  group.add(body);

  // Top accent
  const topGeometry = new THREE.BoxGeometry(1.4, 0.15, 0.7);
  const topMaterial = new THREE.MeshStandardMaterial({
    color: '#3B82F6',
    metalness: 0.95,
    roughness: 0.05,
  });
  const top = new THREE.Mesh(topGeometry, topMaterial);
  top.position.y = 0.55;
  group.add(top);

  // Front display panel
  const displayGeometry = new THREE.BoxGeometry(1.2, 0.6, 0.1);
  const displayMaterial = new THREE.MeshStandardMaterial({
    color: '#111827',
    metalness: 0.3,
    roughness: 0.2,
    emissive: '#1E40AF',
    emissiveIntensity: 0.2,
  });
  const display = new THREE.Mesh(displayGeometry, displayMaterial);
  display.position.set(0, -0.1, 0.45);
  group.add(display);

  // Side details
  const sideGeometry = new THREE.BoxGeometry(0.1, 0.8, 0.6);
  const sideMaterial = new THREE.MeshStandardMaterial({
    color: '#8B5CF6',
    metalness: 0.8,
    roughness: 0.2,
  });
  const leftSide = new THREE.Mesh(sideGeometry, sideMaterial);
  leftSide.position.set(-0.8, 0, 0);
  const rightSide = new THREE.Mesh(sideGeometry, sideMaterial);
  rightSide.position.set(0.8, 0, 0);
  group.add(leftSide, rightSide);

  // Indicator lights
  const lightGeometry = new THREE.SphereGeometry(0.08, 16, 16);
  const lightMaterial = new THREE.MeshStandardMaterial({
    color: '#10B981',
    metalness: 0.5,
    roughness: 0.3,
    emissive: '#10B981',
    emissiveIntensity: 0.5,
  });
  const light1 = new THREE.Mesh(lightGeometry, lightMaterial);
  light1.position.set(-0.3, 0.35, 0.5);
  const light2 = new THREE.Mesh(lightGeometry, lightMaterial);
  light2.position.set(0.3, 0.35, 0.5);
  group.add(light1, light2);

  group.scale.set(1.2, 1.2, 1.2);
  return group;
};

export const createSceneModel = (): THREE.Group => {
  const group = new THREE.Group();

  // Ground/Platform
  const groundGeometry = new THREE.BoxGeometry(3, 0.2, 3);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: '#374151',
    metalness: 0.6,
    roughness: 0.4,
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.position.y = -1;
  group.add(ground);

  // Central structure - building/tower
  const mainStructure = new THREE.Group();

  // Base
  const baseGeometry = new THREE.BoxGeometry(0.8, 1.5, 0.8);
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: '#1F2937',
    metalness: 0.4,
    roughness: 0.6,
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 0;
  mainStructure.add(base);

  // Windows
  for (let i = -1; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      const windowGeometry = new THREE.BoxGeometry(0.12, 0.12, 0.05);
      const windowMaterial = new THREE.MeshStandardMaterial({
        color: '#06B6D4',
        metalness: 0.3,
        roughness: 0.1,
        emissive: '#0891B2',
        emissiveIntensity: 0.3,
      });
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      window.position.set(i * 0.25, 0.2 + j * 0.35, 0.42);
      mainStructure.add(window);
    }
  }

  // Top structure
  const topStructure = new THREE.BoxGeometry(0.6, 0.8, 0.6);
  const topMaterial = new THREE.MeshStandardMaterial({
    color: '#3B82F6',
    metalness: 0.7,
    roughness: 0.3,
  });
  const top = new THREE.Mesh(topStructure, topMaterial);
  top.position.y = 1.4;
  mainStructure.add(top);

  group.add(mainStructure);

  // Surrounding elements - geometric shapes
  const sphere1Geometry = new THREE.IcosahedronGeometry(0.3, 4);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: '#EC4899',
    metalness: 0.5,
    roughness: 0.5,
  });
  const sphere1 = new THREE.Mesh(sphere1Geometry, sphereMaterial);
  sphere1.position.set(-1.2, 0.3, -0.8);
  group.add(sphere1);

  const sphere2 = new THREE.Mesh(sphere1Geometry, sphereMaterial);
  sphere2.position.set(1, 0.4, 1);
  group.add(sphere2);

  // Cone structures
  const coneGeometry = new THREE.ConeGeometry(0.25, 0.7, 16);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: '#8B5CF6',
    metalness: 0.6,
    roughness: 0.4,
  });
  const cone1 = new THREE.Mesh(coneGeometry, coneMaterial);
  cone1.position.set(-1.5, 0.35, 1);
  group.add(cone1);

  const cone2 = new THREE.Mesh(coneGeometry, coneMaterial);
  cone2.position.set(1.5, 0.35, -0.5);
  group.add(cone2);

  return group;
};

export const createOptimizedModel = (original: THREE.Group): THREE.Group => {
  const optimized = new THREE.Group();

  // Clone and simplify the original model
  original.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      let newGeometry: THREE.BufferGeometry;

      // Simplify geometry based on type
      if (child.geometry instanceof THREE.SphereGeometry) {
        newGeometry = new THREE.SphereGeometry(
          (child.geometry as THREE.SphereGeometry).parameters.radius,
          8,
          8
        );
      } else if (child.geometry instanceof THREE.BoxGeometry) {
        newGeometry = child.geometry.clone();
      } else if (child.geometry instanceof THREE.CapsuleGeometry) {
        const capsuleParams = (child.geometry as THREE.CapsuleGeometry).parameters;
        newGeometry = new THREE.CapsuleGeometry(
          capsuleParams.radius,
          capsuleParams.height,
          4,
          4
        );
      } else {
        newGeometry = child.geometry.clone();
      }

      // Apply optimized material
      const optimizedMaterial = new THREE.MeshStandardMaterial({
        color: child.material instanceof THREE.MeshStandardMaterial 
          ? (child.material as THREE.MeshStandardMaterial).color
          : '#8B5CF6',
        metalness: 0.6,
        roughness: 0.3,
      });

      const newMesh = new THREE.Mesh(newGeometry, optimizedMaterial);
      newMesh.position.copy(child.position);
      newMesh.rotation.copy(child.rotation);
      newMesh.scale.copy(child.scale);
      optimized.add(newMesh);
    }
  });

  return optimized;
};
