import { useState, useEffect, useRef } from 'react';

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

      {/* Demo Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Decimation & Remeshing */}
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
