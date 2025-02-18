'use client';

import React from 'react';
import { motion } from 'framer-motion';

import HeroContact from './partials/HeroContact/HeroContact';
import Map from './partials/Map/Map';
import Form from './partials/Form/Form';
import Support_Brand from '@components/Support_Brand';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ContactUs = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Form />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Map />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Support_Brand />
      </motion.div>
    </div>
  );
};

export default ContactUs;
