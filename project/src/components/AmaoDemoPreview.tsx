import { CheckCircle } from 'lucide-react';

export default function AmaoDemoPreview() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          See AMAO in Action
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Upload a model → get instant QA, topology fixes, UVs and optimized export-ready assets
        </p>
      </div>

      {/* Premium Demo Container */}
      <div className="bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-violet-950/40 border border-cyan-600/50 rounded-3xl p-12 mb-12 shadow-2xl shadow-cyan-600/30 backdrop-blur-sm">
        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Original Model */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl h-80 border border-gray-700/60 flex items-center justify-center mb-4 overflow-hidden">
              <div className="text-center">
                <div className="text-7xl mb-3">📦</div>
                <p className="text-gray-300 text-sm font-bold">Original Model</p>
                <p className="text-gray-500 text-xs mt-1">45,230 Polygons, N-gons detected</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 rounded-xl p-5 border border-gray-700/50">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-3">Metrics</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Polygon Count:</span>
                  <span className="text-orange-400 font-bold text-sm">45,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Issues:</span>
                  <span className="text-red-400 font-bold text-sm">N-gons Detected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optimized Model */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-emerald-950/80 to-teal-950/60 rounded-2xl h-80 border border-emerald-500/50 flex items-center justify-center mb-4 overflow-hidden shadow-xl shadow-emerald-500/40">
              <div className="text-center">
                <div className="text-7xl mb-3">✨</div>
                <p className="text-emerald-200 text-sm font-bold">Optimized by AMAO</p>
                <p className="text-emerald-400/80 text-xs mt-1">12,870 Polygons, Clean Topology, Auto UVs</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/30 rounded-xl p-5 border border-emerald-500/40">
              <p className="text-xs text-emerald-300 uppercase tracking-widest font-bold mb-3">Optimized Results</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Polygon Count:</span>
                  <span className="text-emerald-400 font-bold text-sm">12,870</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Reduction:</span>
                  <span className="text-emerald-400 font-bold text-sm">71.5% smaller</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-600/30 my-8"></div>

        {/* Analysis Results */}
        <div className="bg-gradient-to-br from-cyan-600/15 to-emerald-600/10 border border-cyan-500/40 rounded-2xl p-6">
          <h4 className="text-sm uppercase tracking-widest font-bold text-cyan-300 mb-5">Analysis Results</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-gray-900/30 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-200">Polygon reduction preserved details</span>
            </div>
            <div className="flex items-start gap-3 bg-gray-900/30 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-200">N-gons fixed</span>
            </div>
            <div className="flex items-start gap-3 bg-gray-900/30 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-200">UVs generated</span>
            </div>
            <div className="flex items-start gap-3 bg-gray-900/30 rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-200">Model optimized for texturing and engines</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="px-12 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-lg rounded-xl transition-all transform hover:scale-110 shadow-xl hover:shadow-emerald-600/60 active:scale-95">
          Try AMAO Analysis (Beta)
        </button>
      </div>
    </div>
  );
}
