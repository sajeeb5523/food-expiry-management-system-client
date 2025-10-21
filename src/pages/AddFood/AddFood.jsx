import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate()

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newFood = Object.fromEntries(formData.entries());
        console.log(newFood);

        // send food data to the database
        fetch('https://fets-bd-server.vercel.app/foods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully');
                    navigate('/my-items')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your food added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-16">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg my-8">
                <form onSubmit={handleAddFood} className="space-y-5">
                    {/* Food image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Food image</label>
                        <input
                            type='text'
                            name='photo'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your food imageURL"
                        />
                    </div>

                    {/* Food title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Food title</label>
                        <input
                            type='text'
                            name='title'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your food title"
                        />
                    </div>

                    {/* Category */}
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select defaultValue="Category" name='category' className="select w-full">
                        <option disabled={true}>Category</option>
                        <option>Dairy</option>
                        <option>Meat</option>
                        <option>Vegetables</option>
                        <option>Snacks</option>
                    </select>

                    {/* Quantity */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                        <input
                            type='text'
                            name='quantity'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your quantity"
                        />
                    </div>

                    {/* Expiry date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
                        <input
                            type="date"
                            name='expiry'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your expiry date"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea className="textarea w-full" name='description' placeholder="Enter description"></textarea>
                    </div>

                    {/* Added Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Added Date</label>
                        <input
                            type='text'
                            name='addedDate'
                            value={new Date().toLocaleDateString()}
                            readOnly
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Automatically recorded"
                        />
                    </div>

                    {/* User email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type='email'
                            name='email'
                            value={user?.email || ''}
                            readOnly
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <input type='submit' className='btn btn-primary w-full mx-auto mt-1' value='Add Food'></input>
                </form>
            </div>
        </div>
    );
};

export default AddFood;