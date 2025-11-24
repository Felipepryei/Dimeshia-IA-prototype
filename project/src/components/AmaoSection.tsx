import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import AmaoDemo from './AmaoDemo';

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
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">New Product</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            AMAO <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Automated Model Analysis & Optimization
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Let AI instantly detect modeling issues, optimize topology, and clean your 3D files.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Try the Simulation
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
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

        {/* Interactive AMAO Demo Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">See AMAO in Action</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch AMAO analyze your 3D model step-by-step, detecting issues and recommending optimizations in real-time.
            </p>
          </div>

          {/* Live Demo Component */}
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-800 rounded-3xl p-8 md:p-12">
            <AmaoDemo />
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-blue-900/30 via-violet-900/30 to-cyan-900/30 border border-blue-800/50 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">
            Launch AMAO Beta <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">— Join the Waitlist</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
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

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
