import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../App";
// import "./NavBar.css"

const NavBar = () => {


    let global = useContext(GlobalVariableContext)
    let token = global.token


    return (
        <div className="container w-screen flex h-[5rem] items-center justify-between mt-4 p-2">
            <div className="logoAndNameContainer flex items-center gap-3 h-[5rem]">
                <div className="logoContainer h-full overflow-hidden">
                    <img src="../../images/logo.jpeg" alt="" className="h-full w-auto rounded-[100%]"/>
                </div>
                <p className="name font-[Akaya Kanadaka]">Socianity</p>
            </div>
            {token ? (
                <div className="navOptions font-[Roboto]">
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
                        Contributions
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

            ) : <div className="font-[Roboto]">
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
