import { useState, useRef } from 'react';
import { Upload, Zap, CheckCircle, TrendingDown, Layers, Box, Clock } from 'lucide-react';
import ThreeDModelViewer from './ThreeDModelViewer';

interface OptimizationMetrics {
  originalPolygons: number;
  optimizedPolygons: number;
  originalSize: number;
  optimizedSize: number;
  processingTime: number;
  qualityScore: number;
}

const AIOptimizationTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOptimized, setIsOptimized] = useState(false);
  const [metrics, setMetrics] = useState<OptimizationMetrics | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setIsOptimized(false);
      setMetrics(null);
      setProgress(0);
    }
  };

  const simulateOptimization = async () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);

    const steps = [
      { name: 'Analyzing model geometry...', duration: 800, progress: 20 },
      { name: 'Running AI optimization...', duration: 1200, progress: 50 },
      { name: 'Reducing polygon count...', duration: 1000, progress: 75 },
      { name: 'Optimizing textures...', duration: 800, progress: 90 },
      { name: 'Finalizing output...', duration: 600, progress: 100 },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, step.duration));
      setProgress(step.progress);
    }

    const mockMetrics: OptimizationMetrics = {
      originalPolygons: 245680,
      optimizedPolygons: 45230,
      originalSize: file.size,
      optimizedSize: Math.round(file.size * 0.32),
      processingTime: 4.2,
      qualityScore: 96,
    };

    setMetrics(mockMetrics);
    setIsOptimized(true);
    setIsProcessing(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">AI-Powered 3D Optimization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Experience Our Technology
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Upload a 3D model and watch our AI optimize it in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Box className="w-6 h-6 text-blue-400" />
              Original Model
            </h3>
            <div className="aspect-square bg-black/50 rounded-xl mb-6 border border-gray-800 overflow-hidden">
              <ThreeDModelViewer optimized={false} />
            </div>
            {file && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">File:</span>
                  <span className="text-white font-medium">{file.name}</span>
                </div>
                {metrics && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Polygons:</span>
                      <span className="text-white font-mono">{metrics.originalPolygons.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">File Size:</span>
                      <span className="text-white font-mono">{formatFileSize(metrics.originalSize)}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-violet-400" />
              AI Optimized
            </h3>
            <div className="aspect-square bg-black/50 rounded-xl mb-6 border border-gray-800 overflow-hidden">
              <ThreeDModelViewer optimized={isOptimized} />
            </div>
            {metrics && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-medium flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Optimized
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Polygons:</span>
                  <span className="text-white font-mono">{metrics.optimizedPolygons.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">File Size:</span>
                  <span className="text-white font-mono">{formatFileSize(metrics.optimizedSize)}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {!file && (
          <div className="max-w-2xl mx-auto">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-700 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-all">
                <Upload className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-lg font-medium mb-2">Upload 3D Model</p>
              <p className="text-gray-400 text-sm">
                Support for .obj, .fbx, .gltf, .blend files
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              accept=".obj,.fbx,.gltf,.glb,.blend"
              className="hidden"
            />
          </div>
        )}

        {file && !isProcessing && !isOptimized && (
          <div className="text-center">
            <button
              onClick={simulateOptimization}
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2 mx-auto"
            >
              <Zap className="w-5 h-5" />
              Start AI Optimization
            </button>
          </div>
        )}

        {isProcessing && (
          <div className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-lg font-medium">Processing Model...</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm mt-3">{progress}% Complete</p>
          </div>
        )}

        {metrics && isOptimized && (
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Optimization Results</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6">
                <TrendingDown className="w-8 h-8 text-blue-400 mb-3" />
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {Math.round((1 - metrics.optimizedPolygons / metrics.originalPolygons) * 100)}%
                </div>
                <div className="text-sm text-gray-400">Polygon Reduction</div>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/30 rounded-xl p-6">
                <Layers className="w-8 h-8 text-violet-400 mb-3" />
                <div className="text-3xl font-bold text-violet-400 mb-1">
                  {Math.round((1 - metrics.optimizedSize / metrics.originalSize) * 100)}%
                </div>
                <div className="text-sm text-gray-400">Size Reduction</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {metrics.qualityScore}%
                </div>
                <div className="text-sm text-gray-400">Quality Score</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-6">
                <Clock className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  {metrics.processingTime}s
                </div>
                <div className="text-sm text-gray-400">Processing Time</div>
              </div>
            </div>

            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => {
                  setFile(null);
                  setIsOptimized(false);
                  setMetrics(null);
                }}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                Upload New Model
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Download Optimized
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIOptimizationTool;
