import { useState } from 'react';
import ModelViewer3D from './ModelViewer3D';

export default function TechnologyExperience() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processProgress, setProcessProgress] = useState(0);
  const [expandedModel, setExpandedModel] = useState<number | null>(null);
  const [uploadedModelData, setUploadedModelData] = useState<{
    original: { polygons: string; fileSize: string; renderTime: string; memory: string; textures: string };
    optimized: { polygons: string; fileSize: string; renderTime: string; memory: string; textures: string };
    reduction: { polygons: string; fileSize: string; renderSpeed: string; memory: string; textureOpt: string };
  } | null>(null);

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
      setUploadedFile(file);
      setUploadedFileName(file.name);
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
          setUploadedModelData({
            original: { polygons: '3.2M', fileSize: '520 MB', renderTime: '52ms', memory: '1.4 GB', textures: '128' },
            optimized: { polygons: '189K', fileSize: '31.4 MB', renderTime: '2.8ms', memory: '92 MB', textures: '20' },
            reduction: { polygons: '94.1%', fileSize: '93.9%', renderSpeed: '18.6x', memory: '93.4%', textureOpt: '84.4%' }
          });
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

        {/* Live Demo - Visual Proof */}
        <div className="my-24 bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-700/50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">
              See It <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Work in Real-Time</span>
            </h3>
            <p className="text-gray-300 text-lg">Watch how our AI reduces polygon complexity while preserving visual fidelity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Original Complex Model */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 overflow-hidden">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase text-gray-400 font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Original - High Complexity
                  </p>
                  <div className="bg-gray-950/80 rounded-xl h-80 flex items-center justify-center border border-gray-700">
                    <div className="relative w-32 h-32">
                      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: '6s' }}>
                        {/* Complex wireframe geometry */}
                        {[...Array(16)].map((_, i) => {
                          const angle = (i / 16) * Math.PI * 2;
                          const x = 100 + 70 * Math.cos(angle);
                          const y = 100 + 70 * Math.sin(angle);
                          const nextAngle = ((i + 1) / 16) * Math.PI * 2;
                          const nextX = 100 + 70 * Math.cos(nextAngle);
                          const nextY = 100 + 70 * Math.sin(nextAngle);
                          return (
                            <g key={`outer-${i}`}>
                              <line x1={x} y1={y} x2={nextX} y2={nextY} stroke="#f97316" strokeWidth="1" opacity="0.8" />
                              <line x1="100" y1="100" x2={x} y2={y} stroke="#ea580c" strokeWidth="0.5" opacity="0.4" />
                            </g>
                          );
                        })}
                        {/* Inner complexity */}
                        {[...Array(12)].map((_, i) => {
                          const angle = (i / 12) * Math.PI * 2;
                          const x = 100 + 40 * Math.cos(angle);
                          const y = 100 + 40 * Math.sin(angle);
                          const nextAngle = ((i + 1) / 12) * Math.PI * 2;
                          const nextX = 100 + 40 * Math.cos(nextAngle);
                          const nextY = 100 + 40 * Math.sin(nextAngle);
                          return (
                            <g key={`inner-${i}`}>
                              <line x1={x} y1={y} x2={nextX} y2={nextY} stroke="#f97316" strokeWidth="0.5" opacity="0.6" />
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <p className="text-xs text-gray-400">Polygons</p>
                    <p className="text-lg font-bold text-orange-400">2.4M</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <p className="text-xs text-gray-400">File Size</p>
                    <p className="text-lg font-bold text-orange-400">380 MB</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <p className="text-xs text-gray-400">Render Time</p>
                    <p className="text-lg font-bold text-orange-400">48ms</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <p className="text-xs text-gray-400">Memory</p>
                    <p className="text-lg font-bold text-orange-400">1.1 GB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimized Simplified Model */}
            <div className="bg-gray-900/60 border border-emerald-800/50 rounded-2xl p-6 overflow-hidden">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase text-gray-400 font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    AI Optimized - Same Quality
                  </p>
                  <div className="bg-gray-950/80 rounded-xl h-80 flex items-center justify-center border border-emerald-700">
                    <div className="relative w-32 h-32">
                      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: '6s' }}>
                        {/* Simplified geometry - fewer polygons */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i / 8) * Math.PI * 2;
                          const x = 100 + 70 * Math.cos(angle);
                          const y = 100 + 70 * Math.sin(angle);
                          const nextAngle = ((i + 1) / 8) * Math.PI * 2;
                          const nextX = 100 + 70 * Math.cos(nextAngle);
                          const nextY = 100 + 70 * Math.sin(nextAngle);
                          return (
                            <g key={`opt-outer-${i}`}>
                              <line x1={x} y1={y} x2={nextX} y2={nextY} stroke="#22c55e" strokeWidth="1.5" opacity="0.9" />
                              <line x1="100" y1="100" x2={x} y2={y} stroke="#16a34a" strokeWidth="0.5" opacity="0.6" />
                            </g>
                          );
                        })}
                        {/* Inner - also simplified */}
                        {[...Array(6)].map((_, i) => {
                          const angle = (i / 6) * Math.PI * 2;
                          const x = 100 + 40 * Math.cos(angle);
                          const y = 100 + 40 * Math.sin(angle);
                          const nextAngle = ((i + 1) / 6) * Math.PI * 2;
                          const nextX = 100 + 40 * Math.cos(nextAngle);
                          const nextY = 100 + 40 * Math.sin(nextAngle);
                          return (
                            <g key={`opt-inner-${i}`}>
                              <line x1={x} y1={y} x2={nextX} y2={nextY} stroke="#22c55e" strokeWidth="0.8" opacity="0.7" />
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700">
                    <p className="text-xs text-gray-400">Polygons</p>
                    <p className="text-lg font-bold text-emerald-400">142K</p>
                  </div>
                  <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700">
                    <p className="text-xs text-gray-400">File Size</p>
                    <p className="text-lg font-bold text-emerald-400">22.5 MB</p>
                  </div>
                  <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700">
                    <p className="text-xs text-gray-400">Render Time</p>
                    <p className="text-lg font-bold text-emerald-400">2.8ms</p>
                  </div>
                  <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-700">
                    <p className="text-xs text-gray-400">Memory</p>
                    <p className="text-lg font-bold text-emerald-400">65 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reduction Summary */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/60 rounded-xl p-4 border border-blue-700/50">
              <p className="text-xs text-gray-400 mb-2">Polygon Reduction</p>
              <p className="text-2xl font-bold text-blue-400">94.1%</p>
              <p className="text-xs text-blue-300 mt-1">2.4M → 142K</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/60 rounded-xl p-4 border border-purple-700/50">
              <p className="text-xs text-gray-400 mb-2">File Size Reduction</p>
              <p className="text-2xl font-bold text-purple-400">94.1%</p>
              <p className="text-xs text-purple-300 mt-1">380MB → 22.5MB</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-950/60 rounded-xl p-4 border border-cyan-700/50">
              <p className="text-xs text-gray-400 mb-2">Render Speed</p>
              <p className="text-2xl font-bold text-cyan-400">17.1x</p>
              <p className="text-xs text-cyan-300 mt-1">Faster rendering</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-green-950/60 rounded-xl p-4 border border-green-700/50">
              <p className="text-xs text-gray-400 mb-2">Visual Quality</p>
              <p className="text-2xl font-bold text-green-400">96%</p>
              <p className="text-xs text-green-300 mt-1">Imperceptible loss</p>
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
