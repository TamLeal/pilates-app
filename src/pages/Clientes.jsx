import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Users } from 'lucide-react';

const Clientes = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Lista de Clientes</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Maria Silva - Plano Mensal (20 aulas restantes)</span>
          </li>
          {/* Continue com outros clientes... */}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Clientes;
