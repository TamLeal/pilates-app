import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { FileText } from 'lucide-react';

const Relatorios = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Resumo Mensal</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <FileText className="mr-2" size={18} />
            <span>Total de Aulas: 130 (↑10% em relação ao mês anterior)</span>
          </li>
          {/* Continue com outros relatórios... */}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Relatorios;
