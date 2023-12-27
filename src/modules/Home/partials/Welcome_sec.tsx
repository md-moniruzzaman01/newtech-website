import Button from "@components/Button";
import styles from "../../../shared/styles/home.module.css";
import { home_data } from "../config/constants";
import Card from "@components/Card";
import { welcomeCardProps } from "../config/types";
const Welcome_sec = () => {
  const { welcome } = home_data;
  return (
    <div className={`${styles.laptop_image}`} id="#welcome">
      <div className="w-full container mx-auto px-4 text-white py-9 text-center flex flex-col items-center">
        <h2 className="font-[600] lg:text-[3rem] text-[1.5rem] mt-[2rem] ">
          {welcome.title}
        </h2>
        <p className="py-7 max-w-[750px] px-4">{welcome.description}</p>
        <Button className="!rounded-lg" href={welcome.button.link}>
          {welcome.button.text}
        </Button>
        <div className="lg:flex  justify-between w-full my-11">
          {welcome.cards.map((card: welcomeCardProps, i: number) => {
            return (
              <Card
                key={i}
                className="max-w-[435px] rounded-md border-4 border-primary my-4"
              >
                <div className="flex text-start">
                  <div className="w-44">
                    <p className="p-4 ">{card.icon}</p>
                  </div>
                  <div className="my-4">
                    <h4 className=" text-xl py-4 uppercase">{card.title}</h4>
                    <p className="text-sm max-w-[250px]">{card.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Welcome_sec;
