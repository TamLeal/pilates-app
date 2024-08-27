import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Clock } from 'lucide-react';

const Agendamento = () => (
  <div>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Próximas Aulas</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <Clock className="mr-2" size={18} />
            <span>09:00 - Pilates Iniciante (5/10 vagas)</span>
          </li>
          {/* Continue com outros agendamentos... */}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Agendamento;
