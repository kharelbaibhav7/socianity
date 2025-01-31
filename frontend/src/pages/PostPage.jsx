import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarPlus, HandCoins, Medal } from 'lucide-react';

const PostPage = () => {
    return (
        <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
            <motion.h1
                className="text-4xl font-extrabold mb-6 text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Create a New Post
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center text-center border border-gray-200 hover:shadow-2xl transition"
                >
                    <CalendarPlus className="text-blue-500 w-12 h-12 mb-3" />
                    <Link to="/post/event" className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                        Organize Event
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center text-center border border-gray-200 hover:shadow-2xl transition"
                >
                    <HandCoins className="text-green-500 w-12 h-12 mb-3" />
                    <Link to="/post/fundraising" className="text-lg font-semibold text-gray-800 hover:text-green-500">
                        Raise Donation
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center text-center border border-gray-200 hover:shadow-2xl transition"
                >
                    <Medal className="text-yellow-500 w-12 h-12 mb-3" />
                    <Link to="/post/contribution" className="text-lg font-semibold text-gray-800 hover:text-yellow-500">
                        Describe a Contributor
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default PostPage;
