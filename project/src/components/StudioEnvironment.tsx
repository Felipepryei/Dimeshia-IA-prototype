import { Monitor, Grid3x3, Play, Settings } from 'lucide-react';

export default function StudioEnvironment() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-[200px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            Creative Environment
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Futuristic <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Studio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where creativity meets technology — a workspace designed for the future of 3D production
          </p>
        </div>

        {/* Main Studio Visualization */}
        <div className="relative mb-20">
          {/* Main screen mockup */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-gray-400 font-mono">DIMESHIA Studio v3.0</div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            {/* Workspace */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left sidebar - 3D viewport */}
              <div className="md:col-span-2 bg-black border border-gray-800 rounded-2xl p-6 aspect-video relative overflow-hidden group">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }} />

                {/* 3D object wireframe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative animate-float">
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Wireframe cube */}
                      <path d="M30 25 L70 25 L85 40 L85 75 L45 75 L30 60 Z"
                        stroke="url(#studioGradient)"
                        strokeWidth="1.5"
                        fill="rgba(59, 130, 246, 0.05)"
                        className="animate-pulse"
                      />
                      <path d="M70 25 L70 60"
                        stroke="url(#studioGradient)"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                      <path d="M30 25 L15 40 L15 75 L30 60"
                        stroke="url(#studioGradient)"
                        strokeWidth="1.5"
                        opacity="0.8"
                      />
                      <path d="M15 40 L85 40"
                        stroke="url(#studioGradient)"
                        strokeWidth="1"
                        opacity="0.4"
                        strokeDasharray="4 4"
                      />

                      {/* Vertices */}
                      <circle cx="30" cy="25" r="2" fill="#3B82F6" />
                      <circle cx="70" cy="25" r="2" fill="#3B82F6" />
                      <circle cx="85" cy="40" r="2" fill="#8B5CF6" />
                      <circle cx="85" cy="75" r="2" fill="#8B5CF6" />
                      <circle cx="45" cy="75" r="2" fill="#3B82F6" />
                      <circle cx="30" cy="60" r="2" fill="#3B82F6" />
                      <circle cx="15" cy="40" r="2" fill="#8B5CF6" />
                      <circle cx="15" cy="75" r="2" fill="#8B5CF6" />

                      <defs>
                        <linearGradient id="studioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Viewport controls */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-300 hover:bg-gray-700 transition-colors">
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1.5 bg-blue-600 border border-blue-500 rounded-lg text-xs text-white hover:bg-blue-500 transition-colors flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    Render
                  </button>
                </div>

                {/* Stats overlay */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-xs font-mono">
                  <div className="text-gray-400">Vertices: <span className="text-blue-400">2,847</span></div>
                  <div className="text-gray-400">FPS: <span className="text-green-400">60</span></div>
                  <div className="text-gray-400">GPU: <span className="text-violet-400">87%</span></div>
                </div>
              </div>

              {/* Right sidebar - AI Panel */}
              <div className="space-y-4">
                {/* AI Assistant */}
                <div className="bg-gradient-to-br from-blue-950/50 to-violet-950/50 border border-blue-900/50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold text-blue-300">AI Assistant</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    Processing automation pipeline...
                  </p>
                  <div className="space-y-2">
                    {[65, 92, 78].map((value, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Task {i + 1}</span>
                          <span className="text-blue-400">{value}%</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pipeline Status */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">Pipeline Status</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'Modeling', status: 'complete' },
                      { name: 'Texturing', status: 'processing' },
                      { name: 'Rendering', status: 'queued' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">{item.name}</span>
                        <span className={`px-2 py-0.5 rounded-full ${
                          item.status === 'complete' ? 'bg-green-900 text-green-300' :
                          item.status === 'processing' ? 'bg-blue-900 text-blue-300' :
                          'bg-gray-800 text-gray-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neural Network Visualization */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">Neural Activity</h4>
                  <div className="flex items-center justify-center h-20">
                    <svg width="100%" height="80" viewBox="0 0 200 80">
                      {/* Neural network nodes */}
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <g key={i}>
                          <line
                            x1={30 + i * 28}
                            y1={40 + Math.sin(i) * 15}
                            x2={58 + i * 28}
                            y2={40 + Math.sin(i + 1) * 15}
                            stroke="url(#neuralGradient)"
                            strokeWidth="1"
                            opacity="0.4"
                          />
                          <circle
                            cx={30 + i * 28}
                            cy={40 + Math.sin(i) * 15}
                            r="3"
                            fill="#3B82F6"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 200}ms` }}
                          />
                        </g>
                      ))}
                      <defs>
                        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-violet-500 rounded-2xl filter blur-[60px] opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-2xl filter blur-[60px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Environment Features */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Monitor, label: 'Multi-Display Setup', desc: '8K visualization' },
            { icon: Grid3x3, label: 'Real-time Preview', desc: 'GPU-accelerated' },
            { icon: Play, label: 'Automated Pipeline', desc: 'AI-orchestrated' },
            { icon: Settings, label: 'Smart Controls', desc: 'Adaptive interface' }
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group">
                <Icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-1 text-gray-200">{feature.label}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
