import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Original complex model
const OriginalModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main cube body - high detail */}
      <mesh scale={[1, 1, 1]}>
        <boxGeometry args={[2, 2, 2, 32, 32, 32]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Multiple detail spheres - overdone */}
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[
          Math.cos((i / 12) * Math.PI * 2) * 1.8,
          Math.sin((i / 12) * Math.PI * 2) * 1.8,
          0
        ]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      {/* Dense corner details */}
      {[...Array(8)].map((_, i) => {
        const x = i % 2 === 0 ? -1 : 1;
        const y = (i % 4) < 2 ? -1 : 1;
        const z = i < 4 ? -1 : 1;
        return (
          <mesh key={`corner-${i}`} position={[x * 1.2, y * 1.2, z * 1.2]}>
            <boxGeometry args={[0.3, 0.3, 0.3, 16, 16, 16]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.7} roughness={0.3} />
          </mesh>
        );
      })}

      {/* Decorative torus rings - unnecessary */}
      {[...Array(4)].map((_, i) => (
        <mesh key={`torus-${i}`} rotation={[Math.PI / 2 * (i % 2), 0, Math.PI / 4 * i]}>
          <torusGeometry args={[1.2, 0.15, 32, 128]} />
          <meshStandardMaterial color="#EC4899" metalness={0.4} roughness={0.6} />
        </mesh>
      ))}

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
    </group>
  );
};

// Optimized model - simplified
const OptimizedModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main cube - reduced geometry */}
      <mesh scale={[1, 1, 1]}>
        <boxGeometry args={[2, 2, 2, 4, 4, 4]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Simplified spheres - reduced count */}
      {[...Array(4)].map((_, i) => (
        <mesh key={i} position={[
          Math.cos((i / 4) * Math.PI * 2) * 1.8,
          Math.sin((i / 4) * Math.PI * 2) * 1.8,
          0
        ]}>
          <sphereGeometry args={[0.4, 8, 8]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      {/* Corner details - optimized */}
      {[...Array(8)].map((_, i) => {
        const x = i % 2 === 0 ? -1 : 1;
        const y = (i % 4) < 2 ? -1 : 1;
        const z = i < 4 ? -1 : 1;
        return (
          <mesh key={`corner-${i}`} position={[x * 1.2, y * 1.2, z * 1.2]}>
            <boxGeometry args={[0.3, 0.3, 0.3, 4, 4, 4]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.7} roughness={0.3} />
          </mesh>
        );
      })}

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
    </group>
  );
};

export default function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState<'stats' | 'comparison'>('comparison');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Before & After <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Optimization</span>
        </h3>
        <p className="text-gray-400 text-lg">AI-powered 3D model optimization in action</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            activeTab === 'comparison'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          3D Comparison
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            activeTab === 'stats'
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Statistics
        </button>
      </div>

      {activeTab === 'comparison' ? (
        /* 3D Comparison Side-by-Side */
        <div className="grid md:grid-cols-2 gap-6">
          {/* Original */}
          <div className="space-y-4">
            <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2">Original Model</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>📊 Polygons: <span className="text-red-400 font-bold">245,680</span></p>
                <p>💾 File Size: <span className="text-red-400 font-bold">124.5 MB</span></p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              <Canvas>
                <OriginalModel />
              </Canvas>
            </div>
          </div>

          {/* Optimized */}
          <div className="space-y-4">
            <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2">AI Optimized</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>📊 Polygons: <span className="text-green-400 font-bold">12,284</span></p>
                <p>💾 File Size: <span className="text-green-400 font-bold">6.2 MB</span></p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              <Canvas>
                <OptimizedModel />
              </Canvas>
            </div>
          </div>
        </div>
      ) : (
        /* Statistics */
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
            <p className="text-gray-300 font-semibold">Polygon Reduction</p>
            <p className="text-sm text-gray-500 mt-2">245K → 12K polygons</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
            <p className="text-gray-300 font-semibold">File Size Reduction</p>
            <p className="text-sm text-gray-500 mt-2">124.5 MB → 6.2 MB</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">20x</div>
            <p className="text-gray-300 font-semibold">Faster Rendering</p>
            <p className="text-sm text-gray-500 mt-2">Real-time performance gain</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
            <p className="text-gray-300 font-semibold">Quality Preservation</p>
            <p className="text-sm text-gray-500 mt-2">Visually identical output</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
            <p className="text-gray-300 font-semibold">Issues Detected</p>
            <p className="text-sm text-gray-500 mt-2">Production-ready model</p>
          </div>

          <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border border-red-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-red-400 mb-2">2.3s</div>
            <p className="text-gray-300 font-semibold">Processing Time</p>
            <p className="text-sm text-gray-500 mt-2">AI analysis & optimization</p>
          </div>
        </div>
      )}
    </div>
  );
}
