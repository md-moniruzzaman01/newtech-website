import React from "react";
//
import { home_data } from "../config/constants"; 
import LoginButton from "@components/LoginButton";

const Hero = () => {
  
  // destructure
  const { hero } = home_data;

  return (
    <div id="hero">
      <div className="container">
        <div className="text-center lg:py-[130px] md:py-[70px] pt-[30px] flex justify-center items-center flex-col">
          <h1 className="lg:text-[73px] sm:text-[42px] text-[23px] tracking-tight font-[500] leading-[1.2] mx-auto max-w-[1054px]">
            {hero?.title}
          </h1>

          <p className="relative mx-auto text-[12px] sm:text-[22px] text-center text-[#707070] leading-[1.3] my-3 sm:my-7 max-w-[650px] ">
            {hero?.description}
          </p>

          <LoginButton />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
