import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { DollarSign, CheckCircle, XCircle } from 'lucide-react';

const Pagamentos = () => (
  <div className="space-y-6">
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Últimas Transações</h3>
        <ul className="divide-y divide-gray-200">
          {/* Plano Mensal */}
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-green-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Maria Silva</span>
              <p className="text-sm text-gray-500">Plano Mensal - $200.00</p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </li>
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-yellow-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">João Santos</span>
              <p className="text-sm text-gray-500">Plano Mensal - $200.00</p>
            </div>
            <XCircle className="text-red-500" size={24} />
          </li>
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-green-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Ana Oliveira</span>
              <p className="text-sm text-gray-500">Plano Mensal - $200.00</p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </li>

          {/* Pacote de Aulas */}
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-green-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Lucas Souza</span>
              <p className="text-sm text-gray-500">Pacote 10 Aulas - $150.00</p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </li>
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-yellow-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Beatriz Lima</span>
              <p className="text-sm text-gray-500">Pacote 10 Aulas - $150.00</p>
            </div>
            <XCircle className="text-red-500" size={24} />
          </li>
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-green-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Rafael Costa</span>
              <p className="text-sm text-gray-500">Pacote 10 Aulas - $150.00</p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </li>

          {/* Aula Avulsa */}
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-green-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Carlos Silva</span>
              <p className="text-sm text-gray-500">Aula Avulsa - $50.00</p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </li>
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-yellow-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Laura Almeida</span>
              <p className="text-sm text-gray-500">Aula Avulsa - $50.00</p>
            </div>
            <XCircle className="text-red-500" size={24} />
          </li>
          <li className="flex items-center py-4 hover:bg-gray-50 transition-colors">
            <DollarSign className="mr-4 text-green-500" size={24} />
            <div className="flex-1">
              <span className="font-medium text-gray-900">Fernanda Ribeiro</span>
              <p className="text-sm text-gray-500">Aula Avulsa - $50.00</p>
            </div>
            <CheckCircle className="text-green-500" size={24} />
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Pagamentos;
