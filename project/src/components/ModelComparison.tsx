import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// High-Detail Original Model
const OriginalModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.3}>
      {/* High-detail main structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 2, 48, 48, 48]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.4}
          roughness={0.4}
        />
      </mesh>

      {/* Detailed window layer - high segments */}
      <mesh position={[0, 0, 1.05]}>
        <planeGeometry args={[2, 3, 64, 96]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Left high-detail tower */}
      <mesh position={[-3, 0.5, -1]}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 96, 48]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Right high-detail cone */}
      <mesh position={[3, 0, 0]}>
        <coneGeometry args={[1.2, 2.5, 96, 48]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* High-detail ground */}
      <mesh position={[0, -1.7, 0]}>
        <planeGeometry args={[10, 10, 96, 96]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#0ea5e9" />
      <pointLight position={[5, 3, 5]} intensity={0.6} color="#d946ef" />
    </group>
  );
};

// Optimized Model (Low-Poly)
const OptimizedModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.3}>
      {/* Optimized low-poly structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 2, 8, 8, 8]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.4}
          roughness={0.4}
        />
      </mesh>

      {/* Simplified window layer */}
      <mesh position={[0, 0, 1.05]}>
        <planeGeometry args={[2, 3, 6, 8]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Left simplified tower */}
      <mesh position={[-3, 0.5, -1]}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 12, 4]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Right simplified cone */}
      <mesh position={[3, 0, 0]}>
        <coneGeometry args={[1.2, 2.5, 12, 4]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Simplified ground */}
      <mesh position={[0, -1.7, 0]}>
        <planeGeometry args={[10, 10, 8, 8]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#0ea5e9" />
      <pointLight position={[5, 3, 5]} intensity={0.6} color="#d946ef" />
    </group>
  );
};

export default function ModelComparison() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            Visual Comparison
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Before & After <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">AI Optimization</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See the dramatic difference in complexity while maintaining visual quality
          </p>
        </div>

        {/* 3D Comparison Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Original Model */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-orange-600/50 overflow-hidden shadow-2xl mb-6" style={{ height: '500px' }}>
              <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
                <OriginalModel />
              </Canvas>
            </div>
            <div className="bg-orange-950/40 border border-orange-700/50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Original Model</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Polygons</p>
                  <p className="font-mono font-bold text-orange-300">~156K</p>
                </div>
                <div>
                  <p className="text-gray-400">File Size</p>
                  <p className="font-mono font-bold text-orange-300">~42.5 MB</p>
                </div>
                <div>
                  <p className="text-gray-400">Segments</p>
                  <p className="font-mono font-bold text-orange-300">Detailed</p>
                </div>
                <div>
                  <p className="text-gray-400">Processing</p>
                  <p className="font-mono font-bold text-orange-300">Raw Import</p>
                </div>
              </div>
            </div>
          </div>

          {/* Optimized Model */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-green-600/50 overflow-hidden shadow-2xl mb-6" style={{ height: '500px' }}>
              <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
                <OptimizedModel />
              </Canvas>
            </div>
            <div className="bg-green-950/40 border border-green-700/50 rounded-xl p-4">
              <h3 className="text-lg font-bold text-green-400 mb-3">AI Optimized</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Polygons</p>
                  <p className="font-mono font-bold text-green-300">~9.2K</p>
                </div>
                <div>
                  <p className="text-gray-400">File Size</p>
                  <p className="font-mono font-bold text-green-300">~2.1 MB</p>
                </div>
                <div>
                  <p className="text-gray-400">Reduction</p>
                  <p className="font-mono font-bold text-green-300">94.1%</p>
                </div>
                <div>
                  <p className="text-gray-400">Time</p>
                  <p className="font-mono font-bold text-cyan-300">47 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-blue-950/40 to-violet-950/40 border border-blue-800/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-white">Optimization Impact</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-4xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                94.1%
              </p>
              <p className="text-gray-300">Polygon Reduction</p>
              <p className="text-xs text-gray-500 mt-2">156K → 9.2K</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                95.1%
              </p>
              <p className="text-gray-300">File Size Reduction</p>
              <p className="text-xs text-gray-500 mt-2">42.5MB → 2.1MB</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                94%
              </p>
              <p className="text-gray-300">Quality Maintained</p>
              <p className="text-xs text-gray-500 mt-2">Visually Identical</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
                47s
              </p>
              <p className="text-gray-300">Processing Time</p>
              <p className="text-xs text-gray-500 mt-2">Full Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
