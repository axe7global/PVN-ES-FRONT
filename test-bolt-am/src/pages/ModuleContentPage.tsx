import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import Header from '../components/Header';
import YoutubeEmbed from '../components/YoutubeEmbed';
import GammaAppEmbed from '../components/GammaAppEmbed';
import { useAppContext } from '../context/AppContext';
import { ArrowLeft } from 'lucide-react';

const ModuleContentPage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { state } = useAppContext();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  if (!state.isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  
  const module = modules.find((m) => m.id === Number(moduleId));
  
  if (!module) {
    return <Navigate to="/modules" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Header showLogout />
        
        <button
          onClick={() => navigate('/modules')}
          className="flex items-center gap-1 text-primary-600 hover:text-primary-800 mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Voltar para módulos</span>
        </button>
        
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {module.title}
          </h1>
          <p className="text-gray-600">{module.description}</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          {module.type === 'video' && Array.isArray(module.content) ? (
            <div className="space-y-8">
              {module.content.map((videoId, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {module.title} - Parte {index + 1}
                  </h2>
                  <YoutubeEmbed videoId={videoId} />
                </div>
              ))}
            </div>
          ) : module.type === 'book' && typeof module.content === 'string' ? (
            <GammaAppEmbed url={module.content} />
          ) : (
            <div className="text-center p-10">
              <p className="text-red-500">Conteúdo não disponível</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleContentPage;