import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`top-0 left-0 w-full z-10  ${
        isOpen ? "translate-x-0  fixed " : "absolute"
      }`}
    >
      <nav className={`mx-auto max-w-[1600px] px-2 sm:px-6 lg:px-8
      ${isOpen ? "bg-indigo-500" : "bg-transparent"}`}>
        
        <div className="flex h-20 items-center justify-between text-white">
          
          <NavLink
            to="/"
            className="flex items-center text-xl hover:text-indigo-500"
          >
            <span className={`${isOpen? "text-white" : "text-indigo-500"}`}
            >Enter-</span>
            Stream
          </NavLink>

         
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/movies" className="text-base hover:text-indigo-500">
              MOVIES
            </NavLink>
            <a href="/series" className="text-base hover:text-indigo-500">
              SERIES
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex">
            <a
              href="#"
              className="text-base h-auto bg-indigo-500 hover:bg-indigo-900 text-white text-center px-4 py-2 rounded-3xl"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-20 left-0 w-full bg-transparent z-20 transition-transform duration-300 ${
            isOpen ? "translate-x-0  fixed" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col py-4 space-y-4 px-3 text-white bg-indigo-400">
            <NavLink
              to="/movies"
              className="text-base hover:text-indigo-500"
              onClick={() => setIsOpen(false)}
            >
              MOVIES
            </NavLink>
            <a
              href="/series"
              className="text-base hover:text-indigo-500"
              onClick={() => setIsOpen(false)}
            >
              SERIES
            </a>
            <a
              href="#"
              className="text-base h-auto w-[50px] text-white text-center py-2 rounded-3xl"
              onClick={() => setIsOpen(false)}
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
