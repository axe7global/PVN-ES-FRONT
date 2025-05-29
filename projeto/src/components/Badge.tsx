import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'red' | 'green' | 'yellow';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'red',
  className = '' 
}) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-amber-100 text-amber-800',
  };

  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${colorClasses[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;