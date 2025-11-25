import { useState, useEffect } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo Mark - Official DIMESHIA Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            {/* Animated Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-full filter blur-2xl opacity-40 animate-spin-slow group-hover:opacity-60 transition-opacity" style={{ width: '220px', height: '220px', top: '-20px', left: '-20px' }} />

            {/* Logo Container */}
            <div className="relative w-[180px] h-[180px] bg-black rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden border border-gray-800 group-hover:border-blue-500 transition-all duration-500">
              <img
                src="/logo de dimeshia IA.jpg"
                alt="DIMESHIA Logo"
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-8xl md:text-9xl font-bold mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent">
            DIMESHIA
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide">
          Next-Generation AI Automation Agency
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-12 font-light">
          Specialized in 3D Production Pipelines
        </p>

        {/* Brand Values */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Intelligent', 'Creative', 'Structured', 'Forward-Thinking'].map((value, i) => (
            <span
              key={value}
              className="px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {value}
            </span>
          ))}
        </div>

        {/* Professional CTA Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            Revolutionize your 3D production pipeline with AI-powered automation. Reduce processing time by up to 90% while maintaining visual quality.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact') || document.querySelector('footer');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Transformation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => window.location.href = '?demo=true'}
            className="group relative px-10 py-5 bg-gray-900/50 border-2 border-gray-700 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-blue-500 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Watch Live Demo
            </span>
          </button>
        </div>

        {/* Secondary CTA Text */}
        <p className="text-sm text-gray-500">
          Join leading 3D studios optimizing their workflows
        </p>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
