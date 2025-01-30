import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../App";
import "./NavBar.css"

const NavBar = () => {


    let global = useContext(GlobalVariableContext)
    let token = global.token


    return (
        <div className="container">
            <div className="logoAndNameContainer">
                <div className="logoContainer">
                    <img src="../../images/logo.jpeg" alt="" />
                </div>
                <p className="name">Socianity</p>
            </div>
            {token ? (

                <div className="navOptions">
                    <NavLink to="/" style={{ marginRight: "20px" }}>
                        Home
                    </NavLink>
                    <NavLink to="/events" style={{ marginRight: "20px" }}>
                        Events
                    </NavLink>
                    <NavLink to="/fundraisings" style={{ marginRight: "20px" }}>
                        Fundraisings
                    </NavLink>
                    <NavLink to="/contributions" style={{ marginRight: "20px" }}>
                        Contribution
                    </NavLink>
                    <NavLink to="/forum" style={{ marginRight: "20px" }}>
                        Forum
                    </NavLink>
                    <NavLink to="/post" style={{ marginRight: "20px" }}>
                        Post
                    </NavLink>
                    <NavLink to="/logout" style={{ marginRight: "20px" }}>
                        Logout
                    </NavLink>
                </div>

            ) : <div>
                <NavLink to="/" style={{ marginRight: "20px" }}>
                    Home
                </NavLink>
                <NavLink to="/register" style={{ marginRight: "20px" }}>
                    Register
                </NavLink>
                <NavLink to="/login" style={{ marginRight: "20px" }}>
                    Login
                </NavLink>
            </div>}
        </div>
    );
};

export default NavBar;
