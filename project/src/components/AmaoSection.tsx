import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

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

        {/* Simulation Preview Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">See AMAO in Action</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Upload a 3D model and let AMAO automatically analyze topology health, UVs, ngons, and optimization opportunities. See an instant report powered by AI.
            </p>
          </div>

          {/* Simulation UI Mockup */}
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Upload Box */}
              <div className="bg-gray-900/50 border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all cursor-pointer">
                <div className="text-4xl mb-4">📁</div>
                <h4 className="font-bold text-gray-200 mb-2">Upload Model</h4>
                <p className="text-sm text-gray-400">Drag & drop or click to upload .fbx / .obj</p>
              </div>

              {/* Processing Box */}
              <div className="bg-gradient-to-br from-blue-900/30 to-violet-900/30 border border-blue-800/50 rounded-2xl p-8 text-center">
                <div className="inline-block mb-4">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Analyzing Model…</h4>
                <p className="text-sm text-gray-400">AI scanning topology & geometry</p>
              </div>

              {/* Results Box */}
              <div className="bg-gray-900/50 border border-green-800/50 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-bold text-gray-200 mb-2">Results Ready</h4>
                <p className="text-sm text-gray-400">Detailed analysis report generated</p>
              </div>
            </div>

            {/* Results Dashboard */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Health Score</span>
                  <span className="text-2xl font-bold text-green-400">82</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Good topology structure</p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Ngon Count</span>
                  <span className="text-2xl font-bold text-yellow-400">12</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-full w-3/5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Moderate issues detected</p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase">UV Coverage</span>
                  <span className="text-2xl font-bold text-cyan-400">94%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Excellent coverage</p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Poly Reduction</span>
                  <span className="text-2xl font-bold text-violet-400">48%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Optimization ready</p>
              </div>
            </div>

            {/* Suggested Optimization Steps */}
            <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-800/30 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <span>💡</span> Suggested Optimization Steps
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Remove detected ngons and rebuild clean geometry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Merge duplicate vertices and clean topology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Reduce poly count in low-detail areas by 48%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Export optimized model for Blender/Maya/Unreal</span>
                </li>
              </ul>
            </div>
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
