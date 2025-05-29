import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedReveal from '../components/AnimatedReveal';
import FAQItem from '../components/FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Em quanto tempo vou começar a ver resultados?",
      answer: "A maioria das pessoas nota os primeiros resultados entre 3-7 dias, principalmente na redução de inchaço e medidas na região abdominal. Para resultados mais significativos no peso, o ideal é seguir o ritual por pelo menos 14 dias."
    },
    {
      question: "Preciso fazer exercícios junto com o ritual?",
      answer: "Não é necessário. O Ritual da Maçã funciona independentemente de exercícios físicos. Na verdade, para muitas pessoas com mais de 35 anos, reduzir exercícios intensos temporariamente pode acelerar os resultados por diminuir a inflamação crônica."
    },
    {
      question: "Funciona para homens também?",
      answer: "Sim! Embora o programa tenha sido desenvolvido inicialmente para mulheres, temos centenas de homens que alcançaram excelentes resultados com o Ritual da Maçã, especialmente na redução da gordura abdominal."
    },
    {
      question: "Tenho que seguir alguma dieta específica?",
      answer: "Não é necessário seguir uma dieta restritiva. O Ritual da Maçã funciona com sua alimentação normal. Incluímos um guia de alimentos aliados que podem potencializar os resultados, mas não é obrigatório segui-lo para ver resultados."
    },
    {
      question: "Posso fazer o ritual se tiver diabetes?",
      answer: "Sim. Na verdade, muitos de nossos clientes com diabetes tipo 2 relatam melhora nos níveis de glicose após seguirem o ritual. De qualquer forma, recomendamos consultar seu médico, especialmente se usar insulina ou medicamentos para diabetes."
    },
    {
      question: "Como vou receber o material após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um email com as instruções de acesso à área de membros, onde todos os materiais estarão disponíveis para download e visualização. O acesso é instantâneo e funciona 24 horas por dia."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <AnimatedReveal>
          <div className="max-w-3xl mx-auto">
            <SectionTitle centered>
              Veelgestelde vragen
            </SectionTitle>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                />
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default FAQSection;