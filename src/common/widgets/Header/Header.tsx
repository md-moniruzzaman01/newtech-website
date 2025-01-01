<<<<<<< HEAD
"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
//
import styles from "./css/Header.module.css";
import Mobile_navbar from "./partials/Mobile nav";
import { icons } from "@libs/Icons";
import Button from "@components/Button";

// ... (your existing imports)
=======
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './css/Header.module.css';

import { icons } from '@libs/Icons';
import Mobile_navbar from './partials/Mobile nav';
>>>>>>> 0ca3b1baf3b942d49ea9b5ffbb79c6967b464a7b

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
<<<<<<< HEAD
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 1000);
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
        className={`w-full z-39 ${styles.navbar} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <div className="container px-2 h-16 lg:h-20 mx-auto flex items-center justify-between w-full py-4 ">
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
          <ul className="hidden lg:flex items-center  gap-11">
            <Mobile_navbar toggleMenu={toggleMenu} />
            <Button secondary>Create a Repair</Button>
          </ul>

          <div className="lg:hidden flex items-center text-3xl px-4 text-black relative">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {!toggleMenu ? (
                <span>{icons.MenuOpen}</span>
              ) : (
                <span>{icons.MenuClose}</span>
              )}
            </button>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed top-0 z-40 w-full glass_effect overflow-hidden  lg:hidden gap-12  origin-top duration-1000 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="relative">
            <div>
              <div className="flex justify-end mx-11 my-11 text-3xl text-black">
                <button onClick={() => setToggleMenu(false)}>
                  <span>{icons.MenuClose}</span>
                </button>
              </div>
              <div className="p-8 z-41">
                {/* Mobile nav  */}
                <ul className="flex flex-col gap-8 font-bold tracking-wider text-xl  ">
                  <Mobile_navbar toggleMenu={toggleMenu} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
=======
    setIsScrolled(window.scrollY > 50); // Change navbar color after scrolling 50px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setToggleMenu(false); // Close the mobile menu
  };

  return (
    <header>
      <nav
        className={`${
          styles.navbar
        } fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-3 px-6 lg:px-12">
          <div className="flex items-center">
            <Image src="/NT-LOGO.png" alt="Logo" width={70} height={50} />
          </div>
          <ul className="hidden lg:flex gap-8 items-center">
            <Mobile_navbar onClose={handleCloseMenu} />
            <Link href="/repair-services">
              <button className="hover:bg-secondary border border-primary px-4 py-2 rounded-lg hover:text-white text-pr">
                Create a Repair
              </button>
            </Link>
          </ul>
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? icons.MenuClose : icons.MenuOpen}
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 z-40 w-full h-screen bg-white lg:hidden transform duration-300 ${
          toggleMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end p-6"></div>
        <ul className="flex flex-col items-center gap-6 mt-10 font-semibold text-gray-800 text-xl">
          <Mobile_navbar onClose={handleCloseMenu} />
        </ul>
      </div>
    </header>
>>>>>>> 0ca3b1baf3b942d49ea9b5ffbb79c6967b464a7b
  );
};

export default Header;
