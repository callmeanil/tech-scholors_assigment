import React from 'react';

const SelectedEvents = ({ events, onDeselect }) => {
  return (
    <div className="selected-events">
      <h3>Selected Events</h3>
      {events.map(event => (
        <div key={event.id} className="selected-event">
          <h4>{event.event_name}</h4>
          <button onClick={() => onDeselect(event)}>Deselect</button>
        </div>
      ))}
    </div>
  );
};

export default SelectedEvents;
