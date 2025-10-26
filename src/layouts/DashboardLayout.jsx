import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import {
    FiHome,
    FiUsers,
    FiMenu,
    FiX,
    FiArrowLeft,
    FiPackage,
    FiCalendar,
    FiBell
} from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <p className="text-lg text-gray-700">Please log in to view your dashboard</p>
                </div>
            </div>
        );
    }

    const { displayName, photoURL, userRole } = user;

    const navigation = [
        { name: 'Dashboard', icon: FiHome, href: '#', current: activeMenu === 'dashboard' },
        { name: 'Users', icon: FiUsers, href: '#users', current: activeMenu === 'users' },
    ];

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile sidebar */}
            <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
                    <div className="flex items-center">
                        <a href='/' className='flex items-center gap-2'>
                            <img src='https://i.ibb.co/LqPhjrT/logo.jpg' alt="" className='w-15' />
                            <a className="hidden md:block text-2xl font-bold">FETS bd</a>
                        </a>
                    </div>
                    <button
                        className="p-1 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FiX className="h-6 w-6" />
                    </button>
                </div>

                {/* User profile */}
                <div className="flex items-center p-4 border-b border-gray-200">
                    <div className="relative">
                        {photoURL ? (
                            <img
                                className="h-10 w-10 rounded-full"
                                src={photoURL}
                                alt={displayName || 'User'}
                            />
                        ) : (
                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                                {displayName ? displayName.charAt(0).toUpperCase() : 'U'}
                            </div>
                        )}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">{displayName || 'User'}</p>
                        
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveMenu(item.name.toLowerCase());
                            }}
                            className={`${item.current ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} group flex items-center px-4 py-3 text-sm font-medium`}
                        >
                            <item.icon
                                className={`${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'} mr-3 h-5 w-5`}
                                aria-hidden="true"
                            />
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top header */}
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <button
                                className="p-1 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none lg:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <FiMenu className="h-6 w-6" />
                            </button>
                            <h1 className="ml-3 text-lg font-medium text-gray-900">
                                {navigation.find(item => item.current)?.name || 'Dashboard'}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                            >
                                <FiArrowLeft className="mr-1 h-4 w-4" />
                                Back to Home
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
                    {activeMenu === 'dashboard' ? (
                        <div className="space-y-6">
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                                
                                {/* Stats Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <div className="flex items-center">
                                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                                <FiPackage className="h-6 w-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-500">Total Products</p>
                                                <p className="text-2xl font-semibold text-gray-900">1,234</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                                        <div className="flex items-center">
                                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                                <FiUsers className="h-6 w-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-500">Active Users</p>
                                                <p className="text-2xl font-semibold text-gray-900">42</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                                        <div className="flex items-center">
                                            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                                                <FiCalendar className="h-6 w-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-500">Expiring Soon</p>
                                                <p className="text-2xl font-semibold text-gray-900">15</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                                        <div className="flex items-center">
                                            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                                <FiBell className="h-6 w-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-500">Alerts</p>
                                                <p className="text-2xl font-semibold text-gray-900">3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Recent Activity */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                        <ul className="divide-y divide-gray-200">
                                            {[1, 2, 3].map((item) => (
                                                <li key={item} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-medium text-blue-600 truncate">
                                                            New product added - Item {item}
                                                        </p>
                                                        <div className="ml-2 flex-shrink-0 flex">
                                                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                {item} day{item !== 1 ? 's' : ''} ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : activeMenu === 'users' ? (
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="px-6 py-5 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
                                <p className="mt-1 text-sm text-gray-500">View and manage user information</p>
                            </div>
                            
                            <div className="px-6 py-8">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Profile Picture */}
                                    <div className="md:w-1/4 flex flex-col items-center">
                                        <div className="relative">
                                            {photoURL ? (
                                                <img
                                                    className="h-32 w-32 rounded-full border-4 border-white shadow-md"
                                                    src={photoURL}
                                                    alt={displayName || 'User'}
                                                />
                                            ) : (
                                                <div className="h-32 w-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-md">
                                                    {displayName ? displayName.charAt(0).toUpperCase() : 'U'}
                                                </div>
                                            )}
                                            <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span>
                                        </div>
                                        <h3 className="mt-4 text-xl font-semibold text-gray-800">{displayName || 'User'}</h3>
                                       
                                    </div>
                                    
                                    {/* User Details */}
                                    <div className="md:w-3/4">
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h4 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h4>
                                            <dl className="space-y-4">
                                                <div className="border-b border-gray-100 pb-3">
                                                    <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                                                    <dd className="mt-1 text-sm text-gray-900">{displayName || 'Not provided'}</dd>
                                                </div>
                                                <div className="border-b border-gray-100 pb-3">
                                                    <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                                                    <dd className="mt-1 text-sm text-gray-900">{user.email || 'Not provided'}</dd>
                                                </div>
                                                
                                                
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                                                    <dd className="mt-1 text-sm text-gray-900">
                                                        {user.metadata?.creationTime ? 
                                                            new Date(user.metadata.creationTime).toLocaleDateString() : 
                                                            'N/A'}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        
                                        {/* Additional Information */}
                                        <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                                            <h4 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Last Sign In</dt>
                                                    <dd className="mt-1 text-sm text-gray-900">
                                                        {user.metadata?.lastSignInTime ? 
                                                            new Date(user.metadata.lastSignInTime).toLocaleString() : 
                                                            'N/A'}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Account Verified</dt>
                                                    <dd className="mt-1">
                                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                            user.emailVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            {user.emailVerified ? 'Verified' : 'Not Verified'}
                                                        </span>
                                                    </dd>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : children || (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome to your dashboard, {displayName || 'User'}!</h2>
                            <p className="text-gray-600">Select an option from the sidebar to get started.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;