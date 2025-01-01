import React from 'react';
import { ProgressBarProps } from '../config/types';

const ProgressBar: React.FC<ProgressBarProps> = ({ step, setStep }) => {
  const stages = ['Device', 'Model', 'Issue', 'Branch', 'Quote'];
  const instructions = [
    'Select The Model',
    'Write The Issues',
    'Select The Branch',
    'Get Your Quote',
    'Submit your Info after checking it!',
  ];

  return (
    <div className="flex flex-col items-center w-full space-y-6 mt-9 sm:px-4 md:px-6 lg:px-0">
      {' '}
      {/* Add padding here for mobile and medium screens */}
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Get Instant Price Quote
      </h2>
      <h2
        className={`text-xl font-bold text-gray-800 text-center ${
          instructions[step - 1] === 'Submit your Info after checking it'
            ? 'text-red-700'
            : ''
        }`}
      >
        {instructions[step - 1]}
      </h2>
      <div className="flex items-center justify-center w-full max-w-5xl px-7">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`flex items-center ${index === 4 ? '' : 'w-full'}`}
          >
            {/* Circle */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => {
                  if (step === stages.length || index - 1 > step - 1) return;
                  setStep(index + 1);
                }}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all cursor-pointer ${
                  index + 1 <= step
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'border border-slate-400 text-slate-400'
                }`}
              >
                {index - 1 < step - 1 ? '✔️' : index + 1}
              </button>
              {/* Label */}
              <span
                className={`mt-2 text-sm font-medium ${
                  index + 1 <= step ? 'text-blue-500' : 'text-gray-600'
                }`}
              >
                {stage}
              </span>
            </div>

            {/* Connecting line */}
            {index < stages.length - 1 && (
              <div
                className={`h-0.5 mb-5 w-full ${
                  index + 1 < step ? 'bg-blue-500' : 'bg-slate-400'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
