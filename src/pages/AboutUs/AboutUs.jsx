import React from 'react';
import { FaUsers, FaClock, FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO & Founder',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        bio: 'Passionate about reducing food waste and creating sustainable solutions.'
    },
    {
        name: 'Jane Smith',
        role: 'Head of Operations',
        image: 'https://randomuser.me/api/portraits/women/76.jpg',
        bio: 'Dedicated to making food management efficient and eco-friendly.'
    },
    {
        name: 'Alex Johnson',
        role: 'Lead Developer',
        image: 'https://randomuser.me/api/portraits/men/43.jpg',
        bio: 'Building the technology to power our food management solutions.'
    }
];

const AboutUs = () => {
    return (
        <div className="font-sans text-gray-800 mt-16">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-center text-white"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                <div className="px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Food Management System</h1>
                    <p className="text-xl md:text-2xl">Reducing food waste through smart management solutions</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-12'>Our Mission</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                            <FaUsers className="text-5xl text-green-600 mx-auto mb-6" />
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Community</h3>
                            <p className="text-gray-600">Building a community committed to reducing food waste and helping those in need.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                            <FaClock className="text-5xl text-green-600 mx-auto mb-6" />
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Efficiency</h3>
                            <p className="text-gray-600">Providing tools to track and manage food inventory before it expires.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                            <FaLeaf className="text-5xl text-green-600 mx-auto mb-6" />
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability</h3>
                            <p className="text-gray-600">Promoting sustainable practices to protect our environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-12'>Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-94 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-12'>Get In Touch</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <p className="flex items-center text-gray-600">
                                    <FaEnvelope className="text-green-600 mr-3" /> sajeebaljabed1@gmail.com
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <FaPhone className="text-green-600 mr-3" /> +8801571595523
                                </p>
                                <p className="flex items-start text-gray-600">
                                    <FaMapMarkerAlt className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                    <span>Dhaka, Bangladesh</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-medium hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;