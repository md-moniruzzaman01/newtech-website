import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-3 bg-[#E7E7E7] mt-20">
      <div className="container">
        <div className="flex items-center md:justify-between md:gap-5 gap-2 md:flex-row flex-col justify-center ">
          <p className="md:text-[20px] text-[15px] text-black">
            Copyright ©2023 CITRAKAR
          </p>

          <Link href="/">
            <span className=" md:text-[20px] text-[15px] text-black">
              Privacy & policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
