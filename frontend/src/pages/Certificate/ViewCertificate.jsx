
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Medal, Award, CheckCircle } from 'lucide-react';

const ViewCertificate = () => {
    let { id } = useParams();
    let [result, setResult] = useState({});

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                let response = await axios.get(`http://localhost:8000/certificate/${id}`);
                setResult(response.data);
            } catch (err) {
                console.error("Error fetching certificate:", err.message);
            }
        };
        fetchCertificate();
    }, [id]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-xl rounded-xl p-8 border border-gray-300 max-w-2xl w-full text-center"
            >
                <div className="flex justify-center mb-4">
                    <Medal size={50} className="text-yellow-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificate of Appreciation</h1>
                <p className="text-gray-600 text-lg">Presented to</p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl font-semibold text-blue-600 mt-2"
                >
                    {result.name || "Loading..."}
                </motion.h2>
                <p className="text-gray-600 mt-2">For your generous contribution and unwavering support towards social causes.</p>
                <div className="mt-4">
                    <Award size={40} className="text-blue-400 inline-block" />
                    <p className="text-gray-700 mt-2 text-lg">Donation Amount: <span className="font-semibold text-green-600">NPR {result.amount || "-"}</span></p>
                </div>
                <p className="text-gray-500 mt-6">We sincerely appreciate your efforts in making the world a better place.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-emerald-500 transition"
                    >
                        Congratulations
                    </motion.button>
                </div>
                <div className="mt-6 text-gray-400 text-sm flex justify-center items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <p>Socianity - Strengthening Society, Uniting for Change</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ViewCertificate;