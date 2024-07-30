import React from 'react';

const EventCard = ({ event, onSelect, isSelected }) => {
  const { event_name, event_category, start_time, end_time } = event;

  return (
    <div className="event-card">
      <h3>{event_name}</h3>
      <p>Category: {event_category}</p>
      <p>Start Time: {start_time}</p>
      <p>End Time: {end_time}</p>
      <button onClick={() => onSelect(event)} disabled={isSelected}>
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
};

export default EventCard;
