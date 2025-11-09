import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function ColorSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colorPalette = {
    primary: [
      { name: 'Electric Blue 900', hex: '#1E3A8A', rgb: 'rgb(30, 58, 138)' },
      { name: 'Electric Blue 600', hex: '#2563EB', rgb: 'rgb(37, 99, 235)' },
      { name: 'Electric Blue 500', hex: '#3B82F6', rgb: 'rgb(59, 130, 246)' },
      { name: 'Electric Blue 400', hex: '#60A5FA', rgb: 'rgb(96, 165, 250)' },
      { name: 'Electric Blue 200', hex: '#BFDBFE', rgb: 'rgb(191, 219, 254)' },
    ],
    accent: [
      { name: 'Violet 900', hex: '#4C1D95', rgb: 'rgb(76, 29, 149)' },
      { name: 'Violet 600', hex: '#7C3AED', rgb: 'rgb(124, 58, 237)' },
      { name: 'Violet 500', hex: '#8B5CF6', rgb: 'rgb(139, 92, 246)' },
      { name: 'Violet 400', hex: '#A78BFA', rgb: 'rgb(167, 139, 250)' },
      { name: 'Violet 200', hex: '#DDD6FE', rgb: 'rgb(221, 214, 254)' },
    ],
    neutral: [
      { name: 'Black', hex: '#000000', rgb: 'rgb(0, 0, 0)' },
      { name: 'Gray 950', hex: '#0A0A0A', rgb: 'rgb(10, 10, 10)' },
      { name: 'Gray 900', hex: '#111827', rgb: 'rgb(17, 24, 39)' },
      { name: 'Gray 800', hex: '#1F2937', rgb: 'rgb(31, 41, 55)' },
      { name: 'Gray 700', hex: '#374151', rgb: 'rgb(55, 65, 81)' },
      { name: 'Gray 500', hex: '#6B7280', rgb: 'rgb(107, 114, 128)' },
      { name: 'Gray 300', hex: '#D1D5DB', rgb: 'rgb(209, 213, 219)' },
      { name: 'White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)' },
    ],
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            Color System
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Premium <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Palette</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A sophisticated color system built for clarity, contrast, and cutting-edge design
          </p>
        </div>

        {/* Primary Colors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
            Electric Blue — Primary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {colorPalette.primary.map((color) => (
              <div
                key={color.hex}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => copyToClipboard(color.hex)}
              >
                <div
                  className="w-full h-24 rounded-xl mb-4 shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="font-semibold text-sm mb-2 text-gray-200">{color.name}</h4>
                <div className="flex items-center justify-between">
                  <code className="text-xs text-gray-500 font-mono">{color.hex}</code>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColor === color.hex ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <code className="text-xs text-gray-600 font-mono block mt-1">{color.rgb}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-violet-400 to-violet-600 rounded-full" />
            Violet Neon — Accent
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {colorPalette.accent.map((color) => (
              <div
                key={color.hex}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-violet-500 transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => copyToClipboard(color.hex)}
              >
                <div
                  className="w-full h-24 rounded-xl mb-4 shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="font-semibold text-sm mb-2 text-gray-200">{color.name}</h4>
                <div className="flex items-center justify-between">
                  <code className="text-xs text-gray-500 font-mono">{color.hex}</code>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColor === color.hex ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <code className="text-xs text-gray-600 font-mono block mt-1">{color.rgb}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
            Neutral — Foundation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {colorPalette.neutral.map((color) => (
              <div
                key={color.hex}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => copyToClipboard(color.hex)}
              >
                <div
                  className="w-full h-20 rounded-xl mb-4 shadow-lg border border-gray-700"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="font-semibold text-xs mb-2 text-gray-200">{color.name}</h4>
                <div className="flex items-center justify-between">
                  <code className="text-xs text-gray-500 font-mono">{color.hex}</code>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedColor === color.hex ? (
                      <Check className="w-3 h-3 text-green-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Usage Guide */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 border border-blue-900/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Primary Blue</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Core brand color for interactive elements, links, primary actions, and key UI components. Conveys intelligence and technology.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-950/30 to-violet-900/20 border border-violet-900/50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Accent Violet</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Supporting color for emphasis, highlights, and creative elements. Adds energy and innovation to the visual language.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Neutral Gray</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Foundation colors for backgrounds, containers, text, and structural elements. Ensures hierarchy and readability.
            </p>
          </div>
        </div>

        {/* Gradient Examples */}
        <div className="mt-20 bg-gray-900 border border-gray-800 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Signature Gradients</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="h-32 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl shadow-2xl shadow-blue-500/20" />
              <p className="text-center text-sm text-gray-400 font-mono">#2563EB → #7C3AED</p>
              <p className="text-center text-xs text-gray-500">Primary Gradient</p>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/20" />
              <p className="text-center text-sm text-gray-400 font-mono">#3B82F6 → #06B6D4</p>
              <p className="text-center text-xs text-gray-500">Tech Gradient</p>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl shadow-2xl shadow-violet-500/20" />
              <p className="text-center text-sm text-gray-400 font-mono">#8B5CF6 → #9333EA</p>
              <p className="text-center text-xs text-gray-500">Creative Gradient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
