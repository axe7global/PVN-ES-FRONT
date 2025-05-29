import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';
import CheckItem from '../components/CheckItem';
import { Video, FileText, Lock } from 'lucide-react';

const OfferSection: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = 'linkdecheckoutaqui.com';
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <AnimatedReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-500 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
                  Tenha Acesso ao Ritual da Maçã <span className="text-red-600">Hoje Mesmo</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700">
                  Tijdelijk aanbod - Directe toegang
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8">
                <div className="space-y-5">
                  <h3 className="font-bold text-xl">
                    O que você recebe por $5:
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                        <Video className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Vídeo Passo a Passo do Ritual</p>
                        <p className="text-sm text-gray-600">
                          Aprenda exatamente como preparar e quando consumir para maximizar resultados
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Guia com 7 Rituais</p>
                        <p className="text-sm text-gray-600">
                          Variações para acelerar resultados e evitar adaptação metabólica
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Cardápio Bônus</p>
                        <p className="text-sm text-gray-600">
                          14 dias de refeições fáceis que potencializam o efeito do ritual
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Lista de Alimentos Aliados</p>
                        <p className="text-sm text-gray-600">
                          Alimentos que aceleram ainda mais seus resultados (inclui doces permitidos)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100">
                    <div className="text-center mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        80% OFF
                      </span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-gray-500 line-through">De $25</span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-4xl font-bold text-green-600">$5</span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-gray-600">pagamento único</span>
                    </div>
                    
                    <Button 
                      primary 
                      fullWidth
                      withArrow
                      onClick={handleButtonClick}
                      className="mb-5"
                    >
                      Ik wil nu beginnen
                    </Button>
                    
                    <div className="text-center text-sm text-gray-600">
                      <Lock className="w-4 h-4 inline mr-1" /> 
                      Pagamento 100% seguro
                    </div>
                  </div>
                  
                  <div className="mt-5 text-center">
                    <span className="font-medium">Acesso vitalício e imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default OfferSection;