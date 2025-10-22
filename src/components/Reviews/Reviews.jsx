import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaUser } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Tahmina Akter',
      rating: 5,
      comment: 'This app has helped me reduce food waste significantly! The expiry tracking is super helpful.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Rahim Uddin',
      rating: 4,
      comment: 'Great way to keep track of groceries. The notifications are a lifesaver!',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Fatima Khan',
      rating: 5,
      comment: 'User-friendly interface and very practical. Highly recommended!',
      date: '3 weeks ago'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const review = {
        id: Date.now(),
        ...newReview,
        date: 'Just now'
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 5, comment: '' });
    }
  };

  return (
    <div className="bg-base-100 p-6 rounded-lg shadow-md">
      <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-'>What Our Users Say</h3>

      {/* Add Review Form */}
      <div className="mb-8 p-6 rounded-lg -mt-2">
        <h3 className="text-lg font-semibold mb-4">Share Your Experience</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="mr-2">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Share your thoughts..."
              rows="3"
              className="w-full p-2 border rounded-md"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FaUser className="text-xl" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-2">{review.date}</p>
                <div className="relative bg-base-300 p-4 rounded-lg">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-200 text-2xl" />
                  <p>{review.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
