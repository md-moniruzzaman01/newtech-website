//
import styles from "../../../shared/styles/home.module.css";
import { home_data } from "../config/constants";
import Button from "@components/Button";
const Hero = () => {
  // destructure
  const { hero } = home_data;

  return (
    <div
      id="#hero"
      className={`background_image_other_classes h-[70vh] lg:h-screen max-h-[1080px] ${styles.hero_image}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center h-[70vh] lg:h-[1080px] font-primary">
          <div className="lg:w-[850px] w-[22rem] h-[20rem] lg:h-[500px] rounded-tr-[120px] lg:rounded-tr-[180px] rounded-tl-lg bg-[#ffffff66]  rounded-b-lg flex flex-col justify-start px-[3rem] lg:py-[5rem] py-[3rem] mx-auto lg:mx-11  ">
            <h1 className="lg:text-[46px] sm:text-[32px] text-[23px] tracking-tight text-secondary font-[600] leading-[1.2] max-w-[500px] ">
              {hero?.title}
            </h1>

            <p className="text-[16px] sm:text-[22px] font-[400]   text-black leading-[1.3] my-3 sm:my-7 max-w-[500px] ">
              {hero?.description}
            </p>

            <Button
              href={hero.button.link}
              className={`${styles.button_animate}  !rounded-lg bg-secondary lg:before:rounded-lg lg:before:outline-offset-2 lg:before:outline-2 lg:before:w-full lg:before:left-0 lg:before:top-0 lg:before:h-full`}
            >
              {hero.button.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// lg:py-[59px] md:py-[70px] pt-[30px]
