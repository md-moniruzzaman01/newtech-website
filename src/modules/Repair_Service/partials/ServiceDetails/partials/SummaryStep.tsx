import QuoteInfo from '@components/QuoteInfo/QuoteInfo';
import React, { useState, useEffect } from 'react';
import { SummaryStepProps } from '../config/types';
import SuccessModal from '@components/modal/SuccessModal';

const SummaryStep: React.FC<SummaryStepProps> = ({
  service,
  issue,
  selectedLocation,
  deliveryMethod,
  name,
  email,
  phone,
  message,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSuccessSubmit = () => {
    setIsModalOpen(true);

    if (isClient) {
      setTimeout(() => {
        window.location.href = '/repair-services';
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 bg-gray-50 p-4 md:p-8 mx-4 md:mx-8 lg:mx-14">
      {/* Quote Delivered Information */}
      <div className="bg-blue-50 rounded-lg p-6 md:p-8 shadow-lg flex-1 space-y-6">
        <h3 className="text-lg font-semibold border-b border-primary pb-2 mb-4 text-center md:text-left">
          Quote Delivered Information
        </h3>
        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-700">Contact Type:</span>{' '}
            {deliveryMethod}
          </div>
          <div>
            <span className="font-medium text-gray-700">Name:</span> {name}
          </div>
          <div>
            <span className="font-medium text-gray-700">Email:</span> {email}
          </div>
          <div>
            <span className="font-medium text-gray-700">Phone:</span> {phone}
          </div>
          <div>
            <span className="font-medium text-gray-700">Message:</span>
            <p className="text-gray-500 mt-1">{message}</p>
          </div>
        </div>

        <button
          onClick={handleSuccessSubmit}
          className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition mt-4"
        >
          Submit
        </button>
      </div>
      <QuoteInfo
        service={service}
        issue={issue}
        selectedLocation={selectedLocation}
      />

      {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SummaryStep;
