import React from 'react';

interface TimelineProps {
  stages: string[];
  step: number;
  dates: string[];
}

const Timeline: React.FC<TimelineProps> = ({ stages, step, dates }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-4xl flex-col space-y-6">
      <div className="flex items-center justify-center w-full px-4 sm:px-6">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index === stages.length - 1 ? '' : 'w-full'
            }`}
          >
            {/* Date */}
            <div className="flex flex-col items-center mb-8 sm:mb-10">
              <div
                className={`mb-2 text-xs sm:text-sm font-medium ${
                  index + 1 <= step ? 'text-blue-500' : 'text-gray-600'
                }`}
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                {dates[index]}
              </div>

              {/* Circle */}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-semibold transition-all  ${
                  index + 1 <= step
                    ? 'bg-blue-500 text-white'
                    : 'border border-slate-400 text-slate-400'
                }`}
                style={{
                  marginTop: '-4px',
                }}
              >
                {index + 1 <= step ? '✔️' : index + 1}
              </div>

              {/* Label */}
              <span
                className={`mt-1 text-xs sm:text-sm font-medium ${
                  index + 1 <= step ? 'text-blue-500' : 'text-gray-600'
                } text-center`}
              >
                {stage}
              </span>
            </div>

            {/* Connecting line */}
            {index < stages.length - 1 && (
              <div
                className={`h-0.5 -mt-9 w-full ${
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

export default Timeline;
