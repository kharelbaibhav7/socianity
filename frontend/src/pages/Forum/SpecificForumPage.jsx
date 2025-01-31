import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const SpecificForumPage = () => {
    let { id } = useParams()
    let [Forum, setForum] = useState({})
    let navigate = useNavigate()

    const onLike = async () => {
        let result = await axios({
            method: 'post',
            url: `http://localhost:8000/api/forums/${id}/like`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(result)


    }

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
            <h2>-By {Forum.postedBy?.fullName || "Anonymous"}</h2>
            <p>{Forum.description}</p>

            <button onClick={onLike}>Like</button>
            <p>Total Likes: {Forum.likes?.length || 0}</p>

        </div>
    )
}

export default SpecificForumPage