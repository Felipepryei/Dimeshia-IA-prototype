import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import BrandEssence from './components/BrandEssence';
import StudioDemo from './components/StudioDemo';
import StudioEnvironment from './components/StudioEnvironment';
import AIOptimizationTool from './components/AIOptimizationTool';
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
      <StudioDemo />
      <StudioEnvironment />
      <AIOptimizationTool />
      <ColorSystem />
      <Typography />
      <Footer />
    </div>
  );
}

export default App;
