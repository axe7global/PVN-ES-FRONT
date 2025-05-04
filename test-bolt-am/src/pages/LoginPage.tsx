import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Logo from '../components/Logo';
import { ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setIsInvalid(true);
      return;
    }
    
    login(email);
    navigate('/modules');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <Logo size={56} />
          <h2 className="mt-6 text-xl text-center text-gray-700">
            Área exclusiva de membros
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Seu email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsInvalid(false);
              }}
              placeholder="Digite seu email de acesso"
              className={`w-full px-4 py-3 rounded-lg border ${
                isInvalid ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
              required
            />
            {isInvalid && (
              <p className="mt-1 text-sm text-red-600">
                Por favor, digite um email válido
              </p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Acessar área de membros</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;