import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import BrandEssence from './components/BrandEssence';
import AmaoSection from './components/AmaoSection';
import AmaoLiveDemo from './components/AmaoLiveDemo';
import StudioDemo from './components/StudioDemo';
import LivePipelineDemo from './components/LivePipelineDemo';
import AIAutomationLab from './components/AIAutomationLab';
import TechnologyExperience from './components/TechnologyExperience';
import AIOptimizationTool from './components/AIOptimizationTool';
import ClientBenefits from './components/ClientBenefits';
import DimeshiaServices from './components/DimeshiaServices';
import ImplementationGuide from './components/ImplementationGuide';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import InteractiveDemo from './components/InteractiveDemo';
import LiveTechShowcase from './components/LiveTechShowcase';

function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [demoType, setDemoType] = useState('interactive');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demo = params.get('demo');
    if (demo) {
      setShowDemo(true);
      setDemoType(demo === 'tech' ? 'tech' : 'interactive');
    }
  }, []);

  if (showDemo) {
    return demoType === 'tech' ? <LiveTechShowcase /> : <InteractiveDemo />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <LogoShowcase />
      <BrandEssence />
      <AmaoSection />
      <AmaoLiveDemo />
      <StudioDemo />
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <LivePipelineDemo />
        </div>
      </section>
      <AIAutomationLab />
      <TechnologyExperience />
      <AIOptimizationTool />
      <ClientBenefits />
      <DimeshiaServices />
      <ImplementationGuide />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
