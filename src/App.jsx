import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Agendamento from './pages/Agendamento';
import Clientes from './pages/Clientes';
import Pagamentos from './pages/Pagamentos';
import Relatorios from './pages/Relatorios';
import Cadastro from './pages/Cadastro';
import {
  Calendar,
  Users,
  DollarSign,
  FileText,
  PlusCircle,
  Dumbbell,
  Home,
  MoreHorizontal,
} from 'lucide-react';

const PilatesStudioDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'agendamento':
        return <Agendamento />;
      case 'clientes':
        return <Clientes />;
      case 'pagamentos':
        return <Pagamentos />;
      case 'relatorios':
        return <Relatorios />;
      case 'cadastro':
        return <Cadastro />;
      default:
        return <Dashboard />;
    }
  };

  const handleNavButtonClick = (tab) => {
    setActiveTab(tab);
    setShowMoreOptions(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (apenas desktop) */}
      <div className="hidden md:block fixed md:relative z-30 top-0 left-0 h-full w-64 bg-indigo-600 text-white">
        <div className="p-4 flex items-center">
          <Dumbbell size={24} className="mr-2" />
          <h1 className="text-2xl font-bold">Estúdio Prilates</h1>
        </div>
        <nav className="mt-8">
          <NavButton
            icon={<Home size={20} />}
            label="Dashboard"
            tab="dashboard"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
          <NavButton
            icon={<Calendar size={20} />}
            label="Agenda"
            tab="agendamento"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
          <NavButton
            icon={<Users size={20} />}
            label="Clientes"
            tab="clientes"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
          <NavButton
            icon={<DollarSign size={20} />}
            label="Pagamentos"
            tab="pagamentos"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
          <NavButton
            icon={<FileText size={20} />}
            label="Relatórios"
            tab="relatorios"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
          <NavButton
            icon={<PlusCircle size={20} />}
            label="Cadastro"
            tab="cadastro"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
        </nav>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Cabeçalho (apenas mobile) */}
        <header className="md:hidden bg-indigo-600 text-white p-4 flex items-center">
          <Dumbbell size={24} className="mr-2" />
          <h1 className="text-xl font-bold">Estúdio Prilates</h1>
        </header>

        {/* Área de conteúdo scrollável */}
        <div className="flex-1 overflow-y-auto md:overflow-y-visible">
          <main className="p-4 md:p-8 pb-24 md:pb-8"> {/* Aumentado o padding-bottom para dar espaço ao menu fixo */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            {renderContent()}
          </main>
        </div>

        {/* Menu de Navegação Inferior (apenas mobile) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
          <div className="flex justify-around items-center">
            <IconButton icon={<Home size={28} />} tab="dashboard" activeTab={activeTab} handleClick={handleNavButtonClick} />
            <IconButton icon={<Calendar size={28} />} tab="agendamento" activeTab={activeTab} handleClick={handleNavButtonClick} />
            <IconButton icon={<Users size={28} />} tab="clientes" activeTab={activeTab} handleClick={handleNavButtonClick} />
            <IconButton icon={<FileText size={28} />} tab="relatorios" activeTab={activeTab} handleClick={handleNavButtonClick} />
            <div className="relative">
              <IconButton 
                icon={<MoreHorizontal size={28} />} 
                tab="more" 
                activeTab={activeTab} 
                handleClick={() => setShowMoreOptions(!showMoreOptions)} 
              />
              {showMoreOptions && (
                <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded-md shadow-lg">
                  <button 
                    onClick={() => handleNavButtonClick('pagamentos')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Pagamentos
                  </button>
                  <button 
                    onClick={() => handleNavButtonClick('cadastro')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Cadastro
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const NavButton = ({ icon, label, tab, activeTab, handleClick }) => (
  <button
    onClick={() => handleClick(tab)}
    className={`flex items-center w-full px-4 py-2 text-left ${
      activeTab === tab ? 'bg-indigo-700' : 'hover:bg-indigo-500'
    }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </button>
);

const IconButton = ({ icon, tab, activeTab, handleClick }) => (
  <button
    onClick={() => handleClick(tab)}
    className={`p-2 ${activeTab === tab ? 'text-indigo-600' : 'text-gray-600'}`}
  >
    {icon}
  </button>
);

export default PilatesStudioDashboard;