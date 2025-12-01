import { Beaker, Zap, Target, ArrowRight } from 'lucide-react';

export default function AIAutomationLab() {
  const experiments = [
    {
      icon: Beaker,
      name: 'Intelligent Naming Engine',
      description: 'Automatically detects 3D object types and assigns production-ready names based on topology, materials, and hierarchy.',
      kpi: '94% accuracy vs manual naming | 12 sec per scene'
    },
    {
      icon: Target,
      name: 'Automated Scene Cleaning',
      description: 'Identifies and removes orphaned geometry, duplicate materials, unused layers, and non-manifold structures in real-time.',
      kpi: '78% file size reduction | 47 objects purged avg'
    },
    {
      icon: Zap,
      name: 'Polygon Reduction Engine',
      description: 'Intelligently decimates high-poly models while preserving silhouettes and baked lighting for game engines and real-time render.',
      kpi: '91% poly reduction | 0.2% quality loss | 8x faster render'
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/40 border border-purple-700/30 mb-6">
            <Beaker className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">R&D Core</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Dimeshia <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">AI Automation Lab</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Where intelligent 3D pipeline tools are tested, iterated, and proven. Real-time automation for studios, artists, and developers.
          </p>
        </div>

        {/* Experiment Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experiments.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-gray-900/40 to-gray-950/40 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-blue-900/20"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all">
                  <Icon className="w-7 h-7 text-purple-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{exp.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{exp.description}</p>

                {/* KPI Badge */}
                <div className="bg-purple-900/20 border border-purple-700/40 rounded-lg p-3 mb-4">
                  <p className="text-xs font-mono text-purple-300">
                    <span className="font-bold">β Results:</span> {exp.kpi}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Beta Result Simulation */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/40 rounded-2xl p-12 mb-12 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold text-purple-300">Latest Beta Run:</span> 847 models processed. 12 hrs optimization → 18 mins with Automation Lab. Studio recovery time: <span className="text-cyan-400 font-bold">97% faster.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95">
            <Zap className="w-5 h-5" />
            Try Beta Prototype
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-400 mt-4">Early access for studios and dev teams. Limited slots available.</p>
        </div>
      </div>
    </section>
  );
}
