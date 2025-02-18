'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { data } from './config/constants';

const Work_process = () => {
  const { work_process } = data;

  // Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Intersection Observer for triggering animations
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Animation starts when 20% of the element is visible
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
      className=" sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-32 py-12"
    >
      <div className="bg-white border-2 border-[#f0f7ff] rounded-lg p-7">
        {/* Header Section */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
            {work_process.title1}
          </p>
          <h1 className="font-primary text-2xl sm:text-4xl font-bold">
            {work_process.title2}
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Left Column (Steps 1 & 3) */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {work_process.step_list.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-md text-justify "
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-lg font-semibold">{item.step}</h2>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Column (Image) */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center mt-8 md:mt-0"
          >
            <motion.img
              src={work_process.image.src}
              alt="work_process"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover mt-10"
            />
          </motion.div>

          {/* Right Column (Steps 2 & 4) */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-8 mt-8 md:mt-0"
          >
            {work_process.step_list.slice(2, 4).map((item, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-md text-justify "
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-lg font-semibold">{item.step}</h2>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work_process;
