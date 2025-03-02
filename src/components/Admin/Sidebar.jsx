import React, { useEffect, useState } from 'react';
import { Home, History, Settings, Phone } from 'lucide-react';

const Sidebar = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the user object from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name || 'User Name'); // Default to "User Name" if name is not available
    }
  }, []);

  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg">
      {/* Sidebar Header */}
      <div className="p-6 text-center border-b border-gray-700">
        {/* Profile Picture */}
        <img
          src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/user.png?updatedAt=1735835144686"
          alt="Profile"
          className="w-16 h-16 rounded-full mx-auto border-2 border-gray-600"
        />
        <h2 className="text-xl font-bold text-gray-100 mt-2">{userName}</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-3">
          {/* Dashboard */}
          <li>
            <a
              href="/profile"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <Home size={24} />
              <span className="text-lg font-medium">Profile</span>
            </a>
          </li>

          {/* Complaint History */}
          <li>
            <a
              href="/track"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <History size={24} />
              <span className="text-lg font-medium">History</span>
            </a>
          </li>

          {/* Settings */}
          <li>
            <a
              href="/settings"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <Settings size={24} />
              <span className="text-lg font-medium">Settings</span>
            </a>
          </li>

          {/* Support */}
          <li>
            <a
              href="/support"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <Phone size={24} />
              <span className="text-lg font-medium">Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
