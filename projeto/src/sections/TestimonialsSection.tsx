import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedReveal from '../components/AnimatedReveal';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Eliminei 4kg na primeira semana seguindo o ritual exatamente como explicado. A melhor parte é que não precisei cortar o pão no café da manhã!",
      name: "Juliana",
      age: 39,
      result: "- 4kg em 7 dias"
    },
    {
      quote: "Minha barriga murchou em 6 dias, as roupas começaram a ficar largas. Tentei de tudo antes, mas só o Ritual da Maçã funcionou para mim.",
      name: "Carol",
      age: 44,
      result: "- 8kg em 21 dias"
    },
    {
      quote: "Tenho 52 anos e achei que não conseguiria mais emagrecer. O ritual é simples e fácil de seguir, e os resultados são incríveis!",
      name: "Regina",
      age: 52,
      result: "- 6kg em 14 dias"
    },
    {
      quote: "Já tinha desistido de tentar emagrecer depois da menopausa. Com o Ritual da Maçã, perdi 3kg na primeira semana e minha energia voltou!",
      name: "Márcia",
      age: 47,
      result: "- 11kg em 30 dias"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <Container>
        <AnimatedReveal>
          <div className="text-center mb-12">
            <span className="text-lg text-red-600 font-medium mb-2 block">Resultados Reais</span>
            <SectionTitle centered>
              Veja o que aconteceu com quem já experimentou o Ritual da Maçã
            </SectionTitle>
          </div>
        </AnimatedReveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              age={testimonial.age}
              result={testimonial.result}
              delay={index * 100 + 100}
            />
          ))}
        </div>
        
        <AnimatedReveal delay={600}>
          <div className="bg-white rounded-lg p-6 mt-12 border border-gray-200 shadow-md max-w-3xl mx-auto">
            <p className="text-center text-lg md:text-xl font-medium mb-4">
              Esses são apenas alguns dos resultados que recebemos todos os dias
            </p>
            <p className="text-center text-gray-600">
              Meer dan 12.748 mensen hebben hun lichaam al getransformeerd met het Appelritueel
            </p>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
};

export default TestimonialsSection;