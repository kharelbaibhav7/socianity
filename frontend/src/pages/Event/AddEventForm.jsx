import React, { useState } from 'react'

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
                url: `localhost:8000/api/events`,
                data: data
            })
            console.log(result)
            // setFullName("")
            // setEmail("")
            // setPassword("")
            // setDob("")
            // setGender("")
        } catch (error) {
            console.log(error.response.data.message)
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