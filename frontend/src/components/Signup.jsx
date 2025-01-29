import React from "react";


const Signup = () => {
    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form action="#" method="POST" className="form">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};
export default Signup;
