import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { DollarSign, CheckCircle, XCircle, Filter, RefreshCw } from 'lucide-react';

const Pagamentos = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filterStatus, setFilterStatus] = useState('Todos os Status');
  const [filterPlan, setFilterPlan] = useState('Todos os Planos');

  const pagamentos = [
    { id: '001', name: 'Maria Silva', amount: '$200.00', plan: 'Plano Mensal', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Cartão de Crédito', status: 'Confirmado', discount: 'Nenhum', observation: 'Pagamento automático processado com sucesso.' },
    { id: '002', name: 'João Santos', amount: '$200.00', plan: 'Plano Mensal', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Cartão de Crédito', status: 'Pendente', discount: 'Nenhum', observation: 'Aguardando confirmação do banco.' },
    { id: '003', name: 'Ana Oliveira', amount: '$200.00', plan: 'Plano Mensal', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Cartão de Crédito', status: 'Confirmado', discount: '$20.00', observation: 'Pagamento processado com sucesso.' },
    { id: '004', name: 'Lucas Souza', amount: '$150.00', plan: 'Pacote 10 Aulas', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Boleto Bancário', status: 'Confirmado', discount: '$10.00', observation: 'Pagamento manual via boleto.' },
    { id: '005', name: 'Beatriz Lima', amount: '$150.00', plan: 'Pacote 10 Aulas', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Cartão de Crédito', status: 'Pendente', discount: 'Nenhum', observation: 'Cartão de crédito expirado.' },
    { id: '006', name: 'Rafael Costa', amount: '$150.00', plan: 'Pacote 10 Aulas', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Cartão de Crédito', status: 'Confirmado', discount: '$5.00', observation: 'Pagamento automático processado com sucesso.' },
    { id: '007', name: 'Carlos Silva', amount: '$50.00', plan: 'Aula Avulsa', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Dinheiro', status: 'Confirmado', discount: 'Nenhum', observation: 'Pagamento em dinheiro no local.' },
    { id: '008', name: 'Laura Almeida', amount: '$50.00', plan: 'Aula Avulsa', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Transferência Bancária', status: 'Pendente', discount: 'Nenhum', observation: 'Aguardando depósito bancário.' },
    { id: '009', name: 'Fernanda Ribeiro', amount: '$50.00', plan: 'Aula Avulsa', dueDate: '09-01-2024', installment: '1/1', paymentMethod: 'Dinheiro', status: 'Confirmado', discount: 'Nenhum', observation: 'Pagamento em dinheiro no local.' },
  ];

  const handleTransactionClick = (transaction) => {
    if (transaction.observation) {
      setSelectedTransaction(transaction);
    }
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  const handleClearFilters = () => {
    setFilterStatus('Todos os Status');
    setFilterPlan('Todos os Planos');
  };

  const filteredPayments = pagamentos.filter((payment) => {
    return (
      (filterStatus === 'Todos os Status' || payment.status === filterStatus) &&
      (filterPlan === 'Todos os Planos' || payment.plan === filterPlan)
    );
  });

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <Card>
        <CardContent className="flex items-center space-x-4">
          <Filter size={24} className="text-gray-500" />
          <select
            className="p-2 border rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="Todos os Status">Todos os Status</option>
            <option value="Confirmado">Confirmado</option>
            <option value="Pendente">Pendente</option>
          </select>
          <select
            className="p-2 border rounded"
            value={filterPlan}
            onChange={(e) => setFilterPlan(e.target.value)}
          >
            <option value="Todos os Planos">Todos os Planos</option>
            <option value="Plano Mensal">Plano Mensal</option>
            <option value="Pacote 10 Aulas">Pacote 10 Aulas</option>
            <option value="Aula Avulsa">Aula Avulsa</option>
          </select>
          <button
            className="flex items-center p-2 border rounded bg-gray-100 hover:bg-gray-200"
            onClick={handleClearFilters}
          >
            <RefreshCw size={16} className="mr-2" />
            Limpar Filtros
          </button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Histórico de Pagamentos</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plano</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Vencimento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parcelamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Forma de Pagamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status de Confirmação</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desconto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((transaction, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleTransactionClick(transaction)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.installment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.paymentMethod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.discount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.status === 'Confirmado' ? (
                      <CheckCircle className="text-green-500" size={24} />
                    ) : (
                      <XCircle className="text-red-500" size={24} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
