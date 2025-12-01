import { useState, useEffect } from 'react';
import { Play, Zap, Headphones, AlertTriangle, Layers3, Package, Star, CheckCircle, Upload as UploadIcon, RotateCcw } from 'lucide-react';
import UnifiedModelViewer from './UnifiedModelViewer';

export default function AmaoLiveDemo() {
  const [stage, setStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedModel, setSelectedModel] = useState('character');
  const [viewMode, setViewMode] = useState<'preset' | 'upload'>('preset');
  const [uploadedFile, setUploadedFile] = useState<{ name: string; polygons: number } | null>(null);

  const models = [
    { id: 'character', name: '3D Character Model', polygons: 245680 },
    { id: 'scene', name: 'Environment Scene', polygons: 189420 },
    { id: 'product', name: 'Product Design', polygons: 156890 }
  ];

  const analysisStages = [
    { title: 'Model Loaded', desc: 'Initializing analysis engine', time: 2 },
    { title: 'Topology Scan', desc: 'Analyzing mesh structure and edges', time: 3 },
    { title: 'Ngon Detection', desc: 'Scanning for n-sided polygons', time: 3 },
    { title: 'UV Analysis', desc: 'Checking UV mapping coverage', time: 2 },
    { title: 'Normal Check', desc: 'Detecting flipped and invalid normals', time: 2 },
    { title: 'Density Analysis', desc: 'Finding over-dense geometry areas', time: 3 },
    { title: 'Optimization Plan', desc: 'Computing optimal reduction strategy', time: 2 },
    { title: 'AI Recommendation', desc: 'Generating final optimization report', time: 1 }
  ];

  const handleAnalysisPlay = () => {
    if (stage === analysisStages.length) {
      setStage(0);
      setAnalysisProgress(0);
    }
    setIsRunning(!isRunning);
  };

  const handleAnalysisReset = () => {
    setStage(0);
    setAnalysisProgress(0);
    setIsRunning(false);
  };

  const isAnalysisComplete = stage === analysisStages.length;

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          if (stage < analysisStages.length) {
            setStage((s) => s + 1);
            return 0;
          } else {
            setIsRunning(false);
            return 100;
          }
        }
        return prev + Math.random() * 25;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isRunning, stage, analysisStages.length]);

  const analysisResults = [
    {
      icon: Headphones,
      label: 'Model Inspected',
      value: 'character_rigged_v2.fbx',
      description: 'Full analysis completed by AMAO',
      color: 'from-blue-600 to-cyan-400'
    },
    {
      icon: AlertTriangle,
      label: 'Issues Found',
      value: '36 Total',
      details: ['8 topology errors', '16 overlapping UV islands', '12 NGons'],
      color: 'from-orange-600 to-red-400'
    },
    {
      icon: Zap,
      label: 'Optimization Preview',
      value: '68% Reduction',
      description: 'Polygon reduction achievable with quality retained',
      color: 'from-violet-600 to-fuchsia-400'
    },
    {
      icon: Layers3,
      label: 'UV Suggestion',
      value: 'Smart Unwrap',
      description: 'Optimal layout created (not applied yet)',
      color: 'from-cyan-600 to-emerald-400'
    },
    {
      icon: Package,
      label: 'Export Advice',
      value: 'Web + Games',
      description: 'Ready for Unreal, Unity, Babylon.js, Three.js',
      color: 'from-emerald-600 to-teal-400'
    },
    {
      icon: Star,
      label: 'Production Score',
      value: '8.4/10',
      description: 'High quality, minor tweaks recommended',
      color: 'from-yellow-600 to-amber-400'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 0% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(34, 197, 94, 0.15) 0%, transparent 40%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            See AMAO in Action
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch AMAO analyze your 3D model step-by-step, detecting issues and recommending optimizations in real-time.
          </p>
        </div>

        {/* 3D Model Selection & Analysis Section */}
        <div className="mb-20 space-y-8">
          {/* Model Selection & Upload Mode */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-white">Select 3D Model to Analyze</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('preset')}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
                    viewMode === 'preset'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Presets
                </button>
                <button
                  onClick={() => setViewMode('upload')}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                    viewMode === 'upload'
                      ? 'bg-violet-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <UploadIcon className="w-4 h-4" /> Upload
                </button>
              </div>
            </div>

            {viewMode === 'preset' ? (
              <div className="grid md:grid-cols-3 gap-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setSelectedModel(model.id);
                      setUploadedFile(null);
                      setStage(0);
                      setAnalysisProgress(0);
                      setIsRunning(false);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedModel === model.id && !uploadedFile
                        ? 'border-blue-500 bg-blue-900/30'
                        : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                    }`}
                  >
                    <div className="font-bold text-white">{model.name}</div>
                    <div className="text-sm text-gray-400 mt-2">{(model.polygons / 1000).toFixed(0)}K polygons</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div
                  onClick={() => document.getElementById('fbx-upload')?.click()}
                  className="bg-gradient-to-br from-blue-900/30 to-violet-900/30 border-2 border-dashed border-blue-500/50 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-900/40 transition-all"
                >
                  <UploadIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2 text-lg">Upload Your 3D Model</h4>
                  <p className="text-sm text-gray-400 mb-3">Click to select FBX, OBJ, GLTF, or GLB</p>
                  <input
                    id="fbx-upload"
                    type="file"
                    accept=".fbx,.obj,.gltf,.glb"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setUploadedFile({
                          name: file.name,
                          polygons: Math.floor(Math.random() * 300000 + 100000),
                        });
                        setStage(0);
                        setAnalysisProgress(0);
                        setIsRunning(false);
                      }
                    }}
                    className="hidden"
                  />
                </div>
                {uploadedFile && (
                  <div className="bg-green-900/20 border border-green-800/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-400 font-bold text-sm">✅ Model Loaded</p>
                        <p className="text-gray-400 text-xs mt-1">{uploadedFile.name}</p>
                        <p className="text-gray-500 text-xs mt-1">{(uploadedFile.polygons / 1000).toFixed(0)}K polygons</p>
                      </div>
                      <button
                        onClick={() => setUploadedFile(null)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-sm font-semibold"
                      >
                        Upload New
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Main Demo Container - 3D Models & Analysis Pipeline */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: 3D Models Display */}
            <div className="space-y-6">
              {/* Original Model */}
              <div className="bg-gray-900/50 border border-yellow-800/50 rounded-2xl p-4 overflow-hidden">
                <h5 className="text-sm font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>📦</span> Original High-Poly Model
                </h5>
                <div className="bg-black rounded-xl h-72 border border-gray-700">
                  <UnifiedModelViewer 
                    modelType={uploadedFile ? 'uploaded' : (selectedModel as any)} 
                    optimized={false}
                    polygons={uploadedFile?.polygons || models.find(m => m.id === selectedModel)?.polygons || 0}
                  />
                </div>
                <div className="mt-3 text-xs text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Polygons:</span>
                    <span className="text-yellow-400 font-bold">
                      {uploadedFile ? uploadedFile.polygons.toLocaleString() : (models.find(m => m.id === selectedModel)?.polygons || 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode:</span>
                    <span className="text-yellow-400 font-bold">Solid</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="text-yellow-400 font-bold">{selectedModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality:</span>
                    <span className="text-green-400 font-bold">100% Full Detail</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Analysis Pipeline */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-xl text-white">AMAO Analysis Pipeline</h4>
                <div className="flex gap-3">
                  <button
                    onClick={handleAnalysisPlay}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      isRunning
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    {isRunning ? 'Stop' : 'Start Analysis'}
                  </button>
                  <button
                    onClick={handleAnalysisReset}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Pipeline Stages */}
              <div className="space-y-3">
                {analysisStages.map((s, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      i < stage
                        ? 'border-green-500 bg-green-900/20'
                        : i === stage
                        ? 'border-blue-500 bg-blue-900/30'
                        : 'border-gray-700 bg-gray-800/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {i < stage ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : i === stage ? (
                          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{s.title}</div>
                        <div className="text-sm text-gray-400">{s.desc}</div>
                        {i === stage && isRunning && (
                          <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                              style={{ width: `${Math.min(analysisProgress, 100)}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-800/30 rounded-xl text-center">
                <div className="text-sm text-gray-400">
                  {isRunning ? (
                    <>
                      <span className="font-bold text-blue-400">Analyzing...</span>
                      <span> Stage {stage + 1} of {analysisStages.length}</span>
                    </>
                  ) : isAnalysisComplete ? (
                    <span className="text-green-400 font-bold">✅ Analysis Complete!</span>
                  ) : (
                    <span>Click "Start Analysis" to begin</span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Results Dashboard */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-white mb-6">AI Analysis Results</h4>
              {isAnalysisComplete ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">🚀</div>
                  <p className="text-lg font-bold text-white mb-2">Ready to optimize</p>
                  <p className="text-sm text-gray-400">All metrics and optimization recommendations will appear here</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">🔍</div>
                  <p className="text-sm text-gray-400 mb-4">Ready to analyze your 3D model</p>
                  <p className="text-xs text-gray-500">Click "Start Analysis" to begin the AMAO processing pipeline</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
