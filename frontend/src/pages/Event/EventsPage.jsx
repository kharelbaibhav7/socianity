import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const EventsPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef(null);
    let [data, setData] = useState({})

    const toggleForm = () => setIsFormOpen(!isFormOpen);

    useEffect(() => {
        function handleClickOutside(event) {
          if (formRef.current && !formRef.current.contains(event.target)) {
            setIsFormOpen(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

      let handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(" http://localhost:8000/api/events/", data);
            setIsFormOpen(false);

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <div className="btn" onClick={toggleForm}>Create a post</div>

            {isFormOpen && (
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required onChange={handleData} />

                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" placeholder="Enter date of event" required onChange={handleData} />

                    <label htmlFor="time">Time</label>
                    <input type="text" id="time" name="time" placeholder="Enter time of event" required onChange={handleData} />

                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Enter description of event" required onChange={handleData} />

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default EventsPage