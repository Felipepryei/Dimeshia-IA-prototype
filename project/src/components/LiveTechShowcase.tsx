import { useState, useEffect } from 'react';
import { ChevronLeft, Play, Pause, RotateCcw, Download } from 'lucide-react';

export default function LiveTechShowcase() {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'running' | 'complete'>('idle');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [stepProgress, setStepProgress] = useState(0);

  const allSteps = [
    {
      category: 'Model Intake & Validation',
      tasks: [
        { name: 'Analyzing Topology', duration: 8 },
        { name: 'Checking Naming Conventions', duration: 6 },
        { name: 'Normalizing Scale', duration: 5 },
      ],
    },
    {
      category: 'Automatic Mesh Cleanup',
      tasks: [
        { name: 'Removing N-gons', duration: 10 },
        { name: 'Rebuilding Geometry', duration: 12 },
        { name: 'Auto-Retopology', duration: 15 },
      ],
    },
    {
      category: 'UV & Texture Automation',
      tasks: [
        { name: 'Auto UV Unwrap', duration: 12 },
        { name: 'Generating UDIM Layout', duration: 8 },
        { name: 'Packing UVs', duration: 10 },
      ],
    },
    {
      category: 'Pipeline Integration',
      tasks: [
        { name: 'Generating Folder Structure', duration: 6 },
        { name: 'Auto File Renaming', duration: 8 },
        { name: 'Format Conversion (FBX→GLB→USDZ)', duration: 15 },
        { name: 'Checking Textures', duration: 7 },
      ],
    },
  ];

  const flatSteps = allSteps.flatMap(cat =>
    cat.tasks.map(task => ({ ...task, category: cat.category }))
  );

  const totalSteps = flatSteps.length;
  const totalDuration = flatSteps.reduce((sum, step) => sum + step.duration, 0);

  useEffect(() => {
    if (!isRunning || phase !== 'running') return;

    const interval = setInterval(() => {
      setStepProgress(prev => {
        const nextProgress = prev + 0.5;
        const currentStepDuration = flatSteps[currentStepIndex]?.duration || 1;

        if (nextProgress >= currentStepDuration * 1000 / 30) {
          if (currentStepIndex < flatSteps.length - 1) {
            setCompletedSteps(prev => [...prev, currentStepIndex]);
            setCurrentStepIndex(prev => prev + 1);
            setStepProgress(0);
          } else {
            setCompletedSteps(prev => [...prev, currentStepIndex]);
            setIsRunning(false);
            setPhase('complete');
            clearInterval(interval);
          }
        } else {
          setStepProgress(nextProgress);
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isRunning, phase, currentStepIndex, flatSteps]);

  const handleStart = () => {
    setIsRunning(true);
    setPhase('running');
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setStepProgress(0);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setPhase('idle');
    setCurrentStepIndex(-1);
    setCompletedSteps([]);
    setStepProgress(0);
  };

  const overallProgress = (completedSteps.length / totalSteps) * 100;
  const timeSaved = Math.round(overallProgress * 0.63);

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-auto">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 40s linear infinite'
          }} />
        </div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col p-4 md:p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full mb-8">
          <button
            onClick={() => window.history.back()}
            className="p-2 hover:bg-gray-800/50 rounded-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            DIMESHIA Workflow Automation
          </h1>
          <p className="text-gray-400 mt-2">AI-Powered 3D Production Pipeline</p>
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-6 flex-1">
          {/* Left: Flowchart View */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 overflow-hidden">
                <h2 className="text-xl font-bold text-white mb-6">Pipeline Flowchart</h2>

                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {allSteps.map((category, catIdx) => (
                    <div key={catIdx} className="space-y-2">
                      <div className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">
                        {category.category}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.tasks.map((task, taskIdx) => {
                          const globalIdx = allSteps
                            .slice(0, catIdx)
                            .reduce((sum, c) => sum + c.tasks.length, 0) + taskIdx;

                          const isCompleted = completedSteps.includes(globalIdx);
                          const isActive = currentStepIndex === globalIdx;
                          const isPending = currentStepIndex > globalIdx;

                          return (
                            <div
                              key={taskIdx}
                              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                                isCompleted
                                  ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-400'
                                  : isActive
                                  ? 'bg-blue-500/30 border border-blue-400 text-blue-300 shadow-lg shadow-blue-500/50'
                                  : isPending
                                  ? 'bg-gray-700/50 border border-gray-600 text-gray-300'
                                  : 'bg-gray-800/50 border border-gray-700 text-gray-400'
                              }`}
                            >
                              {isCompleted && <span className="mr-2">✓</span>}
                              {task.name}
                              {isActive && <div className="absolute inset-0 animate-pulse bg-blue-400/20" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  {completedSteps.length}/{totalSteps} steps completed
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-300">Overall Pipeline Progress</p>
                  <p className="text-2xl font-bold text-cyan-400">{Math.round(overallProgress)}%</p>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all duration-300"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Current Step Details */}
            {currentStepIndex >= 0 && currentStepIndex < flatSteps.length && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur opacity-50" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/50 rounded-2xl p-6">
                  <p className="text-xs uppercase text-blue-400 font-bold tracking-wider mb-2">Currently Processing</p>
                  <p className="text-lg font-bold text-white mb-4">
                    {flatSteps[currentStepIndex].name}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    {flatSteps[currentStepIndex].category}
                  </p>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100"
                      style={{ width: `${(stepProgress / (flatSteps[currentStepIndex].duration * 1000 / 30)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-4">
            {/* Stats */}
            {phase === 'idle' && (
              <>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/50 rounded-2xl p-6 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Total Tasks</p>
                    <p className="text-4xl font-bold text-blue-400">{totalSteps}</p>
                    <p className="text-xs text-gray-500 mt-2">Automated Pipeline Steps</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/50 rounded-2xl p-6 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Est. Time Saved</p>
                    <p className="text-4xl font-bold text-purple-400">63%</p>
                    <p className="text-xs text-gray-500 mt-2">vs Manual Process</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-6 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Est. Duration</p>
                    <p className="text-3xl font-bold text-cyan-400">{Math.round(totalDuration / 60)}m</p>
                    <p className="text-xs text-gray-500 mt-2">{totalDuration % 60}s remaining</p>
                  </div>
                </div>
              </>
            )}

            {phase === 'running' && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur opacity-50" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-yellow-500/50 rounded-2xl p-6 text-center">
                  <p className="text-xs text-yellow-400 uppercase font-bold tracking-wider mb-3">Pipeline Running</p>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <p className="text-sm text-gray-300 font-semibold">
                    Step {currentStepIndex + 1} of {totalSteps}
                  </p>
                </div>
              </div>
            )}

            {phase === 'complete' && (
              <>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl blur opacity-50" />
                  <div className="relative bg-black/40 backdrop-blur-xl border border-emerald-500/50 rounded-2xl p-6 text-center">
                    <p className="text-4xl mb-3">✨</p>
                    <p className="text-sm font-bold text-emerald-400 mb-2">Pipeline Complete!</p>
                    <p className="text-xs text-gray-400">All {totalSteps} tasks automated</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl blur opacity-50" />
                  <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-6 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Workflow Acceleration</p>
                    <p className="text-4xl font-bold text-cyan-400">{timeSaved}%</p>
                    <p className="text-xs text-gray-500 mt-2">Time saved vs manual</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-2xl blur opacity-50" />
                  <div className="relative bg-black/40 backdrop-blur-xl border border-violet-500/50 rounded-2xl p-6 text-center">
                    <p className="text-4xl font-bold text-violet-400 mb-2">{totalSteps}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tasks Automated</p>
                  </div>
                </div>
              </>
            )}

            {/* Control Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-700/50">
              {phase === 'idle' && (
                <button
                  onClick={handleStart}
                  className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Start Pipeline
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </button>
              )}

              {phase === 'running' && (
                <>
                  <button
                    onClick={handlePause}
                    className="w-full group relative px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-bold text-white overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Pause className="w-5 h-5" />
                    Pause Pipeline
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full px-6 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </>
              )}

              {phase === 'complete' && (
                <>
                  <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl font-bold text-white overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Report
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full px-6 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Run Again
                  </button>
                </>
              )}

              <button
                onClick={() => window.history.back()}
                className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all"
              >
                Back Home
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </div>
  );
}
