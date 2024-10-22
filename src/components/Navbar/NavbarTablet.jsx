import React, { useState } from 'react';
import { FaList, FaTimes, FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/website/logo.png";

const NavbarTablet = ({ Menu }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const DrawerMenu = () => (
    <div className={`fixed top-0 left-0 z-50 h-screen p-2 transition-transform transform bg-white w-64 dark:bg-gray-800 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button type="button" onClick={toggleDrawer} className="absolute top-2 right-2">
        <FaTimes className="w-6 h-6 text-gray-800 dark:text-white" />
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="space-y-2 font-medium mt-8">
        {Menu.map((item) => (
          <li key={item.id}>
            {item.dropdown ? (
              <div className="group relative cursor-pointer py-2">
                <a href="#" className="flex items-center justify-between gap-2 text-sm font-medium uppercase">
                  {item.name} <FaCaretDown />
                </a>
                <ul className={`pl-4 ${dropdownOpen === item.id ? 'block' : 'hidden'}`}>
                  {item.links.map(link => (
                    <li key={link.id}>
                      <a href={link.link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md text-sm font-medium uppercase">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a href={item.link} className="relative text-gray-800 dark:text-white hover:text-blue-500 py-2 text-sm font-medium uppercase block">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <nav className="shadow-md w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out text-xs font-medium uppercase z-50">
        <div className="flex justify-between items-center py-5 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Ícone de Menu */}
          <button className="text-primary dark:text-primary bg-transparent focus:ring-0 p-1.5" onClick={toggleDrawer}>
            <FaList className="text-2xl" />
          </button>

          {/* Logo Centralizada */}
          <div className="flex-grow text-center">
            <a href="#" className="inline-block text-2xl font-bold md:text-3xl">
              <img src={Logo} alt="Logo" className="w-32 h-auto object-contain" />
            </a>
          </div>

          {/* Espaço à Direita para Simetria */}
          <div className="p-1.5 invisible">
            <FaList className="text-2xl" />
          </div>
        </div>
        {drawerOpen && <DrawerMenu />}
      </nav>
    </div>
  );
};

export default NavbarTablet;
