import { useState } from 'react';
import { Play, Zap } from 'lucide-react';

export default function AmaoLiveDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2500);
  };

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
