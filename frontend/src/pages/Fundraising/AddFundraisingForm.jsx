import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, FileText, DollarSign, Phone, Target } from "lucide-react";

const AddFundraisingForm = () => {
    const [title, setTitle] = useState("");
    const [target, setTarget] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("target", target);
        formData.append("phoneNumber", phoneNumber);
        formData.append("description", description);
        formData.append("image", image);

        try {
            await axios.post("http://localhost:8000/api/fundraising", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            setTitle("");
            setTarget("");
            setPhoneNumber("");
            setDescription("");
            setImage(null);
            navigate("/fundraisings");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <motion.div
            className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create a Fundraising Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-500" />
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-gray-500" />
                    <input type="number" placeholder="Target Amount" value={target} onChange={(e) => setTarget(e.target.value)} required
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-500" />
                    <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative">
                    <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative border border-dashed p-4 rounded-lg text-center cursor-pointer hover:bg-gray-100">
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} required className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="flex items-center justify-center gap-2 cursor-pointer">
                        <Upload className="text-gray-500" />
                        <span className="text-gray-600">Upload an Image</span>
                    </label>
                </div>
                <motion.button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Submit
                </motion.button>
            </form>
        </motion.div>
    );
};

export default AddFundraisingForm;

