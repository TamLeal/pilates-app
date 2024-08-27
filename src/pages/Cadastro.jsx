import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const Cadastro = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Cadastro de Cliente</h3>
        <form className="space-y-4">
          {/* Formulário de cadastro de cliente */}
        </form>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Cadastro de Aula</h3>
        <form className="space-y-4">
          {/* Formulário de cadastro de aula */}
        </form>
      </CardContent>
    </Card>
  </div>
);

export default Cadastro;
