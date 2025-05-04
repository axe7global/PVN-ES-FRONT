import React from 'react';
import { Module } from '../types';
import { Link } from 'react-router-dom';
import { Video, Book } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <Link
      to={`/module/${module.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={module.image}
          alt={module.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
          {module.type === 'video' ? (
            <Video className="text-primary-600" size={20} />
          ) : (
            <Book className="text-primary-600" size={20} />
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{module.title}</h3>
        <p className="text-sm text-gray-600">{module.description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;