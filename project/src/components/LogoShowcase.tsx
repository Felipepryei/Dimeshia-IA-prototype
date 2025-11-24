export default function LogoShowcase() {
  const pillars = [
    {
      icon: '🤖',
      title: 'AI-Powered',
      description: 'Advanced machine learning for intelligent 3D optimization and automation'
    },
    {
      icon: '⚙️',
      title: 'Production Pipelines',
      description: 'Streamlined workflows from concept to final delivery in minutes'
    },
    {
      icon: '🎨',
      title: 'Creative Excellence',
      description: 'Maintaining artistic integrity while maximizing technical efficiency'
    },
    {
      icon: '🚀',
      title: 'Next-Generation',
      description: 'The future of 3D production is here, today'
    },
  ];

  return (
    <section id="about-dimeshia" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-10 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600 rounded-full filter blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main hero content */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            About Our Agency
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Welcome to</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent text-6xl md:text-7xl font-black">
              DIMESHIA
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            The next-generation AI automation agency specializing in 3D production pipelines
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We transform how creative studios produce 3D assets by combining artificial intelligence with artistic excellence
          </p>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-32">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 hover:border-blue-700/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* What We Do section */}
        <div className="bg-gradient-to-br from-blue-950/40 to-violet-950/40 border border-blue-800/30 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-5" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500 rounded-full filter blur-[120px] opacity-5" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">What We Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">🎯 AI Lab</h4>
                <p className="text-gray-300">
                  Cutting-edge machine learning models that analyze, optimize, and enhance 3D assets with precision and speed
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">🎨 Creative Studio</h4>
                <p className="text-gray-300">
                  Expert artists and technical specialists who ensure every optimization maintains artistic vision and quality
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-violet-300 mb-3">📚 Training & Consulting</h4>
                <p className="text-gray-300">
                  Partnership programs and guidance to help studios integrate AI-powered production into their existing workflows
                </p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-blue-800/30">
              <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                DIMESHIA is dedicated to revolutionizing 3D production through intelligent automation. We believe that AI and human creativity are not competitors—they're collaborators. By automating repetitive technical tasks and optimization workflows, we free artists to focus on what matters most: bringing ideas to life with uncompromising quality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Our tools reduce production time by up to 95% while maintaining or exceeding quality standards. We're not just making 3D production faster—we're making it smarter, more sustainable, and more accessible to studios of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
