'use client';

import styles from '../../../shared/styles/home.module.css';
import { home_data } from '../config/constants';
import Button from '@components/Button';
import { useState, useEffect } from 'react';

const Hero = () => {
  // Destructure hero data
  const { hero } = home_data;

  const images = ['/home4.jpg', '/home5.jpg', '/home2.jpg', '/blog.jpg'];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="hero"
      className={`relative h-[70vh] lg:h-screen max-h-[1080px] ${styles.hero_image}`}
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center h-[70vh] lg:h-[1080px] font-primary">
          <div className="lg:w-[850px] w-[22rem] h-[20rem] lg:h-[500px] rounded-tr-[120px] lg:rounded-tr-[180px] rounded-tl-lg bg-[#ffffff66] rounded-b-lg flex flex-col justify-start px-[3rem] lg:py-[5rem] py-[3rem] mx-auto lg:mx-11">
            <h1 className="lg:text-[46px] sm:text-[32px] text-[23px] tracking-tight text-secondary font-[600] leading-[1.2] max-w-[500px]">
              {hero?.title}
            </h1>

            <p className="text-[16px] sm:text-[22px] font-[400] text-black leading-[1.3] my-3 sm:my-7 max-w-[500px]">
              {hero?.description}
            </p>

            <Button
              href={hero.button.link}
              className={`${styles.button_animate} !rounded-lg bg-secondary lg:before:rounded-lg lg:before:outline-offset-2 lg:before:outline-2 lg:before:w-full lg:before:left-0 lg:before:top-0 lg:before:h-full`}
            >
              {hero.button.text}
            </Button>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-blue-200' : 'bg-gray'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
