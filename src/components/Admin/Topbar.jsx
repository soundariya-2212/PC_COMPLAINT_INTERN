import React, { useState } from 'react';
import { Bell, User, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Navigate to the sign-in page
    navigate('/login');
  };

  return (
    <div className="w-full h-16 bg-gray-900 text-gray-200 flex justify-between items-center px-6 shadow-md">
      {/* Right Section */}
      <div className="ml-auto flex items-center gap-6">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer hover:text-blue-400 transition-colors">
          <Bell size={24} />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Profile Section */}
        <div
          className="relative cursor-pointer"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <User size={24} />
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <ul
            className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-gray-300 z-10"
            onMouseLeave={() => setShowDropdown(false)}
          >
            <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer flex items-center gap-3">
              <Settings size={20} />
              <a href="/settings">Settings</a>
            </li>
            <li
              className="px-4 py-3 hover:bg-gray-700 cursor-pointer flex items-center gap-3"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              <span>Logout</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopBar;
