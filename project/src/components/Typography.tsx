export default function Typography() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-violet-400 font-medium mb-4 block">
            Typography System
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Sleek <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Typography</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Geometric sans-serif with modern proportions — clarity meets sophistication
          </p>
        </div>

        {/* Typography Scale */}
        <div className="mb-20 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12">
          <div className="space-y-8">
            <div className="border-b border-gray-700 pb-8">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-9xl font-bold tracking-tighter">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Display / Hero</p>
                  <p className="text-xs text-gray-600 font-mono">144px / 120% / -0.02em</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-6xl font-bold tracking-tight">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Heading 1</p>
                  <p className="text-xs text-gray-600 font-mono">60px / 120% / -0.01em</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-bold">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Heading 2</p>
                  <p className="text-xs text-gray-600 font-mono">36px / 120% / normal</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Heading 3</p>
                  <p className="text-xs text-gray-600 font-mono">24px / 120% / normal</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-medium">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Subheading</p>
                  <p className="text-xs text-gray-600 font-mono">20px / 150% / normal</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-base">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Body</p>
                  <p className="text-xs text-gray-600 font-mono">16px / 150% / normal</p>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-gray-400">Aa</span>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Small</p>
                  <p className="text-xs text-gray-600 font-mono">14px / 150% / normal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Font Weights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8">Font Weights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-4xl font-normal mb-4">Aa</p>
              <p className="text-sm text-gray-400 mb-1">Regular</p>
              <p className="text-xs text-gray-600 font-mono">400</p>
              <p className="text-sm text-gray-500 mt-3">Body text, descriptions, secondary content</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-4xl font-medium mb-4">Aa</p>
              <p className="text-sm text-gray-400 mb-1">Medium</p>
              <p className="text-xs text-gray-600 font-mono">500</p>
              <p className="text-sm text-gray-500 mt-3">Subheadings, buttons, emphasis</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-4xl font-bold mb-4">Aa</p>
              <p className="text-sm text-gray-400 mb-1">Bold</p>
              <p className="text-xs text-gray-600 font-mono">700</p>
              <p className="text-sm text-gray-500 mt-3">Headings, important labels, highlights</p>
            </div>
          </div>
        </div>

        {/* Typography in Context */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8">Typography in Context</h3>

          <div className="space-y-12">
            {/* Example 1: Marketing */}
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-3">Marketing Content</p>
              <h4 className="text-4xl font-bold mb-4 tracking-tight">
                Transform Your 3D Pipeline with AI
              </h4>
              <p className="text-xl text-gray-400 mb-4 leading-relaxed">
                DIMESHIA automates complex production workflows, reducing render times by 80% while maintaining exceptional quality.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Our intelligent automation platform learns from your creative process, optimizing every step from modeling to final render. Experience the future of 3D production.
              </p>
            </div>

            {/* Example 2: Technical */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-xs uppercase tracking-widest text-violet-400 font-medium mb-3">Technical Documentation</p>
              <h4 className="text-2xl font-semibold mb-4">
                Pipeline Configuration
              </h4>
              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                Configure your automated workflow using our intuitive interface or advanced API endpoints.
              </p>
              <div className="bg-black border border-gray-800 rounded-xl p-4 font-mono text-sm text-gray-300">
                <span className="text-blue-400">const</span> pipeline = <span className="text-violet-400">await</span> dimeshia.create(<span className="text-green-400">'3d-workflow'</span>);
              </div>
            </div>

            {/* Example 3: UI Components */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-medium mb-3">UI Components</p>
              <div className="space-y-3">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl font-medium text-base">
                  Start Automation
                </button>
                <p className="text-sm text-gray-500">
                  Button: Medium weight, 16px, 0.5em letter spacing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Guidelines */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-xs">✓</div>
              Do
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>Use consistent line height (120% for headings, 150% for body)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>Maintain clear hierarchy with size and weight</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>Apply tight tracking (-0.02em) for large display text</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>Ensure minimum 4.5:1 contrast ratio for readability</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-950/20 to-transparent border border-red-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-xs">✕</div>
              Don't
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Mix more than 3 font weights in a single design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Use line heights below 120% for headings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Set body text smaller than 16px for readability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">•</span>
                <span>Place light text on light backgrounds</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
