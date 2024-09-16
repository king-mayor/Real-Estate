import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo (2).png";
import { FaPhone } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import DarkMode from "./DarkMode";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="fixed z-50 w-full">
        <div className="bg-slate-100 py-4 dark:bg-black">
          <div className="flex justify-around items-center">
            <div className="1st">
              <img
                className="lg:w-52 lg:h-24 w-24 h-10"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="lg:flex flex-row gap-10 hidden">
              <Link className="uppercase text-md  text-black dark:text-white font-semibold hover:bg-red-600 p-2 rounded-xl hover:text-gray-100">
                Home
              </Link>
              <Link className="uppercase text-md  text-black dark:text-white font-semibold hover:bg-red-600 p-2 rounded-xl hover:text-gray-100">
                About
              </Link>
              <Link className="uppercase text-md  text-black dark:text-white font-semibold hover:bg-red-600 p-2 rounded-xl hover:text-gray-100">
                Properties
              </Link>
              <Link className="uppercase text-md  text-black dark:text-white font-semibold hover:bg-red-600 p-2 rounded-xl hover:text-gray-100">
                Services
              </Link>
              <Link className="uppercase text-md  text-black dark:text-white font-semibold hover:bg-red-600 p-2 rounded-xl hover:text-gray-100">
                Testimonials
              </Link>
              <Link className="uppercase text-md  text-black dark:text-white font-semibold hover:bg-red-600 p-2 rounded-xl hover:text-gray-100">
                Contact
              </Link>
            </div>
            {/* {Mobile Menu} */}
            <div
              className="cursor-pointer text-3xl lg:hidden"
              onClick={handleToggleMenu}
            >
              {menu ? (
                <IoClose className="dark:text-gray-100" />
              ) : (
                <IoMenu className="dark:text-gray-100" />
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="">
                <FaPhone
                  color="red"
                  className="cursor-pointer lg:text-lg text-sm"
                />
              </div>
              <div>
                <h2 className="lg:text-lg text-sm font-bold text-black dark:text-white">
                  888-908-9102
                </h2>
              </div>
              <div className="">
                <FaUserCircle
                  color="red"
                  className=" cursor-pointer lg:text-lg text-sm"
                />
              </div>
            </div>
            {/* {Darkmode} */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="fixed z-20 w-full">
          <div className="lg:hidden items-center bg-slate-800 flex flex-col justify-center text-center px-6 py-10 gap-6">
            <Link className="uppercase text-md  text-white hover:bg-red-600 font-semibold w-full py-2 rounded-xl">
              Home
            </Link>
            <Link className="uppercase text-md  text-white hover:bg-red-600 font-semibold w-full py-2 rounded-xl">
              About
            </Link>
            <Link className="uppercase text-md  text-white hover:bg-red-600 font-semibold w-full py-2 rounded-xl">
              Properties
            </Link>
            <Link className="uppercase text-md  text-white hover:bg-red-600 font-semibold w-full py-2 rounded-xl">
              Services
            </Link>
            <Link className="uppercase text-md  text-white hover:bg-red-600 font-semibold w-full py-2 rounded-xl">
              Testimonials
            </Link>
            <Link className="uppercase text-md  text-white hover:bg-red-600 font-semibold w-full py-2 rounded-xl">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
