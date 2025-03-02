import { CircleUser, ShoppingCart, Headphones } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate user login state

  const links = [
    { title: 'Computers', link: '/' },
    { title: 'Hardware', link: '/' },
    { title: 'Software', link: '/' },
    { title: 'Networks', link: '/' },
    { title: 'Accessories', link: '/' },
    { title: 'Support', link: '/support' },
  ];

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    // Handle user logout logic
    setIsLoggedIn(false); // Update the login state
  };

  return (
    <div className="w-full h-[8vh] flex flex-row justify-between items-center sticky top-0 bg-gradient-to-r from-blue-50 to-white shadow-md z-50 px-10">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <NavLink to="/" className="hover:text-blue-600 transition duration-300">
          TechDoc
        </NavLink>
      </div>

      {/* Links */}
      <div className="flex flex-row items-center text-base gap-8">
        {links.map((data, index) => (
          <li key={index} className="list-none">
            <NavLink
              to={data.link}
              className="text-gray-700 hover:text-blue-600 transition duration-300 underline-offset-4 hover:underline"
            >
              {data.title}
            </NavLink>
          </li>
        ))}
      </div>

      {/* Icons */}
      <div className="flex flex-row items-center gap-5 relative">
        {/* CircleUser with Dropdown */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer text-gray-500 hover:text-blue-600 transition duration-300"
          >
            <CircleUser size={22} />
          </div>
          {showDropdown && (
            <ul
              className="absolute right-0 mt-3 w-40 bg-white border border-gray-200 rounded-lg shadow-xl animate-fade-in"
              onMouseLeave={() => setShowDropdown(false)}
            >
              {isLoggedIn ? (
                <>
                  <li className="px-4 py-2 hover:bg-blue-50">
                    <NavLink to="/profile" className="text-gray-700">
                      My Profile
                    </NavLink>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li className="px-4 py-2 hover:bg-blue-50">
                    <NavLink to="/login" className="text-gray-700">
                      Login
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-50">
                    <NavLink to="/register" className="text-gray-700">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>

        {/* ShoppingCart */}
        <NavLink
          to="/cart"
          className="text-gray-500 hover:text-blue-600 transition duration-300"
        >
          <ShoppingCart size={22} />
        </NavLink>

        {/* Customer Care */}
        <NavLink
          to="/contact"
          className="text-gray-500 hover:text-blue-600 transition duration-300"
        >
          <Headphones size={22} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
