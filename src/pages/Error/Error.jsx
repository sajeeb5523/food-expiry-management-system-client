import React from 'react';
import errorImg from '../../assets/error.jpg'
import { Link, useNavigate } from 'react-router';

const Error = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <div className='mt-15'>
            <div className='flex justify-center'>
                <img src={errorImg} alt="" className='w-[360px] md:w-[500px] h-[350px] rounded-2xl shadow-md mb-10' />
            </div>

            <div className='text-center'>
                <h1 className='mb-4 text-red-500 text-3xl md:text-4xl font-bold'>404 - Page Not Found</h1>
                <h4>Oops! The page you're looking for doesn't exist.</h4>
                <button onClick={handleNavigate} className="btn btn-info bg-blue-500 text-white mt-7 mb-10">Goto Back Home</button>
            </div>
        </div>
    );
};

export default Error;