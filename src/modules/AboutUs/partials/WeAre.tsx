'use client';
import Image from 'next/image';
import { About_data } from '../config/constant';
import { motion } from 'framer-motion';

const WeAre = () => {
  const { we_Are_data } = About_data;

  return (
    <div className="container mx-auto py-20 px-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:m-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            type: 'spring',
            stiffness: 120,
            delay: 0.2,
          }}
        >
          <h2 className="text-2xl text-center lg:text-start font-bold mb-4">
            {we_Are_data.title}
          </h2>
          <p className="text-xl font-semibold text-justify text-primary mb-4">
            {we_Are_data.des1}
          </p>
          <p className="text-base text-justify text-gray-500 mb-4">
            {we_Are_data.des2}
          </p>
          <p className="text-base text-justify text-gray-500">
            {we_Are_data.des3}
          </p>
        </motion.div>

        {/* Animation for Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            type: 'spring',
            stiffness: 120,
          }}
        >
          <Image
            src={we_Are_data.img.src}
            width={500}
            height={500}
            alt="Who we are"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WeAre;
