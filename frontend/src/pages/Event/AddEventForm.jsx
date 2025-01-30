import React, { useState } from 'react'
import axios from 'axios'

const AddEventForm = () => {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name,
            date,
            time,
            description
        }
        console.log(data)

        try {
            console.log("a")

            let result = await axios({
                method: 'post',
                url: `http://localhost:8000/api/events`,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            // console.log(result)
            setName("")
            setDate("")
            setTime("")
            setDescription("")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Name: </label>
                    <input type="text" id='Name' value={name} onChange={(e) => setName(e.target.value)} />


                    <label htmlFor="Date">Date: </label>
                    <input type="date" id='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <br />

                    <label htmlFor="Time">Time: </label>
                    <input type='text' id='Time' value={time} onChange={(e) => setTime(e.target.value)} />

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

export default AddEventForm