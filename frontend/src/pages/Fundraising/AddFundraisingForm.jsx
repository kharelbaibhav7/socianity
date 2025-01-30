import React, { useState } from 'react'
import axios from 'axios'

const AddFundraisingForm = () => {

    const [title, setTitle] = useState("")
    const [target, setTarget] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("a")

        let data = {
            title,
            target,
            phoneNumber,
            description
        }
        console.log(data)

        try {
            console.log("a")

            let result = await axios({
                method: 'post',
                url: `http://localhost:8000/api/fundraising`,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(result)
            // setTitle("")
            // setTarget("")
            // setPhoneNumber("")
            // setDescription("")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title">Title: </label>
                    <input type="text" id='Title' value={title} onChange={(e) => setTitle(e.target.value)} />


                    <label htmlFor="Target">Target: </label>
                    <input type="text" id='Target' value={target} onChange={(e) => setTarget(e.target.value)} />
                    <br />

                    <label htmlFor="PhoneNumber">PhoneNumber: </label>
                    <input type='text' id='PhoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

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

export default AddFundraisingForm