import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedReveal from '../components/AnimatedReveal';
import CheckItem from '../components/CheckItem';
import { Apple, Flame, Scale, Hourglass } from 'lucide-react';

const MechanismSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white" id="mechanism">
      <Container>
        <AnimatedReveal>
          <SectionTitle centered>
            O Ritual Japonês da Maçã: O Segredo Redescoberto Para Destravar Seu Metabolismo
          </SectionTitle>
        </AnimatedReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimatedReveal delay={100} direction="right">
            <div>
              <div className="mb-8">
                <p className="text-lg md:text-xl mb-4">
                  Após analisar mais de 327 estudos científicos sobre emagrecimento, descobrimos uma combinação simples que:
                </p>
                
                <div className="space-y-3 mb-6">
                  <CheckItem>
                    <span className="font-medium">Desbloqueia seu metabolismo em 14 dias</span> - mesmo se você tem mais de 40 anos
                  </CheckItem>
                  <CheckItem>
                    <span className="font-medium">Reduz a inflamação celular</span> que está impedindo a queima de gordura
                  </CheckItem>
                  <CheckItem>
                    <span className="font-medium">Funciona sem dietas restritivas</span> ou exercícios intensos
                  </CheckItem>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold mb-4 text-red-800">
                  O Ritual Simples de 2 Minutos:
                </h3>
                <p className="text-lg mb-2">
                  <span className="font-medium">Maçã + Limão + Sal Rosa às 10:00 da manhã</span>
                </p>
                <p className="text-gray-700">
                  Consumidos da maneira exata que vou te mostrar, estes 3 ingredientes ativam o "interruptor metabólico" que inicia a queima de gordura enquanto você dorme.
                </p>
              </div>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200} direction="left">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Flame className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Desinflama Células de Gordura</h4>
                    <p className="text-gray-600">
                      Os polifenóis da maçã reduzem a inflamação que bloqueia a perda de peso
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Scale className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Regula Hormônios da Fome</h4>
                    <p className="text-gray-600">
                      A combinação exata reduz a grelina (hormônio da fome) em até 43%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Hourglass className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ativa Queima Calórica em Repouso</h4>
                    <p className="text-gray-600">
                      Aumenta seu metabolismo basal em até 24% nas horas seguintes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Apple className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ingredientes Acessíveis</h4>
                    <p className="text-gray-600">
                      Tudo o que você precisa custa menos de R$10 e está disponível em qualquer mercado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
};

export default MechanismSection;