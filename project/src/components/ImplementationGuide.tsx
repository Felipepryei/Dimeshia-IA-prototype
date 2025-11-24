import { Code, Zap, Award, Users, Workflow, Download } from 'lucide-react';

export default function ImplementationGuide() {
  const implementations = [
    {
      title: 'Blender Pipeline',
      icon: Zap,
      features: [
        'Export as FBX or GLTF',
        'Batch process multiple assets',
        'Auto-import optimized models',
        'Preserve materials & textures',
        'Native file format support'
      ],
      note: 'Plugin available in Blender addon store'
    },
    {
      title: 'Maya Integration',
      icon: Code,
      features: [
        'Direct plugin for Maya',
        'One-click optimization',
        'Preserve rigging & skeleton',
        'Automatic LOD generation',
        'Real-time preview'
      ],
      note: 'Compatible with Maya 2023+'
    },
    {
      title: '3ds Max Solution',
      icon: Workflow,
      features: [
        'MaxScript automation',
        'Batch asset processing',
        'Modifier stack compatible',
        'Material preservation',
        'Multi-format export'
      ],
      note: 'Compatible with 3ds Max 2022+'
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            How to Implement DIMESHIA
          </h2>
          <p className="text-xl text-gray-400">
            Integrate into your production pipeline for 3D artists and animation studios
          </p>
        </div>

        {/* Implementation Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {implementations.map((impl, i) => {
            const Icon = impl.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold">{impl.title}</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {impl.features.map((feature, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">{impl.note}</p>
              </div>
            );
          })}
        </div>

        {/* 5-Step Process */}
        <div className="bg-gradient-to-r from-blue-900/20 via-violet-900/20 to-cyan-900/20 border border-blue-800/30 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center">5-Step Implementation Process</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Export', desc: 'Export your 3D model from your DCC', color: 'blue' },
              { step: 2, title: 'Upload', desc: 'Upload to DIMESHIA platform', color: 'violet' },
              { step: 3, title: 'Process', desc: 'AI analyzes & optimizes instantly', color: 'cyan' },
              { step: 4, title: 'Review', desc: 'Compare before & after metrics', color: 'green' },
              { step: 5, title: 'Deploy', desc: 'Download optimized asset', color: 'pink' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className={`w-12 h-12 bg-${item.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <span className={`text-lg font-bold text-${item.color}-400`}>{item.step}</span>
                </div>
                <h4 className="font-bold text-sm mb-2 text-gray-300">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices & Tips */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Best Practices for Studios
            </h3>
            <ul className="space-y-4">
              {[
                'Use consistent naming conventions for batch processing',
                'Version control your optimized assets separately',
                'Archive original high-poly models for future updates',
                'Test LOD variants across all target platforms',
                'Implement in your asset pipeline from day one'
              ].map((practice, i) => (
                <li key={i} className="flex gap-3 text-gray-400">
                  <span className="text-green-400 flex-shrink-0 font-bold">✓</span>
                  <span className="text-sm">{practice}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              Integration Tips
            </h3>
            <ul className="space-y-4">
              {[
                'Automate batch processing with scheduled jobs',
                'Set quality thresholds for automatic approval',
                'Monitor optimization metrics in your dashboard',
                'Integrate with version control systems (Git/Perforce)',
                'Generate reports on bandwidth & performance gains'
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 text-gray-400">
                  <span className="text-blue-400 flex-shrink-0 font-bold">→</span>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Artist & Studio Use Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-violet-900/20 to-blue-900/20 border border-violet-800/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-violet-400 mb-4 flex items-center gap-3">
              <Users className="w-6 h-6" />
              For Individual 3D Artists
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="text-violet-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Faster Portfolio Updates</span> - Optimize models in seconds before showcasing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Freelance Efficiency</span> - Deliver optimized assets faster to clients</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Reduce File Sizes</span> - Upload and share models without losing quality</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Real-time Rendering</span> - Enable faster viewport performance in client reviews</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
              <Workflow className="w-6 h-6" />
              For Animation Studios
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Production Speedup</span> - Reduce render times by 80%+ across all projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Infrastructure Savings</span> - Lower GPU/CPU costs and server expenses</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Batch Automation</span> - Process hundreds of assets in parallel</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">◆</span>
                <span><span className="font-bold text-gray-300">Team Collaboration</span> - Share optimized assets instantly across departments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="bg-gradient-to-br from-violet-900/30 to-cyan-900/30 border border-violet-800/50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-12 text-center">Expected ROI for Your Studio</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <p className="text-sm text-gray-400">Faster Rendering Times</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$50K+</div>
              <p className="text-sm text-gray-400">Annual Server Cost Savings</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-400 mb-2">40%</div>
              <p className="text-sm text-gray-400">Reduce Development Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <p className="text-sm text-gray-400">Quality Preservation</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
