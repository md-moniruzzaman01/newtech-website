'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Work_process from '@components/Work Process';
import Choose from './partials/Choose';
import Hero from './partials/Hero';
import Our_Service from './partials/Our_Service';
import Welcome_sec from './partials/Welcome_sec';
import Support_Brand from '@components/Support_Brand';
import Latest_Blog from './partials/Latest_Blog';
import NewTech from './partials/NewTech';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link =>
        link.removeEventListener('click', handleSmoothScroll)
      );
    };
  }, []);

  return (
    <div id="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Welcome_sec />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Choose />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <NewTech />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Our_Service />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Work_process />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Latest_Blog />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
      >
        <Support_Brand />
      </motion.div>
    </div>
  );
};

export default Home;
