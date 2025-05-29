import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';

const HeroSection: React.FC = () => {
  const handleButtonClick = () => {
    const painSection = document.querySelector('.pain-section');
    if (painSection) {
      painSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal delay={100}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
              Use esse ritual de 2 minutos antes do jantar e derreta até 5kg em 14 dias
            </h1>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-700">
              Het werkt zelfs als je alles al hebt geprobeerd en niets heeft gewerkt.
            </p>
          </AnimatedReveal>
          
          <AnimatedReveal delay={300}>
            <div className="mb-8">
              <Button 
                primary 
                fullWidth 
                withArrow
                onClick={handleButtonClick}
                className="max-w-lg mx-auto"
              >
                Ik wil nu beginnen
              </Button>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-600">
              <div className="flex items-center">
                <span className="bg-red-100 text-red-800 p-1 rounded-full mr-2">✓</span>
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 text-red-800 p-1 rounded-full mr-2">✓</span>
                <span>100% Digital</span>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 text-red-800 p-1 rounded-full mr-2">✓</span>
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;