import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const MyItems = () => {
    const { user } = use(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    useEffect(() => {
        if (!user?.email) return;

        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => {
                const userFoods = data.filter(food => food.email === user.email);
                setMyFoods(userFoods);
            })
            .catch(error => {
                console.error('Error fetching foods:', error);
            });
    }, [user?.email]);

    const handleUpdate = (food) => {
        setSelectedFood(food);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedFood = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/foods/${selectedFood._id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Food item updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setMyFoods(myFoods.map(food =>
                        food._id === selectedFood._id ? { ...food, ...updatedFood } : food
                    ));
                    setIsUpdateModalOpen(false);
                }
            })
            .catch(error => console.error('Error updating food:', error));
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/foods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food item deleted successfully",
                                icon: "success"
                            });
                            setMyFoods(myFoods.filter(food => food._id !== id));
                        }
                    })
                    .catch(error => console.error('Error deleting food:', error));
            }
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">My Food Items</h2>

            {myFoods.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Expiry Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFoods.map(food => (
                                <tr key={food._id}>
                                    <td>
                                        <img src={food.photo} alt={food.title} className="w-16 h-16 object-cover rounded" />
                                    </td>
                                    <td>{food.title}</td>
                                    <td>{food.category}</td>
                                    <td>{food.quantity}</td>
                                    <td>{new Date(food.expiry).toLocaleDateString()}</td>
                                    <td className="space-x-2">
                                        <button
                                            onClick={() => handleUpdate(food)}
                                            className="btn btn-sm btn-primary"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(food._id)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-8">
                    <p className="text-xl text-gray-600">You haven't add food items yet.</p>
                </div>
            )}

            {isUpdateModalOpen && selectedFood && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg w-full max-w-md">
                        <h3 className="text-2xl font-bold mb-4">Update Food Item</h3>
                        <form onSubmit={handleUpdateSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Food image URL</label>
                                <input
                                    type="text"
                                    name="photo"
                                    defaultValue={selectedFood.photo}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Food title</label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={selectedFood.title}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    name="category"
                                    defaultValue={selectedFood.category}
                                    className="select w-full"
                                >
                                    <option>Dairy</option>
                                    <option>Meat</option>
                                    <option>Vegetables</option>
                                    <option>Snacks</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    defaultValue={selectedFood.quantity}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
                                <input
                                    type="date"
                                    name="expiry"
                                    defaultValue={selectedFood.expiry.split('T')[0]}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyItems;