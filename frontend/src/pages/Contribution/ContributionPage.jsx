import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContributionPage = () => {
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/contributions');
                console.log('API Response:', response.data); // Log the response data for debugging
                // Ensure the response data is an array
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
        return <div className="container mx-auto p-4">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Contributions</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contributions.map(contribution => (
                    <Link to={`/contributions/${contribution._id}`} key={contribution._id} className="bg-gray-200 p-4 rounded shadow">
                        <h2 className="text-2xl font-bold">{contribution.title}</h2>
                        <p>Contributor: {contribution.contributor ? contribution.contributor.fullName : 'Unknown Contributor'}</p>
                        <p>{contribution.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ContributionPage;