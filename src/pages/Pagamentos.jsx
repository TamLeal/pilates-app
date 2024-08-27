import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { DollarSign } from 'lucide-react';

const Pagamentos = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Últimas Transações</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Maria Silva - R$ 200,00 - Plano Mensal (Pago)</span>
          </li>
          {/* Continue com outras transações... */}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Pagamentos;
