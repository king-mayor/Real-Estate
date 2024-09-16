import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import prop7 from "../assets/prop7.jpg";
import prop8 from "../assets/prop8.jpg";
const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800 dark:bg-black flex lg:justify-around lg:flex-row flex-col  md:items-start sm:items-start py-20 px-6 gap-10">
        <div
          className="lg:w-1/3 w-full"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h2 className="lg:text-2xl text-lg text-gray-200 capitalize font-bold">
            about us
          </h2>
          <p className="text-gray-200 lg:text-lg text-md py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate
            dolorum sit repellendus nulla?
          </p>
          <div className="flex gap-2">
            <div>
              <FaFacebookSquare className="text-4xl text-gray-200 cursor-pointer hover:text-red-600 font-bold" />
            </div>
            <div>
              <RiInstagramFill className="text-4xl text-gray-200 cursor-pointer hover:text-red-600 font-bold" />
            </div>
            <div>
              <FaSquareTwitter className="text-4xl text-gray-200 cursor-pointer hover:text-red-600 font-bold" />
            </div>
            <div>
              <FaSquareYoutube className="text-4xl text-gray-200 cursor-pointer hover:text-red-600 font-bold" />
            </div>
          </div>
          <p className="text-gray-200 text-md py-10">
            Copyright Real Estate, All Rights Reserved
          </p>
        </div>
        <div
          className="flex flex-col gap-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h2 className="g:text-2xl text-lg text-gray-200 capitalize font-bold">
            contact us
          </h2>
          <div className="flex items-center gap-2">
            <div>
              <FaAddressCard className="text-gray-200 text-2xl" />
            </div>
            <div>
              <p className="text-gray-200 text-md">
                10845 Griffith Peak Dr, Las Vegas, NV 89135
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaMobileRetro className="text-gray-200 text-2xl" />
            </div>
            <div>
              <p className="text-gray-200 text-md">+91 879 098 8901</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CiMobile4 className="text-gray-200 text-2xl" />
            </div>
            <div>
              <p className="text-gray-200 text-md">+91 123 678 0912</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MdOutlineMailOutline className="text-gray-200 text-2xl" />
            </div>
            <div>
              <p className="text-gray-200 text-md">office23@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h2 className="lg:text-2xl text-lg text-gray-200 capitalize font-bold">
            Latest Properties
          </h2>
          <div className="flex items-center gap-6">
            <div>
              <img
                className="w-40 h-24 rounded-2xl cursor-pointer hover:scale-y-75"
                src={prop7}
                alt="footer-img"
              />
            </div>
            <div>
              <h3 className="text-gray-200 text-md">Villa with amazing view</h3>
              <p className="text-gray-400 text-md">$ 278.98</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <img
                className="w-40 h-24 rounded-2xl cursor-pointer hover:scale-y-75"
                src={prop8}
                alt="footer-img"
              />
            </div>
            <div>
              <h3 className="text-gray-200 text-md">Sea View Villa</h3>
              <p className="text-gray-400 text-md">$ 789.23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
