import React, { use, useState } from 'react';
import SocialLogin from '../Shared/SocialLogin';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const { createUser, updateUser, setUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // Password validation
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (passwordRegExp.test(password) === false) {
            setErrorMessage('Password (at least 6 characters, 1 uppercase and 1 lowercase)');
            return
        }

        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                console.log(result);
                const user = result.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg my-10">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register to your account
                </h2>

                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type='text'
                            name='name'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type='email'
                            name='email'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* PhotoURL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PhotoURL</label>
                        <input
                            type='text'
                            name='photo'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your photoURL"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type='password'
                            name='password'
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                    Don’t have an account? <Link to="/login" className="text-indigo-600 hover:underline dark:text-indigo-400">
                        Login
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
                {
                    errorMessage && <p className='text-red-500'>{errorMessage}</p>
                }
            </div>
        </div>
    );
};

export default Register;