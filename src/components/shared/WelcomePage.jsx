import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Link } from "react-router-dom";
// import Namedisplay from "./namedisplay";
const WelcomePage = () => {
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
    <div className="bg-white flex items-center justify-center ml-4 mt-56">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-black">
          Welcome,{" "}
          <span className="text-gray-500">
            {userName || "Guest"}
          </span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          We're thrilled to have you here! Explore your profile, manage complaints, and make the most of our services.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to='/profile'className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-all">
            View Profile
          </Link>
          <Link to='/track' className="px-6 py-2 border border-black text-black rounded-lg shadow-md hover:bg-gray-100 transition-all">
            Track Complaints
          </Link>
        </div>
        <div className="text-sm text-gray-500 mt-6">
          Need assistance?{" "}
          <a
            href="/support"
            className="underline hover:text-gray-700 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};


export default WelcomePage;