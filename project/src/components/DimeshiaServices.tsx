import { Brain, Palette, BookOpen } from 'lucide-react';

export default function DimeshiaServices() {
  const services = [
    {
      icon: Brain,
      title: 'AI Automation Lab',
      description: 'Develops tools and models for 3D optimization.',
      features: [
        'Advanced machine learning models for geometry optimization',
        'Real-time polygon reduction algorithms',
        'Texture and material intelligent processing',
        'Continuous AI model improvement & updates',
        'Custom optimization profiles for different industries'
      ],
      color: 'from-blue-600 to-cyan-600',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Palette,
      title: 'Creative Studio',
      description: 'Works on client visualization projects.',
      features: [
        'High-fidelity 3D asset production',
        'Real-time visualization for clients',
        'Animation & motion capture services',
        'VR/AR experience development',
        'Custom visualization pipelines'
      ],
      color: 'from-violet-600 to-pink-600',
      accentColor: 'text-violet-400',
      borderColor: 'border-violet-500/30'
    },
    {
      icon: BookOpen,
      title: 'Training & Consulting',
      description: 'Helps companies integrate AI into 3D pipelines.',
      features: [
        'On-site training for 3D teams',
        'Pipeline integration consulting',
        'Best practices documentation',
        'Custom workflow optimization',
        '24/7 technical support & guidance'
      ],
      color: 'from-green-600 to-cyan-600',
      accentColor: 'text-green-400',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            DIMESHIA Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three core pillars powering next-generation AI automation for 3D production
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`relative group bg-gradient-to-br ${service.color} p-0.5 rounded-2xl overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity" />
                
                <div className="relative bg-gray-900 rounded-2xl p-8 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gray-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700/50 transition-colors">
                    <Icon className={`w-8 h-8 ${service.accentColor}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${service.accentColor.replace('text-', 'bg-')}`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Statement */}
        <div className="bg-gradient-to-r from-blue-900/20 via-violet-900/20 to-cyan-900/20 border border-blue-800/30 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold text-blue-400 mb-3">Integrated Ecosystem</h4>
              <p className="text-gray-400 text-sm">
                Our three departments work seamlessly together to deliver cutting-edge 3D optimization solutions backed by continuous innovation and real-world expertise.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-violet-400 mb-3">End-to-End Solutions</h4>
              <p className="text-gray-400 text-sm">
                From AI model development to client implementation to team training, DIMESHIA provides complete support for transforming 3D production pipelines.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-3">Industry Leadership</h4>
              <p className="text-gray-400 text-sm">
                Combining research-driven automation, creative excellence, and expert consulting to set new standards in AI-powered 3D production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
