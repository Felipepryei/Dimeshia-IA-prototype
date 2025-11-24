import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import LivePipelineDemo from './LivePipelineDemo' with { type: 'css' };

// Blender Logo/Icon - 3D Model
const BlenderModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Blender orange sphere - main */}
      <mesh position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#FF7F00" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Blue accent details */}
      <mesh position={[0.6, 0.6, 0]}>
        <torusGeometry args={[0.5, 0.15, 16, 100]} />
        <meshStandardMaterial color="#0066FF" metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh position={[-0.6, -0.6, 0]}>
        <torusGeometry args={[0.5, 0.15, 16, 100]} />
        <meshStandardMaterial color="#0066FF" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Orange accent boxes */}
      <mesh position={[0.5, -0.5, 0.5]} scale={[0.3, 0.3, 0.3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FF7F00" metalness={0.5} roughness={0.4} />
      </mesh>

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />
    </group>
  );
};

// Maya Logo/Icon - 3D Model
const MayaModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Maya blue pyramid */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[1, 1.5, 32, 32]} />
        <meshStandardMaterial color="#0066FF" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Central sphere */}
      <mesh position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color="#00FFFF" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Rotating torus */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1.1, 1.1, 1.1]}>
        <torusGeometry args={[0.7, 0.2, 16, 100]} />
        <meshStandardMaterial color="#0066FF" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Corner accents */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh key={i} position={[
            Math.cos(angle) * 1.3,
            Math.sin(angle) * 0.7,
            0
          ]} scale={[0.25, 0.25, 0.25]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00FFFF" metalness={0.7} roughness={0.25} />
          </mesh>
        );
      })}

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />
    </group>
  );
};

// 3ds Max Logo/Icon - 3D Model
const Max3dsModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3ds Max yellow/golden cube */}
      <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
        <boxGeometry args={[1.2, 1.2, 1.2, 24, 24, 24]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Red sphere accent */}
      <mesh position={[0.8, 0.8, 0.8]} scale={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.8, 20, 20]} />
        <meshStandardMaterial color="#FF6B35" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Green sphere accent */}
      <mesh position={[-0.8, -0.8, 0.8]} scale={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.8, 20, 20]} />
        <meshStandardMaterial color="#00FF00" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Blue sphere accent */}
      <mesh position={[0.8, -0.8, -0.8]} scale={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.8, 20, 20]} />
        <meshStandardMaterial color="#0066FF" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Center ring */}
      <mesh rotation={[0.5, 0.5, 0.5]}>
        <torusGeometry args={[0.9, 0.15, 16, 100]} />
        <meshStandardMaterial color="#FFD700" metalness={0.7} roughness={0.25} />
      </mesh>

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />
    </group>
  );
};

export default function DCCToolsShowcase() {
  const [selectedTool, setSelectedTool] = useState<'blender' | 'maya' | 'max'>('blender');

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Professional DCC Integration</span>
        </h2>
        <p className="text-lg text-gray-400">Seamlessly works with industry-leading 3D software</p>
      </div>

      {/* Tool Selector */}
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={() => setSelectedTool('blender')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            selectedTool === 'blender'
              ? 'bg-orange-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          🟠 Blender
        </button>
        <button
          onClick={() => setSelectedTool('maya')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            selectedTool === 'maya'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          🔵 Maya
        </button>
        <button
          onClick={() => setSelectedTool('max')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            selectedTool === 'max'
              ? 'bg-yellow-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          ⭐ 3ds Max
        </button>
      </div>

      {/* 3D Model Display */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Blender */}
        <div className={`rounded-2xl overflow-hidden border-2 transition-all ${
          selectedTool === 'blender'
            ? 'border-orange-500 bg-orange-900/20'
            : 'border-gray-700 bg-gray-900/30'
        }`} style={{ height: '500px' }}>
          <Canvas>
            <BlenderModel />
          </Canvas>
          <div className="p-4 text-center">
            <h3 className="font-bold text-white text-lg">Blender</h3>
            <p className="text-sm text-gray-400 mt-2">Open-source 3D creation suite</p>
          </div>
        </div>

        {/* Maya */}
        <div className={`rounded-2xl overflow-hidden border-2 transition-all ${
          selectedTool === 'maya'
            ? 'border-blue-500 bg-blue-900/20'
            : 'border-gray-700 bg-gray-900/30'
        }`} style={{ height: '500px' }}>
          <Canvas>
            <MayaModel />
          </Canvas>
          <div className="p-4 text-center">
            <h3 className="font-bold text-white text-lg">Autodesk Maya</h3>
            <p className="text-sm text-gray-400 mt-2">Industry-standard 3D animation</p>
          </div>
        </div>

        {/* 3ds Max */}
        <div className={`rounded-2xl overflow-hidden border-2 transition-all ${
          selectedTool === 'max'
            ? 'border-yellow-500 bg-yellow-900/20'
            : 'border-gray-700 bg-gray-900/30'
        }`} style={{ height: '500px' }}>
          <Canvas>
            <Max3dsModel />
          </Canvas>
          <div className="p-4 text-center">
            <h3 className="font-bold text-white text-lg">3ds Max</h3>
            <p className="text-sm text-gray-400 mt-2">Professional 3D modeling & rendering</p>
          </div>
        </div>
      </div>

      {/* Live Pipeline Demo Section */}
      <div className="mt-16 pt-16 border-t border-gray-800">
        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/30 border border-gray-700 rounded-3xl p-12">
          <LivePipelineDemo />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-700/30 rounded-2xl p-6">
          <div className="text-3xl mb-3">📦</div>
          <h4 className="font-bold text-white mb-2">Native Plugins</h4>
          <p className="text-sm text-gray-400">Direct integration with plugin architecture</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-2xl p-6">
          <div className="text-3xl mb-3">⚡</div>
          <h4 className="font-bold text-white mb-2">Real-time Preview</h4>
          <p className="text-sm text-gray-400">See optimization results instantly</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-700/30 rounded-2xl p-6">
          <div className="text-3xl mb-3">🎯</div>
          <h4 className="font-bold text-white mb-2">Batch Processing</h4>
          <p className="text-sm text-gray-400">Process multiple assets efficiently</p>
        </div>
      </div>
    </div>
  );
}
