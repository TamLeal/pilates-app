import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { DollarSign } from 'lucide-react';

const Pagamentos = () => (
  <div className="space-y-6">
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Últimas Transações</h3>
        <ul className="space-y-3">
          {/* Plano Mensal */}
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Maria Silva - R$ 200,00 - Plano Mensal (Pago)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>João Santos - R$ 200,00 - Plano Mensal (Pendente)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Ana Oliveira - R$ 200,00 - Plano Mensal (Pago)</span>
          </li>

          {/* Pacote de Aulas */}
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Lucas Souza - R$ 150,00 - Pacote 10 Aulas (Pago)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Beatriz Lima - R$ 150,00 - Pacote 10 Aulas (Pendente)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Rafael Costa - R$ 150,00 - Pacote 10 Aulas (Pago)</span>
          </li>

          {/* Aula Avulsa */}
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Carlos Silva - R$ 50,00 - Aula Avulsa (Pago)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Laura Almeida - R$ 50,00 - Aula Avulsa (Pendente)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2" size={18} />
            <span>Fernanda Ribeiro - R$ 50,00 - Aula Avulsa (Pago)</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Pagamentos;
