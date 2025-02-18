'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './css/Header.module.css';
import { icons } from '@libs/Icons';
import { FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa';
import Mobile_navbar from './partials/Mobile nav';
import { RiProfileFill } from 'react-icons/ri';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 2000);
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-6 lg:px-12">
          <div className="flex items-center flex-shrink-0">
            <Image src="/NT-LOGO.png" alt="Logo" width={70} height={50} />
          </div>
          <ul className="hidden lg:flex gap-8 items-center justify-center flex-grow">
            <Mobile_navbar onClose={() => setToggleMenu(false)} />
          </ul>
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group border-primary border-2 rounded-full p-1">
              <button
                className="flex items-center gap-2 text-gray-800"
                onClick={handleDropdownToggle}
              >
                <FaUser className="text-primary text-2xl" />
              </button>
              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-4 w-48 bg-white hover:border-t-2 shadow-lg p-2 opacity-100 group-hover:opacity-100 transition-all duration-200 z-50 ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <Link
                  href="/portal"
                  className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white"
                >
                  <RiProfileFill className="inline mr-2" />
                  Portal
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white"
                >
                  <FaCog className="inline mr-2" />
                  Settings
                </Link>
                {/* <Link
                  href="/logout"
                  className="block px-4 py-2 text-secondary hover:bg-primary w-full text-left hover:text-white"
                >
                  <FaSignOutAlt className="inline mr-2" />
                  Logout
                </Link> */}
              </div>
            </div>
            <Link href="/repair-services">
              <button className="hover:bg-secondary border border-primary px-4 py-2 rounded-lg hover:text-white text-primary">
                Create a Repair
              </button>
            </Link>
          </div>
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? icons.MenuClose : icons.MenuOpen}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-40 w-full h-screen bg-white lg:hidden transform duration-300 ${
          toggleMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end p-6"></div>
        <ul className="flex flex-col items-center gap-6 mt-10 font-semibold text-gray-800 text-xl">
          <Mobile_navbar onClose={() => setToggleMenu(false)} />
        </ul>
        <div className="flex flex-col items-center gap-4 mt-6">
          <Link href="/portal" onClick={() => setToggleMenu(false)}>
            <span className="text-secondary hover:bg-slate-400">Portal</span>
          </Link>
          <Link href="/settings" onClick={() => setToggleMenu(false)}>
            <span className="text-secondary hover:bg-slate-400">Settings</span>
          </Link>
          <Link href="/logout" onClick={() => setToggleMenu(false)}>
            <span className="text-secondary hover:bg-slate-400">Logout</span>
          </Link>
          <Link href="/repair-services" onClick={() => setToggleMenu(false)}>
            <button className="hover:bg-secondary border border-primary px-6 py-2 rounded-lg hover:text-white text-primary">
              Create a Repair
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

// 'use client';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import styles from './css/Header.module.css';
// import { useRouter } from 'next/navigation';
// import { icons } from '@libs/Icons';

// import { FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa';
// import Mobile_navbar from './partials/Mobile nav';
// import { RiProfileFill } from 'react-icons/ri';

// const Header = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);
//   const router = useRouter();

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     setIsLoggedIn(!!user);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     window.location.href = '/login';
//   };
//   const handleCloseMenu = () => {
//     setToggleMenu(false);
//   };

//   const handleDropdownToggle = () => {
//     setDropdownOpen(prev => !prev);

//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }

//     const id = setTimeout(() => {
//       setDropdownOpen(false);
//     }, 2000);
//   };

//   return (
//     <header>
//       <nav
//         className={`${
//           styles.navbar
//         } fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled ? styles.scrolled : ''
//         }`}
//       >
//         <div className="container mx-auto flex items-center justify-between py-3 px-6 lg:px-12">
//           <div className="flex items-center flex-shrink-0">
//             <Image src="/NT-LOGO.png" alt="Logo" width={70} height={50} />
//           </div>
//           <ul className="hidden lg:flex gap-8 items-center justify-center flex-grow">
//             <Mobile_navbar onClose={handleCloseMenu} />
//           </ul>
//           <div className="hidden lg:flex items-center gap-6">
//             {!isLoggedIn ? (
//               <Link href="/login">
//                 <div className="flex justify-between items-center gap-2">
//                   <FaUser className="text-primary text-3xl " />
//                   <div className="hover:text-primary">
//                     <h3 className="font-semibold text-lg">Account</h3>
//                     <p className="text-gray-500 text-sm">Login</p>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <div className="relative group border-primary border-2 rounded-full p-1">
//                 <button
//                   className="flex items-center gap-2 text-gray-800"
//                   onClick={handleDropdownToggle}
//                 >
//                   <FaUser className="text-primary text-2xl" />
//                 </button>
//                 {/* Dropdown Menu */}
//                 <div
//                   className={`absolute right-0 mt-4 w-48 bg-white hover:border-t-2 shadow-lg   p-2 opacity-100 group-hover:opacity-100 transition-all duration-200 z-50 ${
//                     dropdownOpen ? 'block' : 'hidden'
//                   }`}
//                 >
//                   <Link
//                     href="/portal"
//                     className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white"
//                   >
//                     <RiProfileFill className="inline mr-2" />
//                     Portal
//                   </Link>
//                   <Link
//                     href="/settings"
//                     className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white"
//                   >
//                     <FaCog className="inline mr-2" />
//                     Settings
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block px-4 py-2 text-secondary hover:bg-primary w-full text-left hover:text-white"
//                   >
//                     <FaSignOutAlt className="inline mr-2" />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//             <Link href="/repair-services">
//               <button className="hover:bg-secondary border border-primary px-4 py-2 rounded-lg hover:text-white text-primary">
//                 Create a Repair
//               </button>
//             </Link>
//           </div>
//           <button
//             className="lg:hidden text-3xl text-gray-700"
//             onClick={() => setToggleMenu(!toggleMenu)}
//           >
//             {toggleMenu ? icons.MenuClose : icons.MenuOpen}
//           </button>
//         </div>
//       </nav>
//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 z-40 w-full h-screen bg-white lg:hidden transform duration-300 ${
//           toggleMenu ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         <div className="flex justify-end p-6"></div>
//         <ul className="flex flex-col items-center gap-6 mt-10 font-semibold text-gray-800 text-xl">
//           <Mobile_navbar onClose={handleCloseMenu} />
//         </ul>
//         {/* Login/Signup and Create Repair Buttons in Mobile */}
//         <div className="flex flex-col items-center gap-4 mt-6">
//           {!isLoggedIn ? (
//             <Link href="/login" onClick={handleCloseMenu}>
//               <div className="flex justify-center items-center gap-2 text-gray-800">
//                 <FaUser className="text-primary text-3xl " />
//                 <div>
//                   <h3 className="font-semibold text-lg hover:text-primary text-secondary">
//                     Account
//                   </h3>
//                   <p className="text-gray-500 text-sm hover:text-primary text-secondary">
//                     Register or Login
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ) : (
//             <div className="flex flex-col items-center gap-4 text-xl font-semiboldnp">
//               <Link
//                 href="/portal"
//                 onClick={handleCloseMenu}
//                 className="text-secondary hover:bg-slate-400"
//               >
//                 Portal
//               </Link>
//               <Link
//                 href="/settings"
//                 onClick={handleCloseMenu}
//                 className="text-secondary hover:bg-slate-400"
//               >
//                 Settings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="text-secondary hover:bg-slate-400"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//           <Link href="/repair-services" onClick={handleCloseMenu}>
//             <button className="hover:bg-secondary border border-primary px-6 py-2 rounded-lg hover:text-white text-primary">
//               Create a Repair
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
