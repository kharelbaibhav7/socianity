import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    // let token = localStorage.getItem("token");
    let token = ""


    return (
        <div>

            {token ? (

                <>
                    <NavLink to="/" style={{ marginRight: "20px" }}>
                        Home
                    </NavLink>
                    <NavLink to="/events" style={{ marginRight: "20px" }}>
                        event
                    </NavLink>
                    <NavLink to="/raise-funds" style={{ marginRight: "20px" }}>
                        fundraising
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
                    Register admin
                </NavLink>
                <NavLink to="/login" style={{ marginRight: "20px" }}>
                    Admin login
                </NavLink>
            </>}



        </div>
    );
};

export default NavBar;
