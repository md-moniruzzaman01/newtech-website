'use client';

import React from 'react';
import { motion } from 'framer-motion';

import WeAre from './partials/WeAre';
import CheckOut from './partials/CheckOut';
import Goals from './partials/Goals';
import GetTouch from '@components/GetTouch';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <WeAre />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <CheckOut />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <Goals />
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

export default About;
