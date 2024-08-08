import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="bg-gray-200  bottom-0 left-0 w-full z-10">
      <div className="mx-auto max-w-[1600px] px-2 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between text-black">
          <Link
            to="/"
            className="flex items-center text-xl hover:text-indigo-500"
          >
            Enter-Stream
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/movies" className="text-2xl hover:text-indigo-500">
              MOVIES
            </Link>
            <Link to="/series" className="text-2xl hover:text-indigo-500">
              SERIES
            </Link>
          </div>
          {/* Right Section */}
          <Link
            to="#"
            className="text-2xl hover:text-indigo-600 text-black px-4 py-2"
          >
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
