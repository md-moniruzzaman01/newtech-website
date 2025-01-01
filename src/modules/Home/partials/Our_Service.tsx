import React from 'react';
import { home_data } from '../config/constants';
import ServiceCard from '@components/ServiceCard';

const Our_Service = () => {
  const { our_service } = home_data;

  return (
    <div className="container mx-auto bg-[#f0f7ff] py-10 sm:py-20">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="font-primary text-2xl sm:text-4xl font-bold">
          {our_service.title}
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-gray-600">
          {our_service.description}
        </p>
      </div>

      {/* Button Section */}
      <div className="text-right px-5 sm:px-20 lg:px-44 mt-5">
        <button className="font-semibold text-blue-600">
          {our_service.button.text}
        </button>
      </div>

      {/* Services Grid */}
      <ServiceCard />
    </div>
  );
};

export default Our_Service;
