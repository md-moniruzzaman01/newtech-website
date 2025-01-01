'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './css/Header.module.css';

import { icons } from '@libs/Icons';
import Mobile_navbar from './partials/Mobile nav';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
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
  );
};

export default Header;
