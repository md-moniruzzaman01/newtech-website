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

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

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
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Mobile_navbar;
