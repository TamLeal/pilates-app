import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Card, CardContent } from '../components/ui/card';

const localizer = momentLocalizer(moment);

const events = [
  // Aulas na semana atual
  {
    title: 'Pilates Iniciante',
    start: new Date(2024, 7, 28, 9, 0), // 28 de agosto de 2024 às 09:00
    end: new Date(2024, 7, 28, 10, 0),
    description: 'Aula de Pilates para iniciantes, 3/10 vagas',
    participants: [
      { name: 'Maria Silva', time: '09:00 - 10:00' },
      { name: 'João Santos', time: '11:00 - 12:00' },
      { name: 'Ana Oliveira', time: '15:00 - 16:00' },
    ],
  },
  {
    title: 'Pilates Intermediário',
    start: new Date(2024, 7, 29, 10, 30), // 29 de agosto de 2024 às 10:30
    end: new Date(2024, 7, 29, 11, 30),
    description: 'Aula de Pilates para nível intermediário, 5/10 vagas',
    participants: [
      { name: 'Lucas Souza', time: '10:30 - 11:30' },
      { name: 'Beatriz Lima', time: '12:00 - 13:00' },
      { name: 'Rafael Costa', time: '13:30 - 14:30' },
      { name: 'Carlos Silva', time: '15:00 - 16:00' },
      { name: 'Fernanda Ribeiro', time: '16:30 - 17:30' },
    ],
  },
  {
    title: 'Pilates Avançado',
    start: new Date(2024, 7, 30, 14, 0), // 30 de agosto de 2024 às 14:00
    end: new Date(2024, 7, 30, 15, 0),
    description: 'Aula de Pilates avançado, 7/10 vagas',
    participants: [
      { name: 'Mariana Costa', time: '14:00 - 15:00' },
      { name: 'Paulo Silva', time: '15:30 - 16:30' },
      { name: 'Aline Fernandes', time: '17:00 - 18:00' },
      { name: 'Ricardo Souza', time: '18:30 - 19:30' },
      { name: 'Juliana Santos', time: '20:00 - 21:00' },
      { name: 'Eduardo Rocha', time: '21:30 - 22:30' },
      { name: 'Laura Almeida', time: '23:00 - 00:00' },
    ],
  },
  // Aulas na semana seguinte
  {
    title: 'Pilates Iniciante',
    start: new Date(2024, 8, 4, 8, 0), // 4 de setembro de 2024 às 08:00
    end: new Date(2024, 8, 4, 9, 0),
    description: 'Aula de Pilates para iniciantes, 4/10 vagas',
    participants: [
      { name: 'Gabriela Souza', time: '08:00 - 09:00' },
      { name: 'Carlos Lima', time: '09:30 - 10:30' },
      { name: 'Sofia Pereira', time: '11:00 - 12:00' },
      { name: 'Daniel Oliveira', time: '14:00 - 15:00' },
    ],
  },
  {
    title: 'Pilates Intermediário',
    start: new Date(2024, 8, 5, 10, 0), // 5 de setembro de 2024 às 10:00
    end: new Date(2024, 8, 5, 11, 0),
    description: 'Aula de Pilates para nível intermediário, 6/10 vagas',
    participants: [
      { name: 'Pedro Costa', time: '10:00 - 11:00' },
      { name: 'Alice Ribeiro', time: '11:30 - 12:30' },
      { name: 'Lucas Martins', time: '13:00 - 14:00' },
      { name: 'Marcelo Silva', time: '14:30 - 15:30' },
      { name: 'Bruna Santos', time: '16:00 - 17:00' },
      { name: 'Helena Alves', time: '17:30 - 18:30' },
    ],
  },
  {
    title: 'Pilates Avançado',
    start: new Date(2024, 8, 6, 13, 0), // 6 de setembro de 2024 às 13:00
    end: new Date(2024, 8, 6, 14, 0),
    description: 'Aula de Pilates avançado, 5/10 vagas',
    participants: [
      { name: 'Julia Ferreira', time: '13:00 - 14:00' },
      { name: 'Rodrigo Sousa', time: '14:30 - 15:30' },
      { name: 'Amanda Lopes', time: '16:00 - 17:00' },
      { name: 'Henrique Mendes', time: '17:30 - 18:30' },
      { name: 'Cecília Duarte', time: '19:00 - 20:00' },
    ],
  },
  // Adicione mais eventos conforme necessário e espalhe ao longo de diferentes dias
];

const Agendamentos = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    if (selectedEvent && selectedEvent.title === event.title) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };

  const handleCardClick = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        onSelectEvent={handleSelectEvent}
        popup
      />
      {selectedEvent && (
        <Card className="mt-6 cursor-pointer" onClick={handleCardClick}>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">
              {selectedEvent.title}
            </h3>
            <p>{selectedEvent.description}</p>
            <h4 className="text-lg font-medium mt-4">Participantes:</h4>
            <ul className="list-disc ml-5">
              {selectedEvent.participants.map((participant, index) => (
                <li key={index}>
                  {participant.name} - Horário: {participant.time}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Agendamentos;
