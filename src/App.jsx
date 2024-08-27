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
  Dumbbell, // Ícone de haltere substituto
  Menu, // Ícone de menu hambúrguer
} from 'lucide-react';

const PilatesStudioDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'agendamento': // A lógica interna ainda usa "agendamento"
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
    setSidebarOpen(false); // Fecha a sidebar após a seleção
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu de Hambúrguer */}
      <div className="md:hidden p-4">
        <Menu size={24} onClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      <div
        className={`fixed md:relative z-30 top-0 left-0 h-full w-64 bg-indigo-600 text-white transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-4 flex items-center">
          <Dumbbell size={24} className="mr-2" /> {/* Ícone de haltere substituto */}
          <h1 className="text-2xl font-bold">Estúdio Prilates</h1> {/* Nome atualizado */}
        </div>
        <nav className="mt-8">
          <NavButton
            icon={<Calendar size={20} />}
            label="Dashboard"
            tab="dashboard"
            activeTab={activeTab}
            handleClick={handleNavButtonClick}
          />
          <NavButton
            icon={<Calendar size={20} />}
            label="Agenda" // Nome da aba atualizado
            tab="agendamento" // A lógica interna ainda usa "agendamento"
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
      <div className="flex-1 overflow-y-auto">
        <main className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          {renderContent()}
        </main>
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

export default PilatesStudioDashboard;
