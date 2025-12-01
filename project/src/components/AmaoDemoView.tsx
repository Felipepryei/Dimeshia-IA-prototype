import { ArrowLeft } from 'lucide-react';
import AmaoLiveDemo from './AmaoLiveDemo';

export default function AmaoDemoView() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with back button */}
      <div className="h-20 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="p-3 rounded-lg bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold hidden sm:inline">Back to Site</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black border border-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/logo de dimeshia IA.jpg"
              alt="DIMESHIA"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">DIMESHIA AMAO</h1>
            <p className="text-xs text-gray-500">Live Demo Preview</p>
          </div>
        </div>

        <div className="w-20" />
      </div>

      {/* Demo Content */}
      <div className="bg-gradient-to-b from-black via-gray-950 to-black">
        <AmaoLiveDemo />
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Ready to optimize your 3D models?</p>
          <button
            onClick={() => window.location.href = '#'}
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Join the Beta Waitlist
          </button>
          <p className="text-xs text-gray-500 mt-4">
            This is a simulated demo. Results shown are representative of AMAO's capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}
