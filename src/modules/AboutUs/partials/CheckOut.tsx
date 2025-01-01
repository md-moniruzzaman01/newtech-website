import React from 'react';
import { About_data } from '../config/constant';

const CheckOut = () => {
  const checkout_data = About_data.checkout_data;

  return (
    <div className=" bg-blue-50 py-14 w-full mt-8">
      {/* Main Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 sm:px-8 lg:px-24">
        {/* Left Section: Title */}
        <div className="text-left mb-6 md:mb-0">
          <h1 className="text-lg sm:text-3xl font-semibold text-gray-900">
            {checkout_data.title}
          </h1>
        </div>

        {/* Right Section: Content */}
        <div className="text-left md:text-left">
          <p className="text-gray-700 text-justify leading-relaxed">
            {checkout_data.description}
          </p>
          <p className="font-bold mt-4 text-gray-900 text-right">
            {checkout_data.name}
          </p>
          <p className="text-primary text-right">{checkout_data.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
