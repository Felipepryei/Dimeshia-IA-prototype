import { useState, useEffect, Suspense } from 'react';
import { ChevronLeft, Play, Pause, RotateCcw, Download } from 'lucide-react';
import RealisticModel3D from './RealisticModel3D';

export default function LiveTechShowcase() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sectionProgress, setSectionProgress] = useState(0);

  const sections = [
    { id: 'scan', name: 'Model Scan & Validation', duration: 8 },
    { id: 'cleanup', name: 'Mesh Cleanup', duration: 10 },
    { id: 'uv', name: 'UV Automation', duration: 8 },
    { id: 'export', name: 'Pipeline Integration', duration: 7 },
    { id: 'render', name: 'Render Prep', duration: 6 },
    { id: 'summary', name: 'Summary Report', duration: 2 },
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSectionProgress(prev => {
        const nextProgress = prev + 1;
        const currentDuration = sections[currentSection].duration * 100;

        if (nextProgress >= currentDuration) {
          if (currentSection < sections.length - 1) {
            setCurrentSection(prev => prev + 1);
            setSectionProgress(0);
          } else {
            setIsRunning(false);
          }
        }
        return nextProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning, currentSection, sections]);

  const handleStart = () => {
    setIsRunning(true);
    setCurrentSection(0);
    setSectionProgress(0);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentSection(0);
    setSectionProgress(0);
  };

  const renderSection = () => {
    const progress = (sectionProgress / (sections[currentSection].duration * 100)) * 100;

    switch (sections[currentSection].id) {
      case 'scan':
        return <ScanValidation progress={progress} />;
      case 'cleanup':
        return <MeshCleanup progress={progress} />;
      case 'uv':
        return <UVAutomation progress={progress} />;
      case 'export':
        return <PipelineIntegration progress={progress} />;
      case 'render':
        return <RenderPrep progress={progress} />;
      case 'summary':
        return <SummaryReport />;
      default:
        return null;
    }
  };

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
          <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-800/50 rounded-lg transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            DIMESHIA AI Pipeline
          </h1>
          <p className="text-gray-400 mt-2">Real-time 3D Workflow Automation Engine</p>
        </div>

        {/* Main Visualization */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6">
          {/* Main Content Area */}
          <div className="relative group flex-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur opacity-50" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full overflow-hidden">
              {renderSection()}
            </div>
          </div>

          {/* Progress Bar & Controls */}
          <div className="space-y-4">
            {/* Section Progress */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-300">
                    {sections[currentSection].name}
                  </p>
                  <p className="text-lg font-bold text-cyan-400">{Math.round(sectionProgress / (sections[currentSection].duration * 100) * 100)}%</p>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all duration-100"
                    style={{ width: `${sectionProgress / (sections[currentSection].duration * 100) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Section Timeline */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl blur opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/50 rounded-2xl p-4">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {sections.map((section, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-2 rounded-lg text-xs font-bold text-center transition-all ${
                        idx === currentSection
                          ? 'bg-blue-500/50 border border-blue-400 text-blue-300 shadow-lg shadow-blue-500/50'
                          : idx < currentSection
                          ? 'bg-emerald-500/30 border border-emerald-500 text-emerald-300'
                          : 'bg-gray-800/50 border border-gray-700 text-gray-400'
                      }`}
                    >
                      {section.name.split(' ')[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              {!isRunning ? (
                <button
                  onClick={handleStart}
                  className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Start AI Pipeline
                </button>
              ) : (
                <button
                  onClick={() => setIsRunning(false)}
                  className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-bold text-white overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Pause className="w-5 h-5" />
                  Pause
                </button>
              )}
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:bg-gray-900 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Report
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
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(180deg); }
        }
        .animate-scan { animation: scanLine 2s infinite; }
        .animate-pulse-glow { animation: pulse-glow 1.5s infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

function ScanValidation({ progress }: { progress: number }) {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* Realistic 3D Model Viewport */}
      <div className="flex-1 relative">
        <Suspense fallback={
          <div className="w-full h-full bg-gray-950 border border-gray-800 rounded-2xl flex items-center justify-center">
            <div className="text-gray-500">Loading 3D Model...</div>
          </div>
        }>
          <RealisticModel3D />
        </Suspense>

        {/* Scan lines overlay */}
        <div className="absolute inset-0 opacity-20 rounded-xl pointer-events-none">
          <div className="absolute inset-0 animate-scan" style={{ background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.3), transparent)', height: '3px' }} />
        </div>

        {/* HUD Overlays */}
        <div className="absolute top-4 right-4 text-xs font-mono space-y-1 text-blue-400 bg-black/70 p-3 rounded border border-blue-500/50 backdrop-blur-sm">
          <div>SCAN: {Math.round(progress)}%</div>
          <div>POLY: 14,247</div>
          <div>GPU: 87%</div>
        </div>
      </div>

      {/* Diagnostic Checks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: 'Topology Analysis', p: progress },
          { name: 'Ngon Detection', p: Math.max(0, progress - 20) },
          { name: 'Scale Check', p: Math.max(0, progress - 40) },
          { name: 'Naming Validation', p: Math.max(0, progress - 60) },
          { name: 'UVs Scan', p: Math.max(0, progress - 80) },
        ].map((check, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-300 font-semibold">{check.name}</span>
              <span className={`text-xs font-bold ${check.p >= 100 ? 'text-green-400' : 'text-blue-400'}`}>
                {check.p >= 100 ? '✓' : `${Math.round(check.p)}%`}
              </span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  check.p >= 100
                    ? 'bg-green-500'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                }`}
                style={{ width: `${Math.min(check.p, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeshCleanup({ progress }: { progress: number }) {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6 flex-1">
        {/* Before - With N-gons visualization */}
        <div className="bg-gray-950 border border-red-800/50 rounded-2xl p-6 flex flex-col">
          <h3 className="text-red-400 font-bold text-sm mb-4">BEFORE - With N-gons</h3>
          <div className="flex-1 relative">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>}>
              <RealisticModel3D showNgons={true} />
            </Suspense>
          </div>
          <div className="text-xs text-red-400 text-center mt-2">N-gons: 247 | Topology Issues: 42</div>
        </div>

        {/* After - Clean model */}
        <div className="bg-gray-950 border border-green-800/50 rounded-2xl p-6 flex flex-col">
          <h3 className="text-green-400 font-bold text-sm mb-4">AFTER - Cleaned</h3>
          <div className="flex-1 relative">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>}>
              <RealisticModel3D showNgons={false} />
            </Suspense>
          </div>
          <div className="text-xs text-green-400 text-center mt-2">N-gons: 0 | Topology: Clean</div>
        </div>
      </div>

      {/* Cleanup Tasks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {['Remove N-gons', 'Rebuild Geometry', 'Auto-Retopo', 'Smooth Normals'].map((task, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg text-xs font-bold text-center transition-all border ${
              progress >= 25 * (i + 1)
                ? 'bg-emerald-500/30 border-emerald-500 text-emerald-300'
                : 'bg-gray-800/50 border-gray-700 text-gray-400'
            }`}
          >
            {task}
          </div>
        ))}
      </div>

      {/* Processing Metrics */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
        <div className="text-xs text-gray-400 text-center">
          Processing at <span className="text-cyan-400 font-bold">11.5M ops/sec</span>
        </div>
      </div>
    </div>
  );
}

function UVAutomation({ progress }: { progress: number }) {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* 3D Model with UV visualization */}
      <div className="flex-1 relative">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>}>
          <RealisticModel3D showNgons={false} />
        </Suspense>
      </div>

      {/* UV Tiles Grid */}
      <div className="bg-gray-950 border border-gray-800 rounded-2xl p-4">
        <div className="grid grid-cols-5 gap-2">
          {[1001, 1002, 1003, 1004, 1005].map((udim, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 flex items-center justify-center font-bold text-xs transition-all transform ${
                progress >= 20 * (i + 1)
                  ? 'bg-blue-500/40 border-blue-400 text-blue-300 scale-105'
                  : 'bg-gray-800/50 border-gray-700 text-gray-400'
              }`}
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {udim}
            </div>
          ))}
        </div>
      </div>

      {/* UV Tasks */}
      <div className="space-y-3">
        {[
          { name: 'Auto UV Unwrap', progress: progress },
          { name: 'UDIM Layout', progress: Math.max(0, progress - 25) },
          { name: 'UV Packing', progress: Math.max(0, progress - 50) },
          { name: 'Overlap Detection', progress: Math.max(0, progress - 75) },
        ].map((task, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-300 font-semibold">{task.name}</span>
              <span className="text-xs text-blue-400 font-bold">{Math.round(task.progress)}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                style={{ width: `${Math.min(task.progress, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineIntegration({ progress }: { progress: number }) {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* 3D Model Preview */}
      <div className="flex-1 relative">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>}>
          <RealisticModel3D showNgons={false} />
        </Suspense>
      </div>

      {/* Export Formats & Pipeline Steps */}
      <div className="space-y-3">
        {/* Export Formats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { format: 'FBX', icon: '📦', active: progress >= 25 },
            { format: 'GLB', icon: '📦', active: progress >= 50 },
            { format: 'USDZ', icon: '📦', active: progress >= 75 },
          ].map((fmt, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 p-3 text-center transition-all ${
                fmt.active
                  ? 'bg-emerald-500/30 border-emerald-500 text-emerald-300'
                  : 'bg-gray-800/50 border-gray-700 text-gray-400'
              }`}
            >
              <div className="text-xl mb-1">{fmt.icon}</div>
              <div className="text-xs font-bold">{fmt.format}</div>
            </div>
          ))}
        </div>

        {/* Pipeline Steps */}
        <div className="space-y-2">
          {[
            'Folder Structure Generation',
            'Auto File Renaming',
            'Format Conversion Pipeline',
          ].map((step, i) => (
            <div
              key={i}
              className={`px-3 py-2 rounded-lg border text-xs transition-all ${
                progress >= 33 * (i + 1)
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : progress >= 33 * i
                  ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                  : 'bg-gray-800/50 border-gray-700 text-gray-400'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{step}</span>
                {progress >= 33 * (i + 1) && <span className="text-green-400">✓</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RenderPrep({ progress }: { progress: number }) {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* 3D Model with lighting preview */}
      <div className="flex-1 relative">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>}>
          <RealisticModel3D showNgons={false} />
        </Suspense>
      </div>

      {/* Render Elements & Settings */}
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Auto Lighting', icon: '💡', active: progress >= 33 },
            { name: 'Camera Setup', icon: '📷', active: progress >= 66 },
            { name: 'Scene Org', icon: '📑', active: progress >= 100 },
          ].map((elem, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 p-3 text-center transition-all ${
                elem.active
                  ? 'bg-violet-500/30 border-violet-500 text-violet-300'
                  : 'bg-gray-800/50 border-gray-700 text-gray-400'
              }`}
            >
              <div className="text-2xl mb-1">{elem.icon}</div>
              <div className="text-xs font-bold">{elem.name}</div>
            </div>
          ))}
        </div>

        {/* Render Settings */}
        <div className="space-y-2">
          {[
            { setting: 'Light Rig: 3-point + Fill', level: progress },
            { setting: 'Camera: 35mm Wide', level: Math.max(0, progress - 33) },
            { setting: 'Render: Path Tracer 512spp', level: Math.max(0, progress - 66) },
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-2">
              <div className="text-xs text-gray-300 font-semibold mb-1">{item.setting}</div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                  style={{ width: `${Math.min(item.level, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummaryReport() {
  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center">
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">✨</div>
        <h2 className="text-3xl font-bold text-emerald-400 mb-2">Pipeline Complete!</h2>
        <p className="text-gray-400">All automation tasks completed successfully</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Workflow Acceleration', value: '+63%', color: 'cyan' },
          { label: 'Tasks Automated', value: '17', color: 'violet' },
          { label: 'Errors Fixed', value: '42', color: 'emerald' },
          { label: 'Formats Ready', value: '3', color: 'blue' },
        ].map((stat, i) => (
          <div key={i} className={`bg-${stat.color}-500/10 border border-${stat.color}-500/50 rounded-lg p-4 text-center`}>
            <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center text-sm text-gray-400">
        <p>Exported: <span className="text-cyan-400 font-semibold">FBX, GLB, USDZ</span></p>
        <p className="mt-2">Time Saved vs Manual: <span className="text-emerald-400 font-semibold">~2.5 hours</span></p>
      </div>
    </div>
  );
}
