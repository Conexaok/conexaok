import React from 'react';
import { FaList, FaTimes, FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/website/logo.png";

const NavbarMobile = ({ Menu, mobileMenuOpen, setMobileMenuOpen, dropdownOpen, setDropdownOpen, drawerOpen, setDrawerOpen }) => {
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const DrawerMenu = () => (
    <div className={`fixed top-0 left-0 z-50 h-screen p-2 transition-transform transform bg-white w-64 dark:bg-gray-800 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button type="button" onClick={() => setDrawerOpen(false)} className="absolute top-2 right-2">
        <FaTimes className="w-3 h-3" />
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="space-y-2 font-medium">
        {Menu.map((item) => (
          <li key={item.id}>
            {item.dropdown ? (
              <div className="group relative cursor-pointer py-2 ml-3">
                <a href="#" className="flex items-center gap-2 text-sm font-medium uppercase">
                  {item.name} <FaCaretDown />
                </a>
                <ul className="hidden group-hover:block absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md">
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
              <a href={item.link} className="relative mx-3 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 text-sm font-medium uppercase group">
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
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
          <button className="text-primary dark:text-primary bg-transparent focus:ring-0 p-1.5 md:hidden" onClick={() => setDrawerOpen(true)}>
            <FaList className="text-lg" />
          </button>
          <a href="#" className="text-2xl font-bold md:text-3xl mx-auto">
            <img src={Logo} alt="Logo" className="w-32 h-auto object-contain" />
          </a>
          {/* Espaço reservado para centralizar a logo */}
          <div className="p-1.5 invisible md:hidden">
            <FaList className="text-lg" />
          </div>
        </div>
        {drawerOpen && <DrawerMenu />}
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="w-64 h-full bg-white dark:bg-gray-900 p-4">
            <button className="absolute top-4 right-4 text-gray-800 dark:text-white" onClick={toggleMobileMenu}>
              <FaTimes className="w-6 h-6" />
            </button>
            <ul className="space-y-4">
              {Menu.map((item) => (
                <li key={item.id}>
                  {item.dropdown ? (
                    <div className="cursor-pointer" onClick={() => setDropdownOpen(dropdownOpen === item.id ? null : item.id)}>
                      <a href="#" className="flex items-center justify-between text-sm font-medium uppercase">
                        {item.name} <FaCaretDown className={`transition ${dropdownOpen === item.id ? 'rotate-180' : 'rotate-0'}`} />
                      </a>
                      {dropdownOpen === item.id && (
                        <ul className="mt-2 pl-4 space-y-2">
                          {item.links.map(link => (
                            <li key={link.id}>
                              <a href={link.link} className="block p-2 text-gray-800 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md text-sm font-medium uppercase">
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href={item.link} className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 text-sm font-medium uppercase">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
