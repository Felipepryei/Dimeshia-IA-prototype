import { useState, useEffect } from 'react';
import { Play, Pause, RotateCw, Zap, Headphones, AlertTriangle, Zap as Lightning, Layers3, Package, Star, CheckCircle, Cpu, Layers, Upload as UploadIcon, RotateCcw } from 'lucide-react';
import PipelineModelViewer from './PipelineModelViewer';
import UnifiedModelViewer from './UnifiedModelViewer';

export default function AmaoLiveDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
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

  const workflowSteps = [
    {
      id: 1,
      name: '3D Model Input',
      desc: 'AI analyzes mesh topology',
      color: 'from-blue-500 to-cyan-500',
      icon: Layers,
      duration: 2000
    },
    {
      id: 2,
      name: 'Pipeline Processing',
      desc: 'Automated texture & lighting',
      color: 'from-violet-500 to-purple-500',
      icon: Cpu,
      duration: 2500
    },
    {
      id: 3,
      name: 'Render Optimization',
      desc: 'GPU acceleration & AI upscaling',
      color: 'from-cyan-500 to-blue-600',
      icon: Zap,
      duration: 2000
    },
    {
      id: 4,
      name: 'Output Delivery',
      desc: 'Production-ready assets',
      color: 'from-green-500 to-emerald-600',
      icon: Layers,
      duration: 1500
    },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setActiveStep(0);
  };

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
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((step) => (step + 1) % workflowSteps.length);
          return 0;
        }
        return prev + 1;
      });
    }, workflowSteps[activeStep].duration / 100);

    return () => clearInterval(interval);
  }, [isPlaying, activeStep]);

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

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

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
      icon: Lightning,
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

        {/* Live Demonstration Section */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-700 rounded-3xl p-8 shadow-2xl">
            {/* Control Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <img src="/logo de dimeshia IA.jpg" alt="DIMESHIA" className="w-10 h-10 object-contain" />
                <div>
                  <div className="text-sm font-semibold text-gray-200">DIMESHIA Studio Pipeline</div>
                  <div className="text-xs text-gray-500">AI-Powered 3D Analysis</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayPause}
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
                      Play Demo
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

            {/* Visualization Area */}
            <div className="relative bg-black border border-gray-800 rounded-2xl overflow-hidden" style={{ height: '500px' }}>
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                animation: isPlaying ? 'gridMove 20s linear infinite' : 'none'
              }} />

              {/* Central 3D Object Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* 3D Model Viewer */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-96 h-96 transition-all duration-1000 ${isPlaying ? 'scale-110' : 'scale-100'}`}>
                      <PipelineModelViewer stage={activeStep} />
                    </div>
                  </div>

                  {/* Orbiting Particles */}
                  {isPlaying && (
                    <>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
                          style={{
                            top: '50%',
                            left: '50%',
                            animation: `orbit ${3 + i}s linear infinite`,
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.6
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Processing Rings */}
                  {isPlaying && (
                    <>
                      <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-ping opacity-20" style={{ width: '450px', height: '450px', top: '25px', left: '50%', transform: 'translateX(-50%)' }} />
                      <div className="absolute inset-0 border-2 border-violet-500 rounded-full animate-ping opacity-20" style={{ width: '450px', height: '450px', top: '25px', left: '50%', transform: 'translateX(-50%)', animationDelay: '0.5s' }} />
                    </>
                  )}
                </div>
              </div>

              {/* Workflow Steps Overlay */}
              <div className="absolute top-6 left-6 right-6 flex justify-between">
                {workflowSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;

                  return (
                    <div
                      key={step.id}
                      className={`flex-1 mx-2 transition-all duration-500 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}
                    >
                      <div className={`p-4 rounded-xl backdrop-blur-sm border-2 transition-all duration-500 ${
                        isActive
                          ? `border-blue-400 bg-gradient-to-br ${step.color} bg-opacity-20`
                          : isCompleted
                          ? 'border-green-500 bg-green-900/20'
                          : 'border-gray-700 bg-gray-900/40'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <StepIcon className={`w-5 h-5 ${
                            isActive ? 'text-white animate-pulse' : isCompleted ? 'text-green-400' : 'text-gray-500'
                          }`} />
                          <span className={`text-xs font-semibold ${
                            isActive ? 'text-white' : isCompleted ? 'text-green-300' : 'text-gray-400'
                          }`}>
                            Step {index + 1}
                          </span>
                        </div>
                        <div className={`text-sm font-medium mb-1 ${
                          isActive ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.name}
                        </div>
                        <div className="text-xs text-gray-500">{step.desc}</div>

                        {/* Progress Bar */}
                        {isActive && isPlaying && (
                          <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-100"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats Panel */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <div className="grid grid-cols-4 gap-4 text-xs">
                  <div>
                    <div className="text-gray-400 mb-1">Processing</div>
                    <div className="text-blue-400 font-mono font-bold">
                      {isPlaying ? `${Math.round(progress)}%` : '0%'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Polygons</div>
                    <div className="text-violet-400 font-mono font-bold">
                      {activeStep === 0 ? '245K' : activeStep === 1 ? '156K' : activeStep === 2 ? '45K' : '12K'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">GPU Usage</div>
                    <div className="text-cyan-400 font-mono font-bold">
                      {isPlaying ? '87%' : '12%'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Quality</div>
                    <div className="text-green-400 font-mono font-bold">
                      {activeStep === 0 ? '65%' : activeStep === 1 ? '78%' : activeStep === 2 ? '92%' : '98%'}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Status Indicator */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3">
                <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
                <span className="text-xs text-gray-300">
                  {isPlaying ? 'AI Processing Active' : 'System Idle'}
                </span>
              </div>
            </div>
          </div>
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
                  <p className="text-lg font-bold text-white mb-2">Ready to analyze your 3D model</p>
                  <p className="text-sm text-gray-400">All metrics and optimization recommendations will appear here after analysis completes</p>
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

        {/* Main Demo Container */}
        <div className="mb-16">
          {/* Before/After Visualization */}
          <div>
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/40 shadow-2xl">
              {/* Before/After Split */}
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden group">
                {/* Left Side - Original */}
                <div className="absolute inset-0 left-0 right-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-950/30 to-transparent p-6">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-400/20 border border-blue-500/50 mb-4">
                        <div className="text-5xl font-black text-blue-400">◉</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Original Model</h3>
                    <p className="text-sm text-blue-300 font-semibold mb-1">45,230 Polygons</p>
                    <p className="text-xs text-gray-500">N-gons detected: 847</p>
                  </div>
                </div>

                {/* Right Side - Optimized */}
                <div className="absolute inset-0 left-1/2 flex flex-col items-center justify-center bg-gradient-to-l from-emerald-950/30 to-transparent p-6">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-emerald-400/20 border border-emerald-500/50 mb-4">
                        <div className="text-5xl font-black text-emerald-400">✓</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Optimized by AMAO</h3>
                    <p className="text-sm text-emerald-300 font-semibold mb-1">12,870 Polygons</p>
                    <p className="text-xs text-gray-500">Clean Topology, Auto UVs</p>
                  </div>
                </div>

                {/* Divider with slider */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-emerald-500 to-cyan-500 shadow-lg cursor-col-resize hover:w-2 transition-all"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 10.5h6V8.5H7v2zm0 3h6v-2H7v2zm0-6h6v-2H7v2z"/>
                    </svg>
                  </div>
                </div>

                {/* Slider input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-50"
                />

                {/* Analysis badge */}
                {isAnalyzing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-40">
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="inline-block">
                          <Zap className="w-16 h-16 text-cyan-400 animate-pulse" />
                        </div>
                      </div>
                      <p className="text-xl font-bold text-white">Analyzing Model...</p>
                      <p className="text-sm text-gray-400 mt-2">Running AI optimization suite</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer with Enhanced CTA */}
              <div className="p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/40 border-t border-gray-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Interactive before/after comparison</p>
                  <p className="text-xs text-gray-500 mt-1">Drag the slider above to see AI optimization in action</p>
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 disabled:from-gray-700 disabled:to-gray-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-3 whitespace-nowrap shadow-xl hover:shadow-emerald-500/50 group flex-shrink-0"
                >
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="font-bold text-base">{isAnalyzing ? 'Analyzing...' : 'Run Analysis'}</div>
                    <div className="text-xs opacity-90">{isAnalyzing ? 'Processing model...' : 'View Report'}</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Detailed Analysis Results */}
            {showResults && (
              <div className="mt-8 rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/40 overflow-hidden animate-fadeIn">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-2xl font-bold text-white">Analysis Report</h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {analysisResults.map((result, idx) => {
                      const Icon = result.icon;
                      return (
                        <div
                          key={idx}
                          className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all hover:shadow-lg animate-fadeIn"
                          style={{ animationDelay: `${idx * 80}ms` }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${result.color} flex-shrink-0`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{result.label}</p>
                              <p className={`text-2xl font-black bg-gradient-to-r ${result.color} bg-clip-text text-transparent mt-1`}>
                                {result.value}
                              </p>
                            </div>
                          </div>
                          
                          {result.details ? (
                            <div className="space-y-2 mt-4 border-t border-gray-700/50 pt-4">
                              {result.details.map((detail, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1">•</span>
                                  <span className="text-sm text-gray-400">{detail}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-gray-400 mt-2">{result.description}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-2">Ready for Production</h4>
                        <p className="text-sm text-gray-300">
                          This model is optimized and ready for deployment across web and game engines. Download the optimized version to get started immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
