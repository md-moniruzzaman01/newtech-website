import { About_data } from '../config/constant';
import { AboutData } from '../config/types';
import Image from 'next/image';

const Goals = () => {
  const data: AboutData['goal_data'] = About_data.goal_data;
  const sections = Object.keys(data);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-36 my-16 h-full gap-6 bg-white">
        {sections.map((sectionKey, index) => {
          const section = data[sectionKey][0];
          return (
            <div
              key={index}
              className="bg-lightgray p-6 sm:p-8 h-full rounded-lg"
            >
              <Image
                src={section.img}
                alt={section.title}
                width={400}
                height={500}
                className="mb-4 w-full h-48 sm:h-56 object-cover rounded-md"
              />
              <h1 className="font-bold text-lg sm:text-xl mb-4">
                {section.title}
              </h1>
              <p className="text-sm sm:text-base text-justify">
                {section.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
