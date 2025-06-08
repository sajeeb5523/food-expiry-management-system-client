import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className='flex items-center gap-3'>
                            <img src="https://i.ibb.co/LqPhjrT/logo.jpg" alt="" className='w-18'/>
                            <h2 className="text-2xl font-bold mb-4">FETS</h2>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner in financial technology solutions.
                            We provide innovative tools and services to help businesses
                            thrive in the digital economy.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href='/about-us' className="text-gray-400 hover:text-white transition">About Us</a></li>
                            <li><a href='/services' className="text-gray-400 hover:text-white transition">Services</a></li>
                            <li><a href='/contact' className="text-gray-400 hover:text-white transition">Contact</a></li>
                            <li><a href='/support' className="text-gray-400 hover:text-white transition">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: sajeebaljabed1@gmail.com</li>
                            <li>Phone: +8801571595523</li>
                            <li>Address: Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} FETS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;