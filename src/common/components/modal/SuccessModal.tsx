import React from 'react';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
      onClick={e => e.stopPropagation()} // Prevent closing on clicking outside
    >
      <div className="bg-white rounded-lg p-10 text-center shadow-xl max-w-lg w-full">
        <h3 className="text-3xl font-bold text-green-600 mb-6">
          Quote Submitted Successfully!
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Your quote has been successfully submitted. You will be redirected to
          the summary shortly. Thank you for your submission!
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
