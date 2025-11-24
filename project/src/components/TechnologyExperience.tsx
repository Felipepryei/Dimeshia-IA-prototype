import { useState } from 'react';
import { Upload } from 'lucide-react';
import AutoPlayTechDemo from './AutoPlayTechDemo';
import ModelUploadViewer from './ModelUploadViewer';

export default function TechnologyExperience() {
  const [viewMode, setViewMode] = useState<'demo' | 'upload'>('demo');

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium mb-4 block animate-pulse">
            Live Pipeline Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            See Your 3D Model <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how DIMESHIA's AI optimizes your 3D assets through every stage of the pipeline
          </p>

          {/* View Mode Toggle */}
          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => setViewMode('demo')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                viewMode === 'demo'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Automated Demo
            </button>
            <button
              onClick={() => setViewMode('upload')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                viewMode === 'upload'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Upload className="w-5 h-5" />
              Upload Your Model
            </button>
          </div>
        </div>

        {/* Main Demo Container */}
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-800 rounded-3xl p-8 mb-12">
          {viewMode === 'upload' ? (
            <ModelUploadViewer />
          ) : (
            <AutoPlayTechDemo />
          )}
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📉</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">95% Size Reduction</h4>
            <p className="text-sm text-gray-400">From 124.5 MB to just 8.5 MB without quality loss</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">95% Polygon Reduction</h4>
            <p className="text-sm text-gray-400">245K polygons optimized to 12K while maintaining 98% quality</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-100">Intelligent Processing</h4>
            <p className="text-sm text-gray-400">AI automatically detects what can be optimized without visual degradation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
