import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const SpecificForumPage = () => {
    let { id } = useParams()
    let [Forum, setForum] = useState({})

    useEffect(() => {
        const fetchForum = async () => {
            try {
                let response = await axios.get(`http://localhost:8000/api/Forums/${id}`);
                setForum(response.data);
                console.log(response.data, "reponse.data")
            } catch (err) {
                console.log(err.message)
            }
        };
        fetchForum();
    }, [id]);

    return (
        <div>
            <h1>{Forum.title}</h1>
            <h2>-By {Forum.postedBy.fullName}</h2>
            <p>{Forum.description}</p>

            <button onClick={() => { console.log("like") }}>Like</button> // remaining

        </div>
    )
}

export default SpecificForumPage