import React from 'react';
import { BookOpenCheck } from 'lucide-react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 40 }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-primary-600">
        <BookOpenCheck size={size} />
      </div>
      <h1 className="text-2xl font-bold text-primary-700">MemberHub</h1>
    </div>
  );
};

export default Logo;