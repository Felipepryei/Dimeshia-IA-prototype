import { useState, useRef, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, RotateCcw, ExternalLink, Maximize2 } from 'lucide-react';

export default function InteractiveDemo() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const deviceSizes = {
    desktop: { width: '100%', height: '100%', label: 'Desktop' },
    tablet: { width: '768px', height: '1024px', label: 'Tablet' },
    mobile: { width: '375px', height: '667px', label: 'Mobile' },
  };

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && device !== 'desktop') {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const deviceWidth = parseInt(deviceSizes[device].width);
        const newScale = Math.min(1, (containerWidth - 40) / deviceWidth);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [device]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Top Bar */}
      <div className="h-16 border-b border-gray-800 bg-gray-900 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {/* Official DIMESHIA Logo */}
            <div className="w-10 h-10 bg-black border border-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo de dimeshia IA.jpg"
                alt="DIMESHIA"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">DIMESHIA</h1>
              <p className="text-xs text-gray-500">Interactive Demo</p>
            </div>
          </div>
        </div>

        {/* Device Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-3 rounded-lg transition-all ${
              device === 'desktop'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
            title="Desktop View"
          >
            <Monitor className="w-5 h-5" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-3 rounded-lg transition-all ${
              device === 'tablet'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
            title="Tablet View"
          >
            <Tablet className="w-5 h-5" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-3 rounded-lg transition-all ${
              device === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
            title="Mobile View"
          >
            <Smartphone className="w-5 h-5" />
          </button>

          <div className="w-px h-8 bg-gray-700 mx-2" />

          <button
            onClick={() => window.location.reload()}
            className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 transition-all"
            title="Refresh"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={() => window.open(window.location.origin, '_blank')}
            className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 transition-all"
            title="Open in New Tab"
          >
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div
        ref={containerRef}
        className="h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-950 to-black flex items-center justify-center p-4 overflow-auto"
      >
        <div
          className="bg-black rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden"
          style={{
            width: deviceSizes[device].width,
            height: deviceSizes[device].height,
            transform: device !== 'desktop' ? `scale(${scale})` : 'none',
            transformOrigin: 'center center',
            border: device !== 'desktop' ? '12px solid #1F2937' : 'none',
            borderRadius: device === 'mobile' ? '2.5rem' : device === 'tablet' ? '1.5rem' : '1rem',
          }}
        >
          {/* Device Notch (for mobile) */}
          {device === 'mobile' && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-10" />
          )}

          {/* App Content */}
          <div className="w-full h-full overflow-auto">
            <iframe
              src={window.location.origin}
              className="w-full h-full border-0"
              title="DIMESHIA Brand Identity"
            />
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-gray-900 border border-gray-800 rounded-full shadow-2xl flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400">Live Preview</span>
        </div>
        <div className="w-px h-4 bg-gray-700" />
        <span className="text-sm text-gray-400">
          Viewing: <span className="text-blue-400 font-medium">{deviceSizes[device].label}</span>
        </span>
        {device !== 'desktop' && (
          <>
            <div className="w-px h-4 bg-gray-700" />
            <span className="text-sm text-gray-400">
              Scale: <span className="text-violet-400 font-medium">{(scale * 100).toFixed(0)}%</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
