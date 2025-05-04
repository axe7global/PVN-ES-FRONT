import React, { createContext, useState, useContext } from 'react';
import { AppState } from '../types';

interface AppContextProps {
  state: AppState;
  login: (email: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    userEmail: '',
    isLoggedIn: false,
  });

  const login = (email: string) => {
    setState({
      userEmail: email,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setState({
      userEmail: '',
      isLoggedIn: false,
    });
  };

  return (
    <AppContext.Provider value={{ state, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};