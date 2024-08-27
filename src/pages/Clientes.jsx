import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Users } from 'lucide-react';

const Clientes = () => (
  <div className="space-y-6">
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Lista de Clientes</h3>
        <ul className="space-y-3">
          {/* Plano Mensal */}
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Maria Silva - Plano Mensal (20 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>João Santos - Plano Mensal (15 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Ana Oliveira - Plano Mensal (22 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Lucas Souza - Plano Mensal (18 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Beatriz Lima - Plano Mensal (10 aulas restantes)</span>
          </li>

          {/* Pacote de Aulas */}
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Rafael Costa - Pacote 10 Aulas (4 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Carlos Silva - Pacote 10 Aulas (6 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Laura Almeida - Pacote 10 Aulas (8 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Fernanda Ribeiro - Pacote 10 Aulas (5 aulas restantes)</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Eduardo Rocha - Pacote 10 Aulas (3 aulas restantes)</span>
          </li>

          {/* Aula Avulsa */}
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Mariana Costa - Aula Avulsa</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Paulo Silva - Aula Avulsa</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Aline Fernandes - Aula Avulsa</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Ricardo Souza - Aula Avulsa</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="mr-2" size={18} />
            <span>Juliana Santos - Aula Avulsa</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Clientes;
