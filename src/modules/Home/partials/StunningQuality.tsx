import React from "react";
import ReactCompareImage from "react-compare-image";
//
import { home_data } from "../config/constants";
import StunningButton from "../helpers/StunningButton";
//
import SectionHead from "@components/SectionHead/SectionHead";

const StunningQuality = () => {
  // states
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  // destructure
  const { stunningQuality } = home_data;

  return (
    <section className="w-full lg:py-10 md:pt-2 md:pb-10 py-8">
      <div className="container">
        {/* section head title */}
        <SectionHead {...stunningQuality} />

        {/* tab */}
        <div className="flex flex-col md:pt-8 pt-4">
          <ul className="flex md:gap-[15px] lg:gap-0 flex-wrap lg:flex-row justify-center">
            {stunningQuality.nav.map((e: string, i: number) => (
              <StunningButton
                key={i}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              >
                {e}
              </StunningButton>
            ))}
          </ul>
        </div>

        <div className="compare-img">
          <ReactCompareImage
            leftImage={`/images/stunning/${activeIndex}_${activeIndex + 1}.jpg`}
            rightImage={`/images/stunning/${activeIndex}.jpg`}
          />
        </div>
      </div>
    </section>
  );
};

export default StunningQuality;
