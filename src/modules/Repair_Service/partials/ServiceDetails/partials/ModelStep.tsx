import React, { useState, useEffect } from 'react';
import { ModelStepProps } from '../config/types';
import { servicecard_data } from '@components/ServiceCard/config/constants';
import { brands } from '../config/constants';
import Image from 'next/image';

const ModelStep: React.FC<ModelStepProps> = ({
  service,
  setStep,
  setModelVersion,
  setSelectedBrand,
  setSelectedModel,
  modelVersion,
  selectedBrand,
  selectedModel,
}) => {
  const [selectedService, setSelectedService] = useState(service);
  const data = servicecard_data;

  useEffect(() => {
    const savedModelVersion = localStorage.getItem('modelVersion');
    const savedSelectedBrand = localStorage.getItem('selectedBrand');
    const savedSelectedModel = localStorage.getItem('selectedModel');

    if (savedModelVersion) setModelVersion(savedModelVersion);
    if (savedSelectedBrand) setSelectedBrand(savedSelectedBrand);
    if (savedSelectedModel) setSelectedModel(savedSelectedModel);

    // No need to set the brands here anymore, we import them from constants.ts
  }, [setModelVersion, setSelectedBrand, setSelectedModel]);

  useEffect(() => {
    localStorage.setItem('modelVersion', modelVersion || '');
    localStorage.setItem('selectedBrand', selectedBrand || '');
    localStorage.setItem('selectedModel', selectedModel || '');
  }, [modelVersion, selectedBrand, selectedModel]);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = data.service_list.find(
      item => item.title === e.target.value
    );
    setSelectedService(selectedCategory || service);
  };

  const handleSubmit = () => {
    if (
      modelVersion.trim() === '' ||
      selectedBrand.trim() === '' ||
      selectedModel.trim() === ''
    ) {
      // Handle validation
    }
    setStep(2);
  };

  return (
    <div className="flex flex-col justify-center gap-10 sm:flex-row items-center sm:items-start sm:justify-between w-full p-8 bg-white space-y-6 sm:space-y-0">
      <div className="flex flex-col items-center space-y-6 sm:w-1/2 bg-lightgray p-20 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Selected Device</h2>
        <Image
          src={selectedService.image.src}
          alt={selectedService.title}
          width={144}
          height={144}
          className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start space-y-6 sm:w-1/2 bg-blue-50 rounded-lg p-20">
        <label className="text-lg font-semibold text-gray-800">
          Device Name
        </label>
        <select
          value={selectedService.title}
          onChange={handleServiceChange}
          className="w-full px-4  py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        >
          {data.service_list.map(item => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>

        <label className="text-lg font-semibold text-gray-800">
          Brand Name
        </label>

        <select
          value={selectedBrand}
          onChange={e => setSelectedBrand(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        >
          <option value="" disabled>
            Select a Brand
          </option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <label className="text-lg font-semibold text-gray-800">
          Model Name
        </label>
        <input
          type="text"
          value={selectedModel}
          onChange={e => setSelectedModel(e.target.value)}
          placeholder="Enter Model"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ModelStep;
