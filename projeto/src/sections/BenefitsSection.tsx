import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedReveal from '../components/AnimatedReveal';
import { Sparkles, Moon, Shirt, Heart, Clock, Coffee } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <Container>
        <AnimatedReveal>
          <SectionTitle centered>
            Transformações Que Vão Além do Peso
          </SectionTitle>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <AnimatedReveal delay={100}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 mb-4">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Menos Barriga</h3>
              <p className="text-gray-600">
                Redução visível já nos primeiros 3-5 dias, especialmente na área abdominal
              </p>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 mb-4">
                <Moon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sono Mais Profundo</h3>
              <p className="text-gray-600">
                Melhor qualidade de sono e mais energia ao acordar logo nos primeiros dias
              </p>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={300}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 mb-4">
                <Shirt className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Roupas Servindo</h3>
              <p className="text-gray-600">
                Volte a usar peças que estavam guardadas no armário por não servirem mais
              </p>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={400}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Menos Inflamação</h3>
              <p className="text-gray-600">
                Redução de inchaço, dores articulares e melhora na disposição geral
              </p>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={500}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 mb-4">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados Rápidos</h3>
              <p className="text-gray-600">
                Mudanças visíveis em 3-7 dias, motivando você a continuar o processo
              </p>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={600}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 mb-4">
                <Coffee className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sem Restrições</h3>
              <p className="text-gray-600">
                Continue comendo seus alimentos favoritos enquanto emagrece de forma saudável
              </p>
            </div>
          </AnimatedReveal>
        </div>
        
        <AnimatedReveal delay={700}>
          <div className="bg-red-50 border border-red-100 rounded-xl p-6 md:p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
              Het werkt zelfs als...
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-6">
              <div className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                <span>Você tenha mais de 40 anos</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                <span>Você tenha compulsão por doce</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                <span>Seu metabolismo seja lento</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">✓</span>
                <span>Você já tenha tentado de tudo</span>
              </div>
            </div>
            
            <p className="font-medium text-gray-700">
              O Ritual da Maçã foi desenvolvido especialmente para quem já tentou outras soluções sem sucesso
            </p>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default BenefitsSection;