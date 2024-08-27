import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Card, CardContent } from '../components/ui/card';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Pilates Iniciante',
    start: new Date(2024, 7, 28, 9, 0), // 28 de agosto de 2024 às 09:00
    end: new Date(2024, 7, 28, 10, 0),
    description: 'Aula de Pilates para iniciantes, 10 vagas',
  },
  {
    title: 'Pilates Intermediário',
    start: new Date(2024, 7, 28, 10, 30), // 28 de agosto de 2024 às 10:30
    end: new Date(2024, 7, 28, 11, 30),
    description: 'Aula de Pilates para nível intermediário, 8 vagas',
  },
  {
    title: 'Pilates Avançado',
    start: new Date(2024, 7, 28, 14, 0), // 28 de agosto de 2024 às 14:00
    end: new Date(2024, 7, 28, 15, 0),
    description: 'Aula de Pilates avançado, 9 vagas',
  },
  // Adicione mais eventos conforme necessário
];

const Agendamentos = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
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
        <Card className="mt-6">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">
              {selectedEvent.title}
            </h3>
            <p>{selectedEvent.description}</p>
            <p>
              Início: {moment(selectedEvent.start).format('LLLL')}
            </p>
            <p>
              Fim: {moment(selectedEvent.end).format('LLLL')}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Agendamentos;
