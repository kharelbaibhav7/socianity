import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../App";

const NavBar = () => {


    let global = useContext(GlobalVariableContext)
    let token = global.token


    return (
        <div>

            {token ? (

                <>
                    <NavLink to="/" style={{ marginRight: "20px" }}>
                        Home
                    </NavLink>
                    <NavLink to="/events" style={{ marginRight: "20px" }}>
                        Events
                    </NavLink>
                    <NavLink to="/raise-funds" style={{ marginRight: "20px" }}>
                        Fundraisings
                    </NavLink>
                    <NavLink to="/contributions" style={{ marginRight: "20px" }}>
                        Contribution
                    </NavLink>
                    <NavLink to="/forum" style={{ marginRight: "20px" }}>
                        Forum
                    </NavLink>
                    <NavLink to="/logout" style={{ marginRight: "20px" }}>
                        Logout
                    </NavLink>
                </>

            ) : <>
                <NavLink to="/" style={{ marginRight: "20px" }}>
                    Home
                </NavLink>
                <NavLink to="/register" style={{ marginRight: "20px" }}>
                    Register
                </NavLink>
                <NavLink to="/login" style={{ marginRight: "20px" }}>
                    Login
                </NavLink>
            </>}



        </div>
    );
};

export default NavBar;
