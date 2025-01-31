import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Calendar, Clock, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddEventForm = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = { name, date, time, description };
        console.log(data);

        try {
            let result = await axios.post("http://localhost:8000/api/events", data, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setName("");
            setDate("");
            setTime("");
            setDescription("");

            navigate("/events")
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
                <h2 className="text-2xl font-bold text-center mb-4">Add New Event</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <User className="text-blue-500" />
                        <input type="text" placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="text-green-500" />
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-yellow-500" />
                        <input type="text" placeholder="Event Time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                    </div>
                    <div className="flex items-center gap-2">
                        <FileText className="text-red-500" />
                        <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32"></textarea>
                    </div>
                </div>
                <motion.button
                    type="submit"
                    className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Submit
                </motion.button>
            </motion.form>
        </div>
    );
};

export default AddEventForm;



// import React, { useState } from 'react'
// import axios from 'axios'

// const AddEventForm = () => {

//     const [name, setName] = useState("")
//     const [date, setDate] = useState("")
//     const [time, setTime] = useState("")
//     const [description, setDescription] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         let data = {
//             name,
//             date,
//             time,
//             description
//         }
//         console.log(data)

//         try {
//             console.log("a")

//             let result = await axios({
//                 method: 'post',
//                 url: `http://localhost:8000/api/events`,
//                 data: data,
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//             })
//             // console.log(result)
//             setName("")
//             setDate("")
//             setTime("")
//             setDescription("")
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="Name">Name: </label>
//                     <input type="text" id='Name' value={name} onChange={(e) => setName(e.target.value)} />


//                     <label htmlFor="Date">Date: </label>
//                     <input type="date" id='Date' value={date} onChange={(e) => setDate(e.target.value)} />
//                     <br />

//                     <label htmlFor="Time">Time: </label>
//                     <input type='text' id='Time' value={time} onChange={(e) => setTime(e.target.value)} />

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

// export default AddEventForm