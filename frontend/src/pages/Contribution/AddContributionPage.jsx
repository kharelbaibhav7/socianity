import React, { useState } from 'react'
import './ContributionFormStyle.css'
import axios from 'axios'
import { useNavigate } from "react-router";
const AddContributionPage = () => {

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let navigate = useNavigate()

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
                url: `http://localhost:8000/api/contributions`,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(result)
            setTitle("")
            setDescription("")
            navigate("/contributions")

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="master-container">
            <div className="form-container">
                <h2 className="form-title">Add Contribution</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input type="text" id="title" name="title" className="form-input" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea id="description" name="description" className="form-textarea" rows="7" requiredvalue={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddContributionPage