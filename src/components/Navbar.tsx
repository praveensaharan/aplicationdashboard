import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleInput = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
 <nav className="bg-[#FFFFFF] border-b-2 border-gray-400">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-gray-900 font-medium">
                <span className="border-b-4 border-violet-700 mb-1">Home</span>
              </a>
              <a href="#" className="py-5 px-3 text-gray-900 font-medium">
                Orders
              </a>
              <a href="#" className="py-5 px-3 text-gray-900 font-medium">
                Integrations
              </a>

              {/* Dropdown */}
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="py-5 px-3 text-gray-900 font-medium focus:outline-none flex items-center"
                >
                  {" "}
                  Tracking Page
                  <svg
                    className="w-4 h-4 ml-1 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-900 font-medium"
                      >
                        Page 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-900 font-medium"
                      >
                        Page 2
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="py-5 px-3 text-gray-900 font-medium">
                Partner with Us
              </a>
            </div>
          </div>

          <div className="flex md:pl-24 items-center space-x-1 bg-transparent">
            <div className="relative flex items-center pb-1 overflow-hidden border-b-2 border-gray-700 w-36 mt-1">
              <div
                className="grid place-items-center h-full w-8 text-gray-900 font-medium"
                onClick={toggleInput}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {isOpen && (
                <input
                  className="peer outline-none text-gray-700 hover:text-gray-900 pr-2 bg-transparent w-full"
                  type="text"
                  id="search"
                />
              )}
              {!isOpen && <span onClick={toggleInput}>Search</span>}
            </div>

            <a
              href=""
              className="hidden md:flex items-center py-5 px-3 text-gray-900 font-medium"
            >
              <FaRegUser />

              <span className="ml-2">Account</span>
            </a>

            <a
              href=""
              className="hidden md:flex items-center py-5 px-3 text-gray-900 font-medium"
            >
              <FaGear />
              <span className="ml-2">Settings</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
