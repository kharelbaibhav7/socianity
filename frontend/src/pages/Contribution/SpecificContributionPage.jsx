import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, FileText } from "lucide-react";

const SpecificContributionPage = () => {
    const { id } = useParams();
    const [contribution, setContribution] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContribution = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/contributions/${id}`);
                console.log("API Response:", response.data);
                setContribution(response.data);
            } catch (error) {
                console.error("Error fetching contribution details:", error);
                setError("Error fetching contribution details");
            }
        };

        fetchContribution();
    }, [id]);

    if (error) {
        return <div className="container mx-auto p-4 text-red-600">Error: {error}</div>;
    }

    if (!contribution) {
        return <div className="container mx-auto p-4 text-gray-500 text-center">Loading...</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto max-w-3xl p-6 bg-white shadow-lg rounded-xl"
        >
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                {contribution.title}
            </h1>

            <div className="space-y-4 text-gray-600">
                <motion.div className="flex items-center space-x-3">
                    <User className="size-5 text-primary" />
                    <span className="font-semibold">
                        Contributor: {contribution.contributor ? contribution.contributor.fullName : "Unknown Contributor"}
                    </span>
                </motion.div>

                <motion.div className="flex items-center space-x-3">
                    <Calendar className="size-5 text-primary" />
                    <span>{new Date(contribution.date).toLocaleDateString()}</span>
                </motion.div>

                <motion.div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                    <FileText className="size-6 text-primary mb-2" />
                    <p className="text-gray-700">{contribution.description}</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SpecificContributionPage;



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const SpecificContributionPage = () => {
//     const { id } = useParams();
//     const [contribution, setContribution] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchContribution = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/api/contributions/${id}`);
//                 console.log('API Response:', response.data); // Log the response data for debugging
//                 setContribution(response.data);
//             } catch (error) {
//                 console.error('Error fetching contribution details:', error);
//                 setError('Error fetching contribution details');
//             }
//         };

//         fetchContribution();
//     }, [id]);

//     if (error) {
//         return <div className="container mx-auto p-4">Error: {error}</div>;
//     }

//     if (!contribution) {
//         return <div className="container mx-auto p-4">Loading...</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-4xl font-bold">{contribution.title}</h1>
//             <p>Contributor: {contribution.contributor ? contribution.contributor.fullName : 'Unknown Contributor'}</p>
//             <p>Date: {new Date(contribution.date).toLocaleDateString()}</p>
//             <p>{contribution.description}</p>
//         </div>
//     );
// };

// export default SpecificContributionPage;