import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Users } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Lista de clientes com coordenadas fictícias
const clientes = [
  { name: 'Maria Silva', plan: 'Plano Mensal', remaining: '20 aulas restantes', position: [28.5572, -81.7679], address: '123 Main St, Clermont, FL', preferences: 'Pilates avançado', restrictions: 'Nenhuma', goals: 'Aumentar flexibilidade' },
  { name: 'João Santos', plan: 'Plano Mensal', remaining: '15 aulas restantes', position: [28.5412, -81.7639], address: '456 Oak Dr, Clermont, FL', preferences: 'Yoga', restrictions: 'Problemas no joelho', goals: 'Reduzir estresse' },
  { name: 'Ana Oliveira', plan: 'Plano Mensal', remaining: '22 aulas restantes', position: [28.5605, -81.7720], address: '789 Pine Ln, Clermont, FL', preferences: 'Pilates iniciante', restrictions: 'Dores nas costas', goals: 'Melhorar postura' },
  { name: 'Lucas Souza', plan: 'Plano Mensal', remaining: '18 aulas restantes', position: [28.5555, -81.7755], address: '321 Elm St, Clermont, FL', preferences: 'Treinamento funcional', restrictions: 'Nenhuma', goals: 'Perder peso' },
  { name: 'Beatriz Lima', plan: 'Plano Mensal', remaining: '10 aulas restantes', position: [28.5500, -81.7790], address: '654 Maple Ave, Clermont, FL', preferences: 'Pilates intermediário', restrictions: 'Asma', goals: 'Melhorar resistência' },
  { name: 'Rafael Costa', plan: 'Pacote 10 Aulas', remaining: '4 aulas restantes', position: [28.5450, -81.7710], address: '987 Cedar Rd, Clermont, FL', preferences: 'Pilates avançado', restrictions: 'Nenhuma', goals: 'Manter forma física' },
  { name: 'Carlos Silva', plan: 'Pacote 10 Aulas', remaining: '6 aulas restantes', position: [28.5525, -81.7655], address: '159 Birch Blvd, Clermont, FL', preferences: 'Treinamento funcional', restrictions: 'Dores nas costas', goals: 'Aumentar força' },
  { name: 'Laura Almeida', plan: 'Pacote 10 Aulas', remaining: '8 aulas restantes', position: [28.5480, -81.7690], address: '753 Walnut Way, Clermont, FL', preferences: 'Yoga', restrictions: 'Problemas no joelho', goals: 'Reduzir estresse' },
  { name: 'Fernanda Ribeiro', plan: 'Pacote 10 Aulas', remaining: '5 aulas restantes', position: [28.5605, -81.7725], address: '357 Spruce St, Clermont, FL', preferences: 'Pilates intermediário', restrictions: 'Nenhuma', goals: 'Melhorar postura' },
  { name: 'Eduardo Rocha', plan: 'Pacote 10 Aulas', remaining: '3 aulas restantes', position: [28.5625, -81.7710], address: '951 Cypress Dr, Clermont, FL', preferences: 'Pilates avançado', restrictions: 'Asma', goals: 'Melhorar resistência' },
];

// Customização do ícone para o estúdio
const studioIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1673/1673188.png', 
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Customização do ícone padrão para os clientes
const defaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// Customização do ícone destacado para clientes
const highlightedIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const Clientes = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  return (
    <div className="flex flex-col h-full w-full p-4 space-y-4 overflow-hidden">
      {/* Lista de Clientes */}
      <Card className="flex-shrink-0">
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">Lista de Clientes</h3>
          <div className="overflow-x-auto">
            <ul className="flex space-x-4 pb-2">
              {clientes.map((cliente, index) => (
                <li
                  key={index}
                  className={`flex-shrink-0 items-center p-2 hover:bg-gray-50 transition-colors cursor-pointer rounded-lg ${
                    selectedClient === cliente ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleClientClick(cliente)}
                  style={{ minWidth: '200px' }}
                >
                  <div className="flex items-center">
                    <Users className="mr-2 text-indigo-600" size={24} />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{cliente.name}</span>
                      <span className="text-sm text-gray-500">{cliente.plan}</span>
                      <span className="text-xs text-gray-400">{cliente.remaining}</span>
                      <span className="text-xs text-gray-400">{cliente.address}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Área para Perfil do Cliente e Mapa */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
        {/* Coluna do Perfil do Cliente */}
        <div className="overflow-y-auto">
          {selectedClient && (
            <Card className="h-full">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Perfil do Cliente</h3>
                <p><strong>Nome:</strong> {selectedClient.name}</p>
                <p><strong>Plano:</strong> {selectedClient.plan}</p>
                <p><strong>Preferências:</strong> {selectedClient.preferences}</p>
                <p><strong>Restrições:</strong> {selectedClient.restrictions}</p>
                <p><strong>Objetivos:</strong> {selectedClient.goals}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Coluna do Mapa */}
        <div className="h-full min-h-[300px]">
          <Card className="h-full">
            <CardContent className="h-full flex flex-col p-0">
              <h3 className="text-xl font-semibold m-4">Localização dos Clientes</h3>
              <div className="flex-1 w-full" style={{ minHeight: '300px' }}>
                <MapContainer
                  center={[28.5494, -81.7729]}
                  zoom={14}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {/* Marcadores aqui */}
                  <Marker position={[28.5494, -81.7729]} icon={studioIcon}>
                    <Popup>Estúdio Pilates</Popup>
                  </Marker>
                  {clientes.map((cliente, index) => (
                    <Marker
                      key={index}
                      position={cliente.position}
                      icon={selectedClient === cliente ? highlightedIcon : defaultIcon}
                    >
                      <Popup>{cliente.name}</Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Clientes;