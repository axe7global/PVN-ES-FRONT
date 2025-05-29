import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';
import { AlertTriangle, Clock } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = 'linkdecheckoutaqui.com';
  };

  return (
    <section className="py-12 md:py-16 bg-red-50">
      <Container>
        <AnimatedReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-red-600 mb-4 flex justify-center">
              <AlertTriangle className="w-12 h-12" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Atenção: Acesso Limitado
            </h2>
            
            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-md mb-8">
              <p className="text-xl text-red-700 font-medium mb-4 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" /> Apenas 300 acessos liberados por lote
              </p>
              
              <p className="text-gray-700 mb-4">
                Para garantir a qualidade do suporte e evitar sobrecarga nos nossos servidores, limitamos os acessos ao Ritual da Maçã.
              </p>
              
              <p className="font-bold text-red-600">
                Esta oferta pode sair do ar a qualquer momento.
              </p>
            </div>
            
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
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default UrgencySection;