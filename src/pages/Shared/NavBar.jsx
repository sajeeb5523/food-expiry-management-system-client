import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { TbLogout } from "react-icons/tb";
import Swal from 'sweetalert2';

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

    const links = <>
        <NavLink to='/' className='btn btn-sm'>Home</NavLink>
        <NavLink to='/fridge' className='btn btn-sm'>Fridge</NavLink>
        {
            user && <>
                <NavLink to='add-food' className='btn btn-sm'>Add Food</NavLink>
                <NavLink to='my-items' className='btn btn-sm'>My Items</NavLink>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-38 shadow space-y-1">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img alt="" className='w-15' />
                    <a className="hidden md:block text-2xl font-bold">FETS bd</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-7 text-base">
                    {links}
                </ul>
            </div>
            <div className='ml-10'>
            </div>
            <div className='login_btn flex items-center gap-2 navbar-end'>

                <div className="relative group">
                    <img src={`${user ? user.photoURL : ''}`} className='w-12 rounded-full cursor-pointer' alt="" />
                    {user && (
                        <div className="absolute right-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="bg-base-100 shadow-lg rounded-lg w-23 hover:opacity-100 hover:visible">
                                <ul className="menu menu-sm p-2 gap-1.5">
                                    <p className='text-center'> {user.displayName}</p>
                                    <li>
                                        <button onClick={handleLogout} className="btn w-full ">
                                            <TbLogout />Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {
                    !user && <>
                        <NavLink to='/login' className='btn sm:w-auto px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-md md:text-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'>Login</NavLink>

                        <NavLink to='/register' className='btn sm:w-auto px-4 py-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white text-md md:text-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'>Register</NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;