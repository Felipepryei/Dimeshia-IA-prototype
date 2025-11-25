import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, Upload, Zap } from 'lucide-react';

export default function LiveTechShowcase() {
  const [uploadPhase, setUploadPhase] = useState<'upload' | 'processing' | 'complete'>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingSteps = [
    { name: 'Loading Model', icon: '📥', duration: 15 },
    { name: 'Analyzing Geometry', icon: '🔍', duration: 25 },
    { name: 'Detecting Topology', icon: '🧬', duration: 20 },
    { name: 'Optimizing Mesh', icon: '⚙️', duration: 25 },
    { name: 'Finalizing Output', icon: '✨', duration: 15 },
  ];

  // Simulate processing
  useEffect(() => {
    if (!isProcessing || uploadPhase !== 'processing') return;

    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          setIsProcessing(false);
          setUploadPhase('complete');
          return 100;
        }
        return prev + 1;
      });

      setCurrentStep(Math.floor(processingProgress / 20));
    }, 30);

    return () => clearInterval(interval);
  }, [isProcessing, uploadPhase, processingProgress]);

  const handleFileSelect = (file: File) => {
    if (file.type.includes('model') || file.name.endsWith('.obj') || file.name.endsWith('.gltf') || file.name.endsWith('.glb')) {
      setFileName(file.name);
      setUploadPhase('processing');
      setIsProcessing(true);
      setProcessingProgress(0);
      setCurrentStep(0);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const resetDemo = () => {
    setUploadPhase('upload');
    setFileName('');
    setProcessingProgress(0);
    setCurrentStep(0);
    setIsProcessing(false);
    setSliderPosition(50);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-auto">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 30s linear infinite'
          }} />
        </div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full mb-8">
          <button
            onClick={() => window.history.back()}
            className="p-2 hover:bg-gray-800/50 rounded-lg transition-all backdrop-blur"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="mt-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              DIMESHIA AI Pipeline
            </h1>
            <p className="text-gray-400 mt-2">Live 3D Model Optimization Demo</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full flex-1">
          {uploadPhase === 'upload' && (
            <div className="space-y-6">
              {/* Upload Section */}
              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                className="relative group"
              >
                {/* Glassmorphism Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                <div className={`relative bg-black/40 backdrop-blur-xl border-2 rounded-3xl p-12 md:p-20 transition-all ${
                  isDragging 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-gray-700/50 hover:border-blue-500/50'
                }`}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleInputChange}
                    className="hidden"
                    accept=".obj,.gltf,.glb,.fbx,.blend,.max"
                  />

                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="text-8xl animate-bounce" style={{ animationDelay: '0s' }}>
                        📤
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Upload Your 3D Model
                      </h2>
                      <p className="text-gray-400 text-lg">
                        Drag and drop or click to upload OBJ, GLTF, GLB, FBX, Blend, or Max files
                      </p>
                    </div>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl font-semibold text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all"
                    >
                      <Upload className="w-5 h-5" />
                      Choose File
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </button>

                    <p className="text-sm text-gray-500">
                      Max 1GB • Supports all major 3D formats
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: '⚡', title: 'Real-Time Analysis', desc: 'AI processes your model instantly' },
                  { icon: '📉', title: '90%+ Reduction', desc: 'File size reduced while keeping quality' },
                  { icon: '🚀', title: '17x Faster', desc: 'Optimized models render instantly' },
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-black/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {uploadPhase === 'processing' && (
            <div className="space-y-8">
              {/* Processing Header */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-50" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-cyan-400 font-semibold">PROCESSING FILE</p>
                      <p className="text-lg font-bold text-white mt-1">{fileName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-cyan-400">{processingProgress}%</p>
                      <p className="text-xs text-gray-400">Step {currentStep + 1}/{processingSteps.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Steps */}
              <div className="space-y-3">
                {processingSteps.map((step, index) => {
                  const stepProgress = processingProgress / 20;
                  const isActive = index <= stepProgress;
                  const isCurrentStep = index === Math.floor(stepProgress);

                  return (
                    <div key={index} className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl blur transition-opacity ${
                        isActive ? 'opacity-50' : 'opacity-0'
                      }`} />
                      
                      <div className={`relative bg-black/40 backdrop-blur-lg border rounded-xl p-4 transition-all ${
                        isActive ? 'border-blue-500/50 bg-blue-500/10' : 'border-gray-700/50'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div className={`text-2xl transition-transform ${
                            isCurrentStep ? 'animate-spin' : ''
                          }`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <p className={`font-semibold transition-colors ${
                              isActive ? 'text-blue-400' : 'text-gray-400'
                            }`}>
                              {step.name}
                            </p>
                          </div>
                          {isCurrentStep && (
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                              <span className="text-xs text-yellow-400 font-semibold">ACTIVE</span>
                            </div>
                          )}
                        </div>

                        {/* Step Progress Bar */}
                        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
                            style={{
                              width: isCurrentStep ? `${(stepProgress % 1) * 100}%` : isActive ? '100%' : '0%'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Overall Progress */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-50" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-6">
                  <p className="text-sm text-gray-400 mb-3">Overall Progress</p>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full transition-all duration-300"
                      style={{ width: `${processingProgress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Analyzing geometry, optimizing topology, and rendering final mesh...
                  </p>
                </div>
              </div>
            </div>
          )}

          {uploadPhase === 'complete' && (
            <div className="space-y-8">
              {/* Success Header */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-50" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-emerald-500/50 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4 animate-bounce">✨</div>
                  <h2 className="text-3xl font-bold text-emerald-400 mb-2">Optimization Complete!</h2>
                  <p className="text-gray-400">Your model has been processed and optimized</p>
                </div>
              </div>

              {/* Before/After Comparison Slider */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden">
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    {/* Before */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
                      <div className="text-center">
                        <div className="text-9xl opacity-30 animate-pulse">📦</div>
                        <p className="text-gray-500 text-sm mt-4">Original Model</p>
                        <p className="text-gray-600 text-xs">2,400,000 Polygons • 380 MB</p>
                      </div>
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-lg">
                        <p className="text-xs font-semibold text-orange-400">BEFORE</p>
                      </div>
                    </div>

                    {/* After (with slider) */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-emerald-900/20 to-black overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <div className="text-center absolute inset-0 flex items-center justify-center">
                        <div>
                          <div className="text-9xl opacity-30 animate-pulse">✨</div>
                          <p className="text-gray-400 text-sm mt-4">Optimized Model</p>
                          <p className="text-gray-500 text-xs">142,000 Polygons • 22.5 MB</p>
                        </div>
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-lg">
                          <p className="text-xs font-semibold text-emerald-400">AFTER</p>
                        </div>
                      </div>
                    </div>

                    {/* Slider Handle */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
                    />
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 cursor-col-resize"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                        <div className="flex gap-1">
                          <div className="w-0.5 h-3 bg-black rounded" />
                          <div className="w-0.5 h-3 bg-black rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-700/50 text-center">
                    <p className="text-xs text-gray-500">Drag the slider to compare before and after</p>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { label: 'Polygon Reduction', value: '94.1%', icon: '📉', color: 'from-blue-500 to-blue-600' },
                  { label: 'File Size Reduction', value: '94.1%', icon: '💾', color: 'from-purple-500 to-purple-600' },
                  { label: 'Render Speed', value: '17.1x', icon: '⚡', color: 'from-cyan-500 to-cyan-600' },
                  { label: 'Quality Preserved', value: '96%', icon: '✨', color: 'from-emerald-500 to-emerald-600' },
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative bg-black/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center group-hover:border-gray-600 transition-all">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                      <p className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button
                  onClick={resetDemo}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Another Model
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </button>

                <button
                  onClick={() => window.history.back()}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-800 border-2 border-gray-700 rounded-xl font-semibold text-white overflow-hidden hover:border-blue-500 hover:bg-gray-900 transition-all"
                >
                  Back to Homepage
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
      `}</style>
    </div>
  );
}
