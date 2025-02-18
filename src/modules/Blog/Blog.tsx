'use client';

import React from 'react';
import { motion } from 'framer-motion';

import HeroBlog from './partials/HeroBlog/HeroBlog';
import TechBlog from './partials/TechBlog/TechBlog';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Blog = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <TechBlog />
      </motion.div>
    </div>
  );
};

export default Blog;
