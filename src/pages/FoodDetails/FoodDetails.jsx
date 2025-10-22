import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const FoodDetails = () => {
    const { id } = useParams();
    const food = useLoaderData();
    const { user } = use(AuthContext);
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [timeLeft, setTimeLeft] = useState('');

    const isOwner = user?.email === food.email;

    useEffect(() => {
        const calculateTimeLeft = () => {
            const expiryDate = new Date(food.expiry);
            const now = new Date();
            const difference = expiryDate - now;

            if (difference <= 0) {
                setTimeLeft('Expired');
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 6000);

        return () => clearInterval(timer);
    }, [food.expiry]);

    useEffect(() => {
        fetch(`https://fets-bd-server.vercel.app/notes/${id}`)
            .then(res => res.json())
            .then(data => setNotes(data))
            .catch(error => console.error('Error fetching notes:', error));
    }, [id]);

    const handleAddNote = (e) => {
        e.preventDefault();
        if (!newNote.trim()) return;

        const noteData = {
            foodId: id,
            note: newNote,
            postedDate: new Date().toISOString(),
            userEmail: user.email
        };

        fetch('https://fets-bd-server.vercel.app/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noteData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setNotes([...notes, { ...noteData, _id: data.insertedId }]);
                    setNewNote('');
                }
            })
            .catch(error => console.error('Error adding note:', error));
    };

    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <div className="max-w-4xl mx-auto">
                <div className="bg-base-100 rounded-lg shadow-lg p-6 mb-8 border">
                    <div className="flex flex-col md:flex-row gap-6">
                        <img src={food.photo} alt={food.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
                            <div className="space-y-2">
                                <p><span className="font-semibold">Category:</span> {food.category}</p>
                                <p><span className="font-semibold">Quantity:</span> {food.quantity}</p>
                                <p><span className="font-semibold">Added Date:</span> {new Date(food.addedDate).toLocaleDateString()}</p>
                                <p><span className="font-semibold">Expiry Date:</span> {new Date(food.expiry).toLocaleDateString()}</p>
                                <div className="mt-4">
                                    <span className={`badge ${timeLeft === 'Expired' ? 'badge-error' : 'badge-warning'}`}>
                                        {timeLeft === 'Expired' ? 'Expired' : `Expires in: ${timeLeft}`}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 rounded-lg shadow-lg p-6 border">
                    <h2 className="text-2xl font-bold mb-4">Notes</h2>

                    <form onSubmit={handleAddNote} className="mb-6">
                        <textarea
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Add a note about this food item..."
                            className="textarea textarea-bordered w-full h-24 mb-2"
                            disabled={!isOwner}
                        />
                        <button
                            type="submit"
                            className={`btn btn-primary ${!isOwner ? 'btn-disabled' : ''}`}
                            disabled={!isOwner}
                        >
                            Add Note
                        </button>
                        {!isOwner && (
                            <p className="text-sm text-gray-500 mt-2">
                                Only the person who added this food item can add notes.
                            </p>
                        )}
                    </form>

                    <div className="space-y-4">
                        {notes.map(note => (
                            <div key={note._id} className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">{note.note}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Posted on: {new Date(note.postedDate).toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails; 