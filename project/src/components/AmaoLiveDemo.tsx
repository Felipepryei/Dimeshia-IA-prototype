import { useState } from 'react';
import { Play, CheckCircle, Zap, BarChart3, Layers } from 'lucide-react';

export default function AmaoLiveDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const results = [
    {
      icon: BarChart3,
      label: 'Polygon Reduction',
      value: '71.5%',
      description: 'From 45,230 to 12,870 polygons',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Zap,
      label: 'N-gons Fixed',
      value: '847',
      description: 'Topology issues resolved',
      color: 'from-violet-600 to-violet-400'
    },
    {
      icon: Layers,
      label: 'UVs Generated',
      value: '100%',
      description: 'Clean, ready for texturing',
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      icon: CheckCircle,
      label: 'Quality Retained',
      value: '96%',
      description: 'Visual fidelity maintained',
      color: 'from-emerald-600 to-emerald-400'
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
        {/* Main Demo Container */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Before/After Visualization */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/40 shadow-2xl">
              {/* Before/After Split */}
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden group">
                {/* Background grid effect */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-500"/>
                  </svg>
                </div>

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

              {/* Footer with CTA */}
              <div className="p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/40 border-t border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400">Interactive before/after comparison</p>
                  <p className="text-xs text-gray-500 mt-1">Drag the slider to compare optimization results</p>
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 disabled:from-gray-700 disabled:to-gray-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-emerald-500/50"
                >
                  <Play className="w-4 h-4" />
                  {isAnalyzing ? 'Analyzing...' : 'Try AMAO Analysis (Beta)'}
                </button>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/40 overflow-hidden h-full">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white">Analysis Results</h3>
                  
                  {showResults ? (
                    <div className="space-y-6">
                      {results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div
                            key={idx}
                            className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all animate-fadeIn"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${result.color} flex-shrink-0`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{result.label}</p>
                                <p className={`text-2xl font-black bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                                  {result.value}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 ml-11">{result.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-20 bg-gray-800/30 rounded-2xl animate-pulse" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom badge */}
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-emerald-300">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Row */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: '✔', title: 'Polygon Reduction', desc: 'Preserved Details' },
            { icon: '◆', title: 'N-gons Fixed', desc: 'Topology Issues' },
            { icon: '🔲', title: 'UVs Generated', desc: 'For Texturing' },
            { icon: '⚙', title: 'Model Optimized', desc: 'For All Engines' }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all hover:bg-gradient-to-br hover:from-gray-900/60 hover:to-gray-800/40"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-400">{feature.desc}</p>
            </div>
          ))}
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
