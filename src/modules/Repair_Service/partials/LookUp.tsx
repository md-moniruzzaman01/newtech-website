import React from 'react';
import { RepairService_data } from '../config/constants';
import Form from '@components/Form';

const LookUp = () => {
  const { lookup } = RepairService_data;

  return (
    <div className="container mx-auto bg-[#FAFAFA] py-10 sm:py-20 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="font-primary text-2xl sm:text-4xl font-bold">
          {lookup.title}
        </h1>
        <p className="m-4 text-sm sm:text-lg text-gray-600">
          {lookup.description}
        </p>
      </div>

      <div className="max-w-md mx-auto mt-8">
        <Form />
      </div>
    </div>
  );
};

export default LookUp;
