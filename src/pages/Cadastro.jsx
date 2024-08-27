import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const Cadastro = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Formulário de Cadastro de Cliente */}
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Cadastro de Cliente</h3>
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="nome"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="telefone"
            >
              Telefone
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="telefone"
              type="tel"
            />
          </div>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Cadastrar Cliente
          </button>
        </form>
      </CardContent>
    </Card>

    {/* Formulário de Cadastro de Aula */}
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Cadastro de Aula</h3>
        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="nomeAula"
            >
              Nome da Aula
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="nomeAula"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="instrutor"
            >
              Instrutor
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="instrutor"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="horario"
            >
              Horário
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="horario"
              type="time"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="capacidade"
            >
              Capacidade
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="capacidade"
              type="number"
            />
          </div>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Cadastrar Aula
          </button>
        </form>
      </CardContent>
    </Card>
  </div>
);

export default Cadastro;
