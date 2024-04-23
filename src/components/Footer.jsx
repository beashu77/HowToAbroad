import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-dark_blue text-white py-10 ">
      <div className="flex flex-col lg:flex-row  justify-between w-[85%]  m-auto gap-5">
        <div className="lg:w-[25%] ">
          <p className="text-2xl">Magic Sporting Club</p>
          <br />

          <p className="text-lg">
            <span className="block">
              <FaLocationDot className="text-yellow_dark inline" /> 1 km, NH-54,
            </span>
            <span className="block ">St Paul's High school bground,</span>
            <span className="block ">Belagavi District</span>
            <span className="block ">Karnataka, India - 590009</span>
          </p>
        </div>
        <div className="lg:w-[25%] text-lg ">
          <p className="text-2xl">Magic Pro</p>
          <br />
          <span className="block pb-4">
            <Link to={"/aboutus"}>
              <FaCaretRight className="text-yellow_dark inline" /> AboutUs
            </Link>
          </span>
          <span className="block pb-4">
            <Link to={"/batches"}>
              <FaCaretRight className="text-yellow_dark inline" /> Batches
            </Link>
          </span>
          <span className="block md:pb-4">
            <Link to={"/contact"}>
              <FaCaretRight className="text-yellow_dark inline" /> Contact
            </Link>
          </span>
        </div>
        <div className="lg:w-[25%] text-lg">
          <p className="text-2xl"></p>
          <span className="block pb-4 lg:mt-[19%] ">
            <Link to={"/SummerCamp"}>
              <FaCaretRight className="text-yellow_dark inline" /> Summer Camp
            </Link>
          </span>

          <span className="block pb-4">
            <Link to={"/"}>
              <FaCaretRight className="text-yellow_dark inline" /> Turnaments
            </Link>
          </span>
        </div>

        <div className="lg:w-[25%] text-lg">
          <p className="text-2xl">Contact Details</p>
          <br />
          <span className="block pb-2">
            <FaPhoneAlt className="text-yellow_dark inline mr-2" />
            +917019006683
          </span>
          <span className="block pb-2">
            {" "}
            <MdEmail className="text-yellow_dark inline mr-2" />
            bhushandhuri86@gmail.com
          </span>

          <div className="flex gap-4 pt-5 text-dark_blue">
            <div className="rounded-full bg-yellow_dark p-[10px] w-[45px] inline-block h-[45px] text-2xl">
              <link rel="stylesheet" href="" />
              <FaFacebookF />
            </div>
            <div className="rounded-full bg-yellow_dark p-[10px] w-[45px] inline-block h-[45px] text-2xl">
              <link
                rel="stylesheet"
                href="https://www.instagram.com/magicsportingclub/"
              />{" "}
              <FaInstagram />
            </div>
          </div>
        </div>

      </div>
      <p className="pt-5 w-[85%] m-auto text-left">Site Designed and Maintained By: Office of Communications, PA Group</p>
    </div>
  );
};

export default Footer;
