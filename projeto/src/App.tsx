import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import PainSection from './sections/PainSection';
import InvalidationSection from './sections/InvalidationSection';
import MechanismSection from './sections/MechanismSection';
import TestimonialsSection from './sections/TestimonialsSection';
import OfferSection from './sections/OfferSection';
import BenefitsSection from './sections/BenefitsSection';
import GuaranteeSection from './sections/GuaranteeSection';
import UrgencySection from './sections/UrgencySection';
import FAQSection from './sections/FAQSection';
import Footer from './sections/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Ritual Japonês da Maçã | Perca até 5kg em 14 dias";
    
    // Change favicon to an apple icon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23e11d48'><path d='M12 2a4 4 0 0 1 4 4v2h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2z'/></svg>";
    }
  }, []);

  return (
    <div className="font-sans">
      <HeroSection />
      <PainSection />
      <InvalidationSection />
      <MechanismSection />
      <TestimonialsSection />
      <OfferSection />
      <BenefitsSection />
      <GuaranteeSection />
      <UrgencySection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;