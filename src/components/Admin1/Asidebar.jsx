import React from 'react';
import { Home, Users, FileText, BarChart2, Settings } from 'lucide-react';

const Asidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg">
      {/* Sidebar Header */}
      <div className="p-6 text-center border-b border-gray-800">
        <img
          src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/admin.jpg?updatedAt=1735835142065"
          alt="Admin Profile"
          className="w-16 h-16 rounded-full mx-auto border-2 border-gray-700"
        />
        <h2 className="text-lg font-semibold text-gray-100 mt-3">Admin </h2>
        <p className="text-sm text-gray-500">Administrator</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <a
              href="/aprofile"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <Home size={24} />
              <span className="text-lg font-medium">Profile</span>
            </a>
          </li>

          {/* User Management */}
          <li>
            <a
              href="/ausers"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <Users size={24} />
              <span className="text-lg font-medium">Users</span>
            </a>
          </li>

          {/* Tickets */}
          <li>
            <a
              href="/acomplaints"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
              <FileText size={24} />
              <span className="text-lg font-medium">Complaints</span>
            </a>
          </li>

          {/* Analytics */}
          <li>
            <a
              href="/analytics"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
            >
               <BarChart2 size={24} />
              <span className="text-lg font-medium">Analytics</span>
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
        </ul>
      </nav>
    </aside>
  );
};

export default Asidebar;