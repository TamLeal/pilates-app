import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { DollarSign, CheckCircle, XCircle, Filter, Sliders, RefreshCcw } from 'lucide-react';

const Pagamentos = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filterStatus, setFilterStatus] = useState('Todos');
  const [filterPlan, setFilterPlan] = useState('Todos');

  const pagamentos = [
    { name: 'Maria Silva', amount: '$200.00', plan: 'Plano Mensal', status: 'Pago', date: '08-01-2024', paymentMethod: 'Cartão de Crédito', details: 'Pagamento via Visa' },
    { name: 'João Santos', amount: '$200.00', plan: 'Plano Mensal', status: 'Pendente', date: '08-02-2024', paymentMethod: 'Transferência Bancária', details: 'Aguardando confirmação do banco.', observation: 'Aguardando confirmação do banco.' },
    { name: 'Ana Oliveira', amount: '$200.00', plan: 'Plano Mensal', status: 'Pago', date: '08-03-2024', paymentMethod: 'Cartão de Crédito', details: 'Pagamento via MasterCard' },
    { name: 'Lucas Souza', amount: '$150.00', plan: 'Pacote 10 Aulas', status: 'Pago', date: '08-04-2024', paymentMethod: 'Cartão de Débito', details: 'Pagamento via Visa Débito' },
    { name: 'Beatriz Lima', amount: '$150.00', plan: 'Pacote 10 Aulas', status: 'Pendente', date: '08-05-2024', paymentMethod: 'Transferência Bancária', details: 'Aguardando confirmação.', observation: 'Cartão de crédito expirado.' },
    { name: 'Rafael Costa', amount: '$150.00', plan: 'Pacote 10 Aulas', status: 'Pago', date: '08-06-2024', paymentMethod: 'Cartão de Crédito', details: 'Pagamento via American Express' },
    { name: 'Carlos Silva', amount: '$50.00', plan: 'Aula Avulsa', status: 'Pago', date: '08-07-2024', paymentMethod: 'Cartão de Crédito', details: 'Pagamento via Visa' },
    { name: 'Laura Almeida', amount: '$50.00', plan: 'Aula Avulsa', status: 'Pendente', date: '08-08-2024', paymentMethod: 'Transferência Bancária', details: 'Aguardando depósito.', observation: 'Aguardando depósito bancário.' },
    { name: 'Fernanda Ribeiro', amount: '$50.00', plan: 'Aula Avulsa', status: 'Pago', date: '08-09-2024', paymentMethod: 'Cartão de Débito', details: 'Pagamento via MasterCard Débito' },
  ];

  const handleTransactionClick = (transaction) => {
    if (transaction.status === 'Pendente') {
      setSelectedTransaction(transaction);
    }
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  const handleClearFilters = () => {
    setFilterStatus('Todos');
    setFilterPlan('Todos');
  };

  const filteredPayments = pagamentos.filter((payment) => {
    return (
      (filterStatus === 'Todos' || payment.status === filterStatus) &&
      (filterPlan === 'Todos' || payment.plan === filterPlan)
    );
  });

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <Card>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Filtros de Pagamentos</h3>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="Todos">Todos os Status</option>
                <option value="Pago">Pago</option>
                <option value="Pendente">Pendente</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Sliders size={20} className="text-gray-600" />
              <select
                value={filterPlan}
                onChange={(e) => setFilterPlan(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="Todos">Todos os Planos</option>
                <option value="Plano Mensal">Plano Mensal</option>
                <option value="Pacote 10 Aulas">Pacote 10 Aulas</option>
                <option value="Aula Avulsa">Aula Avulsa</option>
              </select>
            </div>
            <button
              onClick={handleClearFilters}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              <RefreshCcw size={20} className="mr-2" />
              Limpar Filtros
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Pagamentos */}
      <Card>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Histórico de Pagamentos</h3>
          <ul className="divide-y divide-gray-200">
            {filteredPayments.map((transaction, index) => (
              <li
                key={index}
                className="flex items-center py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleTransactionClick(transaction)}
              >
                <DollarSign
                  className={`mr-4 ${transaction.status === 'Pago' ? 'text-green-500' : 'text-yellow-500'}`}
                  size={24}
                />
                <div className="flex-1">
                  <span className="font-medium text-gray-900">{transaction.name}</span>
                  <p className="text-sm text-gray-500">{transaction.plan} - {transaction.amount}</p>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
                <div className="w-1/3 text-sm text-gray-500">
                  <p>{transaction.paymentMethod}</p>
                  <p className="text-xs text-gray-400">{transaction.details}</p>
                </div>
                {transaction.status === 'Pago' ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <XCircle className="text-red-500" size={24} />
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-semibold mb-4">{selectedTransaction.name}</h3>
            <p className="text-gray-700">{selectedTransaction.observation}</p>
            <button
              className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagamentos;
