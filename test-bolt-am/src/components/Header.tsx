import React from 'react';
import Logo from './Logo';
import { useAppContext } from '../context/AppContext';

interface HeaderProps {
  showLogout?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLogout = false }) => {
  const { state, logout } = useAppContext();

  return (
    <header className="py-6 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <Logo />
        {showLogout && state.isLoggedIn && (
          <button
            onClick={logout}
            className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            Sair
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;