import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    let [data, setData] = useState({})

    let handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await axios.post("http://localhost:8000/api/users/login", data);
            localStorage.setItem("token", result.data.token);
            console.log(data)
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="container">
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handleData} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleData} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
