import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft } from 'lucide-react';

export default function LiveTechShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentStage(prev => (prev + 1) % 4);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const stages = [
    {
      title: 'Stage 1: Input',
      description: 'High-poly 3D model (2.4M polygons)',
      color: 'from-orange-500 to-red-500',
      icon: '📥',
      metrics: { polygons: '2,400,000', fileSize: '380 MB', quality: '65%' },
    },
    {
      title: 'Stage 2: Analysis',
      description: 'AI analyzes geometry and topology',
      color: 'from-blue-500 to-cyan-500',
      icon: '🔍',
      metrics: { polygons: '1,200,000', fileSize: '190 MB', quality: '78%' },
    },
    {
      title: 'Stage 3: Optimization',
      description: 'AI removes redundant geometry',
      color: 'from-purple-500 to-violet-500',
      icon: '⚙️',
      metrics: { polygons: '400,000', fileSize: '65 MB', quality: '92%' },
    },
    {
      title: 'Stage 4: Output',
      description: 'Optimized high-quality model',
      color: 'from-emerald-500 to-green-500',
      icon: '✨',
      metrics: { polygons: '142,000', fileSize: '22.5 MB', quality: '96%' },
    },
  ];

  const stage = stages[currentStage];

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Header */}
      <div className="h-20 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="p-2 hover:bg-gray-800 rounded-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              DIMESHIA AI Pipeline
            </h1>
            <p className="text-xs text-gray-500">Live Technology Demonstration</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => {
              setProgress(0);
              setCurrentStage(0);
              setIsPlaying(false);
            }}
            className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left: 3D Visualization */}
            <div className="flex flex-col justify-center">
              <div className="relative w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden group">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="absolute inset-0 bg-gradient-to-br"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${50 + 30 * Math.cos(progress * Math.PI / 50)}% ${50 + 30 * Math.sin(progress * Math.PI / 50)}%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* 3D Model Representation */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="text-9xl drop-shadow-2xl animate-pulse" style={{ 
                    animation: `spin ${4 - currentStage * 0.5}s linear infinite`,
                  }}>
                    {stage.icon}
                  </div>
                </div>

                {/* Stage Indicator */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-gray-700">
                  <p className="text-sm font-bold text-white">Stage {currentStage + 1}/4</p>
                </div>

                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="rgba(107, 114, 128, 0.2)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 0.45 * (progress / 100)} ${2 * Math.PI * 0.45}`}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dasharray 0.1s linear' }}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={stage.color.split(' ')[1]} />
                      <stop offset="100%" stopColor={stage.color.split(' ')[3]} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right: Stage Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                  {stage.title}
                </h2>
                <p className="text-xl text-gray-400 mb-6">{stage.description}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all">
                  <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Polygons</p>
                  <p className="text-3xl font-bold text-blue-400 font-mono">{stage.metrics.polygons}</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all">
                  <p className="text-xs uppercase text-gray-500 font-semibold mb-2">File Size</p>
                  <p className="text-3xl font-bold text-purple-400 font-mono">{stage.metrics.fileSize}</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all">
                  <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Quality</p>
                  <p className="text-3xl font-bold text-emerald-400 font-mono">{stage.metrics.quality}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-300">Stage Progress</p>
                  <p className="text-sm font-bold text-blue-400">{Math.round(progress)}%</p>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div
                    className={`h-full bg-gradient-to-r ${stage.color} rounded-full transition-all duration-100`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stage Navigation */}
          <div className="flex gap-4 justify-center">
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentStage(i);
                  setProgress(0);
                  setIsPlaying(false);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  i === currentStage
                    ? `bg-gradient-to-r ${s.color} text-white shadow-lg`
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{s.icon}</span>
                {s.title.split(':')[0]}
              </button>
            ))}
          </div>

          {/* Performance Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-700/50 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Polygon Reduction</p>
              <p className="text-3xl font-bold text-blue-400">94.1%</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-950/20 border border-purple-700/50 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">File Size Reduction</p>
              <p className="text-3xl font-bold text-purple-400">94.1%</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-950/20 border border-cyan-700/50 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Speed Improvement</p>
              <p className="text-3xl font-bold text-cyan-400">17.1x</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border border-emerald-700/50 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Quality Preserved</p>
              <p className="text-3xl font-bold text-emerald-400">96%</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
