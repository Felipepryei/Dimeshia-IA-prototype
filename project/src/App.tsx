import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import BrandEssence from './components/BrandEssence';
import AmaoSection from './components/AmaoSection';
import StudioDemo from './components/StudioDemo';
import StudioEnvironment from './components/StudioEnvironment';
import LivePipelineDemo from './components/LivePipelineDemo';
import ModelComparison from './components/ModelComparison';
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
    const params = new URLSearchParams(window.location.search);
    setShowDemo(params.get('demo') === 'true');
  }, []);

  if (showDemo) {
    return <InteractiveDemo />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <LogoShowcase />
      <BrandEssence />
      <AmaoSection />
      <StudioDemo />
      <StudioEnvironment />
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <LivePipelineDemo />
        </div>
      </section>
      <ModelComparison />
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
