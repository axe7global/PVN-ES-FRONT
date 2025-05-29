import React from 'react';
import Container from '../components/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <div className="text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Ritual da Maçã. Todos os direitos reservados.
          </p>
          
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacybeleid
            </a>
          </div>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Os resultados podem variar de pessoa para pessoa. Este produto não substitui o acompanhamento médico profissional. 
            Sempre consulte um profissional de saúde antes de iniciar qualquer programa de emagrecimento.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;