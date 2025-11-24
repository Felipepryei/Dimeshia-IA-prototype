import { useState, useEffect } from 'react';
import { Play, Pause, RotateCw, ArrowRight, Zap } from 'lucide-react';
import PipelineModelViewer from './PipelineModelViewer';

export default function TechnologyExperience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const stages = [
    {
      name: '3D Model Input',
      description: 'Original high-polygon mesh from artist',
      polygons: 245680,
      fileSize: 124.5,
      quality: 65,
      color: 'from-blue-500 to-cyan-500',
      process: 'Mesh Analysis'
    },
    {
      name: 'AI Analysis',
      description: 'AI analyzes topology and identifies optimization opportunities',
      polygons: 200000,
      fileSize: 95.2,
      quality: 72,
      color: 'from-violet-500 to-purple-500',
      process: 'Topology Optimization'
    },
    {
      name: 'Polygon Reduction',
      description: 'Smart reduction without losing visual quality',
      polygons: 120000,
      fileSize: 58.3,
      quality: 84,
      color: 'from-cyan-500 to-blue-600',
      process: 'Decimation & Remeshing'
    },
    {
      name: 'Texture Optimization',
      description: 'Optimized materials and texture maps',
      polygons: 45230,
      fileSize: 23.8,
      quality: 92,
      color: 'from-orange-500 to-yellow-500',
      process: 'Material & Texture Compression'
    },
    {
      name: 'Final Output',
      description: 'Production-ready asset optimized for delivery',
      polygons: 12000,
      fileSize: 8.5,
      quality: 98,
      color: 'from-green-500 to-emerald-600',
      process: 'Export & Verification'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStage((stage) => {
            if (stage >= stages.length - 1) {
              setIsPlaying(false);
              return 0;
            }
            return stage + 1;
          });
          return 0;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStage(0);
    setProgress(0);
  };

  const handleStageClick = (index: number) => {
    setCurrentStage(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const reduction = ((stages[0].polygons - stages[currentStage].polygons) / stages[0].polygons * 100).toFixed(1);
  const fileSizeReduction = ((stages[0].fileSize - stages[currentStage].fileSize) / stages[0].fileSize * 100).toFixed(1);

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
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium mb-4 block animate-pulse">
            Live Pipeline Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            See Your 3D Model <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how DIMESHIA's AI optimizes your 3D assets through every stage of the pipeline
          </p>
        </div>

        {/* Main Demo Container */}
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-800 rounded-3xl p-8 mb-12">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-gray-100">{stages[currentStage].name}</h3>
              <p className="text-gray-400 mt-1">{stages[currentStage].description}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlay}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  isPlaying
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
                } shadow-lg hover:shadow-xl hover:scale-105`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Play
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all hover:scale-105"
                title="Reset"
              >
                <RotateCw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3D Model and Metrics Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 3D Model Viewer */}
            <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden aspect-square">
              <PipelineModelViewer stage={currentStage} />
            </div>

            {/* Metrics and Information */}
            <div className="space-y-6">
              {/* Current Stage Info */}
              <div className={`bg-gradient-to-br ${stages[currentStage].color} p-6 rounded-2xl text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">{stages[currentStage].process}</span>
                </div>
                <p className="text-sm opacity-90">{stages[currentStage].description}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">Polygons</div>
                  <div className="text-2xl font-bold text-blue-400">{(stages[currentStage].polygons / 1000).toFixed(0)}K</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {reduction}% reduced
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">File Size</div>
                  <div className="text-2xl font-bold text-violet-400">{stages[currentStage].fileSize} MB</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {fileSizeReduction}% smaller
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">Quality Score</div>
                  <div className="text-2xl font-bold text-green-400">{stages[currentStage].quality}%</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {stages[currentStage].quality >= 90 ? 'Excellent' : stages[currentStage].quality >= 80 ? 'Very Good' : 'Good'}
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">Processing Step</div>
                  <div className="text-2xl font-bold text-cyan-400">{currentStage + 1}/{stages.length}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {isPlaying && progress > 0 ? `${Math.round(progress)}%` : 'Ready'}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {isPlaying && (
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Stage Progress</span>
                    <span className="text-sm text-blue-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stages[currentStage].color} transition-all duration-100`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Comparison Stats */}
              <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-800/30 rounded-xl p-4">
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Overall Improvement</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">From Original:</span>
                    <span className="text-green-400 font-semibold">{reduction}% smaller</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quality Maintained:</span>
                    <span className="text-green-400 font-semibold">{stages[currentStage].quality}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Timeline */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-4 text-gray-300">Pipeline Stages</h3>
          <div className="flex flex-col md:flex-row gap-3">
            {stages.map((stage, index) => (
              <div key={index} className="flex-1 flex items-center gap-2">
                <button
                  onClick={() => handleStageClick(index)}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    currentStage === index
                      ? `border-blue-500 bg-gradient-to-br ${stage.color} bg-opacity-20`
                      : index < currentStage
                      ? 'border-green-500 bg-green-900/20'
                      : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                  }`}
                >
                  <div className="text-xs font-semibold text-gray-400 mb-1">Step {index + 1}</div>
                  <div className="text-sm font-bold text-gray-200">{stage.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{(stage.polygons / 1000).toFixed(0)}K polys</div>
                </button>
                {index < stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📉</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">95% Size Reduction</h4>
            <p className="text-sm text-gray-400">From 124.5 MB to just 8.5 MB without quality loss</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">95% Polygon Reduction</h4>
            <p className="text-sm text-gray-400">245K polygons optimized to 12K while maintaining 98% quality</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">Intelligent Processing</h4>
            <p className="text-sm text-gray-400">AI automatically detects what can be optimized without visual degradation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
