import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react";
import { FaSpinner } from 'react-icons/fa';

const ExpiredFoodSection = () => {
    const [expiredFoods, setExpiredFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set loading to true when component mounts
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds loading time

        fetch('https://fets-bd-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                const today = new Date();

                const expired = data
                    .filter(food => new Date(food.expiry) < today)
                    .sort((a, b) => new Date(b.expiry) - new Date(a.expiry));

                setExpiredFoods(expired);
            })
            .catch(error => {
                console.error('Error fetching foods:', error);
                setIsLoading(false);
            });

        return () => clearTimeout(loadingTimer);
    }, []);

    return (
        <div className='bg-base-200'>
            <div className="container mx-auto px-4 py-8">
                {/* animation */}
                {/* <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 5, delay: 3, repeat: Infinity } }}
                className="text-3xl font-bold text-center mb-8"
            >Expired Food Items</motion.h2> */}

                <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-4'>Expired Food Items</h3>
                {!isLoading && expiredFoods.length > 0 && (
                    <p className="text-lg mb-8 text-center">Displays all food items that have passed their expiry date for easy tracking.</p>
                )}

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="text-center">
                            <FaSpinner className="animate-spin text-4xl text-primary mx-auto mb-4" />
                            <p>Loading expired food items...</p>
                        </div>
                    </div>
                ) : expiredFoods.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expiredFoods.map(food => (
                            <div key={food._id} className="card bg-base-100 shadow-xl border border-white">
                                <figure className="px-4 pt-4">
                                    <img
                                        src={food.photo}
                                        alt={food.title}
                                        className="rounded-xl h-48 w-full object-cover"
                                    />
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-title">{food.title}</h2>
                                    <div className="flex items-center gap-2">
                                        <span className="badge badge-primary">{food.category}</span>
                                        <span className="badge badge-secondary">Quantity: {food.quantity}</span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm text-base-50">
                                            Expired on: {new Date(food.expiry).toLocaleDateString()}
                                        </p>
                                        <span className="badge badge-error">Expired</span>
                                    </div>

                                    <div className="card-actions justify-end mt-4">
                                        <Link to={`/food/${food._id}`} className="btn btn-primary">
                                            See Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-8">
                        <p className="text-xl">No expired food items found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpiredFoodSection;