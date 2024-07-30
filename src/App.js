import React, { useState, useEffect } from 'react';
import EventCard from './components/EventCard';
import SelectedEvents from './components/SelectedEvents';
import './App.css';

const eventsData = [

  { id: 1, event_name: "Freestyle 400M", event_category: "Swimming", start_time: "2022-12-17 15:00:00", end_time: "2022-12-17 16:00:00" },
  { id: 2, event_name: "Backstroke 100M", event_category: "Swimming", start_time: "2022-12-17 13:30:00", end_time: "2022-12-17 14:30:00" },
   { id: 3, event_name: "Butterfly 100M", event_category: "Swimming", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 4, event_name: "High Jump", event_category: "Athletics", start_time: "2022-12-17 13:00:00", end_time: "2022-12-17 14:00:00" },
  { id: 5, event_name: "Triple Jump", event_category: "Athletics", start_time: "2022-12-17 16:00:00", end_time: "2022-12-17 17:00:00" },
  { id: 6, event_name: "Long Jump", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 7, event_name: "100M Sprint", event_category: "Athletics", start_time: "2022-12-17 17:00:00", end_time: "2022-12-17 18:00:00" },
  { id: 8, event_name: "Lightweight 60kg", event_category: "Boxing", start_time: "2022-12-17 18:00:00", end_time: "2022-12-17 19:00:00" },
  { id: 9, event_name: "Middleweight 75 kg", event_category: "Boxing", start_time: "2022-12-17 19:00:00", end_time: "2022-12-17 20:00:00" },
  { id: 10, event_name: "Heavyweight 91kg", event_category: "Boxing", start_time: "2022-12-17 20:00:00", end_time: "2022-12-17 22:00:00" }
];

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('selectedEvents')) || [];
    setSelectedEvents(savedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  const handleSelect = (event) => {
    if (selectedEvents.length >= 3) return;

    const isConflicting = selectedEvents.some(selectedEvent =>
      (event.start_time < selectedEvent.end_time && event.end_time > selectedEvent.start_time)
    );

    if (isConflicting) return;

    setSelectedEvents([...selectedEvents, event]);
  };

  const handleDeselect = (event) => {
    setSelectedEvents(selectedEvents.filter(e => e.id !== event.id));
  };

  return (
    <div className="app">
      <h1 className='heading'>All Events</h1>
      <div className="events-list">
        {eventsData.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onSelect={handleSelect}
            isSelected={selectedEvents.some(e => e.id === event.id)}
          />
        ))}
      </div>
      <SelectedEvents events={selectedEvents} onDeselect={handleDeselect} />
    </div>
  );
};

export default App;
