import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Professional High-Poly Blender-Style Model
const BlenderHighPolyModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main organic body - complex mesh */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 6]} />
        <meshStandardMaterial color="#FF7F00" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Complex detail spheres */}
      {[...Array(16)].map((_, i) => {
        const phi = (i / 16) * Math.PI * 2;
        const theta = (i % 4) * Math.PI / 4;
        return (
          <mesh key={i} position={[
            Math.sin(theta) * Math.cos(phi) * 2.2,
            Math.cos(theta) * 2,
            Math.sin(theta) * Math.sin(phi) * 2.2
          ]}>
            <sphereGeometry args={[0.35, 24, 24]} />
            <meshStandardMaterial color="#0066FF" metalness={0.5} roughness={0.4} />
          </mesh>
        );
      })}

      {/* Dense edge details */}
      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        return (
          <mesh key={`edge-${i}`} position={[
            Math.cos(angle) * 1.8,
            Math.sin(angle) * 0.8,
            Math.sin(angle * 2) * 1.5
          ]}>
            <boxGeometry args={[0.25, 0.25, 0.25, 12, 12, 12]} />
            <meshStandardMaterial color="#FF7F00" metalness={0.6} roughness={0.3} />
          </mesh>
        );
      })}

      {/* Decorative torus details */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.12, 16, 100]} />
        <meshStandardMaterial color="#FF00FF" metalness={0.5} roughness={0.5} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.1, 0.1, 16, 100]} />
        <meshStandardMaterial color="#0066FF" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Professional lighting setup */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} color="#FFFFFF" />
      <directionalLight position={[-4, 4, -4]} intensity={0.8} color="#0066FF" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#FF7F00" distance={3} />
    </group>
  );
};

// Optimized ZBrush-Style Model
const ZBrushOptimizedModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main organic body - simplified */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial color="#FF7F00" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Optimized detail spheres - fewer but strategic */}
      {[...Array(6)].map((_, i) => {
        const phi = (i / 6) * Math.PI * 2;
        const theta = (i % 2) * Math.PI / 4;
        return (
          <mesh key={i} position={[
            Math.sin(theta) * Math.cos(phi) * 2.2,
            Math.cos(theta) * 2,
            Math.sin(theta) * Math.sin(phi) * 2.2
          ]}>
            <sphereGeometry args={[0.35, 8, 8]} />
            <meshStandardMaterial color="#0066FF" metalness={0.5} roughness={0.4} />
          </mesh>
        );
      })}

      {/* Optimized edges - reduced geometry */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh key={`edge-${i}`} position={[
            Math.cos(angle) * 1.8,
            Math.sin(angle) * 0.8,
            Math.sin(angle * 2) * 1.5
          ]}>
            <boxGeometry args={[0.25, 0.25, 0.25, 4, 4, 4]} />
            <meshStandardMaterial color="#FF7F00" metalness={0.6} roughness={0.3} />
          </mesh>
        );
      })}

      {/* Simplified torus - single geometry */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.12, 8, 32]} />
        <meshStandardMaterial color="#FF00FF" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Professional lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} color="#FFFFFF" />
      <directionalLight position={[-4, 4, -4]} intensity={0.8} color="#0066FF" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#FF7F00" distance={3} />
    </group>
  );
};

export default function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState<'stats' | 'comparison'>('comparison');

  return (
    <div className="space-y-8">
      {/* Header - Updated as requested */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">AI-Powered 3D Optimization</span>
        </h2>
        <h3 className="text-2xl font-bold text-white mb-4">Experience Our Technology</h3>
        <p className="text-lg text-gray-400">Upload a 3D model and watch our AI optimize it in real-time</p>
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
        <div className="grid md:grid-cols-2 gap-8">
          {/* Original - Blender High-Poly */}
          <div className="space-y-4">
            <div className="bg-orange-900/30 border border-orange-700/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                Original Model (Blender Export)
              </h4>
              <div className="text-sm text-gray-400 space-y-2 mt-4">
                <p>📊 Polygons: <span className="text-orange-400 font-bold text-lg">645,920</span></p>
                <p>💾 File Size: <span className="text-orange-400 font-bold text-lg">358.2 MB</span></p>
                <p>🔧 Render Time: <span className="text-orange-400 font-bold">45 seconds/frame</span></p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden" style={{ height: '450px' }}>
              <Canvas camera={{ position: [0, 0, 3.5] }}>
                <BlenderHighPolyModel />
              </Canvas>
            </div>
          </div>

          {/* Optimized - AI Enhanced */}
          <div className="space-y-4">
            <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                AI Optimized Result
              </h4>
              <div className="text-sm text-gray-400 space-y-2 mt-4">
                <p>📊 Polygons: <span className="text-green-400 font-bold text-lg">28,340</span></p>
                <p>💾 File Size: <span className="text-green-400 font-bold text-lg">12.8 MB</span></p>
                <p>🔧 Render Time: <span className="text-green-400 font-bold">1.2 seconds/frame</span></p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden" style={{ height: '450px' }}>
              <Canvas camera={{ position: [0, 0, 3.5] }}>
                <ZBrushOptimizedModel />
              </Canvas>
            </div>
          </div>
        </div>
      ) : (
        /* Statistics */
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">95.6%</div>
            <p className="text-gray-300 font-semibold">Polygon Reduction</p>
            <p className="text-sm text-gray-500 mt-2">645K → 28K polygons</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">96.4%</div>
            <p className="text-gray-300 font-semibold">File Size Reduction</p>
            <p className="text-sm text-gray-500 mt-2">358.2 MB → 12.8 MB</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">37x</div>
            <p className="text-gray-300 font-semibold">Faster Rendering</p>
            <p className="text-sm text-gray-500 mt-2">45s → 1.2s per frame</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
            <p className="text-gray-300 font-semibold">Quality Preservation</p>
            <p className="text-sm text-gray-500 mt-2">Visually identical output</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
            <p className="text-gray-300 font-semibold">Issues Detected</p>
            <p className="text-sm text-gray-500 mt-2">Production-ready model</p>
          </div>

          <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border border-red-800/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-red-400 mb-2">3.2s</div>
            <p className="text-gray-300 font-semibold">Processing Time</p>
            <p className="text-sm text-gray-500 mt-2">AI analysis & optimization</p>
          </div>
        </div>
      )}
    </div>
  );
}
