import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 max-md:2xl">
      <nav className="bg-transparent mx-auto max-w-[1600px] px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between text-white">
          {/* Left Section */}
          <NavLink
            to="/"
            className="flex items-center text-xl hover:text-indigo-500"
          >
            <span className="text-indigo-500">Enter-</span>
            Stream
          </NavLink>

          {/* Center Section */}
          <div className="flex items-center space-x-4">
            <NavLink to="/movies" className="text-base hover:text-indigo-500">
              MOVIES
            </NavLink>
            <a href="/series" className="text-base hover:text-indigo-500">
              SERIES
            </a>
          </div>

          {/* Right Section */}
          <a
            href="#"
            className="text-base  h-auto bg-indigo-500 hover:bg-indigo-900 text-white text-center px-4 py-2 rounded-3xl"
          >
            SUBSCRIBE
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
