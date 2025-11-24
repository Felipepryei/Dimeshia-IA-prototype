import { TrendingDown, Zap, Award, Clock, Layers, BarChart3 } from 'lucide-react';

export default function ClientBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: '80% Faster Production',
      description: 'Automate your entire 3D workflow from input to delivery',
      metric: 'Save 160+ hours/month',
      color: 'from-blue-500 to-cyan-500',
      stat: '80%'
    },
    {
      icon: TrendingDown,
      title: '70% Cost Reduction',
      description: 'Eliminate repetitive manual tasks and cut production costs',
      metric: 'Cut expenses dramatically',
      color: 'from-violet-500 to-purple-500',
      stat: '70%'
    },
    {
      icon: Award,
      title: '98% Quality Maintained',
      description: 'AI ensures consistent, production-ready output every time',
      metric: 'Enterprise-grade results',
      color: 'from-green-500 to-emerald-500',
      stat: '98%'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'GPU-accelerated rendering at 60 FPS with instant feedback',
      metric: 'No waiting, no delays',
      color: 'from-orange-500 to-red-500',
      stat: '60 FPS'
    },
    {
      icon: Layers,
      title: 'Unlimited Scalability',
      description: 'Process hundreds of 3D models simultaneously without bottlenecks',
      metric: 'Handle any project size',
      color: 'from-pink-500 to-rose-500',
      stat: '∞'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track metrics, optimize workflows, and measure ROI in real-time',
      metric: 'Data-driven decisions',
      color: 'from-indigo-500 to-blue-500',
      stat: '360°'
    },
  ];

  const useCases = [
    {
      icon: '🎮',
      title: 'Gaming Studios',
      description: 'Rapid asset production for game environments, characters, and props'
    },
    {
      icon: '🎬',
      title: 'VFX & Animation',
      description: 'Accelerate rendering, compositing, and post-production workflows'
    },
    {
      icon: '🏭',
      title: 'Product Design',
      description: 'Optimize CAD models for visualization and marketing materials'
    },
    {
      icon: '🏗️',
      title: 'Architecture',
      description: 'Generate photorealistic renderings for presentations and proposals'
    },
    {
      icon: '🛍️',
      title: 'E-Commerce',
      description: 'Batch process product images with AI-powered optimization'
    },
    {
      icon: '🎨',
      title: 'Creative Agencies',
      description: 'Deliver high-quality 3D content faster to clients'
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block animate-pulse">
            Transform Your Business
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">DIMESHIA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI-powered 3D pipeline delivers measurable results for studios and agencies worldwide
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                <div className={`relative z-10 w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-100">{benefit.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{benefit.description}</p>

                <div className="flex items-end justify-between">
                  <span className="text-xs text-gray-500">{benefit.metric}</span>
                  <span className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Who Benefits from DIMESHIA</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-900/80 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-100">{useCase.title}</h4>
                <p className="text-sm text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="relative bg-gradient-to-r from-blue-900/20 via-violet-900/20 to-cyan-900/20 border border-blue-800/30 rounded-3xl p-8 md:p-12">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 to-violet-600/5" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">ROI Breakdown</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  4-6 weeks
                </div>
                <p className="text-sm text-gray-400">Payback Period</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  300%
                </div>
                <p className="text-sm text-gray-400">Average ROI (Year 1)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-400">Production Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  10x
                </div>
                <p className="text-sm text-gray-400">Output Throughput</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Ready to transform your 3D production pipeline? See our live demo above or contact us to schedule a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-gray-700 text-white rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-500/5 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
