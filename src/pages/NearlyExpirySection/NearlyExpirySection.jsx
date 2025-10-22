import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const NearlyExpirySection = () => {
    const [nearlyExpiringFoods, setNearlyExpiringFoods] = useState([]);

    useEffect(() => {
        fetch('https://fets-bd-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                const today = new Date();
                const fiveDaysFromNow = new Date();
                fiveDaysFromNow.setDate(today.getDate() + 5);

                const nearlyExpiring = data
                    .filter(food => {
                        const expiryDate = new Date(food.expiry);
                        return expiryDate >= today && expiryDate <= fiveDaysFromNow;
                    })
                    .sort((a, b) => new Date(a.expiry) - new Date(b.expiry))
                    .slice(0, 6);

                setNearlyExpiringFoods(nearlyExpiring);
            })
            .catch(error => console.error('Error fetching foods:', error));
    }, []);

    return (
        <div className='bg-base-200 -mt-2'>
            <div className="container mx-auto px-4 py-8">
                {/* animation */}
                {/* <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 5, delay: 3, repeat: Infinity } }}
                className="text-3xl font-bold text-center mb-8"
            >Nearly Expiring Items</motion.h2> */}

                <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-8'>Nearly Expiring Items</h3>


                {nearlyExpiringFoods.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nearlyExpiringFoods.map(food => (
                            <div key={food._id} className="card bg-base-100 shadow-xl border">
                                <figure className="px-4 pt-4">
                                    <img
                                        src={food.photo}
                                        alt={food.title}
                                        className="rounded-xl h-48 w-full object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{food.title}</h2>
                                    <h3 className='text-base'>{food.description}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="badge badge-primary">{food.category}</span>
                                        <span className="badge badge-secondary">Quantity: {food.quantity}</span>
                                    </div>
                                    <p className="text-sm">
                                        Expires: {new Date(food.expiry).toLocaleDateString()}
                                    </p>
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
                        <p className="text-lg">No items expiring in the next 5 days</p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default NearlyExpirySection;