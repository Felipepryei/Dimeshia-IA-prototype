# DIMESHIA - Complete Source Code Documentation

## 📋 Table of Contents
1. [Project Configuration Files](#project-configuration-files)
2. [Main Application Files](#main-application-files)
3. [React Components](#react-components)
4. [Styling](#styling)
5. [How to Use This Code](#how-to-use-this-code)

---

## Project Configuration Files

### 📄 package.json
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

### 📄 vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

### 📄 tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### 📄 tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### 📄 tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 📄 postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 📄 index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DIMESHIA - AI Automation Agency</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Main Application Files

### 📄 src/main.tsx
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 📄 src/App.tsx
```typescript
import { useState, useEffect } from 'react';
import { Cpu, Layers, Zap, Network, Box, Binary, Globe, ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import BrandEssence from './components/BrandEssence';
import StudioEnvironment from './components/StudioEnvironment';
import ColorSystem from './components/ColorSystem';
import Typography from './components/Typography';
import Footer from './components/Footer';
import InteractiveDemo from './components/InteractiveDemo';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // Show demo mode if ?demo=true in URL
    const params = new URLSearchParams(window.location.search);
    setShowDemo(params.get('demo') === 'true');
  }, []);

  // If in demo mode, show the interactive demo viewer
  if (showDemo) {
    return <InteractiveDemo />;
  }

  // Otherwise show the actual app
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <LogoShowcase />
      <BrandEssence />
      <StudioEnvironment />
      <ColorSystem />
      <Typography />
      <Footer />
    </div>
  );
}

export default App;
```

### 📄 src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

---

## React Components

### 📄 src/components/Hero.tsx
```typescript
import { useState, useEffect } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo Mark */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Animated Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-full filter blur-xl opacity-50 animate-spin-slow" style={{ width: '140px', height: '140px', top: '-10px', left: '-10px' }} />

            {/* Logo Container */}
            <div className="relative w-[120px] h-[120px] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl flex items-center justify-center shadow-2xl">
              {/* 3D Mesh + AI Circuit Pattern */}
              <div className="relative">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer hexagon frame */}
                  <path d="M35 5 L60 20 L60 50 L35 65 L10 50 L10 20 Z"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />

                  {/* Inner 3D mesh structure */}
                  <path d="M35 15 L50 25 L50 45 L35 55 L20 45 L20 25 Z"
                    stroke="url(#gradient2)"
                    strokeWidth="1.5"
                    fill="rgba(59, 130, 246, 0.1)"
                  />

                  {/* AI Circuit nodes */}
                  <circle cx="35" cy="35" r="4" fill="#3B82F6" className="animate-pulse" />
                  <circle cx="35" cy="15" r="2" fill="#8B5CF6" />
                  <circle cx="50" cy="25" r="2" fill="#8B5CF6" />
                  <circle cx="50" cy="45" r="2" fill="#8B5CF6" />
                  <circle cx="35" cy="55" r="2" fill="#8B5CF6" />
                  <circle cx="20" cy="45" r="2" fill="#8B5CF6" />
                  <circle cx="20" cy="25" r="2" fill="#8B5CF6" />

                  {/* Connecting lines */}
                  <line x1="35" y1="35" x2="35" y2="15" stroke="url(#gradient3)" strokeWidth="1" opacity="0.6" />
                  <line x1="35" y1="35" x2="50" y2="25" stroke="url(#gradient3)" strokeWidth="1" opacity="0.6" />
                  <line x1="35" y1="35" x2="50" y2="45" stroke="url(#gradient3)" strokeWidth="1" opacity="0.6" />
                  <line x1="35" y1="35" x2="35" y2="55" stroke="url(#gradient3)" strokeWidth="1" opacity="0.6" />
                  <line x1="35" y1="35" x2="20" y2="45" stroke="url(#gradient3)" strokeWidth="1" opacity="0.6" />
                  <line x1="35" y1="35" x2="20" y2="25" stroke="url(#gradient3)" strokeWidth="1" opacity="0.6" />

                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-8xl md:text-9xl font-bold mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent">
            DIMESHIA
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide">
          Next-Generation AI Automation Agency
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-12 font-light">
          Specialized in 3D Production Pipelines
        </p>

        {/* Brand Values */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Intelligent', 'Creative', 'Structured', 'Forward-Thinking'].map((value, i) => (
            <span
              key={value}
              className="px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {value}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => {
              const heroSection = document.getElementById('logo-showcase');
              heroSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Brand Identity
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => window.location.href = '?demo=true'}
            className="group relative px-8 py-4 bg-gray-900 border border-gray-700 rounded-xl font-medium text-lg overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              View Interactive Demo
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
```

### 📄 src/components/LogoShowcase.tsx
```typescript
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
                <div className="relative">
                  <svg width="120" height="120" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 5 L60 20 L60 50 L35 65 L10 50 L10 20 Z"
                      stroke={variation.dark ? "url(#gradientDark)" : "url(#gradient1)"}
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M35 15 L50 25 L50 45 L35 55 L20 45 L20 25 Z"
                      stroke={variation.dark ? "url(#gradient2Dark)" : "url(#gradient2)"}
                      strokeWidth="1.5"
                      fill={variation.dark ? "rgba(59, 130, 246, 0.05)" : "rgba(59, 130, 246, 0.1)"}
                    />
                    <circle cx="35" cy="35" r="4" fill={variation.dark ? "#2563EB" : "#3B82F6"} />
                    <circle cx="35" cy="15" r="2" fill={variation.dark ? "#7C3AED" : "#8B5CF6"} />
                    <circle cx="50" cy="25" r="2" fill={variation.dark ? "#7C3AED" : "#8B5CF6"} />
                    <circle cx="50" cy="45" r="2" fill={variation.dark ? "#7C3AED" : "#8B5CF6"} />
                    <circle cx="35" cy="55" r="2" fill={variation.dark ? "#7C3AED" : "#8B5CF6"} />
                    <circle cx="20" cy="45" r="2" fill={variation.dark ? "#7C3AED" : "#8B5CF6"} />
                    <circle cx="20" cy="25" r="2" fill={variation.dark ? "#7C3AED" : "#8B5CF6"} />

                    <line x1="35" y1="35" x2="35" y2="15" stroke={variation.dark ? "url(#gradient3Dark)" : "url(#gradient3)"} strokeWidth="1" opacity="0.6" />
                    <line x1="35" y1="35" x2="50" y2="25" stroke={variation.dark ? "url(#gradient3Dark)" : "url(#gradient3)"} strokeWidth="1" opacity="0.6" />
                    <line x1="35" y1="35" x2="50" y2="45" stroke={variation.dark ? "url(#gradient3Dark)" : "url(#gradient3)"} strokeWidth="1" opacity="0.6" />
                    <line x1="35" y1="35" x2="35" y2="55" stroke={variation.dark ? "url(#gradient3Dark)" : "url(#gradient3)"} strokeWidth="1" opacity="0.6" />
                    <line x1="35" y1="35" x2="20" y2="45" stroke={variation.dark ? "url(#gradient3Dark)" : "url(#gradient3)"} strokeWidth="1" opacity="0.6" />
                    <line x1="35" y1="35" x2="20" y2="25" stroke={variation.dark ? "url(#gradient3Dark)" : "url(#gradient3)"} strokeWidth="1" opacity="0.6" />

                    <defs>
                      <linearGradient id="gradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="50%" stopColor="#5B21B6" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </linearGradient>
                      <linearGradient id="gradient2Dark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                      <linearGradient id="gradient3Dark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                        <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
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
```

### 📄 src/components/BrandEssence.tsx
```typescript
import { Cpu, Layers, Zap, Network, Box, Binary } from 'lucide-react';

export default function BrandEssence() {
  const essenceCards = [
    {
      icon: Cpu,
      title: 'Intelligent',
      description: 'AI-powered automation that learns and adapts to your workflow',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers,
      title: 'Creative',
      description: 'Unleashing artistic potential through computational design',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Network,
      title: 'Structured',
      description: 'Systematic pipelines that ensure consistency and quality',
      gradient: 'from-blue-600 to-violet-600'
    },
    {
      icon: Zap,
      title: 'Forward-Thinking',
      description: 'Pioneering the future of 3D production technology',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-violet-400 font-medium mb-4 block">
            Brand Essence
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">DIMESHIA</span> Philosophy
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where artificial intelligence meets creative production — building the next generation of 3D automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {essenceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{card.description}</p>

                  {/* Decorative element */}
                  <div className="mt-8 h-1 w-20 bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-blue-500 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold mb-12">
            Powered by <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Advanced Technology</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Neural Networks', icon: Binary },
              { label: '3D Rendering', icon: Box },
              { label: 'Cloud Pipeline', icon: Network },
              { label: 'Real-time Processing', icon: Zap }
            ].map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                >
                  <TechIcon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-300">{tech.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

*Due to length constraints, I'll continue with the remaining components in a second file...*

---

## Styling

### 📄 src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans antialiased;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  }

  * {
    @apply scroll-smooth;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## How to Use This Code

### Step 1: Create Project
```bash
npm create vite@latest dimeshia-brand -- --template react-ts
cd dimeshia-brand
```

### Step 2: Install Dependencies
```bash
npm install
npm install lucide-react @supabase/supabase-js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Copy All Files
Copy all the code above into the respective files in your project.

### Step 4: Run Development Server
```bash
npm run dev
```

### Step 5: Build for Production
```bash
npm run build
```

---

**📌 Note:** The complete source code continues in COMPLETE_SOURCE_CODE_PART2.md for the remaining components (StudioEnvironment, ColorSystem, Typography, Footer, InteractiveDemo, and AppSimulation).

---

**Total Lines of Code:** ~2,500+ lines
**Total Components:** 9 components
**Total Files:** 15+ files

**Created by:** AI Assistant (Claude Code)
**Date:** 2025-10-14
**Version:** 1.0.0
