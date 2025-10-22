import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { TbLogout, TbUser, TbHome, TbFridge, TbPlus, TbList, TbInfoCircle } from "react-icons/tb";
import Swal from 'sweetalert2';
import ThemeController from '../ThemeController/ThemeController';

const NavBar = () => {

    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        console.log('user logout');
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                console.log(error);
            });
    }

    const links = (
        <>
            <NavLink to='/' className='btn btn-sm flex items-center gap-1'>
                <TbHome className="text-lg" />
                <span>Home</span>
            </NavLink>
            <NavLink to='/fridge' className='btn btn-sm flex items-center gap-1'>
                <TbFridge className="text-lg" />
                <span>Fridge</span>
            </NavLink>
            <NavLink to='/about-us' className='btn btn-sm flex items-center gap-1'>
                <TbInfoCircle className="text-lg" />
                <span>About US</span>
            </NavLink>
            {
                user && <>
                    <NavLink to='/add-food' className='btn btn-sm flex items-center gap-1'>
                        <TbPlus className="text-lg" />
                        <span>Add Food</span>
                    </NavLink>
                    <NavLink to='/my-items' className='btn btn-sm flex items-center gap-1'>
                        <TbList className="text-lg" />
                        <span>My Items</span>
                    </NavLink>

                </>
            }
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-primary to-secondary text-primary-content fixed top-0 left-0 right-0 z-50 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <div className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-200 rounded-box w-52 z-50">
                        {links}
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src='https://i.ibb.co/LqPhjrT/logo.jpg' alt="" className='w-15' />
                    <a className="hidden md:block text-2xl font-bold">FETS bd</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex items-center gap-2">
                    {links}
                </div>
            </div>
            <div className='ml-10'>
            </div>
            <div className='login_btn flex items-center gap-6 navbar-end'>
                <ThemeController></ThemeController>
                {user ? (
                    <div className="relative group">
                        <div className="avatar cursor-pointer">
                            <div className="w-10 h-10 rounded-full ring ring-base-100">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-base-300 flex items-center justify-center">
                                        <TbUser className="text-xl" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="absolute right-0 mt-2 w-48 bg-base-100 text-base-content rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="p-2">
                                <div className="px-4 py-2 border-b border-base-200">
                                    <p className="font-medium text-sm">{user.displayName || 'User'}</p>
                                    <p className="text-xs text-base-500">{user.email}</p>
                                </div>
                                <ul className="menu menu-sm p-2">
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 text-error hover:bg-error hover:text-error-content rounded-lg"
                                        >
                                            <TbLogout className="text-lg" />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <NavLink to='/login' className='btn sm:w-auto px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-md md:text-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'>Login</NavLink>
                        <NavLink to='/register' className='btn sm:w-auto px-4 py-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white text-md md:text-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'>Register</NavLink>

                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;