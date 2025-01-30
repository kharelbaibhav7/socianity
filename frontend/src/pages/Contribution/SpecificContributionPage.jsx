import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SpecificContributionPage = () => {
    const { id } = useParams();
    const [contribution, setContribution] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContribution = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/contributions/${id}`);
                console.log('API Response:', response.data); // Log the response data for debugging
                setContribution(response.data);
            } catch (error) {
                console.error('Error fetching contribution details:', error);
                setError('Error fetching contribution details');
            }
        };

        fetchContribution();
    }, [id]);

    if (error) {
        return <div className="container mx-auto p-4">Error: {error}</div>;
    }

    if (!contribution) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">{contribution.title}</h1>
            <p>Contributor: {contribution.contributor ? contribution.contributor.fullName : 'Unknown Contributor'}</p>
            <p>Date: {new Date(contribution.date).toLocaleDateString()}</p>
            <p>{contribution.description}</p>
        </div>
    );
};

export default SpecificContributionPage;