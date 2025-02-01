import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className="px-8 min-h-screen relative bg-[#c7cce5] text-gray-800">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-16">
                <h1 className="text-6xl font-extrabold text-purple-600 drop-shadow-lg">Socianity</h1>
                <h2 className="text-2xl mt-3 text-gray-700">Strengthening society, Uniting for Change</h2>
                <div className="h-1 w-20 bg-emerald-400 mt-3"></div>
                <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-xl shadow-lg hover:bg-purple-600">
                    Register Now
                </motion.button>
            </section>

            {/* Spinning Logo */}
            <div className="absolute top-[-5vh] right-10">
                <motion.img
                    src="../../images/logo.png"
                    alt="Logo"
                    className="w-32 h-32"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mx-auto w-full max-w-5xl">
                {[
                    { title: "Events", desc: "Join inspiring community events", img: "../../images/EventsLogo.png" },
                    { title: "Donations", desc: "Make a donation to create an impact.", img: "../../images/DonationsLogo.png" },
                    { title: "Contributions", desc: "Read about great social contributors.", img: "../../images/ContributionsLogo.png" },
                    { title: "Forum", desc: "Share your ideas for a stronger community.", img: "../../images/ForumLogo.png" },
                ].map((item, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-xl shadow-xl flex flex-col items-center text-center">
                        <img src={item.img} alt={item.title} className="w-20 h-20" />
                        <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center text-center mt-12">
                <p className="text-2xl font-semibold">Earn rewards while making a difference - Join us today!</p>
                <motion.button whileHover={{ scale: 1.1 }} className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-xl shadow-lg hover:bg-purple-600">
                    Let's Get Started
                </motion.button>
            </div>

            {/* About Section */}
            <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl mt-12 max-w-6xl mx-auto">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-blue-500">ABOUT US</h2>
                    <h3 className="text-4xl font-bold mt-2">About Socianity</h3>
                    <p className="text-gray-700 mt-4">
                        Socianity is a community-driven platform that unites individuals and organizations to create positive change. Through collaboration, contribution, and meaningful connections, we empower people to strengthen society and build a better future together.
                    </p>
                </div>
                <img src="../../images/HomePagePeople.png" alt="Community" className="w-64 md:w-80 rounded-xl shadow-lg" />
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 px-8">
                <p className="text-3xl font-bold">Ready to make a difference?</p>
                <p className="text-gray-700 mt-4 max-w-xl mx-auto">
                    Join Socianity and become part of a thriving community dedicated to positive change. Whether you want to participate in meaningful events, contribute to impactful projects, donate to support causes, or engage in discussions, there's a place for you here.
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-8 py-3 bg-purple-500 text-white rounded-2xl shadow-lg hover:bg-purple-600">
                    Join Now
                </motion.button>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white py-6 mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-8">
                    <div className="flex items-center gap-3">
                        <img src="../../images/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
                        <p className="text-lg font-semibold">Socianity</p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {[
                            { link: "https://www.instagram.com/", img: "../../images/instaLogo.png" },
                            { link: "https://www.youtube.com/", img: "../../images/youtubeLogo.png" },
                            { link: "https://www.linkedin.com/", img: "../../images/linkedinLogo.png" },
                        ].map((social, index) => (
                            <Link key={index} to={social.link} target="_blank">
                                <img src={social.img} alt="Social" className="w-8 h-8" />
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="text-center text-sm mt-4">Copyright &copy; 2025 Socianity. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default HomePage;
