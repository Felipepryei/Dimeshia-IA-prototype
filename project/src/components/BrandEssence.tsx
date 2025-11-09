import { Cpu, Layers, Zap, Network, Box, Binary } from 'lucide-react';

export default function BrandEssence() {
  const essenceCards = [
    {
      icon: Cpu,
      title: 'Intelligent',
      description: 'AI-powered automation that learns and adapts to your workflow',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers,
      title: 'Creative',
      description: 'Unleashing artistic potential through computational design',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Network,
      title: 'Structured',
      description: 'Systematic pipelines that ensure consistency and quality',
      gradient: 'from-blue-600 to-violet-600'
    },
    {
      icon: Zap,
      title: 'Forward-Thinking',
      description: 'Pioneering the future of 3D production technology',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-violet-400 font-medium mb-4 block">
            Brand Essence
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">DIMESHIA</span> Philosophy
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where artificial intelligence meets creative production — building the next generation of 3D automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {essenceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{card.description}</p>

                  {/* Decorative element */}
                  <div className="mt-8 h-1 w-20 bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-blue-500 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold mb-12">
            Powered by <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Advanced Technology</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Neural Networks', icon: Binary },
              { label: '3D Rendering', icon: Box },
              { label: 'Cloud Pipeline', icon: Network },
              { label: 'Real-time Processing', icon: Zap }
            ].map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                >
                  <TechIcon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-300">{tech.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
