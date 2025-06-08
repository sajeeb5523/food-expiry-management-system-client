import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const ExpiredFoodSection = () => {
    const [expiredFoods, setExpiredFoods] = useState([]);

    useEffect(() => {
        fetch('https://fets-bd-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                const today = new Date();

                const expired = data
                    .filter(food => new Date(food.expiry) < today)
                    .sort((a, b) => new Date(b.expiry) - new Date(a.expiry));

                setExpiredFoods(expired);
            })
            .catch(error => console.error('Error fetching foods:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Expired Food Items</h2>

            {expiredFoods.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expiredFoods.map(food => (
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
                                <div className="flex items-center gap-2">
                                    <span className="badge badge-primary">{food.category}</span>
                                    <span className="badge badge-secondary">Quantity: {food.quantity}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm text-gray-600">
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
                    <p className="text-xl text-gray-600">No expired food items found</p>
                </div>
            )}
        </div>
    );
};

export default ExpiredFoodSection;