import { Check, Zap } from 'lucide-react';

export default function PricingSection() {
  const pricingTiers = [
    {
      name: '3D Artist',
      icon: '🎨',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual 3D artists and freelancers',
      color: 'blue',
      features: [
        'Up to 10 model optimizations/month',
        'Real-time AI analysis & topology fixing',
        'Basic model validation & diagnostics',
        'Automatic UV unwrapping',
        'Standard support (email)',
        'File formats: OBJ, GLB, FBX, GLTF',
        'Max file size: 500MB',
        'Basic performance metrics'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Freelancer',
      icon: '💼',
      price: '$79',
      period: '/month',
      description: 'Ideal for freelancers handling multiple client projects',
      color: 'purple',
      features: [
        'Unlimited model optimizations',
        'Advanced AI optimization & mesh cleanup',
        'Comprehensive topology analysis',
        'Automatic UV packing & optimization',
        'Priority support (chat & email)',
        'All file formats supported',
        'Max file size: 2GB',
        'Advanced performance metrics',
        'Batch processing (up to 5 models)',
        'Render time predictions'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Studio',
      icon: '🏗️',
      price: '$199',
      period: '/month',
      description: 'For small to medium-sized 3D studios',
      color: 'cyan',
      features: [
        'Unlimited everything',
        'Enterprise-grade AI optimization',
        'Team collaboration (up to 10 users)',
        'Advanced topology reconstruction',
        'Intelligent UV island detection',
        'Dedicated support (phone & email)',
        'Max file size: 5GB',
        'Advanced analytics dashboard',
        'Batch processing (unlimited)',
        'Custom optimization profiles',
        'API access',
        'Model versioning & history'
      ],
      cta: 'Contact Sales',
      highlighted: false
    },
    {
      name: 'Creative Agency',
      icon: '🚀',
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise solutions for large creative agencies',
      color: 'violet',
      features: [
        'Everything in Studio, plus:',
        'Unlimited team members',
        'White-label options available',
        'Custom integrations',
        'Advanced security & compliance',
        'Dedicated account manager',
        '24/7 priority support',
        'SLA guarantees',
        'Advanced rendering pipelines',
        'Multi-studio management',
        'Custom reporting & analytics',
        'On-premise deployment option'
      ],
      cta: 'Schedule Demo',
      highlighted: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: { border: 'border-blue-700/50', bg: 'from-blue-900/20 to-blue-950/20', accent: 'text-blue-400', button: 'bg-blue-600 hover:bg-blue-700' },
      purple: { border: 'border-purple-700/50', bg: 'from-purple-900/20 to-purple-950/20', accent: 'text-purple-400', button: 'bg-purple-600 hover:bg-purple-700' },
      cyan: { border: 'border-cyan-700/50', bg: 'from-cyan-900/20 to-cyan-950/20', accent: 'text-cyan-400', button: 'bg-cyan-600 hover:bg-cyan-700' },
      violet: { border: 'border-violet-700/50', bg: 'from-violet-900/20 to-violet-950/20', accent: 'text-violet-400', button: 'bg-violet-600 hover:bg-violet-700' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/40 border border-blue-700/30 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Flexible Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Plans for <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Every Creator</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Scale from individual artist to enterprise studio. Pay for what you use, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => {
            const colors = getColorClasses(tier.color);
            return (
              <div
                key={index}
                className={`relative group ${tier.highlighted ? 'lg:scale-105' : ''}`}
              >
                {/* Glow effect for highlighted tier */}
                {tier.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                )}

                <div className={`relative h-full backdrop-blur-xl bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8 transition-all duration-300 hover:border-opacity-100 flex flex-col`}>
                  {/* Highlighted badge */}
                  {tier.highlighted && (
                    <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/50">
                      <Zap className="w-3 h-3 text-purple-400" />
                      <span className="text-xs font-bold text-purple-300">MOST POPULAR</span>
                    </div>
                  )}

                  {/* Tier icon and name */}
                  <div className="mb-4">
                    <div className="text-4xl mb-3">{tier.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-bold ${colors.accent}`}>{tier.price}</span>
                      <span className="text-gray-400 text-sm">{tier.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.accent}`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${colors.button} text-white hover:shadow-lg hover:shadow-current/50 active:scale-95`}>
                    {tier.cta}
                  </button>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color === 'blue' ? 'from-blue-500' : tier.color === 'purple' ? 'from-purple-500' : tier.color === 'cyan' ? 'from-cyan-500' : 'from-violet-500'} to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="bg-gradient-to-r from-blue-950/20 to-purple-950/20 border border-blue-700/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Money-Back Guarantee</h4>
              <p className="text-gray-400">30-day risk-free trial on all plans. No credit card required to start.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Pay As You Go</h4>
              <p className="text-gray-400">Unused credits rollover to next month. Cancel anytime with no penalties.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Enterprise Custom</h4>
              <p className="text-gray-400">Need special features? Contact our team for custom solutions and pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
