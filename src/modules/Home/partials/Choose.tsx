import React from 'react';
import { home_data } from '../config/constants';
import Image from 'next/image';

const Choose = () => {
  const { choose_data } = home_data;

  const choose_datas =
    choose_data &&
    choose_data.list.map((item, index) => (
      <li key={index} className="flex items-center space-x-4">
        <p className="text-blue-500">{item.icon}</p>
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </li>
    ));

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:m-20 m-10 gap-10 lg:gap-20">
        <div className="w-full lg:w-[711px] h-auto lg:h-[503px]">
          {/* Add width and height explicitly for the Image component */}
          <Image
            src={choose_data.image.src}
            alt="Why Choose Us"
            width={571} // Provide width in pixels
            height={500} // Provide height in pixels
            className="w-full lg:w-[571px] h-auto lg:h-[500px] object-contain"
          />
        </div>
        <div className="w-full lg:w-[711px] h-auto lg:h-[450px] bg-[#f0f7ff] p-6 lg:p-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center">
            {choose_data.title}?
          </h1>
          <p className="mb-4 lg:mb-6 text-justify">{choose_data.description}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {choose_datas}
          </ul>
          <button className="mt-6 bg-blue-900 text-white py-3 px-10 rounded w-full lg:w-auto">
            {choose_data.button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
