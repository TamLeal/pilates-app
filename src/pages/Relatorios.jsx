import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { FileText, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const Relatorios = () => (
  <div className="space-y-6">
    {/* Resumo Mensal */}
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Resumo Mensal</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <FileText className="mr-2 text-blue-500" size={18} />
            <span>Total de Aulas: 130 (↑10% em relação ao mês anterior)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2 text-green-500" size={18} />
            <span>Novos Clientes: 28 (↑15% em relação ao mês anterior)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <DollarSign className="mr-2 text-yellow-500" size={18} />
            <span>Receita Total: R$ 20.200,00 (↑12% em relação ao mês anterior)</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Crescimento e Metas */}
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Crescimento e Metas</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <TrendingUp className="mr-2 text-red-500" size={18} />
            <span>Meta de Crescimento de Clientes: 15% (Atingido: 18%)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <TrendingUp className="mr-2 text-yellow-500" size={18} />
            <span>Meta de Receitas: R$ 22.000 (Atingido: R$ 20.200)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <TrendingUp className="mr-2 text-green-500" size={18} />
            <span>Meta de Aulas: 120 (Atingido: 130)</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Detalhamento de Aulas */}
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Detalhamento de Aulas</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <Calendar className="mr-2 text-indigo-500" size={18} />
            <span>Aulas de Pilates Avançado: 45 (↑5% em relação ao mês anterior)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Calendar className="mr-2 text-blue-500" size={18} />
            <span>Aulas de Pilates Iniciante: 30 (↓2% em relação ao mês anterior)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Calendar className="mr-2 text-purple-500" size={18} />
            <span>Aulas de Pilates Intermediário: 55 (↑10% em relação ao mês anterior)</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Relatorios;
