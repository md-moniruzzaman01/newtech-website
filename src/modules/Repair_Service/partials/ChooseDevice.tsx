import React from 'react';
import { RepairService_data } from '../config/constants';
import ServiceCard from '@components/ServiceCard';

const ChooseDevice = () => {
  const { chooseDevice } = RepairService_data;
  return (
    <div className="container mx-auto  py-10 sm:py-20 ">
      {/* Header Section */}
      <div className="text-center mt-10 ">
        <h1 className="font-primary text-2xl sm:text-4xl font-bold ">
          {chooseDevice.title}
        </h1>
        <p className="m-4  text-sm sm:text-lg text-gray-600">
          {chooseDevice.description}
        </p>
      </div>

      <ServiceCard />
    </div>
  );
};

export default ChooseDevice;
