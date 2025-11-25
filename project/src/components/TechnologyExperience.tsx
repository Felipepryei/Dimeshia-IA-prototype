import { useState } from 'react';

export default function TechnologyExperience() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processProgress, setProcessProgress] = useState(0);
  const [expandedModel, setExpandedModel] = useState<number | null>(null);

  const modelData = [
    {
      name: 'Character Model',
      icon: '🧑',
      original: { polygons: '2.8M', fileSize: '450 MB', time: '—', renderTime: '45ms', memory: '1.2 GB', textures: '156' },
      optimized: { polygons: '156K', fileSize: '28.2 MB', time: '47s', renderTime: '2.4ms', memory: '68 MB', textures: '24' },
      reduction: { polygons: '94.4%', fileSize: '93.7%', renderSpeed: '18.75x', memory: '94.3%', textureOpt: '84.6%' },
      quality: '96%',
      qualityLoss: '<1%',
      processing: 'High-poly character with rigging',
      uvUsage: '92% → 98%'
    },
    {
      name: 'Scene Environment',
      icon: '🏙️',
      original: { polygons: '5.2M', fileSize: '847 MB', time: '—', renderTime: '89ms', memory: '2.1 GB', textures: '340' },
      optimized: { polygons: '245K', fileSize: '42.5 MB', time: '82s', renderTime: '3.2ms', memory: '124 MB', textures: '52' },
      reduction: { polygons: '95.3%', fileSize: '94.9%', renderSpeed: '27.8x', memory: '94.1%', textureOpt: '84.7%' },
      quality: '97%',
      qualityLoss: '<0.5%',
      processing: 'Complex city with vegetation',
      uvUsage: '88% → 96%'
    },
    {
      name: 'Product Model',
      icon: '📦',
      original: { polygons: '890K', fileSize: '142 MB', time: '—', renderTime: '22ms', memory: '450 MB', textures: '89' },
      optimized: { polygons: '68K', fileSize: '8.9 MB', time: '23s', renderTime: '0.9ms', memory: '28 MB', textures: '14' },
      reduction: { polygons: '92.4%', fileSize: '93.7%', renderSpeed: '24.4x', memory: '93.8%', textureOpt: '84.3%' },
      quality: '95%',
      qualityLoss: '<2%',
      processing: 'High-detail consumer product',
      uvUsage: '85% → 94%'
    },
    {
      name: 'Vehicle Model',
      icon: '🚗',
      original: { polygons: '1.6M', fileSize: '265 MB', time: '—', renderTime: '38ms', memory: '890 MB', textures: '145' },
      optimized: { polygons: '94K', fileSize: '15.8 MB', time: '35s', renderTime: '1.6ms', memory: '45 MB', textures: '23' },
      reduction: { polygons: '94.1%', fileSize: '94.0%', renderSpeed: '23.75x', memory: '94.9%', textureOpt: '84.1%' },
      quality: '96%',
      qualityLoss: '<1%',
      processing: 'Detailed automotive asset',
      uvUsage: '91% → 97%'
    },
    {
      name: 'Architecture Building',
      icon: '🏗️',
      original: { polygons: '4.1M', fileSize: '678 MB', time: '—', renderTime: '72ms', memory: '1.8 GB', textures: '267' },
      optimized: { polygons: '198K', fileSize: '34.2 MB', time: '61s', renderTime: '2.8ms', memory: '98 MB', textures: '42' },
      reduction: { polygons: '95.2%', fileSize: '94.9%', renderSpeed: '25.7x', memory: '94.6%', textureOpt: '84.3%' },
      quality: '96%',
      qualityLoss: '<1.5%',
      processing: 'High-detail architectural asset',
      uvUsage: '89% → 95%'
    },
    {
      name: 'Mechanical Part',
      icon: '⚙️',
      original: { polygons: '756K', fileSize: '125 MB', time: '—', renderTime: '18ms', memory: '380 MB', textures: '67' },
      optimized: { polygons: '42K', fileSize: '5.3 MB', time: '19s', renderTime: '0.7ms', memory: '19 MB', textures: '10' },
      reduction: { polygons: '94.4%', fileSize: '95.8%', renderSpeed: '25.7x', memory: '95.0%', textureOpt: '85.1%' },
      quality: '97%',
      qualityLoss: '<0.8%',
      processing: 'Precision mechanical asset',
      uvUsage: '93% → 99%'
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
      simulateProcessing();
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setProcessProgress(0);
    const interval = setInterval(() => {
      setProcessProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 300);
  };

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
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              AI-Powered 3D Optimization
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-4">Experience Our Technology</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Watch our AI optimize it in real-time — See dramatic reductions in polygons and file size while maintaining visual quality. Click any model to see detailed optimization metrics.
          </p>
        </div>

        {/* Real Model Comparison Data */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {modelData.map((model, index) => (
            <div
              key={index}
              onClick={() => setExpandedModel(expandedModel === index ? null : index)}
              className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 border-b border-gray-800 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{model.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{model.name}</h4>
                    <p className="text-xs text-gray-400">{model.processing}</p>
                  </div>
                  <span className="text-2xl text-blue-400">{expandedModel === index ? '−' : '+'}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Original vs Optimized Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Original */}
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4">
                    <p className="text-xs uppercase text-gray-500 font-semibold mb-3">Original</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-400">Polygons</p>
                        <p className="text-sm font-bold text-orange-400">{model.original.polygons}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">File Size</p>
                        <p className="text-sm font-bold text-orange-400">{model.original.fileSize}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Render Time</p>
                        <p className="text-sm font-bold text-orange-400">{model.original.renderTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Optimized */}
                  <div className="bg-green-900/20 border border-green-700/40 rounded-xl p-4">
                    <p className="text-xs uppercase text-gray-500 font-semibold mb-3">Optimized by AI</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-400">Polygons</p>
                        <p className="text-sm font-bold text-green-400">{model.optimized.polygons}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">File Size</p>
                        <p className="text-sm font-bold text-green-400">{model.optimized.fileSize}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Render Time</p>
                        <p className="text-sm font-bold text-cyan-400">{model.optimized.renderTime}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Time to Optimize</p>
                        <p className="text-sm font-bold text-cyan-400">{model.optimized.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Performance Metrics */}
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-xs text-gray-400">Polygon Reduction</p>
                      <p className="text-lg font-bold text-blue-400">{model.reduction.polygons}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Size Reduction</p>
                      <p className="text-lg font-bold text-violet-400">{model.reduction.fileSize}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Quality Score</p>
                      <p className="text-lg font-bold text-green-400">{model.quality}</p>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedModel === index && (
                  <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 space-y-3 animate-in">
                    <h5 className="text-sm font-bold text-blue-300 mb-3">Advanced Metrics</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-400">Memory Usage</p>
                        <p className="text-xs font-mono text-gray-300">{model.original.memory} → {model.optimized.memory}</p>
                        <p className="text-xs font-bold text-green-400 mt-1">{model.reduction.memory} reduction</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Textures Optimized</p>
                        <p className="text-xs font-mono text-gray-300">{model.original.textures} → {model.optimized.textures}</p>
                        <p className="text-xs font-bold text-green-400 mt-1">{model.reduction.textureOpt} reduction</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Render Speed Gain</p>
                        <p className="text-xs font-bold text-cyan-400">{model.reduction.renderSpeed} faster</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">UV Optimization</p>
                        <p className="text-xs font-mono text-gray-300">{model.uvUsage}</p>
                      </div>
                    </div>
                    <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-2 mt-2">
                      <p className="text-xs text-gray-400">Visual Quality Loss</p>
                      <p className="text-xs font-bold text-green-400">{model.qualityLoss} (imperceptible)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Upload Demo */}
        <div className="my-16 bg-gradient-to-br from-blue-950/40 to-violet-950/40 border border-blue-800/50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-2 text-white">Try It Yourself</h3>
          <p className="text-gray-400 mb-8">Upload a 3D model and watch our AI optimize it in real-time</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="bg-gray-900/50 border-2 border-dashed border-blue-600/50 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-all">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".fbx,.obj,.gltf,.glb,.max,.blend"
              />
              <label htmlFor="file-upload" className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="text-5xl mb-4">📤</div>
                <p className="text-white font-semibold mb-2">Upload 3D Model</p>
                <p className="text-sm text-gray-400 text-center">FBX, OBJ, GLTF, GLB, MAX, or BLEND</p>
                <p className="text-xs text-gray-500 mt-3">Max 1GB</p>
              </label>
            </div>

            {/* Processing Info */}
            <div className="bg-gray-900/50 rounded-2xl p-8 space-y-4">
              {uploadedFile ? (
                <>
                  <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-4">
                    <p className="text-sm text-gray-400">Uploaded File</p>
                    <p className="text-lg font-bold text-green-400 break-all">{uploadedFile}</p>
                  </div>

                  {isProcessing && (
                    <>
                      <div>
                        <div className="flex justify-between mb-2">
                          <p className="text-sm text-gray-400">AI Processing</p>
                          <p className="text-sm font-bold text-blue-400">{Math.round(processProgress)}%</p>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-300"
                            style={{ width: `${processProgress}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-900/30 rounded-lg p-3">
                          <p className="text-xs text-gray-400">Analyzing</p>
                          <p className="text-sm font-bold text-blue-400">Topology...</p>
                        </div>
                        <div className="bg-purple-900/30 rounded-lg p-3">
                          <p className="text-xs text-gray-400">Optimizing</p>
                          <p className="text-sm font-bold text-purple-400">Geometry...</p>
                        </div>
                      </div>
                    </>
                  )}

                  {!isProcessing && processProgress === 100 && (
                    <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-4 space-y-2">
                      <p className="text-sm text-green-400 font-semibold">✓ Optimization Complete!</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-gray-400">Reduction</p>
                          <p className="font-bold text-green-400">94.2%</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Time</p>
                          <p className="font-bold text-cyan-400">42s</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <p className="text-gray-500 text-center">Upload a file to see real-time optimization</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📉</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">92-95% Reduction</h4>
            <p className="text-xs text-gray-400">File size shrinks dramatically</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">23-82 Seconds</h4>
            <p className="text-xs text-gray-400">AI processes multi-million polygons</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">25x Faster Rendering</h4>
            <p className="text-xs text-gray-400">Optimized models render instantly</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">95-97% Quality</h4>
            <p className="text-xs text-gray-400">Visually indistinguishable results</p>
          </div>
        </div>
      </div>
    </section>
  );
}
