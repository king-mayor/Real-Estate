import React from "react";
import { MdBusAlert } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="bg-red-100 py-14">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <h3 className="text-red-600 text-lg">OUR SERVICES</h3>
          <h2 className="text-4xl text-black font-bold">Top real estate</h2>
          <h2 className="text-4xl text-black font-bold">services available</h2>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center py-4 pt-10 gap-6 mx-10">
          <div
            className="lg:w-[300px] w-full bg-white p-10 rounded-2xl border-b-4 border-red-600 hover:bg-red-300 cursor-pointer"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className=" text-red-600 font-bold text-4xl">
              <MdBusAlert />
            </div>
            <h2 className="text-black text-2xl py-4">Sell your home</h2>
            <p className="text-lg text-gray-600 py-4">
              We sell your home at the best market price
            </p>
            <Link className="text-red-600 uppercase text-md font-bold border-b-2 border-red-600">
              read more
            </Link>
          </div>
          <div
            className="lg:w-[300px] w-full bg-white p-10 rounded-2xl  border-b-4 border-red-600 hover:bg-red-300 cursor-pointer"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="text-red-600 font-bold text-4xl">
              <IoHome />
            </div>
            <h2 className="text-black text-2xl py-4">Home loans</h2>
            <p className="text-lg text-gray-600 py-4">
              We offer you free consultancy to get a loan
            </p>
            <Link className="text-red-600 uppercase text-md font-bold border-b-2 border-red-600">
              read more
            </Link>
          </div>
          <div
            className="lg:w-[300px] w-full bg-white p-10 rounded-2xl  border-b-4 border-red-600 hover:bg-red-300"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="text-red-600 font-bold text-4xl">
              <FaAcquisitionsIncorporated />
            </div>
            <h2 className="text-black text-2xl py-4">Legal services</h2>
            <p className="text-lg text-gray-600 py-4">
              Expert legal help for all related property items
            </p>
            <Link className="text-red-600 uppercase text-md font-bold border-b-2 border-red-600">
              read more
            </Link>
          </div>
        </div>
      </div>
      {/* // {Second Row} */}
      <div className="bg-red-100 pb-14">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-6 mx-10">
          <div
            className="lg:w-[300px] w-full bg-white p-8 rounded-2xl border-b-4 border-red-600 hover:bg-red-300 cursor-pointer"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className=" text-red-600 font-bold text-4xl">
              <FaSearch />
            </div>
            <h2 className="text-black text-2xl py-4">Home inspection</h2>
            <p className="text-lg text-gray-600 py-4">
              We make sure you get what you were promised
            </p>
            <Link className="text-red-600 uppercase text-md font-bold border-b-2 border-red-600">
              read more
            </Link>
          </div>
          <div
            className="lg:w-[300px] w-full bg-white p-8 rounded-2xl  border-b-4 border-red-600 hover:bg-red-300 cursor-pointer"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="text-red-600 font-bold text-4xl">
              <IoBagAddSharp />
            </div>
            <h2 className="text-black text-2xl py-4">Evaluation</h2>
            <p className="text-lg text-gray-600 py-4">
              We offer you free evaluation to get a mortgage loan
            </p>
            <Link className="text-red-600 uppercase text-md font-bold border-b-2 border-red-600">
              read more
            </Link>
          </div>
          <div
            className="lg:w-[300px] w-full bg-white p-8 rounded-2xl  border-b-4 border-red-600 hover:bg-red-300"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="text-red-600 font-bold text-4xl">
              <FaCameraRetro />
            </div>
            <h2 className="text-black text-2xl py-4">Photoshoot</h2>
            <p className="text-lg text-gray-600 py-4">
              We prepare your home visual presentation
            </p>
            <Link className="text-red-600 uppercase text-md font-bold border-b-2 border-red-600">
              read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
