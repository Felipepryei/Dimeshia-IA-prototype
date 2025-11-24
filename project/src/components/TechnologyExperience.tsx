export default function TechnologyExperience() {
  const modelData = [
    {
      name: 'Character Model',
      icon: '🧑',
      original: { polygons: '2.8M', fileSize: '450 MB', time: '—' },
      optimized: { polygons: '156K', fileSize: '28.2 MB', time: '47s' },
      reduction: { polygons: '94.4%', fileSize: '93.7%' },
      quality: '96%',
      processing: 'High-poly character with rigging'
    },
    {
      name: 'Scene Environment',
      icon: '🏙️',
      original: { polygons: '5.2M', fileSize: '847 MB', time: '—' },
      optimized: { polygons: '245K', fileSize: '42.5 MB', time: '82s' },
      reduction: { polygons: '95.3%', fileSize: '94.9%' },
      quality: '97%',
      processing: 'Complex city with vegetation'
    },
    {
      name: 'Product Model',
      icon: '📦',
      original: { polygons: '890K', fileSize: '142 MB', time: '—' },
      optimized: { polygons: '68K', fileSize: '8.9 MB', time: '23s' },
      reduction: { polygons: '92.4%', fileSize: '93.7%' },
      quality: '95%',
      processing: 'High-detail consumer product'
    },
    {
      name: 'Vehicle Model',
      icon: '🚗',
      original: { polygons: '1.6M', fileSize: '265 MB', time: '—' },
      optimized: { polygons: '94K', fileSize: '15.8 MB', time: '35s' },
      reduction: { polygons: '94.1%', fileSize: '94.0%' },
      quality: '96%',
      processing: 'Detailed automotive asset'
    },
  ];

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
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            Real Results
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Experience Our <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real data from actual 3D assets. See how our AI optimizes complex models while maintaining visual quality.
          </p>
        </div>

        {/* Real Model Comparison Data */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {modelData.map((model, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 border-b border-gray-800 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{model.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{model.name}</h4>
                    <p className="text-xs text-gray-400">{model.processing}</p>
                  </div>
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
                        <p className="text-xs text-gray-400">Processing Time</p>
                        <p className="text-sm font-bold text-cyan-400">{model.optimized.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reduction Stats */}
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
              </div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📉</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">93-95% Size Reduction</h4>
            <p className="text-sm text-gray-400">Across all asset types, consistently reducing file sizes while preserving quality</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">23-82 Seconds Processing</h4>
            <p className="text-sm text-gray-400">Ultra-fast AI processing times, even for multi-million polygon assets</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">95-97% Quality Maintained</h4>
            <p className="text-sm text-gray-400">AI intelligently preserves visual integrity while removing unnecessary geometry</p>
          </div>
        </div>
      </div>
    </section>
  );
}
