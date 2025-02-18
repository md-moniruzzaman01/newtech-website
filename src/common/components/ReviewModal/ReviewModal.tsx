// src/ReviewModal.tsx

import React from 'react';
import { ReviewModalProps } from './config/types';

const ReviewModal: React.FC<ReviewModalProps> = ({
  showModal,
  setShowModal,
  newReview,
  setNewReview,
  handleSubmit,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 ">
      {/* Modal Container */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-700 p-8 rounded-2xl shadow-2xl text-black w-96 relative">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-200 hover:text-white text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-lg text-white">
          ✨ Write a Review ✨
        </h2>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg text-gray-800 focus:ring-4 focus:ring-purple-400 focus:outline-none"
        />

        {/* Rating Input */}
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={newReview.rating}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg text-gray-800 focus:ring-4 focus:ring-purple-400 focus:outline-none"
        />

        {/* Comment Input */}
        <textarea
          name="comment"
          placeholder="Write your review here"
          value={newReview.comment}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-lg text-gray-800 focus:ring-4 focus:ring-purple-400 focus:outline-none"
        ></textarea>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowModal(false)}
            className="text-white hover:bg-white hover:text-purple-700 border border-white px-4 py-2 rounded-lg transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg hover:bg-purple-400 hover:text-white transition duration-300 shadow-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
