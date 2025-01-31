import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContributionPage = () => {
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/contributions');
                console.log('API Response:', response.data);
                if (Array.isArray(response.data)) {
                    setContributions(response.data);
                } else {
                    setError('Unexpected response format');
                }
            } catch (error) {
                console.error('Error fetching contributions:', error);
                setError('Error fetching contributions');
            }
        };

        fetchContributions();
    }, []);

    if (error) {
        return <div className="container mx-auto p-4 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Contributions</h1>
            <div className="flex flex-col space-y-6">
                {contributions.map(contribution => (
                    <motion.div
                        key={contribution._id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 flex flex-col gap-2"
                    >
                        <Link to={`/contributions/${contribution._id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                            {contribution.title}
                        </Link>
                        <p className="text-sm text-gray-600 italic">by {contribution.contributor ? contribution.contributor.fullName : 'Unknown Contributor'}</p>
                        <p className="text-gray-700 truncate">{contribution.description}</p>
                        <Link to={`/contributions/${contribution._id}`} className="text-blue-500 flex items-center gap-1 mt-2 hover:text-blue-700">
                            Read More <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ContributionPage;



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ContributionPage = () => {
//     const [contributions, setContributions] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchContributions = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/contributions');
//                 console.log('API Response:', response.data); // Log the response data for debugging
//                 // Ensure the response data is an array
//                 if (Array.isArray(response.data)) {
//                     setContributions(response.data);
//                 } else {
//                     setError('Unexpected response format');
//                 }
//             } catch (error) {
//                 console.error('Error fetching contributions:', error);
//                 setError('Error fetching contributions');
//             }
//         };

//         fetchContributions();
//     }, []);

//     if (error) {
//         return <div className="container mx-auto p-4">Error: {error}</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-4xl font-bold mb-4">Contributions</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {contributions.map(contribution => (
//                     <Link to={`/contributions/${contribution._id}`} key={contribution._id} className="bg-gray-200 p-4 rounded shadow">
//                         <h2 className="text-2xl font-bold">{contribution.title}</h2>
//                         <p>Contributor: {contribution.contributor ? contribution.contributor.fullName : 'Unknown Contributor'}</p>
//                         <p>{contribution.description}</p>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ContributionPage;