'use client';

import React from 'react';
import { servicecard_data } from './config/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ServiceCard = () => {
  const data = servicecard_data;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-5 sm:px-10 lg:px-44">
        {data.service_list.map((item, index) => (
          <Link href={`service-details/${item?.id}`} key={index}>
            <motion.div
              className="bg-white shadow-md p-5 rounded-md text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Specify width and height for the Image */}
              <Image
                src={item.image.src}
                alt={item.title}
                width={64}
                height={64}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 object-contain"
              />
              <h2 className="text-sm sm:text-lg font-semibold">{item.title}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
