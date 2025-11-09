import { useState, useEffect } from 'react';
import { Play, Pause, RotateCw, Zap, Cpu, Layers } from 'lucide-react';

export default function StudioDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 1,
      name: '3D Model Input',
      desc: 'AI analyzes mesh topology',
      color: 'from-blue-500 to-cyan-500',
      icon: Layers,
      duration: 2000
    },
    {
      id: 2,
      name: 'Pipeline Processing',
      desc: 'Automated texture & lighting',
      color: 'from-violet-500 to-purple-500',
      icon: Cpu,
      duration: 2500
    },
    {
      id: 3,
      name: 'Render Optimization',
      desc: 'GPU acceleration & AI upscaling',
      color: 'from-cyan-500 to-blue-600',
      icon: Zap,
      duration: 2000
    },
    {
      id: 4,
      name: 'Output Delivery',
      desc: 'Production-ready assets',
      color: 'from-green-500 to-emerald-600',
      icon: Layers,
      duration: 1500
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((step) => (step + 1) % workflowSteps.length);
          return 0;
        }
        return prev + 1;
      });
    }, workflowSteps[activeStep].duration / 100);

    return () => clearInterval(interval);
  }, [isPlaying, activeStep]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setActiveStep(0);
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-violet-400 font-medium mb-4 block animate-pulse">
            Live Demonstration
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Futuristic <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Studio Workflow</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch DIMESHIA's AI automation transform 3D production in real-time
          </p>
        </div>

        {/* Main Video/Demo Container */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-700 rounded-3xl p-8 shadow-2xl mb-16">
          {/* Control Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img src="/logo de dimeshia IA.jpg" alt="DIMESHIA" className="w-10 h-10 object-contain" />
              <div>
                <div className="text-sm font-semibold text-gray-200">DIMESHIA Studio</div>
                <div className="text-xs text-gray-500">AI-Powered 3D Pipeline</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayPause}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  isPlaying
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
                } shadow-lg hover:shadow-xl hover:scale-105`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Play Demo
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all hover:scale-105"
                title="Reset"
              >
                <RotateCw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="relative bg-black border border-gray-800 rounded-2xl overflow-hidden" style={{ height: '500px' }}>
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: isPlaying ? 'gridMove 20s linear infinite' : 'none'
            }} />

            {/* Central 3D Object Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`relative ${isPlaying ? 'animate-float' : ''}`}>
                {/* Main Logo Display */}
                <div className="relative">
                  <img
                    src="/logo de dimeshia IA.jpg"
                    alt="3D Object"
                    className={`w-64 h-64 object-contain transition-all duration-1000 ${
                      isPlaying ? 'scale-110' : 'scale-100'
                    }`}
                    style={{
                      filter: isPlaying
                        ? 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) brightness(1.2)'
                        : 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
                    }}
                  />

                  {/* Orbiting Particles */}
                  {isPlaying && (
                    <>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
                          style={{
                            top: '50%',
                            left: '50%',
                            animation: `orbit ${3 + i}s linear infinite`,
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.6
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Processing Rings */}
                {isPlaying && (
                  <>
                    <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-ping opacity-20" style={{ width: '350px', height: '350px', top: '-43px', left: '-43px' }} />
                    <div className="absolute inset-0 border-2 border-violet-500 rounded-full animate-ping opacity-20" style={{ width: '350px', height: '350px', top: '-43px', left: '-43px', animationDelay: '0.5s' }} />
                  </>
                )}
              </div>
            </div>

            {/* Workflow Steps Overlay */}
            <div className="absolute top-6 left-6 right-6 flex justify-between">
              {workflowSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <div
                    key={step.id}
                    className={`flex-1 mx-2 transition-all duration-500 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <div className={`p-4 rounded-xl backdrop-blur-sm border-2 transition-all duration-500 ${
                      isActive
                        ? `border-blue-400 bg-gradient-to-br ${step.color} bg-opacity-20`
                        : isCompleted
                        ? 'border-green-500 bg-green-900/20'
                        : 'border-gray-700 bg-gray-900/40'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <StepIcon className={`w-5 h-5 ${
                          isActive ? 'text-white animate-pulse' : isCompleted ? 'text-green-400' : 'text-gray-500'
                        }`} />
                        <span className={`text-xs font-semibold ${
                          isActive ? 'text-white' : isCompleted ? 'text-green-300' : 'text-gray-400'
                        }`}>
                          Step {index + 1}
                        </span>
                      </div>
                      <div className={`text-sm font-medium mb-1 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.name}
                      </div>
                      <div className="text-xs text-gray-500">{step.desc}</div>

                      {/* Progress Bar */}
                      {isActive && isPlaying && (
                        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Panel */}
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <div className="grid grid-cols-3 gap-6 text-xs">
                <div>
                  <div className="text-gray-400 mb-1">Processing</div>
                  <div className="text-blue-400 font-mono font-bold">
                    {isPlaying ? `${Math.round(progress)}%` : '0%'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">GPU Usage</div>
                  <div className="text-violet-400 font-mono font-bold">
                    {isPlaying ? '87%' : '12%'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">FPS</div>
                  <div className="text-green-400 font-mono font-bold">
                    {isPlaying ? '60' : '0'}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Status Indicator */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
              <span className="text-xs text-gray-300">
                {isPlaying ? 'AI Processing Active' : 'System Idle'}
              </span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Layers,
              title: 'Automated Pipeline',
              desc: 'End-to-end 3D production automation',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Cpu,
              title: 'AI Intelligence',
              desc: 'Neural networks optimize every step',
              gradient: 'from-violet-500 to-purple-500'
            },
            {
              icon: Zap,
              title: 'Real-Time Processing',
              desc: 'GPU-accelerated rendering at 60 FPS',
              gradient: 'from-cyan-500 to-blue-600'
            },
          ].map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 group hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <FeatureIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-200">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
