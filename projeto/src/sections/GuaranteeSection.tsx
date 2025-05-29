import React from 'react';
import Container from '../components/Container';
import AnimatedReveal from '../components/AnimatedReveal';
import { Shield } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <AnimatedReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-md flex flex-col items-center gap-6 md:gap-10">
              <div className="text-red-600">
                <Shield className="w-24 h-24 md:w-32 md:h-32" />
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Onvoorwaardelijke 7-dagen-garantie
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  Experimente o Ritual da Maçã por 7 dias. Se não ver resultados concretos ou não ficar satisfeita por qualquer motivo, basta enviar um email e devolveremos 100% do seu investimento.
                </p>
                
                <p className="font-medium text-gray-800">
                  Sem perguntas, sem burocracia. Risco zero para você.
                </p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default GuaranteeSection;