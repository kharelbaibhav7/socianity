import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SpecificFundraisings = () => {
    const { id } = useParams();
    const [fundraising, setFundraising] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFundraising = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/fundraising/${id}`); // Update the URL if needed
                console.log('API Response:', response.data); // Log the response data for debugging
                setFundraising(response.data);
            } catch (error) {
                console.error('Error fetching fundraising details:', error);
                setError('Error fetching fundraising details');
            }
        };

        fetchFundraising();
    }, [id]);

    if (error) {
        return <div className="container mx-auto p-4">Error: {error}</div>;
    }

    if (!fundraising) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">{fundraising.title}</h1>
            <p>Organizer: {fundraising.organizer ? fundraising.organizer.fullName : 'Unknown Organizer'}</p>
            <p>Target: {fundraising.target}</p>
            <p>Phone Number: {fundraising.phoneNumber}</p>
            <p>{fundraising.description}</p>
        </div>
    );
};

export default SpecificFundraisings;