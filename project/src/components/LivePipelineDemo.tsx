import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// High-Quality Detailed 3D City Model with Dramatic Polygon Reduction
const CityModel = ({ stage }: { stage: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  // Polygon complexity progression - dramatic reduction from stage 1 to 5
  const detailLevels = [8, 6, 4, 2, 1];
  const detail = detailLevels[stage - 1];
  const wireframe = stage === 1;

  // Enhanced Building generator with architectural details
  const Building = ({ x, z, width, depth, height, color, segmentsX, segmentsZ, windowRows = 4 }: any) => (
    <group>
      {/* Main structure */}
      <mesh position={[x, height / 2, z]}>
        <boxGeometry args={[width, height, depth, segmentsX * detail, Math.max(2, Math.floor(4 * detail)), segmentsZ * detail]} />
        <meshStandardMaterial
          color={color}
          metalness={0.35}
          roughness={0.45}
          wireframe={wireframe}
        />
      </mesh>

      {/* Detailed window grid */}
      <mesh position={[x, height / 2, z + depth / 2 + 0.06]}>
        <planeGeometry args={[width * 0.9, height * 0.85, Math.max(6, 8 * detail), Math.max(4, windowRows * detail)]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={stage > 2 ? 0.6 : 0.25}
        />
      </mesh>

      {/* Building accent/roof details - only on high detail stages */}
      {detail >= 4 && (
        <mesh position={[x, height + 0.3, z]}>
          <boxGeometry args={[width + 0.2, 0.3, depth + 0.2, segmentsX * (detail - 1), 1, segmentsZ * (detail - 1)]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      )}

      {/* Side detail planes - architectural elements */}
      {detail >= 5 && (
        <>
          <mesh position={[x + width / 2 + 0.05, height / 2, z]}>
            <planeGeometry args={[0.15, height, segmentsX * (detail - 1), 4 * detail]} />
            <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.6} />
          </mesh>
          <mesh position={[x - width / 2 - 0.05, height / 2, z]}>
            <planeGeometry args={[0.15, height, segmentsX * (detail - 1), 4 * detail]} />
            <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.6} />
          </mesh>
        </>
      )}
    </group>
  );

  // Detailed ground with segments
  const GroundPlane = () => {
    const groundSegments = Math.max(8, 16 * detail);
    return (
      <mesh position={[0, -0.1, 0]}>
        <planeGeometry args={[14, 14, groundSegments, groundSegments]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.05}
          roughness={0.95}
          wireframe={wireframe}
        />
      </mesh>
    );
  };

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Tall central tower - high detail */}
      <Building x={0} z={0} width={1.5} depth={1.5} height={4} color="#3b82f6" segmentsX={18} segmentsZ={18} windowRows={6} />

      {/* Left tower - medium-high detail */}
      <Building x={-4} z={-2} width={1.8} depth={1.8} height={3.5} color="#06b6d4" segmentsX={16} segmentsZ={16} windowRows={5} />

      {/* Right tower - medium-high detail */}
      <Building x={4} z={-2} width={1.8} depth={1.8} height={3.2} color="#8b5cf6" segmentsX={16} segmentsZ={16} windowRows={5} />

      {/* Back left building */}
      <Building x={-3} z={3} width={2} depth={1.5} height={2.5} color="#ec4899" segmentsX={14} segmentsZ={14} windowRows={4} />

      {/* Back right building */}
      <Building x={3} z={3} width={2} depth={1.5} height={2.8} color="#06b6d4" segmentsX={14} segmentsZ={14} windowRows={4} />

      {/* Front left structure */}
      <Building x={-2} z={-4} width={1.2} depth={1.2} height={1.5} color="#10b981" segmentsX={12} segmentsZ={12} windowRows={3} />

      {/* Front right structure */}
      <Building x={2} z={-4} width={1.2} depth={1.2} height={1.8} color="#f59e0b" segmentsX={12} segmentsZ={12} windowRows={3} />

      {/* Additional detail buildings for more complexity */}
      {detail >= 5 && (
        <>
          <Building x={-5} z={0} width={1} depth={1} height={2} color="#14b8a6" segmentsX={10} segmentsZ={10} windowRows={2} />
          <Building x={5} z={0} width={1} depth={1} height={2.2} color="#a855f7" segmentsX={10} segmentsZ={10} windowRows={2} />
        </>
      )}

      {/* Ground plane */}
      <GroundPlane />

      {/* Lighting system */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 5, 3]} intensity={1.1} />
      <pointLight position={[-4, 3, -3]} intensity={0.9} color="#0ea5e9" />
      <pointLight position={[4, 3, 3]} intensity={0.9} color="#d946ef" />
      <pointLight position={[0, 4, 4]} intensity={0.6} color="#fbbf24" />
      <pointLight position={[-4, 2, 4]} intensity={0.4} color="#14b8a6" />
    </group>
  );
};

export default function LivePipelineDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    { number: 1, name: '3D', polygons: '246K' },
    { number: 2, name: 'AI', polygons: '200K' },
    { number: 3, name: 'Polygon', polygons: '120K' },
    { number: 4, name: 'Texture', polygons: '45K' },
    { number: 5, name: 'Final', polygons: '12K' },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    animationRef.current = setInterval(() => {
      setCurrentStep((prev) => (prev >= 5 ? 1 : prev + 1));
      setProgress((prev) => {
        const newProgress = prev + 20;
        return newProgress >= 100 ? 0 : newProgress;
      });
    }, 2000);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-2">⚡ Polygon Reduction</h3>
        <p className="text-gray-400">Smart reduction without losing visual quality</p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>

      {/* 3D Model Viewer & Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* 3D Model Viewer */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl" style={{ height: '500px' }}>
          <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
            <CityModel stage={currentStep} />
          </Canvas>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-xs text-gray-300 text-center">Stage {currentStep}: {steps[currentStep - 1].polygons}</p>
          </div>
        </div>

        {/* Decimation & Remeshing Stats */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/30 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-1">Decimation & Remeshing</h4>
            <p className="text-sm text-gray-400">Smart reduction without losing visual quality</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-700/30 rounded-xl p-3">
              <p className="text-xs text-gray-400 uppercase">Polygons</p>
              <p className="text-lg font-bold text-white">120K</p>
              <p className="text-xs text-green-400">51.2% reduced</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-xl p-3">
              <p className="text-xs text-gray-400 uppercase">File Size</p>
              <p className="text-lg font-bold text-white">58.3 MB</p>
              <p className="text-xs text-green-400">53.2% smaller</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-xl p-3">
              <p className="text-xs text-gray-400 uppercase">Quality Score</p>
              <p className="text-lg font-bold text-white">84%</p>
              <p className="text-xs text-green-400">Very Good</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-700/30 rounded-xl p-3">
              <p className="text-xs text-gray-400 uppercase">Processing Step</p>
              <p className="text-lg font-bold text-white">3/5</p>
              <p className="text-xs text-orange-400">Ready</p>
            </div>
          </div>

          {/* Stage Progress */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Stage Progress</span>
              <span className="text-sm font-bold text-cyan-400">{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Overall Improvement */}
        <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-700/30 rounded-2xl p-6 h-fit">
          <h4 className="text-white font-bold mb-4">Overall Improvement</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">From Original:</p>
              <p className="text-2xl font-bold text-green-400">51.2% smaller</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Quality Maintained:</p>
              <p className="text-2xl font-bold text-green-400">84%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Rendering Speed:</p>
              <p className="text-2xl font-bold text-green-400">205% faster</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Pipeline Stages */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h4 className="text-white font-bold mb-6">Real-Time Pipeline Stages</h4>
        <div className="grid grid-cols-5 gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-lg p-3 text-center transition-all cursor-pointer ${
                currentStep === step.number
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setCurrentStep(step.number)}
            >
              <p className={`text-sm font-bold ${currentStep === step.number ? 'text-white' : 'text-gray-400'}`}>
                Step {step.number}
              </p>
              <p className={`text-xs ${currentStep === step.number ? 'text-gray-100' : 'text-gray-500'}`}>
                {step.name}
              </p>
              <p className={`text-xs font-semibold mt-1 ${currentStep === step.number ? 'text-gray-100' : 'text-gray-400'}`}>
                {step.polygons}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Loop Status & Key Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/30 rounded-2xl p-6 text-center">
          <p className="text-2xl mb-2">🔄</p>
          <h4 className="text-white font-bold mb-2">Auto Loop: ON</h4>
          <p className="text-sm text-gray-400">Watch the complete optimization cycle in under 5 minutes</p>
        </div>

        <div className="space-y-3">
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-700/30 rounded-xl p-4">
            <p className="text-xl font-bold text-white">📉 95% Size Reduction</p>
            <p className="text-sm text-gray-400">From 124.5 MB to just 8.5 MB without quality loss</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-xl p-4">
            <p className="text-xl font-bold text-white">⚡ 95% Polygon Reduction</p>
            <p className="text-sm text-gray-400">245K polygons optimized to 12K while maintaining 98% quality</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-xl p-4">
            <p className="text-xl font-bold text-white">🎯 Intelligent Processing</p>
            <p className="text-sm text-gray-400">AI automatically detects what can be optimized without visual degradation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
