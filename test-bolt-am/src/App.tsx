import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import LoginPage from './pages/LoginPage';
import ModulesPage from './pages/ModulesPage';
import ModuleContentPage from './pages/ModuleContentPage';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/module/:moduleId" element={<ModuleContentPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;