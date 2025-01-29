import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../App";


const Signup = () => {
    let [data, setData] = useState({})
    let { token, setToken } = useContext(GlobalVariableContext)
    let navigate = useNavigate()


    let handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await axios.post("http://localhost:8000/api/users/", data);
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token)
            console.log(result)
            navigate("/")

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <h2>Sign Up</h2>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required onChange={handleData} />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phoneNumber" placeholder="Enter your phone number" required onChange={handleData} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handleData} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleData} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};
export default Signup;
