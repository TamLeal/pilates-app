import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { DollarSign, CheckCircle, XCircle } from 'lucide-react';

const Pagamentos = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const pagamentos = [
    { name: 'Maria Silva', amount: '$200.00', plan: 'Plano Mensal', status: 'Pago' },
    { name: 'João Santos', amount: '$200.00', plan: 'Plano Mensal', status: 'Pendente', observation: 'Aguardando confirmação do banco.' },
    { name: 'Ana Oliveira', amount: '$200.00', plan: 'Plano Mensal', status: 'Pago' },
    { name: 'Lucas Souza', amount: '$150.00', plan: 'Pacote 10 Aulas', status: 'Pago' },
    { name: 'Beatriz Lima', amount: '$150.00', plan: 'Pacote 10 Aulas', status: 'Pendente', observation: 'Cartão de crédito expirado.' },
    { name: 'Rafael Costa', amount: '$150.00', plan: 'Pacote 10 Aulas', status: 'Pago' },
    { name: 'Carlos Silva', amount: '$50.00', plan: 'Aula Avulsa', status: 'Pago' },
    { name: 'Laura Almeida', amount: '$50.00', plan: 'Aula Avulsa', status: 'Pendente', observation: 'Aguardando depósito bancário.' },
    { name: 'Fernanda Ribeiro', amount: '$50.00', plan: 'Aula Avulsa', status: 'Pago' },
  ];

  const handleTransactionClick = (transaction) => {
    if (transaction.status === 'Pendente') {
      setSelectedTransaction(transaction);
    }
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Últimas Transações</h3>
          <ul className="divide-y divide-gray-200">
            {pagamentos.map((transaction, index) => (
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
