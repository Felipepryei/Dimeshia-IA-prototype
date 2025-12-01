import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Upload, Zap, CheckSquare, Download, Lightbulb } from 'lucide-react';

export default function AmaoSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  const features = [
    {
      icon: '⭕',
      title: 'Model Health Score',
      description: 'AI rates your model from 0–100 and highlights structural problems.'
    },
    {
      icon: '🔺',
      title: 'Ngon & Topology Detection',
      description: 'Detects ngons, bad geometry, dense areas, flipped normals, and mesh errors.'
    },
    {
      icon: '🧩',
      title: 'Polygon Optimization',
      description: 'Suggests optimized poly counts while preserving silhouette and animation readiness.'
    },
    {
      icon: '📦',
      title: 'Clean Pipeline Export',
      description: 'Auto-prepares the model for Blender, Maya, Unreal, Unity, and more.'
    }
  ];

  const workflowSteps = [
    {
      number: '1',
      icon: Upload,
      title: 'Upload Your Model',
      description: 'Drop any 3D file (OBJ, GLB, GLTF, FBX) into AMAO and let AI begin analysis instantly.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      number: '2',
      icon: Zap,
      title: 'AI Analysis',
      description: 'Real-time detection of topology issues, mesh errors, and optimization opportunities with detailed reports.',
      color: 'from-violet-600 to-violet-400'
    },
    {
      number: '3',
      icon: CheckSquare,
      title: 'Optimize',
      description: 'AI automatically optimizes polygons, cleans geometry, and prepares your model for production pipelines.',
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      number: '4',
      icon: Download,
      title: 'Download & Export',
      description: 'Get optimized model, analysis report, and recommendations ready for Blender, Maya, Unreal, and Unity.',
      color: 'from-emerald-600 to-emerald-400'
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full backdrop-blur-sm">
            <span className="text-sm uppercase tracking-widest text-blue-400 font-bold">🚀 New Product Launch</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block mb-2">AMAO</span>
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Automated Model Analysis & Optimization
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-semibold">
            Let AI instantly detect modeling issues, optimize topology, and prepare production-ready 3D assets
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            From concept to optimization in seconds. Real-time analysis, smart recommendations, and clean exports.
          </p>
          <button 
            onClick={() => window.location.href = '?demo=amao'}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 hover:from-blue-500 hover:via-violet-500 hover:to-cyan-500 text-white font-bold rounded-2xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-violet-500/50 text-lg inline-flex items-center gap-3 group"
          >
            Try AMAO Demo
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* How-It-Works Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How AMAO Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Complete 3D model optimization workflow in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connection line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-transparent" />
                  )}

                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 rounded-3xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-950/40 hover:to-gray-800/40">
                    {/* Step Number Circle */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-semibold">Ready for production</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline visual on mobile */}
          <div className="lg:hidden space-y-4 text-center text-gray-500">
            <p className="text-sm">Upload → Analyze → Optimize → Export</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA with Live Demo Preview */}
        <div className="bg-gradient-to-r from-blue-900/30 via-violet-900/30 to-cyan-900/30 border border-blue-800/50 rounded-3xl p-12 overflow-hidden">
          {/* AMAO Live Demo Preview Section */}
          <div className="mb-16">
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
              {/* Before/After Grid */}
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

              {/* Analysis Results Card */}
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

          {/* Waitlist Section */}
          <div className="border-t border-gray-700/50 pt-12">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Launch AMAO Beta <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">— Join the Waitlist</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-center">
              Be among the first to access AMAO's advanced model analysis and optimization capabilities. Early adopters get lifetime premium benefits.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Joined!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Join Waitlist
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
