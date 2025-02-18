'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, MessageSquare, Package, User } from 'lucide-react';
import { cn } from '@utils/cn';

const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState('Dashboard');
  const [menuType, setMenuType] = useState('Service');

  const serviceMenu = [
    {
      name: 'Dashboard',
      icon: <Home size={20} />,
      link: '/portal/dashboard',
    },
    {
      name: 'Service Complaints',
      icon: <MessageSquare size={20} />,
      link: '/portal/service-complaints',
    },
    {
      name: 'Delivery Status',
      icon: <Package size={20} />,
      link: '/portal/service-delivery-status',
    },
    {
      name: 'Profile',
      icon: <User size={20} />,
      link: '/portal/profile',
    },
  ];

  const warrantyMenu = [
    {
      name: 'Dashboard',
      icon: <Home size={20} />,
      link: '/portal/dashboard',
    },
    {
      name: 'Warranty Complaints',
      icon: <MessageSquare size={20} />,
      link: '/portal/warranty-complaints',
    },
    {
      name: 'Delivery Status',
      icon: <Package size={20} />,
      link: '/portal/warranty-delivery-status',
    },
    {
      name: 'Profile',
      icon: <User size={20} />,
      link: '/portal/profile',
    },
  ];

  const menuItems = menuType === 'Service' ? serviceMenu : warrantyMenu;

  const handleNavigation = (name: string, link: string) => {
    setActive(name);
    router.push(link);
  };

  return (
    <div className="flex bg-gray-100 mt-24">
      {/* Sidebar for Desktop */}
      <div className="w-72 h-screen bg-white shadow-lg p-6 flex-col hidden md:flex">
        <h2 className="text-2xl font-semibold text-primary mb-6">Portal</h2>
        <div className="flex gap-4 mb-4">
          <button
            className={cn(
              'flex-1 p-2 rounded-md text-center',
              menuType === 'Service' ? 'bg-primary text-white' : 'bg-gray-200'
            )}
            onClick={() => setMenuType('Service')}
          >
            Service
          </button>
          <button
            className={cn(
              'flex-1 p-2 rounded-md text-center',
              menuType === 'Warranty' ? 'bg-primary text-white' : 'bg-gray-200'
            )}
            onClick={() => setMenuType('Warranty')}
          >
            Warranty
          </button>
        </div>
        <nav className="flex-1 space-y-4">
          {menuItems.map(item => (
            <li
              key={item.name}
              className={cn(
                'flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all',
                active === item.name
                  ? 'bg-blue-100 text-secondary border-l-4 border-primary'
                  : 'hover:bg-blue-50 hover:text-primary0'
              )}
              onClick={() => handleNavigation(item.name, item.link)}
            >
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </li>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Mobile Bottom Navbar */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around p-3 md:hidden">
          {menuItems.map(item => (
            <button
              key={item.name}
              className={cn(
                'flex items-center p-2 rounded-md transition-all',
                active === item.name
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-blue-50 hover:text-blue-600'
              )}
              onClick={() => handleNavigation(item.name, item.link)}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
