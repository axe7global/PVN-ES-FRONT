import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';

interface TestimonialCardProps {
  quote: string;
  name: string;
  age: number;
  result?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  age, 
  result,
  delay = 0
}) => {
  return (
    <AnimatedReveal delay={delay} className="h-full">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
        <div className="text-red-500 mb-3">
          <Quote className="w-6 h-6" />
        </div>
        <p className="text-gray-700 mb-4 flex-grow">"{quote}"</p>
        <div className="mt-auto">
          {result && (
            <p className="font-bold text-red-600 mb-2">{result}</p>
          )}
          <p className="text-gray-600 font-medium">
            {name}, {age}
          </p>
        </div>
      </div>
    </AnimatedReveal>
  );
};

export default TestimonialCard;