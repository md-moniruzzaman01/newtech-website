'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const counters = [
    { value: 10000, label: 'Satisfied Customers' },
    { value: 10000, label: 'Laptops Repaired' },
    { value: 10000, label: 'Monitors Repaired' },
    { value: 15, label: 'Years of Experience' },
  ];

  return (
    <div ref={ref} className="bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">15 Years of Experience</h2>
        <p className="text-gray-600 mt-2">
          We are proud of our victories and achievements
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="w-48 h-48 bg-blue-50 rounded-full flex flex-col justify-center items-center shadow-md"
          >
            <h3 className="text-4xl font-semibold text-primary">
              {inView ? (
                <CountUp
                  end={counter.value}
                  duration={2} // Animation duration in seconds
                  separator=","
                />
              ) : (
                '0'
              )}
              {counter.label === 'Satisfied Customers' ? '+' : null}
              {counter.label === 'Laptops Repaired' ? '+' : null}
              {counter.label === 'Monitors Repaired' ? '+' : null}
              {counter.label === 'Years of Experience' ? '+' : null}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
