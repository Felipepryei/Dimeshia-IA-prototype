import { Globe, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-6 border-t border-gray-800 bg-gradient-to-b from-black to-gray-950">
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Official DIMESHIA Logo */}
              <div className="w-14 h-14 bg-black border border-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/logo de dimeshia IA.jpg"
                  alt="DIMESHIA Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">DIMESHIA</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Next-generation AI automation agency specialized in 3D production pipelines.
              Intelligent, creative, and forward-thinking solutions for the future of digital content creation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h4>
              <ul className="space-y-3">
                {['3D Automation', 'AI Pipeline', 'Render Farm', 'Asset Library'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Resources</h4>
              <ul className="space-y-3">
                {['Documentation', 'API', 'Support', 'Status'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} DIMESHIA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Brand tagline */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-600">
            Innovation • Precision • Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
