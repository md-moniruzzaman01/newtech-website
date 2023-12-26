"use client";

import styles from "./css/Header.module.css";

import { useEffect, useState } from "react";

import Image from "next/image";
import Mobile_navbar from "./partials/Mobile nav";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
// ... (your existing imports)

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`w-full ${styles.navbar} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between w-full py-4 ">
          <div className="px-4">
            {/* Logo  */}
            <Image
              src="/NT-LOGO.png"
              height={50}
              width={50}
              alt="Logo"
              className=""
            />
          </div>
          <ul className="hidden lg:flex  gap-11">
            <Mobile_navbar toggleMenu={toggleMenu} />
          </ul>

          <div className="lg:hidden flex items-center text-3xl px-4 text-black">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {!toggleMenu ? (
                <span>
                  <MdMenu />
                </span>
              ) : (
                <span>
                  <IoMdClose />
                </span>
              )}
            </button>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed top-0 z-40 w-full ${
            styles.glass_effect
          } overflow-hidden  lg:hidden gap-12  origin-top duration-1000 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
          style={{ top: isScrolled ? "0" : "-100%" }}
        >
          <div>
            <div className="flex justify-end mx-11 my-11 text-3xl text-black">
              <button onClick={() => setToggleMenu(false)}>
                <span>
                  <IoMdClose />
                </span>
              </button>
            </div>
            <div className="p-8 ">
              {/* Mobile nav  */}
              <ul className="flex flex-col gap-8 font-bold tracking-wider text-xl">
                <Mobile_navbar toggleMenu={toggleMenu} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
