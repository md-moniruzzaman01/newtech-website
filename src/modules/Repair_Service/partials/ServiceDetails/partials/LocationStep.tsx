import React from 'react';
import { LocationStepProps } from '../config/types';

const LocationStep: React.FC<LocationStepProps> = ({
  locations,
  selectedLocation,
  setSelectedLocation,
  setStep,
}) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8 w-full mx-auto mt-6"
      style={{
        backgroundImage: 'url(/map.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto', // Adjust height for responsiveness
        minHeight: '500px',
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8">
        {/* Left side: All locations */}
        <div className="flex-1 bg-blue-50 p-4 sm:p-6 lg:p-7 rounded-xl">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-center">
            Select Your Preferred Location
          </h2>
          {locations.map(office => (
            <div
              key={office.id}
              onClick={() => setSelectedLocation(office)}
              className={`rounded-xl p-4 cursor-pointer mb-4 bg-white ${
                selectedLocation?.id === office.id ? 'bg-blue-400' : ''
              }`}
            >
              <h3 className="text-md sm:text-lg font-bold">{office.name}</h3>
              <p className="text-sm text-gray-600">{office.address}</p>
              {office.phone && (
                <p className="text-sm text-gray-600">Tel: {office.phone}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Selected location */}
        <div className="flex-1 bg-blue-50 p-4 sm:p-6 lg:p-7 rounded-xl">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-center">
            Selected Location
          </h2>
          {selectedLocation ? (
            <div className="bg-white rounded-xl p-4">
              <h4 className="text-md sm:text-lg font-bold">
                {selectedLocation.name}
              </h4>
              <p className="text-sm text-gray-600">
                {selectedLocation.address}
              </p>
              {selectedLocation.phone && (
                <p className="text-sm text-gray-600">
                  Tel: {selectedLocation.phone}
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-600">No location selected</p>
          )}
          <button
            onClick={() => setStep(4)}
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 mt-4 disabled:opacity-50"
            disabled={!selectedLocation}
          >
            Confirm Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationStep;
