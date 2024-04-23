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
    setIsOpen(false); // Close the menu when a menu item is clicked
    // Perform additional actions if needed
  };

  return (
    <>
      <div className="mx-auto bg-grey h-8 text-white text-center">
        Where to Buy Sim Card at Berlin Airport?
      </div>

      <nav className="top-0 w-full pt-5 pb-5 shadow-lg sticky">
        <div className="mx-auto w-[85%]">
          <div className="items-center flex  justify-between">
            <div className=" inset-y-0 left-0 items-center flex  md:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                {/* <span className="sr-only">Toggle menu</span> */}
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

            <div className="items-center flex justify-between h-24 w-full">
              <Link to="/">
                <div className="flex items-center cursor-pointer">
                  <img src={HTA_logDOM} alt="logo" className="h-24" />
                </div>
              </Link>

              <div className="hidden md:block font-figtreeMedium">
                <div className="flex   lg:gap-10 gap-5 ">
                  <Link to="/">
                    <div
                      className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                        activeItem === "" ? "text-dark_blue" : ""
                      }`}
                      onClick={() => handleItemClick("")}
                    >
                      HOME
                    </div>
                  </Link>
                  <Link to="/portal">
                    <div
                      className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                        activeItem === "portal" ? "text-dark_blue" : ""
                      }`}
                      onClick={() => handleItemClick("portal")}
                    >
                      {" "}
                      PORTAL
                    </div>
                  </Link>{" "}
                  <Link to="/searchcourse">
                    <div
                      className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2 ${
                        activeItem === "searchcourse" ? "text-dark_blue" : ""
                      }`}
                      onClick={() => handleItemClick("searchcourse")}
                    >
                      SEARCHCOURSE
                    </div>
                  </Link>
                  <Link to="/login">
                    <div
                      className={`hover:text-dark_blue hover:text-white hover:bg-dark_blue hover:rounded-lg p-2  ${
                        activeItem === "login" ? "white" : ""
                      }`}
                      onClick={() => handleItemClick("login")}
                    >
                      LOGIN
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile screen */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/">
              <div
                className="hover:text-white hover:bg-dark_blue py-2"
                onClick={() => {
                  handleMenuItemClick();
                }}
              >
                Home
              </div>
            </Link>
            <Link to="/portal">
              <div
                className="hover:text-white hover:bg-dark_blue py-2"
                onClick={() => {
                  handleMenuItemClick();
                }}
              >
                {" "}
                PORTAL
              </div>
            </Link>{" "}
            <Link to="/searchcourse">
              <div
                className="hover:text-white hover:bg-dark_blue py-2"
                onClick={() => {
                  handleMenuItemClick();
                }}
              >
                SEARCHCOURSE
              </div>
            </Link>
            <Link to="/login">
              <div
                className="hover:text-white hover:bg-dark_blue py-2 mb-1"
                onClick={() => {
                  handleMenuItemClick();
                }}
              >
                LOGIN
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
