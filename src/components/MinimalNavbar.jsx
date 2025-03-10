import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import classNames from "classnames";

const MinimalNavbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const topbarClass = classNames(
    "fixed z-50 w-full transition-transform duration-300 ease-in-out",
    {
      "transform -translate-y-full": !isVisible,
    }
  );

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={topbarClass}>
      <div className="backdrop-brightness-50 md:w-4/5 bg-midnight mx-auto  backdrop-blur-xl shadow-lg border border-darkBorder">
        <div className="container mx-auto flex items-center text-white">
          
          <div className="flex items-end ml-auto justify-end p-2 space-x-4 lg:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex flex-wrap justify-center p-4 mx-auto text-xs items-center text-[#bebebe] space-x-4 lg:space-x-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border p-2 rounded-full bg-gray-5 hover:bg-gray px-2 border-[#3c3c3c] text-white transition duration-300"
                  : "hover:text-white transition duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "border p-2 rounded-full bg-gray-5 hover:bg-gray px-3 border-[#3c3c3c] text-white transition duration-300"
                  : "hover:text-white transition duration-300"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/knowMe"
              className={({ isActive }) =>
                isActive
                  ? "border p-2 rounded-full bg-gray-5 hover:bg-gray  border-[#3c3c3c] text-white transition duration-300"
                  : "hover:text-white transition duration-300"
              }
            >
              Know Me
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border p-2 rounded-full bg-gray-5 hover:bg-gray  border-[#3c3c3c] text-white transition duration-300"
                  : "hover:text-white transition duration-300"
              }
            >
              Contact
            </NavLink>
          </div>
          
        </div>

        <div
          className={classNames(
            "lg:hidden transition-max-height border-darkBorder  duration-500 ease-in-out overflow-hidden",
            { "max-h-0": !isDropdownOpen, "max-h-96 border-t": isDropdownOpen }
          )}
        >
          <div className="px-4 text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block border-b border-[#3a3a3a] text-white transition duration-300 py-2"
                  : "block hover:text-white transition duration-300 py-2"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "block border-b border-[#3a3a3a] text-white transition duration-300 py-2"
                  : "block hover:text-white transition duration-300 py-2"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              Pay Bills
            </NavLink>
            <NavLink
              to="/knowMe"
              className={({ isActive }) =>
                isActive
                  ? "block border-b border-[#3a3a3a] text-white transition duration-300 py-2"
                  : "block hover:text-white transition duration-300 py-2"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              Past Readings
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? "block border-b border-[#3a3a3a] text-white transition duration-300 py-2"
                  : "block hover:text-white transition duration-300 py-2"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              Billing Math
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalNavbar;

