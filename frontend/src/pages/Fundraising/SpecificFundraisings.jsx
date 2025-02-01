import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CircleDollarSign, Phone } from 'lucide-react';
import { toast } from 'react-hot-toast';

const SpecificFundraisings = () => {
    const { id } = useParams();
    const [fundraising, setFundraising] = useState(null);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [amount, setAmount] = useState("");
    const [currentAmount, setCurrentAmount] = useState(0);

    useEffect(() => {
        const fetchFundraising = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/fundraising/${id}`);
                console.log('API ko Response:', response.data.currentAmount);
                setFundraising(response.data);
                setCurrentAmount(response.data.currentAmount)
            } catch (error) {
                console.error('Error fetching fundraising details:', error);
                setError('Error fetching fundraising details');
            }
        };

        fetchFundraising();
    }, [id]);

    const handleDonate = async () => {
        try {
            let result = await axios.post(`http://localhost:8000/api/fundraising/${id}/donate`, { amount });
            toast.success('Donation successful!');
            setCurrentAmount(result.data.currentAmount)
            console.log(result)
            setAmount("");
        } catch (error) {
            console.error('Error making donation:', error);
            alert('Donation failed. Please try again.');
        }
    };

    if (error) {
        return <div className="container mx-auto p-4 text-red-600 font-bold">Error: {error}</div>;
    }

    if (!fundraising) {
        return <div className="container mx-auto p-4 text-gray-700 font-semibold">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
            <motion.img
                src={`http://localhost:8000${fundraising.image}`}
                alt={fundraising.title}
                className="w-full h-64 object-cover rounded-t-xl"
            />

            <div className="p-6">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{fundraising.title}</h1>
                <p className="text-lg text-gray-700 mb-2">Organizer: <span className="font-semibold">{fundraising.organizer ? fundraising.organizer.fullName : 'Unknown Organizer'}</span></p>
                <div className="flex items-center gap-2 mb-4">
                    <CircleDollarSign className="text-green-500 w-6 h-6" />
                    <p className="text-lg font-semibold">Target: ${fundraising.target}</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <Phone className="text-blue-500 w-6 h-6" />
                    <p className="text-lg font-semibold">Phone: {fundraising.phoneNumber}</p>
                </div>
                <div className="bg-gray-200 h-3 rounded-full overflow-hidden mb-4">
                    <motion.div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${Math.min(100, (currentAmount / fundraising.target) * 100)}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (currentAmount / fundraising.target) * 100)}%` }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-4">Raised: ${currentAmount} / ${fundraising.target}</p>
                <p className="text-lg text-gray-600 italic mb-4">{fundraising.description}</p>

                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Donate
                </button>

                {showForm && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        />
                        <button
                            onClick={handleDonate}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                        >
                            Send Money
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpecificFundraisings;


