export default function LogoShowcase() {
  const logoVariations = [
    { title: 'Primary Logo', bg: 'from-gray-900 to-black', border: 'border-gray-800' },
    { title: 'Light Version', bg: 'from-gray-100 to-white', border: 'border-gray-300', dark: true },
    { title: 'Gradient Version', bg: 'from-blue-600 to-violet-600', border: 'border-transparent' },
  ];

  return (
    <section id="logo-showcase" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            Visual Identity
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Logo <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Variations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Abstract symbol combining 3D mesh structure with AI circuit patterns — minimalist, elegant, powerful
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {logoVariations.map((variation, index) => (
            <div key={index} className="group">
              <div className={`relative bg-gradient-to-br ${variation.bg} border ${variation.border} rounded-3xl p-16 flex items-center justify-center aspect-square hover:scale-105 transition-all duration-500 hover:shadow-2xl ${!variation.dark ? 'hover:shadow-blue-500/20' : ''}`}>
                <img
                  src="/logo de dimeshia IA.jpg"
                  alt={variation.title}
                  className={`w-48 h-48 object-contain ${variation.dark ? 'opacity-90' : ''} group-hover:scale-110 transition-transform duration-500`}
                  style={{
                    filter: variation.title === 'Gradient Version' ? 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))' : 'none'
                  }}
                />
              </div>
              <p className="text-center mt-6 text-lg font-medium text-gray-300">{variation.title}</p>
            </div>
          ))}
        </div>

        {/* Logo Construction Guide */}
        <div className="mt-32 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">Logo Construction</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Design Philosophy</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2" />
                    <span>Hexagonal structure represents 3D geometric precision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2" />
                    <span>Circuit nodes symbolize AI intelligence and automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2" />
                    <span>Connected paths illustrate integrated pipeline workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2" />
                    <span>Central core represents unified automation platform</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Technical Specs</h4>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Minimum Size</span>
                    <span className="font-mono">24px × 24px</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Clear Space</span>
                    <span className="font-mono">0.25x logo width</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Primary Format</span>
                    <span className="font-mono">SVG, PNG</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Color Space</span>
                    <span className="font-mono">RGB, HEX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
