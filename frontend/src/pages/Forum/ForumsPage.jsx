import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ForumsPage = () => {

    const [forums, setForums] = useState([]);
    const [error, setError] = useState(null);

    let navigate = useNavigate()

    useEffect(() => {
        const fetchForums = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/forums');
                console.log('API Response:', response.data); // Log the response data for debugging
                // Ensure the response data is an array
                if (Array.isArray(response.data)) {
                    setForums(response.data);
                } else {
                    setError('Unexpected response format');
                }
            } catch (error) {
                console.error('Error fetching forums:', error);
                setError('Error fetching forums');
            }
        };

        fetchForums();
    }, []);


    return (
        <div>
            <ul>
                <li><Link to="/forum/post"> What's on your mind </Link></li>


                <h1 className="text-4xl font-bold mb-4">Forums</h1>
                <div className="grid grid-cols-1 gap-4">
                    {forums.map(forum => (
                        <Link to={`/forums/${forum._id}`} key={forum._id} className="bg-gray-200 p-4 rounded-4xl shadow">
                            <h2 className="text-2xl font-bold">{forum.title}</h2>
                            <p>Author: {forum.postedBy ? forum.postedBy.fullName : 'Unknown Contributor'}</p>
                            {/* <p>{forum.description}</p> */}
                        </Link>
                    ))}
                </div>

            </ul>
        </div>
    )
}

export default ForumsPage