import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fundraisings = () => {
  const [fundraisings, setFundraisings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFundraisings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/fundraising'); // Update the URL if needed
        console.log('API Response:', response.data); // Log the response data for debugging
        // Ensure the response data is an array
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
    return <div className="container mx-auto p-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Fundraisings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fundraisings.map(fundraising => (
          <Link to={`/fundraisings/${fundraising._id}`} key={fundraising._id} className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-2xl font-bold">{fundraising.title}</h2>
            <p>Organizer: {fundraising.organizer ? fundraising.organizer.fullName : 'Unknown Organizer'}</p>
            {/* <p>Target: {fundraising.target}</p>
            <p>{fundraising.description}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fundraisings;