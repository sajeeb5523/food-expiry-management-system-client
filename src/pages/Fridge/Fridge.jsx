import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router';
import CountUp from 'react-countup';

const Fridge = () => {
    const foods = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredFoods, setFilteredFoods] = useState(foods);
    const [expiredCount, setExpiredCount] = useState(0);
    const [nearlyExpiredCount, setNearlyExpiredCount] = useState(0);

    useEffect(() => {
        let result = foods;

        if (searchTerm) {
            result = result.filter(food =>
                food.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                food.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            result = result.filter(food => food.category === selectedCategory);
        }

        setFilteredFoods(result);
    }, [searchTerm, selectedCategory, foods]);

    useEffect(() => {
        const today = new Date();
        const fiveDaysFromNow = new Date();
        fiveDaysFromNow.setDate(today.getDate() + 5);

        const expired = foods.filter(food => new Date(food.expiry) < today).length;
        const nearlyExpired = foods.filter(food => {
            const expiryDate = new Date(food.expiry);
            return expiryDate >= today && expiryDate <= fiveDaysFromNow;
        }).length;

        setExpiredCount(expired);
        setNearlyExpiredCount(nearlyExpired);
    }, [foods]);

    const categories = ['all', 'Dairy', 'Meat', 'Vegetables', 'Snacks'];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Fridge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Expired Items</h3>
                            <div className="text-5xl font-bold text-white">
                                <CountUp end={expiredCount} duration={2.5} />
                            </div>
                        </div>
                        <div className="text-white text-4xl">
                            ⚠️
                        </div>
                    </div>
                    <p className="text-red-100 mt-4">Items that have passed their expiry date</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Nearly Expired</h3>
                            <div className="text-5xl font-bold text-white">
                                <CountUp end={nearlyExpiredCount} duration={2.5} />
                            </div>
                        </div>
                        <div className="text-white text-4xl">
                            ⏰
                        </div>
                    </div>
                    <p className="text-yellow-100 mt-4">Items expiring within 5 days</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search by title or category"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-48">
                    <select
                        className="select w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFoods.map(food => (
                    <div key={food._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src={food.photo} alt={food.name} className="rounded-xl h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{food.title}</h2>
                            <div className="flex items-center gap-2">
                                <span className="badge badge-primary">{food.category}</span>
                                <span className="badge badge-secondary">Quantity: {food.quantity}</span>
                            </div>
                            {new Date(food.expiry) < new Date() && (
                                <div className="badge badge-error">Expired</div>
                            )}
                            <div className="card-actions justify-end mt-4">
                                <Link to={`/food/${food._id}`} className="btn btn-primary">See Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredFoods.length === 0 && (
                <div className="text-center mt-8">
                    <p className="text-xl text-gray-600">No foods found matching your title or category</p>
                </div>
            )}
        </div>
    );
};

export default Fridge;