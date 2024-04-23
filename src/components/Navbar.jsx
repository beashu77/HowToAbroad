import React, { useState } from "react";
import { Link } from "react-router-dom";
import HTA_logDOM from "../asset/images/HTA-logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mx-auto bg-grey h-8 text-white text-center">
        Where to Buy Sim Card at Berlin Airport?
      </div>
      <nav className="top-0 w-full pt-5 pb-5 shadow-lg bg-white fixed z-10">
        <div className="mx-auto w-[85%]">
          <div className="items-center flex justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img src={HTA_logDOM} alt="logo" className="h-24" />
              </Link>

              <div className="hidden md:block font-figtreeMedium ml-8">
                <div className="flex lg:gap-10 gap-5 ">
                  <Link
                    to="/"
                    className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                      activeItem === "" ? "text-dark_blue" : ""
                    }`}
                    onClick={() => handleItemClick("")}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/portal"
                    className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                      activeItem === "portal" ? "text-dark_blue" : ""
                    }`}
                    onClick={() => handleItemClick("portal")}
                  >
                    PORTAL
                  </Link>
                  <Link
                    to="/searchcourse"
                    className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                      activeItem === "searchcourse" ? "text-dark_blue" : ""
                    }`}
                    onClick={() => handleItemClick("searchcourse")}
                  >
                    SEARCHCOURSE
                  </Link>
                  <Link
                    to="/login"
                    className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                      activeItem === "login" ? "text-dark_blue" : ""
                    }`}
                    onClick={() => handleItemClick("login")}
                  >
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Spacer to push content below the navbar */}
      <div className="h-24"></div>

      {/* Your content goes here */}
      <div className="bg-gray-100 min-h-screen">
        {/* Content */}
      </div>

      {/* Mobile screen */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="hover:text-white hover:bg-dark_blue py-2"
            onClick={() => {
              handleMenuItemClick();
            }}
          >
            Home
          </Link>
          <Link
            to="/portal"
            className="hover:text-white hover:bg-dark_blue py-2"
            onClick={() => {
              handleMenuItemClick();
            }}
          >
            PORTAL
          </Link>
          <Link
            to="/searchcourse"
            className="hover:text-white hover:bg-dark_blue py-2"
            onClick={() => {
              handleMenuItemClick();
            }}
          >
            SEARCHCOURSE
          </Link>
          <Link
            to="/login"
            className="hover:text-white hover:bg-dark_blue py-2 mb-1"
            onClick={() => {
              handleMenuItemClick();
            }}
          >
            LOGIN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
