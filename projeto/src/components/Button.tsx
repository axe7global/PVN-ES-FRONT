import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  withArrow?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  withArrow = false,
  small = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${primary 
          ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl' 
          : 'bg-white hover:bg-gray-100 text-red-600 border border-red-600'} 
        ${fullWidth ? 'w-full' : ''}
        ${small ? 'text-sm py-2 px-4' : 'text-base md:text-lg py-3 px-6 md:py-4 md:px-8'}
        rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2
        ${className}
      `}
    >
      {children}
      {withArrow && <ArrowRight className="w-5 h-5 animate-pulse" />}
    </button>
  );
};

export default Button;