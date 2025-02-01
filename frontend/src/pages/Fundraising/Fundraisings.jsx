import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CircleDollarSign } from 'lucide-react';

const Fundraisings = () => {
  const [fundraisings, setFundraisings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFundraisings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/fundraising');
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setFundraisings(response.data);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching fundraisings:', error);
        setError('Error fetching fundraisings');
      }
    };

    fetchFundraisings();
  }, []);

  if (error) {
    return <div className="container mx-auto p-4 text-red-600 font-bold">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Fundraisings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fundraisings.map((fundraising) => (
          <motion.div
            key={fundraising._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl border border-gray-200"
          >
            <Link to={`/fundraisings/${fundraising._id}`} className="block">
              {/* <img src={fundraising.image} alt={fundraising.title} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
              <img src={`http://localhost:8000${fundraising.image}`} alt={fundraising.title} className="w-full h-48 object-cover rounded-lg mb-4" />

              <h2 className="text-2xl font-bold text-gray-900 mb-2">{fundraising.title}</h2>
              <p className="text-gray-600">Organizer: {fundraising.organizer ? fundraising.organizer.fullName : 'Unknown Organizer'}</p>
              <div className="mt-4 flex items-center gap-2">
                <CircleDollarSign className="text-green-500 w-6 h-6" />
                <p className="font-semibold text-lg text-gray-800">Raised: ${fundraising.currentAmount} / ${fundraising.target}</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(100, (fundraising.currentAmount / fundraising.target) * 100)}%` }}></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Fundraisings;




// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { CircleDollarSign } from 'lucide-react';

// const Fundraisings = () => {
//   const [fundraisings, setFundraisings] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFundraisings = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/fundraising');
//         console.log('API Response:', response.data);
//         if (Array.isArray(response.data)) {
//           setFundraisings(response.data);
//         } else {
//           setError('Unexpected response format');
//         }
//       } catch (error) {
//         console.error('Error fetching fundraisings:', error);
//         setError('Error fetching fundraisings');
//       }
//     };

//     fetchFundraisings();
//   }, []);

//   if (error) {
//     return <div className="container mx-auto p-4 text-red-600 font-bold">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Fundraisings</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {fundraisings.map((fundraising) => (
//           <motion.div
//             key={fundraising._id}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl border border-gray-200"
//           >
//             <Link to={`/fundraisings/${fundraising._id}`} className="block">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">{fundraising.title}</h2>
//               <p className="text-gray-600">Organizer: {fundraising.organizer ? fundraising.organizer.fullName : 'Unknown Organizer'}</p>
//               <div className="mt-4 flex items-center gap-2">
//                 <CircleDollarSign className="text-green-500 w-6 h-6" />
//                 <p className="font-semibold text-lg text-gray-800">Target: ${fundraising.target}</p>
//               </div>
//               <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
//                 <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(100, (fundraising.collected / fundraising.target) * 100)}%` }}></div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fundraisings;




// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Fundraisings = () => {
//   const [fundraisings, setFundraisings] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFundraisings = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/fundraising'); // Update the URL if needed
//         console.log('API Response:', response.data); // Log the response data for debugging
//         // Ensure the response data is an array
//         if (Array.isArray(response.data)) {
//           setFundraisings(response.data);
//         } else {
//           setError('Unexpected response format');
//         }
//       } catch (error) {
//         console.error('Error fetching fundraisings:', error);
//         setError('Error fetching fundraisings');
//       }
//     };

//     fetchFundraisings();
//   }, []);

//   if (error) {
//     return <div className="container mx-auto p-4">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-4">Fundraisings</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {fundraisings.map(fundraising => (
//           <Link to={`/fundraisings/${fundraising._id}`} key={fundraising._id} className="bg-gray-200 p-4 rounded shadow">
//             <h2 className="text-2xl font-bold">{fundraising.title}</h2>
//             <p>Organizer: {fundraising.organizer ? fundraising.organizer.fullName : 'Unknown Organizer'}</p>
//             <p>Target: {fundraising.target}</p>
//             {/* <p>{fundraising.description}</p> */}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fundraisings;