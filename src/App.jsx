import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from './components/ui/card';
import {
  Calendar,
  Users,
  DollarSign,
  Heart,
  Star,
  Activity,
  ThumbsUp,
  TrendingUp,
  Clock,
  FileText,
  PlusCircle,
} from 'lucide-react';

const PilatesStudioDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'agendamento':
        return <AgendamentoContent />;
      case 'clientes':
        return <ClientesContent />;
      case 'pagamentos':
        return <PagamentosContent />;
      case 'relatorios':
        return <RelatoriosContent />;
      case 'cadastro':
        return <CadastroContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-600 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Estúdio Pilates</h1>
        </div>
        <nav className="mt-8">
          <NavButton
            icon={<Calendar size={20} />}
            label="Dashboard"
            tab="dashboard"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavButton
            icon={<Calendar size={20} />}
            label="Agendamento"
            tab="agendamento"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavButton
            icon={<Users size={20} />}
            label="Clientes"
            tab="clientes"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavButton
            icon={<DollarSign size={20} />}
            label="Pagamentos"
            tab="pagamentos"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavButton
            icon={<FileText size={20} />}
            label="Relatórios"
            tab="relatorios"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavButton
            icon={<PlusCircle size={20} />}
            label="Cadastro"
            tab="cadastro"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </nav>
      </div>

      {/* Main content */}
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

const NavButton = ({ icon, label, tab, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`flex items-center w-full px-4 py-2 text-left ${
      activeTab === tab ? 'bg-indigo-700' : 'hover:bg-indigo-500'
    }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </button>
);

const DashboardCard = ({ title, value, icon: Icon, color, subtitle }) => (
  <Card
    className={`bg-gradient-to-br from-${color}-400 to-${color}-600 text-white`}
  >
    <CardContent>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="text-lg font-medium mb-1">{title}</CardTitle>
          <p className="text-3xl font-bold">{value}</p>
          {subtitle && (
            <CardDescription className="text-sm mt-1 opacity-80">
              {subtitle}
            </CardDescription>
          )}
        </div>
        <Icon size={40} className="opacity-70" />
      </div>
    </CardContent>
  </Card>
);

const DashboardContent = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Aulas Hoje"
        value="18"
        icon={Calendar}
        color="blue"
        subtitle="2 vagas restantes"
      />
      <DashboardCard
        title="Clientes Ativos"
        value="203"
        icon={Users}
        color="green"
        subtitle="+8% este mês"
      />
      <DashboardCard
        title="Receita Mensal"
        value="R$ 20.200"
        icon={DollarSign}
        color="yellow"
        subtitle="Meta: R$ 22.000"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Taxa de Retenção"
        value="90%"
        icon={Heart}
        color="pink"
        subtitle="Fidelidade alta"
      />
      <DashboardCard
        title="Avaliação Média"
        value="4.9★"
        icon={Star}
        color="orange"
        subtitle="150 avaliações este mês"
      />
      <DashboardCard
        title="Ocupação Média"
        value="87%"
        icon={Activity}
        color="indigo"
        subtitle="Capacidade total: 250"
      />
    </div>

    <Card className="bg-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Destaques do Mês</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ThumbsUp className="mr-2 text-green-500" size={18} />
            <span>Aula mais popular: Pilates Avançado (90% ocupação)</span>
          </li>
          <li className="flex items-center">
            <TrendingUp className="mr-2 text-blue-500" size={18} />
            <span>Crescimento de novos clientes: 20%</span>
          </li>
          <li className="flex items-center">
            <Clock className="mr-2 text-purple-500" size={18} />
            <span>Horário de pico: 17:00 - 19:00</span>
          </li>
          <li className="flex items-center">
            <Star className="mr-2 text-yellow-500" size={18} />
            <span>Instrutor mais bem avaliado: João Santos (4.9★)</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const AgendamentoContent = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Próximas Aulas</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <Clock className="mr-2" size={18} />
            <span>09:00 - Pilates Iniciante (5/10 vagas)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Clock className="mr-2" size={18} />
            <span>10:30 - Pilates Intermediário (8/10 vagas)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Clock className="mr-2" size={18} />
            <span>14:00 - Pilates Avançado (9/10 vagas)</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const ClientesContent = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Lista de Clientes</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Maria Silva - Plano Mensal (20 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>João Santos - Pacote 10 Aulas (4 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Ana Oliveira - Aula Avulsa</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const PagamentosContent = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Últimas Transações</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Maria Silva - R$ 200,00 - Plano Mensal (Pago)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>João Santos - R$ 150,00 - Pacote 5 Aulas (Pendente)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Ana Oliveira - R$ 50,00 - Aula Avulsa (Pago)</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const RelatoriosContent = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Resumo Mensal</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <FileText className="mr-2" size={18} />
            <span>Total de Aulas: 130 (↑10% em relação ao mês anterior)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <FileText className="mr-2" size={18} />
            <span>Novos Clientes: 28 (↑15% em relação ao mês anterior)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <FileText className="mr-2" size={18} />
            <span>
              Receita Total: R$ 20.200,00 (↑12% em relação ao mês anterior)
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const CadastroContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Cadastro de Cliente</h3>
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="nome"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="telefone"
            >
              Telefone
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="telefone"
              type="tel"
            />
          </div>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Cadastrar Cliente
          </button>
        </form>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Cadastro de Aula</h3>
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="nomeAula"
            >
              Nome da Aula
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="nomeAula"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="instrutor"
            >
              Instrutor
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="instrutor"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="horario"
            >
              Horário
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="horario"
              type="time"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="capacidade"
            >
              Capacidade
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="capacidade"
              type="number"
            />
          </div>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Cadastrar Aula
          </button>
        </form>
      </CardContent>
    </Card>
  </div>
);

export default PilatesStudioDashboard;
