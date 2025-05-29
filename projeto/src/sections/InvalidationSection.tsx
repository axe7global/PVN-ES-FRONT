import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedReveal from '../components/AnimatedReveal';
import CheckItem from '../components/CheckItem';
import { DumbbellIcon as DumbellIcon, Utensils, Calculator } from 'lucide-react';

const InvalidationSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <Container>
        <AnimatedReveal>
          <SectionTitle centered>
            Por que as soluções tradicionais falham para 87% das pessoas
          </SectionTitle>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatedReveal delay={100}>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500 h-full">
              <div className="mb-4 flex justify-center">
                <div className="bg-red-100 p-3 rounded-full">
                  <Calculator className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">Contar Calorias</h3>
              <CheckItem type="x">
                Onderzoeken tonen aan dat 95% van de mensen binnen 30 dagen stoppen met calorieën tellen
              </CheckItem>
              <CheckItem type="x">
                Torna as refeições estressantes e diminui seu metabolismo a longo prazo
              </CheckItem>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500 h-full">
              <div className="mb-4 flex justify-center">
                <div className="bg-red-100 p-3 rounded-full">
                  <Utensils className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">Dietas Restritivas</h3>
              <CheckItem type="x">
                Aumentam os hormônios da fome (grelina) e provocam o temido efeito rebote
              </CheckItem>
              <CheckItem type="x">
                Causam deficiências nutricionais e reduzem sua energia diária
              </CheckItem>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={300}>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500 h-full">
              <div className="mb-4 flex justify-center">
                <div className="bg-red-100 p-3 rounded-full">
                  <DumbellIcon className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">Academia</h3>
              <CheckItem type="x">
                O exercício isolado tem impacto de apenas 15% na perda de peso, segundo Harvard
              </CheckItem>
              <CheckItem type="x">
                Para quem tem mais de 35 anos, pode aumentar a inflamação e bloquear a queima de gordura
              </CheckItem>
            </div>
          </AnimatedReveal>
        </div>
        
        <AnimatedReveal delay={400}>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mt-12 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-bold text-center text-red-800">
              O verdadeiro problema está no metabolismo bloqueado.
            </p>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default InvalidationSection;