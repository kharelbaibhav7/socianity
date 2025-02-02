import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MyProfilePage = () => {
    let [user, setUser] = useState({});
    let token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                let response = await axios({
                    method: "get",
                    url: "http://localhost:8000/api/users/me",
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [token]);

    return (
        <div className="flex justify-center items-center min-h-screen  p-6">
            <motion.div 
                className="bg-white shadow-lg rounded-xl p-8 text-center w-full max-w-md border border-blue-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                    className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <User size={50} className="text-blue-500" />
                </motion.div>

                <motion.h2 
                    className="text-2xl font-semibold text-gray-800 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {user.fullName || "Loading..."}
                </motion.h2>

                <motion.div 
                    className="mt-4 text-gray-600 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="flex items-center gap-2">
                        <Mail className="text-blue-500 size-5" /> {user.email || "N/A"}
                    </p>
                    <p className="flex items-center gap-2">
                        <Phone className="text-blue-500 size-5" /> {user.phoneNumber || "N/A"}
                    </p>
                    <p className="flex items-center gap-2">
                        <Star className="text-yellow-500 size-5" /> Score: {user.score || "N/A"}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MyProfilePage;
