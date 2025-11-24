import { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, AlertCircle, TrendingDown } from 'lucide-react';
import AmaoModelViewer from './AmaoModelViewer';

export default function AmaoDemo() {
  const [stage, setStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedModel, setSelectedModel] = useState('character');

  const models = [
    { id: 'character', name: '3D Character Model', polygons: 245680 },
    { id: 'scene', name: 'Environment Scene', polygons: 189420 },
    { id: 'product', name: 'Product Design', polygons: 156890 }
  ];

  const stages = [
    { title: 'Model Loaded', desc: 'Initializing analysis engine', time: 2 },
    { title: 'Topology Scan', desc: 'Analyzing mesh structure and edges', time: 3 },
    { title: 'Ngon Detection', desc: 'Scanning for n-sided polygons', time: 3 },
    { title: 'UV Analysis', desc: 'Checking UV mapping coverage', time: 2 },
    { title: 'Normal Check', desc: 'Detecting flipped and invalid normals', time: 2 },
    { title: 'Density Analysis', desc: 'Finding over-dense geometry areas', time: 3 },
    { title: 'Optimization Plan', desc: 'Computing optimal reduction strategy', time: 2 },
    { title: 'AI Recommendation', desc: 'Generating final optimization report', time: 1 }
  ];

  const results = {
    character: {
      healthScore: 82,
      ngonCount: 12,
      uvCoverage: 94,
      polyReduction: 48,
      densityIssues: 3,
      invertedNormals: 1,
      originalPolys: 245680,
      optimizedPolys: 127554,
      fileSizeReduction: 94.5,
      estimatedRenderSpeedup: 3.2,
      issues: [
        { severity: 'high', issue: '12 N-gons found in torso area', fix: 'Auto-convert to quads' },
        { severity: 'medium', issue: '1 inverted normal on left arm', fix: 'Flip normal direction' },
        { severity: 'medium', issue: 'Dense geometry in hair region (45K polys)', fix: 'Reduce to 8K with LOD' }
      ]
    },
    scene: {
      healthScore: 76,
      ngonCount: 28,
      uvCoverage: 87,
      polyReduction: 52,
      densityIssues: 5,
      invertedNormals: 3,
      originalPolys: 189420,
      optimizedPolys: 91062,
      fileSizeReduction: 96.2,
      estimatedRenderSpeedup: 3.8,
      issues: [
        { severity: 'high', issue: '28 N-gons scattered across scene', fix: 'Retopologize problematic areas' },
        { severity: 'high', issue: '3 inverted normals in walls', fix: 'Flip normal directions' },
        { severity: 'medium', issue: 'UV island overlap detected', fix: 'Unfold and pack UVs' }
      ]
    },
    product: {
      healthScore: 89,
      ngonCount: 5,
      uvCoverage: 98,
      polyReduction: 41,
      densityIssues: 1,
      invertedNormals: 0,
      originalPolys: 156890,
      optimizedPolys: 92577,
      fileSizeReduction: 93.8,
      estimatedRenderSpeedup: 2.9,
      issues: [
        { severity: 'low', issue: '5 N-gons on rounded edges', fix: 'Convert to quads' },
        { severity: 'low', issue: 'Minor density optimization possible', fix: 'Smart polygon reduction' }
      ]
    }
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (stage < stages.length - 1) {
            setStage(stage + 1);
            return 0;
          } else {
            setIsRunning(false);
            return 100;
          }
        }
        return prev + Math.random() * 25;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isRunning, stage, stages.length]);

  const handlePlay = () => {
    if (stage === stages.length) {
      setStage(0);
      setProgress(0);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setStage(0);
    setProgress(0);
    setIsRunning(false);
  };

  const currentResult = results[selectedModel as keyof typeof results];
  const isComplete = stage === stages.length;

  return (
    <div className="space-y-8">
      {/* Model Selection */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h4 className="font-bold text-white mb-4">Select 3D Model to Analyze</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                setSelectedModel(model.id);
                setStage(0);
                setProgress(0);
                setIsRunning(false);
              }}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedModel === model.id
                  ? 'border-blue-500 bg-blue-900/30'
                  : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="font-bold text-white">{model.name}</div>
              <div className="text-sm text-gray-400 mt-2">{(model.polygons / 1000).toFixed(0)}K polygons</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Demo Container */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: 3D Models Display */}
        <div className="space-y-6">
          {/* Original Model */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 overflow-hidden">
            <h5 className="text-sm font-bold text-gray-300 mb-3">Original High-Poly Model</h5>
            <div className="bg-black rounded-xl h-64 border border-gray-700">
              <AmaoModelViewer modelType={selectedModel as 'character' | 'scene' | 'product'} optimized={false} />
            </div>
            <div className="mt-3 text-xs text-gray-500 flex justify-between">
              <span>Polygons: <span className="text-yellow-400 font-bold">{models.find(m => m.id === selectedModel)?.polygons.toLocaleString() || 0}</span></span>
              <span>Quality: <span className="text-green-400 font-bold">100%</span></span>
            </div>
          </div>

          {/* Optimized Model */}
          {isComplete && (
            <div className="bg-gray-900/50 border border-green-800/50 rounded-2xl p-4 overflow-hidden">
              <h5 className="text-sm font-bold text-green-400 mb-3">✨ AI-Optimized Model</h5>
              <div className="bg-black rounded-xl h-64 border border-gray-700">
                <AmaoModelViewer modelType={selectedModel as 'character' | 'scene' | 'product'} optimized={true} />
              </div>
              <div className="mt-3 text-xs text-gray-500 flex justify-between">
                <span>Polygons: <span className="text-cyan-400 font-bold">{Math.round((models.find(m => m.id === selectedModel)?.polygons || 0) * (1 - currentResult.polyReduction / 100)).toLocaleString()}</span></span>
                <span>Quality: <span className="text-green-400 font-bold">{currentResult.healthScore}%</span></span>
              </div>
            </div>
          )}
        </div>

        {/* Middle: Processing Pipeline */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold text-xl text-white">AMAO Analysis Pipeline</h4>
            <div className="flex gap-3">
              <button
                onClick={handlePlay}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  isRunning
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <Play className="w-4 h-4" />
                {isRunning ? 'Stop' : 'Start Analysis'}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pipeline Stages */}
          <div className="space-y-3">
            {stages.map((s, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border-2 transition-all ${
                  i < stage
                    ? 'border-green-500 bg-green-900/20'
                    : i === stage
                    ? 'border-blue-500 bg-blue-900/30'
                    : 'border-gray-700 bg-gray-800/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {i < stage ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : i === stage ? (
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white">{s.title}</div>
                    <div className="text-sm text-gray-400">{s.desc}</div>
                    {i === stage && isRunning && (
                      <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-800/30 rounded-xl text-center">
            <div className="text-sm text-gray-400">
              {isRunning ? (
                <>
                  <span className="font-bold text-blue-400">Analyzing...</span>
                  <span> Stage {stage + 1} of {stages.length}</span>
                </>
              ) : isComplete ? (
                <span className="text-green-400 font-bold">✅ Analysis Complete!</span>
              ) : (
                <span>Click "Start Analysis" to begin</span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Results Dashboard */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-lg text-white mb-6">AI Analysis Results</h4>

          {isComplete ? (
            <div className="space-y-6">
              {/* Health Score */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-300">Overall Health Score</span>
                  <span className="text-4xl font-bold text-green-400">{currentResult.healthScore}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    style={{ width: `${currentResult.healthScore}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {currentResult.healthScore >= 85
                    ? '✅ Excellent topology'
                    : currentResult.healthScore >= 75
                    ? '⚠️ Good with minor issues'
                    : '🔴 Needs optimization'}
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 uppercase">Ngon Count</div>
                  <div className="text-2xl font-bold text-yellow-400 mt-1">{currentResult.ngonCount}</div>
                  <div className="text-xs text-gray-500 mt-2">N-sided polygons</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 uppercase">UV Coverage</div>
                  <div className="text-2xl font-bold text-cyan-400 mt-1">{currentResult.uvCoverage}%</div>
                  <div className="text-xs text-gray-500 mt-2">Texture mapping</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 uppercase">Density Issues</div>
                  <div className="text-2xl font-bold text-orange-400 mt-1">{currentResult.densityIssues}</div>
                  <div className="text-xs text-gray-500 mt-2">Over-poly areas</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <div className="text-xs text-gray-400 uppercase">Bad Normals</div>
                  <div className="text-2xl font-bold text-pink-400 mt-1">{currentResult.invertedNormals}</div>
                  <div className="text-xs text-gray-500 mt-2">Flipped faces</div>
                </div>
              </div>

              {/* Optimization Results */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-800/50 rounded-xl p-6">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-400" />
                  Optimization Results
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Original Polygons:</span>
                    <span className="font-bold text-gray-200">{(currentResult.originalPolys / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Optimized Polygons:</span>
                    <span className="font-bold text-green-400">{(currentResult.optimizedPolys / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Reduction:</span>
                    <span className="font-bold text-green-400">{currentResult.polyReduction}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${currentResult.polyReduction}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Performance Gains */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-800/50 rounded-xl p-6">
                <h5 className="font-bold text-white mb-4">Performance Gains</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Render Speed:</span>
                    <span className="font-bold text-cyan-400">{currentResult.estimatedRenderSpeedup}x faster</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">File Size Reduction:</span>
                    <span className="font-bold text-cyan-400">{currentResult.fileSizeReduction}%</span>
                  </div>
                </div>
              </div>

              {/* Issues & Fixes */}
              <div className="space-y-3">
                <h5 className="font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  Detected Issues & AI Fixes
                </h5>
                {currentResult.issues.map((issue, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-l-4 ${
                      issue.severity === 'high'
                        ? 'border-l-red-500 bg-red-900/20'
                        : issue.severity === 'medium'
                        ? 'border-l-yellow-500 bg-yellow-900/20'
                        : 'border-l-blue-500 bg-blue-900/20'
                    }`}
                  >
                    <div className="font-bold text-white text-sm mb-1">{issue.issue}</div>
                    <div className="text-xs text-gray-400">
                      <span className="text-green-400">✓ Fix: </span>
                      {issue.fix}
                    </div>
                  </div>
                ))}
              </div>

              {/* Export CTA */}
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all mt-6">
                Export Optimized Model
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-96 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-400 mb-2">Ready to analyze your 3D model</p>
              <p className="text-sm text-gray-500">Select a model and click "Start Analysis"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
