import { useEffect, useState } from 'react';
import { Play, Pause, RotateCw, Zap } from 'lucide-react';
import PipelineModelViewer from './PipelineModelViewer';

export default function AutoPlayTechDemo() {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoLoop, setAutoLoop] = useState(true);

  const stages = [
    {
      name: '3D Model Input',
      description: 'Original high-polygon mesh from Blender/Maya',
      polygons: 245680,
      fileSize: 124.5,
      quality: 65,
      color: 'from-blue-500 to-cyan-500',
      process: 'Mesh Analysis',
      icon: '📦'
    },
    {
      name: 'AI Analysis',
      description: 'AI analyzes topology and identifies optimization opportunities',
      polygons: 200000,
      fileSize: 95.2,
      quality: 72,
      color: 'from-violet-500 to-purple-500',
      process: 'Topology Optimization',
      icon: '🧠'
    },
    {
      name: 'Polygon Reduction',
      description: 'Smart reduction without losing visual quality',
      polygons: 120000,
      fileSize: 58.3,
      quality: 84,
      color: 'from-cyan-500 to-blue-600',
      process: 'Decimation & Remeshing',
      icon: '⚡'
    },
    {
      name: 'Texture Optimization',
      description: 'Optimized materials and texture maps',
      polygons: 45230,
      fileSize: 23.8,
      quality: 92,
      color: 'from-orange-500 to-yellow-500',
      process: 'Material & Texture Compression',
      icon: '🎨'
    },
    {
      name: 'Final Output',
      description: 'Production-ready asset optimized for delivery',
      polygons: 12000,
      fileSize: 8.5,
      quality: 98,
      color: 'from-green-500 to-emerald-600',
      process: 'Export & Verification',
      icon: '✅'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStage((stage) => {
            if (stage >= stages.length - 1) {
              if (autoLoop) {
                return 0;
              } else {
                setIsPlaying(false);
                return stage;
              }
            }
            return stage + 1;
          });
          return 0;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isPlaying, autoLoop, stages.length]);

  const reduction = ((stages[0].polygons - stages[currentStage].polygons) / stages[0].polygons * 100).toFixed(1);
  const fileSizeReduction = ((stages[0].fileSize - stages[currentStage].fileSize) / stages[0].fileSize * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
            <span>{stages[currentStage].icon}</span>
            {stages[currentStage].name}
          </h3>
          <p className="text-gray-400 mt-1">{stages[currentStage].description}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
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
            onClick={() => {
              setCurrentStage(0);
              setProgress(0);
              setIsPlaying(true);
            }}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all hover:scale-105"
            title="Reset"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Demo Container */}
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
              <div className="flex justify-between">
                <span className="text-gray-400">Rendering Speed:</span>
                <span className="text-green-400 font-semibold">{Math.round((stages[0].polygons / stages[currentStage].polygons) * 100)}% faster</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Stages Timeline */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-300">Real-Time Pipeline Stages</h3>
        <div className="grid grid-cols-5 gap-2">
          {stages.map((stage, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStage(index);
                setProgress(0);
              }}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                currentStage === index
                  ? `border-blue-500 bg-gradient-to-br ${stage.color} bg-opacity-20`
                  : index < currentStage
                  ? 'border-green-500 bg-green-900/20'
                  : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
              }`}
            >
              <div className="text-xs font-semibold text-gray-400 mb-1">Step {index + 1}</div>
              <div className="text-sm font-bold text-gray-200">{stage.name.split(' ')[0]}</div>
              <div className="text-xs text-gray-500 mt-1">{(stage.polygons / 1000).toFixed(0)}K</div>
            </button>
          ))}
        </div>
      </div>

      {/* Auto-loop toggle */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setAutoLoop(!autoLoop)}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${
            autoLoop
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300'
          }`}
        >
          {autoLoop ? '🔄 Auto Loop: ON' : '⏹️ Auto Loop: OFF'}
        </button>
        <p className="text-sm text-gray-500">
          Watch the complete optimization cycle in under 5 minutes
        </p>
      </div>
    </div>
  );
}
