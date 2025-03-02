import React from "react";
import { Bell, Mail, User, Briefcase, Users, Activity, FileText } from "lucide-react";

const Aprofile = () => {
  const notifications = [
    { id: 1, message: "New user registered", timestamp: "5 mins ago" },
    { id: 2, message: "Ticket #123 resolved", timestamp: "1 hour ago" },
    { id: 3, message: "System maintenance scheduled", timestamp: "Yesterday" },
  ];

  return (
    <div className=" bg-gray-100 p-8 flex flex-col h-screen">
      {/* Admin Details */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-8 mb-8">
        <img
          src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/admin.jpg?updatedAt=1735835142065"
          alt="Admin Avatar"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin </h1>
          <p className="flex items-center gap-2 text-gray-500 mt-1">
            <Mail size={20} /> admin@example.com
          </p>
          <p className="flex items-center gap-2 text-gray-500 mt-1">
            <Briefcase size={20} /> Role: Administrator
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 text-blue-700 shadow-sm rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
            <Users size={32} className="mx-auto mb-2" />
            <p className="font-medium">Manage Users</p>
          </div>
          <div className="bg-green-50 text-green-700 shadow-sm rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
            <Activity size={32} className="mx-auto mb-2" />
            <p className="font-medium">View Activities</p>
          </div>
          <div className="bg-yellow-50 text-yellow-700 shadow-sm rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
            <FileText size={32} className="mx-auto mb-2" />
            <p className="font-medium">View Complaints</p>
          </div>
          <div className="bg-red-50 text-red-700 shadow-sm rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
            <Bell size={32} className="mx-auto mb-2" />
            <p className="font-medium">View Notifications</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-1">
        {/* Notifications */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Notifications</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            {notifications.length > 0 ? (
              <ul className="space-y-4">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      <Bell size={24} className="text-blue-500" />
                      <p className="text-gray-700 font-medium">
                        {notification.message}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400">
                      {notification.timestamp}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">
                No new notifications at the moment.
              </p>
            )}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Aprofile;