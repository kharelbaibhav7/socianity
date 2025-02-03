
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../App";
import { Menu, X, Home, Calendar, HandHeart, Users, MessageSquare, Plus, LogOut, LogIn, UserPlus, User } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
    let global = useContext(GlobalVariableContext);
    let token = global.token;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-between px-6 py-4 bg-blue-400 shadow-lg rounded-b-3xl sticky top-0 z-50"
        >
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-3">
                <motion.img
                    src="../../images/logo.png"
                    alt="Logo"
                    className="h-12 w-12 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                />
                <p className="text-xl font-bold text-white font-akaya-kanadaka">Socianity</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 font-medium text-white">
                {token ? (
                    <>
                        <NavLink to="/" className="flex items-center gap-2 hover:scale-105 transition-all"><Home size={20} /> Home</NavLink>
                        <NavLink to="/events" className="flex items-center gap-2 hover:scale-105 transition-all"><Calendar size={20} /> Events</NavLink>
                        <NavLink to="/fundraisings" className="flex items-center gap-2 hover:scale-105 transition-all"><HandHeart size={20} /> Fundraisings</NavLink>
                        <NavLink to="/forum" className="flex items-center gap-2 hover:scale-105 transition-all"><MessageSquare size={20} /> Forum</NavLink>
                        <NavLink to="/contributions" className="flex items-center gap-2 hover:scale-105 transition-all"><Users size={20} /> Contributions</NavLink>
                        <NavLink to="/post" className="flex items-center gap-2 hover:scale-105 transition-all"><Plus size={20} /> Post</NavLink>
                        <NavLink to="/my-profile" className="flex items-center gap-2 hover:scale-105 transition-all"><User size={20} /> My-Profile</NavLink>
                        <NavLink to="/logout" className="flex items-center gap-2 hover:scale-105 transition-all text-red-200"><LogOut size={20} /> Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/" className="flex items-center gap-2 hover:scale-105 transition-all"><Home size={20} /> Home</NavLink>
                        <NavLink to="/register" className="flex items-center gap-2 hover:scale-105 transition-all"><UserPlus size={20} /> Register</NavLink>
                        <NavLink to="/login" className="flex items-center gap-2 hover:scale-105 transition-all text-green-300"><LogIn size={20} /> Login</NavLink>
                    </>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 w-full bg-orange-500 p-4 shadow-lg rounded-b-3xl flex flex-col items-center space-y-3 text-white md:hidden"
                >
                    {token ? (
                        <>
                            <NavLink to="/" className="flex items-center gap-2"><Home size={20} /> Home</NavLink>
                            <NavLink to="/events" className="flex items-center gap-2"><Calendar size={20} /> Events</NavLink>
                            <NavLink to="/fundraisings" className="flex items-center gap-2"><HandHeart size={20} /> Fundraisings</NavLink>
                            <NavLink to="/contributions" className="flex items-center gap-2"><Users size={20} /> Contributions</NavLink>
                            <NavLink to="/forum" className="flex items-center gap-2"><MessageSquare size={20} /> Forum</NavLink>
                            <NavLink to="/post" className="flex items-center gap-2"><Plus size={20} /> Post</NavLink>
                            <NavLink to="/logout" className="flex items-center gap-2 text-red-200"><LogOut size={20} /> Logout</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/" className="flex items-center gap-2"><Home size={20} /> Home</NavLink>
                            <NavLink to="/register" className="flex items-center gap-2"><UserPlus size={20} /> Register</NavLink>
                            <NavLink to="/login" className="flex items-center gap-2 text-green-300"><LogIn size={20} /> Login</NavLink>
                        </>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
};

export default NavBar;




// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { GlobalVariableContext } from "../App";
// // import "./NavBar.css"
// const NavBar = () => {
//     let global = useContext(GlobalVariableContext)
//     let token = global.token
//     return (
//         <div className="container w-screen flex h-[4rem] items-center justify-between m-auto mt-4 p-0 bg-orange-300 rounded-4xl sticky top-0 z-2">
//             <div className="logoAndNameContainer flex items-center gap-3 h-[5rem]">
//                 <div className="logoContainer h-full overflow-hidden">
//                     <img src="../../images/logo.png" alt="" className="h-full w-auto rounded-[100%]" />
//                 </div>
//                 <p className="name font-[Akaya Kanadaka]">Socianity</p>
//             </div>
//             {token ? (
//                 <div className="navOptions font-[Roboto]">
//                     <NavLink to="/" style={{ marginRight: "20px" }}>
//                         Home
//                     </NavLink>
//                     <NavLink to="/events" style={{ marginRight: "20px" }}>
//                         Events
//                     </NavLink>
//                     <NavLink to="/fundraisings" style={{ marginRight: "20px" }}>
//                         Fundraisings
//                     </NavLink>
//                     <NavLink to="/contributions" style={{ marginRight: "20px" }}>
//                         Contributions
//                     </NavLink>
//                     <NavLink to="/forum" style={{ marginRight: "20px" }}>
//                         Forum
//                     </NavLink>
//                     <NavLink to="/post" style={{ marginRight: "20px" }}>
//                         Post
//                     </NavLink>
//                     <NavLink to="/logout" style={{ marginRight: "20px" }}>
//                         Logout
//                     </NavLink>
//                 </div>

//             ) : <div className="font-[Roboto]">
//                 <NavLink to="/" style={{ marginRight: "20px" }}>
//                     Home
//                 </NavLink>
//                 <NavLink to="/register" style={{ marginRight: "20px" }}>
//                     Register
//                 </NavLink>
//                 <NavLink to="/login" style={{ marginRight: "20px" }}>
//                     Login
//                 </NavLink>
//             </div>}
//         </div>
//     );
// };
// export default NavBar;