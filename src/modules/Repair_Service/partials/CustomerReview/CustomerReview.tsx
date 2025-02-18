'use client';
import React, { useState } from 'react';
import { initialReviews } from './config/constants';
import ReviewModal from '@components/ReviewModal/ReviewModal';
import { Review } from './config/types';

const CustomerReview = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews || []);
  const [showModal, setShowModal] = useState(false);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: '',
    comment: '',
  });

  const handleSubmit = () => {
    const updatedReviews = [
      ...reviews,
      {
        id: reviews.length + 1,
        name: newReview.name,
        date: 'Just now',
        rating: parseInt(newReview.rating),
        comment: newReview.comment,
      },
    ];
    setReviews(updatedReviews);
    setShowModal(false);
    setNewReview({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 text-center sm:text-left">
            Customer Reviews
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-2">
            <span className="text-yellow-500 text-3xl sm:mr-2">★★★★☆</span>
            <p className="text-xl text-gray-500 mt-2 sm:mt-0">
              4.2 Average Rating
            </p>
          </div>
          <p className="text-gray-400 text-center sm:text-left">
            {reviews.length} reviews
          </p>
        </div>
        <div className="w-full text-center sm:text-right">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition duration-300 w-full sm:w-auto mx-auto sm:mx-0"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {reviews.map(review => (
          <div
            key={review.id}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                {review.name}
              </h3>
              <span className="mt-1 sm:mt-0 sm:ml-4 text-sm text-gray-500">
                {review.date}
              </span>
            </div>
            <div className="flex items-center mt-2">
              {/* Display Rating Stars */}
              <div className="flex text-yellow-500">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      <ReviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        newReview={newReview}
        setNewReview={setNewReview}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CustomerReview;
