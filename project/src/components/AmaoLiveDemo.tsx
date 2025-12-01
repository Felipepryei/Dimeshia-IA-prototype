import { useState } from 'react';
import { Play, Zap, Headphones, AlertTriangle, Zap as Lightning, Layers3, Package, Star, CheckCircle } from 'lucide-react';

export default function AmaoLiveDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

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
