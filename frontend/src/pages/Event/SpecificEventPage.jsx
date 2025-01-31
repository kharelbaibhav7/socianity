import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
    Calendar,
    MapPin,
    Users,
    Clock,
    Info,
    DollarSign,
    BookOpen
} from 'lucide-react';

const SpecificEventPage = () => {
    let { id } = useParams();

    let [event, setEvent] = useState({
        name: 'Event Loading...',
        description: 'Fetching event details...',
        date: '',
        location: 'Searching...',
        organizer: { fullName: 'Loading...' },
        ticketPrice: 0
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                let response = await axios.get(`http://localhost:8000/api/events/${id}`);
                setEvent(response.data);
            } catch (err) {
                console.error("Error fetching event:", err.message);
            }
        };
        fetchEvent();
    }, [id]);

    // Convert event.date to a Date object safely
    const eventDate = event.date ? new Date(event.date) : null;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                {/* Event Header */}
                <div className="bg-primary/10 p-6 border-b">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {event.name}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                            <Users className="size-5 text-primary" />
                            <span>By {event.organizer?.fullName || 'Unknown Organizer'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="size-5 text-primary" />
                            <span>
                                {eventDate ? eventDate.toLocaleDateString() : 'Date Not Available'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-6">
                    {/* Description */}
                    <div className="flex items-start space-x-4">
                        <Info className="size-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Event Description</h2>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                            <MapPin className="size-6 text-primary" />
                            <div>
                                <h3 className="font-medium">Location</h3>
                                <p className="text-gray-600">{event.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Clock className="size-6 text-primary" />
                            <div>
                                <h3 className="font-medium">Date</h3>
                                <p className="text-gray-600">
                                    {eventDate
                                        ? eventDate.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })
                                        : 'Date Not Specified'}

                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <DollarSign className="size-6 text-primary" />
                            <div>
                                <h3 className="font-medium">Ticket Price</h3>
                                <p className="text-gray-600">
                                    ${event.ticketPrice?.toFixed(2) || '0.00'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2">
                            <BookOpen className="size-5" />
                            <span>Register for Event</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificEventPage;
