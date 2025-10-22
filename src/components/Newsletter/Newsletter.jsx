import React, { useState } from 'react';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && !isSubscribed) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubscribed(true);
        setEmail('');

        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className='text-[32px] md:text-[42px] font-bold text-center mb-4'>Stay Updated</h3>
        <p className="text-purple-100 mb-6">
          Subscribe to our newsletter for food storage tips, recipes, and exclusive offers!
        </p>

        {isSubscribed ? (
          <div className="border  p-4 rounded-lg flex items-center justify-center space-x-2">
            <FaCheck className="text-green-300" />
            <span>Thank you for subscribing! Check your email for confirmation.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border-2 border-purple-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center ${isLoading ? 'opacity-75' : ''
                }`}
            >
              {isLoading ? (
                'Subscribing...'
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-base text-purple-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
