import React from 'react';

const Awelcome = () => {
  return (
    <div className="flex items-center justify-center h-full text-gray-900 bg-gray-100">
      <div className="text-center space-y-4">
        {/* Greeting Message */}
        <h1 className="text-4xl font-bold">Welcome Back, Admin!</h1>
        
        {/* Introduction */}
        <p className="mt-2 text-lg text-gray-400">
          Here’s to another productive day. Monitor, manage, and optimize your platform seamlessly.
        </p>

        {/* Motivational Tagline */}
        <p className="text-md italic text-gray-500">
          "Great leaders don’t set out to be leaders; they set out to make a difference."
        </p>
      </div>
    </div>
  );
};

export default Awelcome;