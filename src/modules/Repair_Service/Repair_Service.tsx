'use client';

import React from 'react';
import { motion } from 'framer-motion';

import ChooseDevice from './partials/ChooseDevice';
import LookUp from './partials/LookUp';
import Support_Brand from '@components/Support_Brand';
import GetTouch from '@components/GetTouch';
import CustomerReview from './partials/CustomerReview/CustomerReview';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Repair_Service = () => {
  return (
    <div id="heroService">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <ChooseDevice />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <LookUp />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <CustomerReview />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Support_Brand />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <GetTouch
          title="Let’s Get in Touch"
          description="Tell us about your biggest IT challenge, we want to help you solve it!"
          btnText="GET STARTED NOW"
        />
      </motion.div>
    </div>
  );
};

export default Repair_Service;
