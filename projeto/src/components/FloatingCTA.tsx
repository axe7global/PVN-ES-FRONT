import React, { useEffect, useState } from 'react';
import Button from './Button';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past 50% of viewport height
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-3 md:p-4 transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-lg mx-auto">
        <Button 
          primary 
          fullWidth
          withArrow
          className="pulse-animation"
        >
          Quero o Ritual da Maçã por R$29
        </Button>
        <p className="text-center text-xs mt-2 text-gray-600">
          Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </div>
  );
};

export default FloatingCTA;