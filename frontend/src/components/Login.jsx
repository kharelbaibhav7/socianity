import React from "react";

const Login = () => {
    return (
        <div className="container">
            <h2>Login</h2>
            <form action="#" method="POST" className="form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
