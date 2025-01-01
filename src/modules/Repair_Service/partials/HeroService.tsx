import style from '../../../shared/styles/service.module.css';
import React from 'react';
import { RepairService_data } from '../config/constants';

const HeroService = () => {
  const { heroService } = RepairService_data;

  return (
    <div
      id="heroService"
      className={`background_image_other_classes h-[70vh] lg:h-screen max-h-[1080px] ${style.hero}`}
    >
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white lg:mr-[630px] lg:text-[80px] md:text-[60px] sm:text-[40px] text-[24px] font-semibold tracking-normal leading-tight max-w-[90%] md:max-w-[600px] sm:mr-0">
          {heroService.title}
        </h1>
      </div>
    </div>
  );
};

export default HeroService;
