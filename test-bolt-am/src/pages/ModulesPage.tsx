import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';
import { modules } from '../data/modules';

const ModulesPage: React.FC = () => {
  const { state } = useAppContext();
  
  // Redirect to login if not authenticated
  if (!state.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Header showLogout />
        
        <div className="text-center mt-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Bem-vindo(a) à sua área de membros
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecione o módulo que você deseja acessar abaixo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModulesPage;