import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const FirstBanner = () => {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content area */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
           Hamro Shikshya
            </h1>
            <p className="text-gray-700 text-lg mb-8">
            "A modern web application to manage students, courses, schedules, and payments — all in one place."
            </p>
            <div className="flex flex-wrap gap-4">
              {!isLoggedIn && (
                <>
                  <Link to="/signup">
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                      Register Now
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-white hover:bg-gray-100 text-gray-600 font-medium py-2 px-6 rounded-md border border-gray-600 transition duration-300">
                      Login
                    </button>
                  </Link>
                </>
              
              )}
            </div>
          </div>

          {/* Right illustration area */}
          <div className="w-full md:w-1/2 relative flex items-center justify-center">
            {/* Background curve */}
            <div className="absolute top-0 right-0 w-full h-full bg-blue-100 rounded-full opacity-30 transform md:translate-x-1/4 md:scale-150 z-0 overflow-hidden"></div>
            <img
              src="/9571032.png" // Use the relative path to the image in the public directory
              alt="Learning platform illustration showing students and educational elements"
              className="w-3/4 h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;