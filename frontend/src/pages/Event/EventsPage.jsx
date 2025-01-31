import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function EventsPage() {
  const [events, setEvents] = useState([]);
  let navigate = useNavigate();

    useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/events/");
        setEvents(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchEvents();


  }, []);


  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

    return (
    <div className='container'>
      {events.map(event => (
        <div key={event._id} onClick={() => handleEventClick(event._id)}>
          <h2>{event.name}</h2>
          <p>-By {event.organizer.fullName}</p>
        </div>
      ))}
    </div>
  );
}

export default EventsPage;
