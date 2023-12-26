import React from "react";
import { useAtom } from 'jotai'
//
import { converter_data } from "../config/constants";
//
import Upload from "@components/Upload/Upload";
import Result from "@components/Result";
//
import { restulsAtom } from "@config/state";
import { resultDataTypes } from "@config/types";


const Hero = () => {

  // hook
  const [results, setResults] = useAtom(restulsAtom)

  // destructure
  const { hero } = converter_data;

  return (
    <div id="hero">
      <div className="container">
        <div className="text-center  flex justify-center items-center flex-col">

          <h1 className="lg:text-[40px] sm:text-[25px] text-[20px] tracking-tight font-[500] leading-[1.3] mx-auto max-w-[550px] mt-9 text-dark" >
            {hero?.title}
          </h1>

          <div className="my-20" >
            <Upload />
          </div>

          <div className="mb-20 space-y-8" >
            {results.map((e: resultDataTypes, i: number) => <Result {...e} key={i} />)}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
