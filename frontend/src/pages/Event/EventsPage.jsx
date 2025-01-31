import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Calendar, MapPin, Users } from 'lucide-react';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Upcoming Events
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div
            key={event._id}
            onClick={() => handleEventClick(event._id)}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {event.name}
              </h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="size-5 text-primary" />
                  <span>Organized by {event.organizer.fullName}</span>
                </div>
                {event.date && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="size-5 text-primary" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="size-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;