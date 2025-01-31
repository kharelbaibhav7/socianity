import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const SpecificEventPage = () => {
    let {id} = useParams()
    let [event, setEvent] = useState({})

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                let response = await axios.get(`http://localhost:8000/api/events/${id}`);
                setEvent(response.data);
                console.log(response.data, "reponse.data")
            } catch (err) {
                console.log(err.message)
            }
        };
    fetchEvent();
    }, [id]);

    return (
        <div>
            <h1>{event.name}</h1>
            {/* <h2>-By {event.organizer.fullName}</h2> */}
            <p>{event.description}</p>
        </div>
    )
}

export default SpecificEventPage