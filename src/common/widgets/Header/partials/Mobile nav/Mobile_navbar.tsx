<<<<<<< HEAD
//
import { menuData } from "@config/constants";
import { navDataTypes, singleMenuTypes } from "@config/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { icons } from "@libs/Icons";
const Mobile_navbar = ({ toggleMenu }: { toggleMenu: boolean }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
=======
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { icons } from '@libs/Icons';
import { menuData } from '@config/constants';
interface MobileNavbarProps {
  onClose: () => void;
}

const Mobile_navbar: React.FC<MobileNavbarProps> = ({ onClose }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');
>>>>>>> 0ca3b1baf3b942d49ea9b5ffbb79c6967b464a7b

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
<<<<<<< HEAD
  return (
    <>
      {menuData.map((menuItem: navDataTypes, index: number) => (
        <li key={index} className="group relative">
          <Link href={menuItem.to || ""}>
            <span
              className={`cursor-pointer flex items-center gap-2 font-[600] lg:text-[20px]  px-2 ${
                activeLink === menuItem.to
                  ? `text-black  ${
                      toggleMenu ? "border-l-4" : "border-b-2"
                    } border-gray-600`
                  : "text-black/80 hover:text-[#000000]"
              }`}
            >
              {menuItem.label}
              <span className="text-[10px]">
                {menuItem.subItems.length > 0 && icons.DownArrow}
              </span>
            </span>
          </Link>

          {menuItem.subItems && (
            <ul className=" bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 left-0 w-[200px] text-base rounded-sm shadow mt-3 flex flex-col">
              {menuItem.subItems.map(
                (subItem: singleMenuTypes, subIndex: number) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer hover:text-white hover:bg-primary px-3 py-[6px] transition-all duration-200"
                  >
                    <Link
                      href={subItem.to || ""}
                      className="block text-gray-800 hover:bg-gray-200"
                      scroll={false}
                    >
                      <span className="">{subItem.label}</span>
                    </Link>
                  </li>
                )
              )}
=======

  return (
    <>
      {menuData.map((menuItem, index) => (
        <li key={index}>
          <Link href={menuItem.to || ''} onClick={onClose}>
            <span
              className={`flex items-center gap-2 cursor-pointer ${
                activeLink === menuItem.to
                  ? 'text-primary border-b-2 border-primary'
                  : 'hover:text-primary text-blue-950'
              }`}
            >
              {menuItem.label}
              {menuItem.subItems.length > 0 && <span>{icons.DownArrow}</span>}
            </span>
          </Link>
          {menuItem.subItems.length > 0 && (
            <ul className="mt-2 ml-4 text-sm">
              {menuItem.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.to || ''}
                    className="hover:text-primary"
                    onClick={onClose} // Close menu on subitem click
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
>>>>>>> 0ca3b1baf3b942d49ea9b5ffbb79c6967b464a7b
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Mobile_navbar;
