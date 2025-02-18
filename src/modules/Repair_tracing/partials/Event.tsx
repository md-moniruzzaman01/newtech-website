import Image from 'next/image';
import { useState } from 'react';
import Timeline from './Timeline';

interface EventProps {
  service: any;
}

const Event: React.FC<EventProps> = ({ service }) => {
  const stages1 = ['Received', 'Service', 'Delivery'];
  const stages2 = ['Received', 'Repair', 'Testing', 'Packaging', 'Delivery'];
  const dates1 = ['25-01-01', '25-01-03', '25-01-05'];
  const dates2 = ['25-01-01', '25-01-03', '25-01-04', '25-01-05', '25-01-06'];
  const [step1] = useState(1);
  const [step2] = useState(2);
  const [selectedItem, setSelectedItem] = useState('item1'); // state for dropdown selection

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="px-2">
      <div className="flex flex-col items-center justify-center h-full  mt-24 rounded-lg space-y-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Repair Tracing / Event
        </h1>

        {/* Icon/Image */}
        <div className="flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-200 rounded-lg">
          <Image
            src={service?.image || '/placeholder.png'}
            alt={service?.title || 'Service'}
            width={192}
            height={192}
            className="object-contain"
          />
        </div>

        {/* Repair ID */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 text-center">
          Repair ID:{' '}
          <span className="text-indigo-600">
            #{service?.trackNumber || 'Unknown'}
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-md md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
          Your product has been successfully delivered to our service center and
          is currently undergoing diagnosis. Our team is diligently working to
          identify the issue and determine the necessary repairs or services.
        </p>

        {/* Estimated Delivery Date */}
        <div className="text-md sm:text-lg md:text-xl font-medium text-gray-700 text-center">
          Estimated delivery date: <span className="text-red-500">Pending</span>
        </div>

        {/* First Timeline */}
        <Timeline stages={stages1} step={step1} dates={dates1} />
      </div>

      <div className="mt-8">
        {/* Dropdown for 2nd Timeline */}
        <div className="flex justify-center w-full mb-4 ">
          <select
            id="itemDropdown"
            value={selectedItem}
            onChange={handleDropdownChange}
            className="p-2 bg-gray-100 w-40 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
          </select>
        </div>

        {/* Second Timeline */}
        <div className="flex flex-col items-center justify-center h-full py-4 rounded-lg space-y-4">
          <Timeline stages={stages2} step={step2} dates={dates2} />
        </div>
      </div>
    </div>
  );
};

export default Event;
