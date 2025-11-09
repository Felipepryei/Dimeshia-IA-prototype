import { useState, useEffect } from 'react';
import { X, Maximize2, Minimize2, RotateCcw } from 'lucide-react';

export default function AppSimulation() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      // Refresh the page to restart simulation
      window.location.reload();
    }, 300);
  };

  const handleRefresh = () => {
    const iframe = document.getElementById('app-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl transition-all duration-500 ${
          isFullscreen
            ? 'w-full h-full m-0 rounded-none'
            : 'w-[95vw] h-[95vh] m-4'
        }`}
      >
        {/* Window Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                title="Close"
              />
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                title="Toggle Fullscreen"
              />
              <button
                onClick={handleRefresh}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                title="Refresh"
              />
            </div>
            <div className="ml-4 flex items-center gap-2">
              <div className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400 font-mono">
                localhost:5173
              </div>
              <span className="text-sm text-gray-500">DIMESHIA Brand Identity</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors group"
              title="Refresh"
            >
              <RotateCcw className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors group"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              ) : (
                <Maximize2 className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              )}
            </button>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors group"
              title="Close"
            >
              <X className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* App Content */}
        <div className="w-full h-[calc(100%-4rem)] bg-black overflow-auto">
          <iframe
            id="app-iframe"
            src={window.location.href}
            className="w-full h-full border-0"
            title="DIMESHIA Brand Identity App"
          />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
