import React from "react";
import aboutBg from "../assets/about.jpg";
import area1 from "../assets/area1.jpg";
import area2 from "../assets/area2.jpg";
import area3 from "../assets/area3.jpg";
const Hero = () => {
  return (
    <>
      <div className="mx-10 py-10 pt-24">
        <div className="bg-[url('../src/assets/hero1.webp')] h-[600px] w-full bg-cover bg-no-repeat bg-center rounded-lg relative">
          <div
            className="flex flex-col lg:w-2/3 items-center py-28 px-16 w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h2 className="text-gray-200 lg:text-7xl md:text-5xl text-3xl font-bold">
              Find your next Home in Las Vegas
            </h2>
            <p className="lg:text-2xl text-lg text-white py-8">
              Through our proprietary platform, WpResidence is changing how
              agents and clients navigate the process of finding or selling a
              home.
            </p>
          </div>
        </div>
      </div>
      {/* // {Hero Form} */}
      <div className="flex justify-center lg:flex-row flex-col gap-16 items-center bg-white dark:bg-slate-800 mx-10 rounded-2xl py-6">
        <div className="1st" data-aos="zoom-in-up" data-aos-duration="2000">
          <h2 className="text-black dark:text-white font-semibold text-xl uppercase py-2">
            location
          </h2>
          <input
            type="text"
            placeholder="Enter an address, state, city"
            className="border-b-2 border-gray-100 py-2 pl-2 w-full"
          />
        </div>
        <div className="2nd" data-aos="zoom-in-up" data-aos-duration="2000">
          <h2 className="text-black dark:text-white font-semibold text-xl uppercase py-2">
            type
          </h2>
          <select
            name="select a property"
            id=""
            className="flex items-center border-b-2 border-gray-100 py-2 w-full"
          >
            <option>Select Property</option>
            <option>Rentals</option>
            <option>Sales</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="3rd" data-aos="zoom-in-up" data-aos-duration="2000">
          <h2 className="text-black dark:text-white font-semibold text-xl uppercase py-2">
            category
          </h2>
          <select
            name="duplex"
            id=""
            className="flex items-center border-b-2 border-gray-100 py-2 w-full"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <option>Property Category</option>
            <option>Apartment</option>
            <option>Duplex</option>
            <option>Condos</option>
            <option>houses</option>
            <option>villas</option>
          </select>
        </div>
        <div>
          <button
            className="uppercase text-gray-100 bg-red-600 py-3 px-10 cursor-pointer font-bold rounded-lg hover:bg-black border-none outline-none"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            submit
          </button>
        </div>
      </div>
      {/* {Second Hero section} */}
      <div className="flex justify-center lg:flex-row flex-col items-center gap-14 px-24 py-14">
        <div
          className="lg:w-1/2 w-full"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <img className="rounded-2xl" src={aboutBg} alt="about-background" />
        </div>
        <div
          className="lg:w-1/3 w-full"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h3 className="text-red-600 text-md">WHO WE ARE</h3>
          <h2 className="lg:text-4xl text-2xl font-bold py-6 dark:text-white">
            We help clients buy and sell houses since 1989
          </h2>
          <p className="lg:text-2xl text-lg text-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
            eaque inventore voluptatum rem consectetur quae magni optio quis
            incidunt?
          </p>
          <button className="uppercase text-gray-100 bg-red-600 py-3 px-10 cursor-pointer font-bold rounded-lg hover:bg-black dark:hover:bg-slate-800 border-none outline-none my-4">
            view more
          </button>
        </div>
      </div>
      {/* {Third Hero Section} */}
      <div className="bg-red-100 dark:bg-slate-800 rounded-2xl mx-12 py-12 my-10">
        <div className="flex lg:justify-center lg:flex-row flex-col items-center px-12 gap-12">
          <div data-aos="zoom-in-up" data-aos-duration="2000">
            <h3 className="text-red-600 text-md uppercase dark:text-white">
              popular areas
            </h3>
            <h2 className="lg:text-4xl text-2xl font-bold dark:text-white">
              Explore most popular areas
            </h2>
          </div>
          <div
            className="flex lg:flex-row flex-col gap-6"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="lg:w-64 lg:h-80 w-full rounded-2xl"
              src={area1}
              alt="area-image"
            />
            <img
              className="lg:w-64 lg:h-80 w-full rounded-2xl"
              src={area2}
              alt="area-image"
            />
            <img
              className="lg:w-64 lg:h-80 w-full rounded-2xl"
              src={area3}
              alt="area-image"
            />
          </div>
        </div>
        {/* {Area Section} */}
        <div className="flex justify-around py-14">
          <div
            className="flex lg:flex-row flex-col items-center lg:gap-6 gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div>
              <h2 className="lg:text-7xl text-4xl font-bold dark:text-gray-100">
                5k
              </h2>
            </div>
            <div>
              <h4 className="text-gray-600 dark:text-gray-100 lg:text-xl text-md uppercase">
                Active<br></br> listings
              </h4>
            </div>
          </div>
          <div
            className="flex lg:flex-row flex-col items-center lg:gap-6 gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div>
              <h2 className="lg:text-7xl text-4xl font-bold dark:text-gray-100">
                9k
              </h2>
            </div>
            <div>
              <h4 className="text-gray-600 dark:text-gray-100 lg:text-xl text-md uppercase">
                solid<br></br> listings
              </h4>
            </div>
          </div>
          <div
            className="flex lg:flex-row flex-col items-center lg:gap-6 gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div>
              <h2 className="lg:text-7xl text-4xl font-bold dark:text-gray-100">
                6k
              </h2>
            </div>
            <div>
              <h4 className="text-gray-600 dark:text-gray-100 lg:text-xl text-md uppercase">
                clients<br></br>we've served
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
