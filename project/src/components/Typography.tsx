import { Grid3x3, Maximize2, Palette, Layers } from 'lucide-react';

export default function Typography() {
  const designPrinciples = [
    {
      icon: Grid3x3,
      title: 'Hexagonal Geometry',
      description: 'Perfect geometric precision representing 3D space and precision engineering',
      details: '120° angles, modular construction, scalable across all sizes'
    },
    {
      icon: Layers,
      title: 'Circuit Intelligence',
      description: 'AI neural pathways embedded within the geometric structure',
      details: 'Node placement follows optimal network topology patterns'
    },
    {
      icon: Palette,
      title: 'Color Strategy',
      description: 'Dynamic gradient system reflecting AI evolution and optimization',
      details: 'Electric Blue to Violet: from input processing to output optimization'
    },
    {
      icon: Maximize2,
      title: 'Scalability',
      description: 'Maintains visual integrity from 24px favicon to billboard size',
      details: 'Geometric consistency ensures recognition at any scale'
    },
  ];

  const specifications = [
    { label: 'Logo Mark', value: '120px × 120px (base)' },
    { label: 'Minimum Size', value: '24px × 24px (favicon)' },
    { label: 'Clear Space', value: '0.25× logo width on all sides' },
    { label: 'Safe Area', value: '16px minimum padding' },
    { label: 'Primary Formats', value: 'SVG (vector), PNG (raster)' },
    { label: 'Color Space', value: 'RGB / HEX / CMYK' },
    { label: 'File Formats', value: '.svg, .png, .pdf, .ai' },
    { label: 'Grid System', value: '24-point modular grid' },
  ];

  const colorPalette = [
    { name: 'Primary Blue', hex: '#3B82F6', rgb: 'rgb(59, 130, 246)' },
    { name: 'Accent Violet', hex: '#8B5CF6', rgb: 'rgb(139, 92, 246)' },
    { name: 'Accent Cyan', hex: '#06B6D4', rgb: 'rgb(6, 182, 212)' },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 0% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block animate-pulse">
            Brand System
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Logo <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Design System</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive visual identity architecture — precision engineering meets artistic vision
          </p>
        </div>

        {/* Main Logo Display */}
        <div className="mb-20 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-3xl p-12 overflow-hidden">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-10" />
            </div>

            {/* Logo Showcase */}
            <div className="relative z-10 grid md:grid-cols-3 gap-12 mb-16">
              {/* Dark Background */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl flex items-center justify-center mb-4 group hover:border-blue-500/50 transition-all">
                  <img
                    src="/logo de dimeshia IA.jpg"
                    alt="Primary Logo"
                    className="w-40 h-40 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-gray-300">Primary Logo</h4>
                <p className="text-xs text-gray-500 mt-1">Dark Background</p>
              </div>

              {/* Light Background */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-white border border-gray-300 rounded-2xl flex items-center justify-center mb-4 group hover:border-blue-500/50 transition-all">
                  <img
                    src="/logo de dimeshia IA.jpg"
                    alt="Light Logo"
                    className="w-40 h-40 object-contain opacity-80 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-gray-300">Light Version</h4>
                <p className="text-xs text-gray-500 mt-1">Light Background</p>
              </div>

              {/* Gradient Background */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600 border border-transparent rounded-2xl flex items-center justify-center mb-4 group hover:shadow-xl hover:shadow-blue-500/30 transition-all">
                  <img
                    src="/logo de dimeshia IA.jpg"
                    alt="Gradient Logo"
                    className="w-40 h-40 object-contain group-hover:scale-110 transition-transform"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(255,255,255, 0.3))'
                    }}
                  />
                </div>
                <h4 className="font-bold text-gray-300">Gradient Version</h4>
                <p className="text-xs text-gray-500 mt-1">Branded Background</p>
              </div>
            </div>

            {/* Design Principles Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-16">
              {designPrinciples.map((principle, i) => {
                const Icon = principle.icon;
                return (
                  <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-100 mb-1">{principle.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{principle.description}</p>
                        <p className="text-xs text-gray-500 italic">{principle.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Construction Specifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Technical Specifications */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-violet-600 rounded-full" />
              Technical Specifications
            </h3>

            <div className="space-y-3">
              {specifications.map((spec, i) => (
                <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-sm text-gray-400">{spec.label}</span>
                  <span className="text-sm font-mono text-blue-400">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-violet-400 to-cyan-600 rounded-full" />
              Color Palette
            </h3>

            <div className="space-y-4">
              {colorPalette.map((color, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-300">{color.name}</span>
                    <span className="text-xs text-gray-500 font-mono">{color.hex}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div
                      className="w-full h-12 rounded-lg border border-gray-700"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-gray-500 font-mono min-w-fit">{color.rgb}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="bg-gradient-to-r from-blue-900/20 via-violet-900/20 to-cyan-900/20 border border-blue-800/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Design Philosophy</h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold text-blue-400 mb-2">Structure</h4>
              <p className="text-sm text-gray-400">
                The hexagonal foundation represents DIMESHIA's commitment to geometric precision and 3D expertise
              </p>
            </div>

            <div>
              <h4 className="font-bold text-violet-400 mb-2">Intelligence</h4>
              <p className="text-sm text-gray-400">
                Circuit nodes symbolize the AI brain powering intelligent automation across the pipeline
              </p>
            </div>

            <div>
              <h4 className="font-bold text-cyan-400 mb-2">Integration</h4>
              <p className="text-sm text-gray-400">
                Connected pathways illustrate seamless workflow integration from input to optimized output
              </p>
            </div>

            <div>
              <h4 className="font-bold text-green-400 mb-2">Optimization</h4>
              <p className="text-sm text-gray-400">
                The unified core represents our complete, integrated automation platform for all studios
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Guide for 3D Artists */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-4">How to Implement as a 3D Studio</h3>
          <p className="text-gray-400 mb-12">Integrate DIMESHIA into your production pipeline with these proven workflows</p>

          {/* Integration Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Blender Pipeline</h4>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li>✓ Export as FBX or GLTF</li>
                <li>✓ Batch process multiple assets</li>
                <li>✓ Auto-import optimized models</li>
                <li>✓ Preserve materials & textures</li>
                <li>✓ Native file format support</li>
              </ul>
              <p className="text-xs text-gray-500 italic">Plugin available in Blender addon store</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all">
              <h4 className="text-lg font-bold text-violet-400 mb-3">Maya Integration</h4>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li>✓ Direct plugin for Maya</li>
                <li>✓ One-click optimization</li>
                <li>✓ Preserve rigging & skeleton</li>
                <li>✓ Automatic LOD generation</li>
                <li>✓ Real-time preview</li>
              </ul>
              <p className="text-xs text-gray-500 italic">Compatible with Maya 2023+</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <h4 className="text-lg font-bold text-cyan-400 mb-3">3ds Max Solution</h4>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li>✓ MaxScript automation</li>
                <li>✓ Batch asset processing</li>
                <li>✓ Modifier stack compatible</li>
                <li>✓ Material preservation</li>
                <li>✓ Multi-format export</li>
              </ul>
              <p className="text-xs text-gray-500 italic">Compatible with 3ds Max 2022+</p>
            </div>
          </div>

          {/* Step-by-Step Implementation */}
          <div className="bg-gradient-to-r from-blue-900/20 via-violet-900/20 to-cyan-900/20 border border-blue-800/30 rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-xl font-bold mb-8">5-Step Implementation Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-blue-400">1</span>
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-300">Export</h4>
                <p className="text-xs text-gray-500">Export your 3D model from your DCC</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-violet-400">2</span>
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-300">Upload</h4>
                <p className="text-xs text-gray-500">Upload to DIMESHIA platform</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-cyan-400">3</span>
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-300">Process</h4>
                <p className="text-xs text-gray-500">AI analyzes & optimizes instantly</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-green-400">4</span>
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-300">Review</h4>
                <p className="text-xs text-gray-500">Compare before & after metrics</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-pink-400">5</span>
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-300">Deploy</h4>
                <p className="text-xs text-gray-500">Download optimized asset</p>
              </div>
            </div>
          </div>

          {/* Best Practices for Studios */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h4 className="font-bold text-green-400 mb-4">Best Practices</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Use consistent naming conventions for batch processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Version control your optimized assets separately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Archive original high-poly models for future updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Test LOD variants across all target platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Implement in your asset pipeline from day one</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h4 className="font-bold text-blue-400 mb-4">Integration Tips</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  <span>Automate batch processing with scheduled jobs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  <span>Set quality thresholds for automatic approval</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  <span>Monitor optimization metrics in your dashboard</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  <span>Integrate with version control systems (Git/Perforce)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">→</span>
                  <span>Generate reports on bandwidth & performance gains</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Studio ROI */}
          <div className="mt-12 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 border border-violet-800/30 rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-6">Expected ROI for Your Studio</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                <p className="text-sm text-gray-400">Faster rendering times</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$50K+</div>
                <p className="text-sm text-gray-400">Annual server cost savings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">40%</div>
                <p className="text-sm text-gray-400">Reduce development time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <p className="text-sm text-gray-400">Quality preservation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
