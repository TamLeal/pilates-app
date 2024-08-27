import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Users } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Lista de clientes (dados fictícios)
const clientes = [
  { name: 'Maria Silva', plan: 'Plano Mensal', remaining: '20 aulas restantes' },
  { name: 'João Santos', plan: 'Plano Mensal', remaining: '15 aulas restantes' },
  { name: 'Ana Oliveira', plan: 'Plano Mensal', remaining: '22 aulas restantes' },
  { name: 'Lucas Souza', plan: 'Plano Mensal', remaining: '18 aulas restantes' },
  { name: 'Beatriz Lima', plan: 'Plano Mensal', remaining: '10 aulas restantes' },
  { name: 'Rafael Costa', plan: 'Pacote 10 Aulas', remaining: '4 aulas restantes' },
  { name: 'Carlos Silva', plan: 'Pacote 10 Aulas', remaining: '6 aulas restantes' },
  { name: 'Laura Almeida', plan: 'Pacote 10 Aulas', remaining: '8 aulas restantes' },
  { name: 'Fernanda Ribeiro', plan: 'Pacote 10 Aulas', remaining: '5 aulas restantes' },
  { name: 'Eduardo Rocha', plan: 'Pacote 10 Aulas', remaining: '3 aulas restantes' },
  { name: 'Mariana Costa', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Paulo Silva', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Aline Fernandes', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Ricardo Souza', plan: 'Aula Avulsa', remaining: '' },
  { name: 'Juliana Santos', plan: 'Aula Avulsa', remaining: '' },
];

// Customização do ícone para o estúdio (diferente e mais estético)
const studioIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1673/1673188.png', // Novo ícone mais estético
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

const Clientes = () => (
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
                className="flex items-center py-4 hover:bg-gray-50 transition-colors"
              >
                <Users className="mr-4 text-indigo-600" size={24} />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{cliente.name}</span>
                  <span className="text-sm text-gray-500">
                    {cliente.plan} {cliente.remaining && `(${cliente.remaining})`}
                  </span>
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
        zoom={12}
        style={{ height: "70vh", width: "100%" }} // Altura ajustada
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marcador do estúdio em Clermont */}
        <Marker position={[28.5494, -81.7729]} icon={studioIcon}>
          <Popup>Estúdio Pilates</Popup>
        </Marker>

        {/* Marcadores de clientes (exemplo com pontos próximos a Clermont) */}
        <Marker position={[28.5572, -81.7679]} icon={defaultIcon}>
          <Popup>Cliente 1</Popup>
        </Marker>
        <Marker position={[28.5412, -81.7639]} icon={defaultIcon}>
          <Popup>Cliente 2</Popup>
        </Marker>
        <Marker position={[28.5605, -81.7720]} icon={defaultIcon}>
          <Popup>Cliente 3</Popup>
        </Marker>
        <Marker position={[28.5555, -81.7755]} icon={defaultIcon}>
          <Popup>Cliente 4</Popup>
        </Marker>
        <Marker position={[28.5500, -81.7790]} icon={defaultIcon}>
          <Popup>Cliente 5</Popup>
        </Marker>
        <Marker position={[28.5450, -81.7710]} icon={defaultIcon}>
          <Popup>Cliente 6</Popup>
        </Marker>
        <Marker position={[28.5525, -81.7655]} icon={defaultIcon}>
          <Popup>Cliente 7</Popup>
        </Marker>
        <Marker position={[28.5480, -81.7690]} icon={defaultIcon}>
          <Popup>Cliente 8</Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
);

export default Clientes;
