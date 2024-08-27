import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Users } from 'lucide-react';

const clientes = [
  { name: 'Maria Silva', plan: 'Plano Mensal', remaining: '20 aulas restantes' },
  { name: 'João Santos', plan: 'Plano Mensal', remaining: '15 aulas restantes' },
  { name: 'Ana Oliveira', plan: 'Plano Mensal', remaining: '22 aulas restantes' },
  { name: 'Lucas Souza', plan: 'Plano Mensal', remaining: '18 aulas restantes' },
  { name: 'Beatriz Lima', plan: 'Plano Mensal', remaining: '10 aulas restantes' },
  { name: 'Rafael Costa', plan: 'Pacote 10 Aulas', remaining: '4 aulas restantes' },
  { name: 'Carlos Silva', plan: 'Pacote 10 Aulas', remaining: '6 aulas restantes' },
  { name: 'Laura Almeida', plan: 'Pacote 10 Aulas', remaining: '8 aulas restantes' },
  { name: 'Fernanda Ribeiro', plan: 'Pacote 10 Aulas', remaining: '5 aulas restantes' },
  { name: 'Eduardo Rocha', plan: 'Pacote 10 Aulas', remaining: '3 aulas restantes' },
  { name: 'Mariana Costa', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Paulo Silva', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Aline Fernandes', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Ricardo Souza', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Juliana Santos', plan: 'Aula Avulsa', remaining: '' },
];

const Clientes = () => (
  <div className="space-y-6">
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Lista de Clientes</h3>
        <ul className="divide-y divide-gray-200">
          {clientes.map((cliente, index) => (
            <li
              key={index}
              className="flex items-center py-4 hover:bg-gray-50 transition-colors"
            >
              <Users className="mr-4 text-indigo-600" size={24} />
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{cliente.name}</span>
                <span className="text-sm text-gray-500">
                  {cliente.plan} {cliente.remaining && `(${cliente.remaining})`}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Clientes;
