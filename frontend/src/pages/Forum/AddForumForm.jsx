import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const AddForumForm = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            title,
            description
        }
        console.log(data)

        try {

            let result = await axios({
                method: 'post',
                url: `http://localhost:8000/api/forums`,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(result)
            setTitle("")
            setDescription("")
        } catch (error) {
            console.log(error)
        }

        navigate("/forum")

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title">Title: </label>
                    <input type="text" id='Title' value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="Description">Description: </label>
                    <textarea type='text' id='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AddForumForm