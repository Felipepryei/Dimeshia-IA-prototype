import { Beaker, Zap, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AIAutomationLab() {
  const experiments = [
    {
      icon: Beaker,
      name: 'Intelligent Naming Engine',
      description: 'Automatically detects 3D object types and assigns production-ready names based on topology, materials, and hierarchy.',
      metrics: [
        { label: 'Accuracy', value: '94%', color: 'from-blue-400 to-cyan-400' },
        { label: 'Speed', value: '12s', color: 'from-cyan-400 to-blue-400', subtext: 'per scene' }
      ],
      accent: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-700/50 hover:border-blue-500/80'
    },
    {
      icon: Target,
      name: 'Automated Scene Cleaning',
      description: 'Identifies and removes orphaned geometry, duplicate materials, unused layers, and non-manifold structures in real-time.',
      metrics: [
        { label: 'File Size', value: '78%', color: 'from-purple-400 to-pink-400', subtext: 'reduction' },
        { label: 'Objects', value: '47', color: 'from-pink-400 to-purple-400', subtext: 'purged avg' }
      ],
      accent: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-700/50 hover:border-purple-500/80'
    },
    {
      icon: Zap,
      name: 'Polygon Reduction Engine',
      description: 'Intelligently decimates high-poly models while preserving silhouettes and baked lighting for game engines and real-time render.',
      metrics: [
        { label: 'Reduction', value: '91%', color: 'from-emerald-400 to-teal-400' },
        { label: 'Quality Loss', value: '0.2%', color: 'from-teal-400 to-emerald-400', subtext: 'imperceptible' }
      ],
      accent: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-700/50 hover:border-emerald-500/80'
    }
  ];

  const betaStats = [
    { label: 'Models Processed', value: '847', icon: '⚙️' },
    { label: 'Time Saved', value: '97%', icon: '⚡' },
    { label: 'Studio Impact', value: '12h → 18m', icon: '🚀' }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 60%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-950/60 to-blue-950/60 border border-purple-600/40 mb-6 backdrop-blur-sm">
            <Beaker className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wider">R&D CORE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
            Dimeshia <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Automation Lab</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Our R&D core where intelligent 3D pipeline tools are tested, iterated, and proven at production scale. Real-time automation for studios, artists, and developers.
          </p>
        </div>

        {/* Experiment Cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-20">
          {experiments.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border ${exp.borderColor} transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Gradient backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950/80 to-black/90 backdrop-blur-xl" />

                {/* Animated border gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Badge */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.accent} rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-black/50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">{exp.name}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">{exp.description}</p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700/50">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className={`bg-gradient-to-r ${metric.color} bg-clip-text text-transparent text-2xl font-bold mb-1`}>
                          {metric.value}
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{metric.label}</p>
                        {metric.subtext && <p className="text-xs text-gray-500 mt-1">{metric.subtext}</p>}
                      </div>
                    ))}
                  </div>

                  {/* Hover CTA */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300">Production Ready</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Beta Result Simulation - Enhanced */}
        <div className="relative mb-16">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />

          <div className="relative backdrop-blur-xl bg-gradient-to-r from-purple-950/40 via-blue-950/40 to-cyan-950/40 border border-purple-600/50 rounded-3xl p-12 md:p-16">
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-600/50">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400">LIVE BETA RESULTS</span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Latest Production Run</h3>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {betaStats.map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-gray-900/40 border border-gray-800/50 hover:border-purple-600/30 transition-colors">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlight */}
              <div className="text-center pt-4 border-t border-gray-700/50">
                <p className="text-lg text-gray-200">
                  <span className="font-bold text-purple-300">847 models</span> optimized in <span className="font-bold text-cyan-300">18 minutes</span> instead of <span className="line-through text-gray-500">12 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 group">
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Try Beta Prototype
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-6 space-y-2">
            <p className="text-sm font-semibold text-purple-300">Early access for studios and development teams</p>
            <p className="text-xs text-gray-500">Limited availability • Production-grade testing • Priority support included</p>
          </div>
        </div>
      </div>
    </section>
  );
}
