import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface CheckItemProps {
  children: React.ReactNode;
  type?: 'check' | 'x';
  className?: string;
}

const CheckItem: React.FC<CheckItemProps> = ({ 
  children, 
  type = 'check',
  className = '' 
}) => {
  return (
    <div className={`flex items-start gap-3 mb-3 ${className}`}>
      {type === 'check' ? (
        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
      )}
      <span>{children}</span>
    </div>
  );
};

export default CheckItem;