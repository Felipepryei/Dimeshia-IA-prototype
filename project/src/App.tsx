import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import BrandEssence from './components/BrandEssence';
import StudioDemo from './components/StudioDemo';
import StudioEnvironment from './components/StudioEnvironment';
import TechnologyExperience from './components/TechnologyExperience';
import AIOptimizationTool from './components/AIOptimizationTool';
import ClientBenefits from './components/ClientBenefits';
import DimeshiaServices from './components/DimeshiaServices';
import ImplementationGuide from './components/ImplementationGuide';
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
      <TechnologyExperience />
      <AIOptimizationTool />
      <ClientBenefits />
      <DimeshiaServices />
      <ImplementationGuide />
      <Footer />
    </div>
  );
}

export default App;
