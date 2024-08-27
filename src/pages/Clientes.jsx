import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Users } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Lista de clientes com coordenadas fictícias
const clientes = [
  { name: 'Maria Silva', plan: 'Plano Mensal', remaining: '20 aulas restantes', position: [28.5572, -81.7679], address: '123 Main St, Clermont, FL' },
  { name: 'João Santos', plan: 'Plano Mensal', remaining: '15 aulas restantes', position: [28.5412, -81.7639], address: '456 Oak Dr, Clermont, FL' },
  { name: 'Ana Oliveira', plan: 'Plano Mensal', remaining: '22 aulas restantes', position: [28.5605, -81.7720], address: '789 Pine Ln, Clermont, FL' },
  { name: 'Lucas Souza', plan: 'Plano Mensal', remaining: '18 aulas restantes', position: [28.5555, -81.7755], address: '321 Elm St, Clermont, FL' },
  { name: 'Beatriz Lima', plan: 'Plano Mensal', remaining: '10 aulas restantes', position: [28.5500, -81.7790], address: '654 Maple Ave, Clermont, FL' },
  { name: 'Rafael Costa', plan: 'Pacote 10 Aulas', remaining: '4 aulas restantes', position: [28.5450, -81.7710], address: '987 Cedar Rd, Clermont, FL' },
  { name: 'Carlos Silva', plan: 'Pacote 10 Aulas', remaining: '6 aulas restantes', position: [28.5525, -81.7655], address: '159 Birch Blvd, Clermont, FL' },
  { name: 'Laura Almeida', plan: 'Pacote 10 Aulas', remaining: '8 aulas restantes', position: [28.5480, -81.7690], address: '753 Walnut Way, Clermont, FL' },
  { name: 'Fernanda Ribeiro', plan: 'Pacote 10 Aulas', remaining: '5 aulas restantes', position: [28.5605, -81.7725], address: '357 Spruce St, Clermont, FL' },
  { name: 'Eduardo Rocha', plan: 'Pacote 10 Aulas', remaining: '3 aulas restantes', position: [28.5625, -81.7710], address: '951 Cypress Dr, Clermont, FL' },
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
    <div className="flex space-x-6">
      {/* Lista de Clientes */}
      <div className="w-1/2 overflow-y-auto h-screen p-4">
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">Lista de Clientes</h3>
            <ul className="divide-y divide-gray-200">
              {clientes.map((cliente, index) => (
                <li
                  key={index}
                  className={`flex items-center py-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    selectedClient === cliente ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleClientClick(cliente)}
                >
                  <Users className="mr-4 text-indigo-600" size={24} />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{cliente.name}</span>
                    <span className="text-sm text-gray-500">{cliente.plan} {cliente.remaining && `(${cliente.remaining})`}</span>
                    <span className="text-xs text-gray-400">{cliente.address}</span> {/* Pseudo endereço */}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Mapa */}
      <div className="w-1/2 p-4">
        <h3 className="text-xl font-semibold mb-4">Localização dos Clientes</h3>
        <MapContainer
          center={[28.5494, -81.7729]} // Coordenadas para Clermont, FL
          zoom={14}
          style={{ height: "65vh", width: "100%" }} // Ajustando altura do mapa
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marcador do estúdio em Clermont */}
          <Marker position={[28.5494, -81.7729]} icon={studioIcon}>
            <Popup>Estúdio Pilates</Popup>
          </Marker>

          {/* Marcadores de clientes */}
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
    </div>
  );
};

export default Clientes;
