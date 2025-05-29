import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg flex items-center">
          <span className="text-red-500 mr-2">❓</span>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-red-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-red-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 pl-7">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;