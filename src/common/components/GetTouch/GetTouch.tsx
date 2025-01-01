'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GetTouchProps } from './config/type';

const GetTouch: React.FC<GetTouchProps> = ({ title, description, btnText }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonHover = {
    scale: 1.1,
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
  };

  return (
    <motion.div
      className=" bg-blue-50 py-14 w-full mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-8 lg:gap-28 mx-6 sm:mx-12 md:mx-16 lg:mx-24">
        {/* Title and Description Section */}
        <motion.div
          variants={childVariants}
          className="md:ml-10 lg:ml-24 text-center md:text-left"
        >
          <motion.h2
            className="text-sm font-semibold text-gray-600 mb-2"
            whileHover={{ color: '#1D4ED8' }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl sm:text-3xl md:text-4xl text-gray-900 mt-4"
            whileHover={{ scale: 1.05 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div variants={childVariants} className="text-center">
          <motion.button
            className="bg-blue-900 hover:bg-primary text-white px-7 py-4 font-medium"
            whileHover={buttonHover}
          >
            {btnText}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GetTouch;
