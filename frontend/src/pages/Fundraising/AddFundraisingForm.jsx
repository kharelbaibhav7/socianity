import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { DollarSign, Phone, FileText, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddFundraisingForm = () => {
    const [title, setTitle] = useState("");
    const [target, setTarget] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = { title, target, phoneNumber, description };
        console.log(data);

        try {
            let result = await axios.post("http://localhost:8000/api/fundraising", data, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            console.log(result);
            setTitle("");
            setTarget("");
            setPhoneNumber("");
            setDescription("");

            navigate("/fundraisings")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <motion.form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-center mb-4">Start a Fundraiser</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <DollarSign className="text-green-500" />
                        <input type="text" placeholder="Fundraising Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Target className="text-blue-500" />
                        <input type="text" placeholder="Target Amount" value={target} onChange={(e) => setTarget(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="text-yellow-500" />
                        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                    </div>
                    <div className="flex items-center gap-2">
                        <FileText className="text-red-500" />
                        <textarea placeholder="Fundraising Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32"></textarea>
                    </div>
                </div>
                <motion.button
                    type="submit"
                    className="w-full mt-4 bg-green-600 text-white p-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Submit
                </motion.button>
            </motion.form>
        </div>
    );
};

export default AddFundraisingForm;



// import React, { useState } from 'react'
// import axios from 'axios'

// const AddFundraisingForm = () => {

//     const [title, setTitle] = useState("")
//     const [target, setTarget] = useState("")
//     const [phoneNumber, setPhoneNumber] = useState("")
//     const [description, setDescription] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         let data = {
//             title,
//             target,
//             phoneNumber,
//             description
//         }
//         console.log(data)

//         try {

//             let result = await axios({
//                 method: 'post',
//                 url: `http://localhost:8000/api/fundraising`,
//                 data: data,
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             })
//             console.log(result)
//             setTitle("")
//             setTarget("")
//             setPhoneNumber("")
//             setDescription("")
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="Title">Title: </label>
//                     <input type="text" id='Title' value={title} onChange={(e) => setTitle(e.target.value)} />


//                     <label htmlFor="Target">Target: </label>
//                     <input type="text" id='Target' value={target} onChange={(e) => setTarget(e.target.value)} />
//                     <br />

//                     <label htmlFor="PhoneNumber">PhoneNumber: </label>
//                     <input type='text' id='PhoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

//                     <label htmlFor="Description">Description: </label>
//                     <textarea type='text' id='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </div>
//                 <div>
//                     <button type='submit'>Submit</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default AddFundraisingForm