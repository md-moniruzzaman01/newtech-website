'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.form>
        <motion.div className="mb-6" variants={inputVariants}>
          <input
            type="tel"
            placeholder="Tracking Number"
            className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm sm:text-lg focus:outline-none focus:border-blue-500"
          />
        </motion.div>

        <motion.div className="text-center" variants={buttonVariants}>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-secondary/95 focus:outline-none"
          >
            Continue
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Form;
