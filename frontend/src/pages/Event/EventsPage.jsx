import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function EventsPage() {
    const [events, setEvents] = useState([]); 
    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axios.get("http://localhost:8000/api/events/");
            setEvents(response.data)
            console.log(response.data)
          } catch (err) {
            console.log(err.message)
          }
        };
    
        fetchEvents();
      }, []); 

  return (
    <div className='container'>
        {events.map(event => (
            <div key={event._id}>
                <h2>{event.name}</h2>
                <p>-By {event.organizer.fullName}</p>
            </div>
        ))}
    </div>
  )
}

export default EventsPage