import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  centered = false,
  className = '',
}) => {
  return (
    <h2
      className={`
        text-2xl md:text-3xl lg:text-4xl font-bold mb-6 
        ${centered ? 'text-center' : ''}
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;