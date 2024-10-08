import React from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { Calendar, Users, DollarSign, Heart, Star, Activity, ThumbsUp, TrendingUp, Clock, AlertCircle, Maximize2, UserX } from 'lucide-react';

const Dashboard = () => (
  <div className="space-y-6">
    {/* Cards principais */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-medium mb-1">Aulas Hoje</CardTitle>
              <p className="text-3xl font-bold">18</p>
              <p className="text-sm mt-1 font-semibold text-gray-800">
                2 vagas restantes
              </p>
            </div>
            <Calendar size={40} className="opacity-70" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-medium mb-1">Clientes Ativos</CardTitle>
              <p className="text-3xl font-bold">203</p>
              <p className="text-sm mt-1 font-semibold text-gray-800">
                +8% este mês
              </p>
            </div>
            <Users size={40} className="opacity-70" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-medium mb-1">Receita Mensal</CardTitle>
              <p className="text-3xl font-bold">$20,200</p>
              <p className="text-sm mt-1 font-semibold text-gray-800">
                Meta: $22,000
              </p>
            </div>
            <DollarSign size={40} className="opacity-70" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-red-500 to-red-700 text-white">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-medium mb-1">Taxa de Retenção</CardTitle>
              <p className="text-3xl font-bold">90%</p>
              <p className="text-sm mt-1 font-semibold text-gray-800">
                Fidelidade alta
              </p>
            </div>
            <Heart size={40} className="opacity-70" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-medium mb-1">Avaliação Média</CardTitle>
              <p className="text-3xl font-bold">4.9★</p>
              <p className="text-sm mt-1 font-semibold text-gray-800">
                150 avaliações este mês
              </p>
            </div>
            <Star size={40} className="opacity-70" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-500 to-teal-700 text-white">
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-medium mb-1">Ocupação Média</CardTitle>
              <p className="text-3xl font-bold">87%</p>
              <p className="text-sm mt-1 font-semibold text-gray-800">
                Capacidade total: 250
              </p>
            </div>
            <Activity size={40} className="opacity-70" />
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Container Inferior com outras estatísticas */}
    <Card className="bg-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Destaques do Mês</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ThumbsUp className="mr-2 text-green-500" size={18} />
            <span>Aula mais popular: Pilates Avançado (90% ocupação)</span>
          </li>
          <li className="flex items-center">
            <TrendingUp className="mr-2 text-blue-500" size={18} />
            <span>Crescimento de novos clientes: 20%</span>
          </li>
          <li className="flex items-center">
            <Clock className="mr-2 text-purple-500" size={18} />
            <span>Horário de pico: 17:00 - 19:00</span>
          </li>
          <li className="flex items-center">
            <Star className="mr-2 text-yellow-500" size={18} />
            <span>Instrutor mais bem avaliado: João Santos (4.9★)</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Área de Avisos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gray-100 border-l-4 border-gray-400 text-gray-700">
        <CardContent>
          <div className="flex items-center">
            <AlertCircle className="mr-2 text-gray-500" size={24} />
            <div>
              <p className="text-lg font-semibold">Pagamentos Pendentes</p>
              <p className="text-sm">Existem 3 pagamentos pendentes. Verifique a aba de pagamentos para mais detalhes.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-100 border-l-4 border-gray-400 text-gray-700">
        <CardContent>
          <div className="flex items-center">
            <Maximize2 className="mr-2 text-gray-500" size={24} />
            <div>
              <p className="text-lg font-semibold">Capacidade de Aula</p>
              <p className="text-sm">A aula de Pilates Intermediário está com 9/10 vagas preenchidas. Considere adicionar uma nova sessão.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-100 border-l-4 border-gray-400 text-gray-700">
        <CardContent>
          <div className="flex items-center">
            <UserX className="mr-2 text-gray-500" size={24} />
            <div>
              <p className="text-lg font-semibold">Clientes Não Retornaram</p>
              <p className="text-sm">5 clientes que vieram uma vez não retornaram. Considere fazer um follow-up.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Dashboard;