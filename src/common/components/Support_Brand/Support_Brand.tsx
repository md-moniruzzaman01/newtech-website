import React from 'react';
import { support_data } from './config/constant';
import Image from 'next/image';

const Support_Brand = () => {
  const { title, brand_list } = support_data.support_list;

  return (
    <div className="support-brand-container py-10 bg-gray-100 mb-8">
      <h2 className="font-primary text-2xl sm:text-4xl text-center mb-14 mt-12 font-bold">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-24 lg:mx-24 max-w-4xl">
        {brand_list.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white shadow-md p-6 md:p-8 lg:p-10 mx-auto h-full"
          >
            <Image
              src={brand.src}
              alt={`Brand ${index + 1}`}
              width={80}
              height={80}
              className="max-w-full max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support_Brand;
