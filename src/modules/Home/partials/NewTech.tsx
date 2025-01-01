import Image from 'next/image';
import newTech from '../../../images/newtech/newtech.png';
import left from '../../../images/newtech/left.png';
import right from '../../../images/newtech/right.png';
import Counter from '@components/Counter/Counter';

const NewTech = () => {
  return (
    <div className="mb-20 px-5">
      <div className="flex justify-between item-center ">
        <div>
          <Image src={left} alt="middle newTech logo" />
        </div>
        <div className="h-14 w-1/3">
          <Image src={newTech} alt="middle newTech logo" />
        </div>
        <div className="">
          <Image
            className="scale-x-[-1]"
            src={right}
            alt="middle newTech logo"
          />
        </div>
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default NewTech;
