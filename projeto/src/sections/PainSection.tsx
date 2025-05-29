import React from 'react';
import Container from '../components/Container';
import AnimatedReveal from '../components/AnimatedReveal';

const PainSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white pain-section">
      <Container>
        <div className="max-w-3xl mx-auto">
          <AnimatedReveal>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Você já se perguntou por que algumas pessoas perdem peso facilmente, enquanto você...
              </h2>
              
              <div className="text-gray-700 space-y-4">
                <p>
                  ...se esforça ao máximo, tenta dieta após dieta, e o resultado continua o mesmo?
                </p>
                
                <p>
                  Eu entendo essa frustração. A sensação de ver as roupas cada vez mais apertadas, 
                  de evitar fotos, de tentar esconder a barriga... é exaustivo.
                </p>
                
                <p className="text-xl md:text-2xl font-medium text-red-600 italic my-6">
                  A culpa não é sua.
                </p>
                
                <p>
                  Por anos, nos disseram que bastava "comer menos e se exercitar mais". 
                  Que precisávamos ter "mais força de vontade".
                </p>
                
                <p>
                  Mas a ciência já descobriu: seu corpo está travado em um ciclo vicioso 
                  que impede a queima de gordura - não importa o quanto você se esforce.
                </p>
                
                <p className="font-medium">
                  E é exatamente isso que vou te mostrar como resolver nas próximas linhas...
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
};

export default PainSection;