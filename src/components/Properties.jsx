import React from "react";
import { IoVideocam } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { LuConstruction } from "react-icons/lu";
import { FaBed } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Properties = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center py-10"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <h2 className="text-red-600 text-lg">PROPERTIES</h2>
        <h3 className="text-3xl font-bold text-black">Explore the latest</h3>
        <h3 className="text-3xl font-bold text-black">properties available</h3>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center  gap-8 py-8">
        <div className="1st" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="bg-[url('../src/assets/prop1.webp')] h-72 w-[300px] bg-cover bg-no-repeat bg-center relative rounded-t-2xl">
            <div className="flex justify-between px-2 py-6">
              <div>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Featured
                </button>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Sales
                </button>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Active
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 left-2">
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoLocation color="white" className="text-md" />
                  <h3 className="text-md text-white">6Downtown, Las Vegas</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <IoVideocam color="white" className="text-md" />
                  </div>
                  <div>
                    <FaCamera color="white" className="text-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* white background section */}
          <div className="w-[300px] bg-white rounded-b-2xl p-6">
            <div>
              <h2 className="text-xl font-bold py-2">
                Villa with Amazing View
              </h2>
              <h2 className="text-3xl text-red-600 font-bold">$ 213.23</h2>
              <p className="text-md py-2">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
            </div>
            <div>
              <div className="flex gap-6 py-2">
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <LuConstruction />
                  </div>
                  <div className="text-md">3</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <FaBed />
                  </div>
                  <div className="text-md">4</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <HiMiniSquares2X2 />
                  </div>
                  <div className="text-md">250 sq ft</div>
                </div>
              </div>
            </div>
            {/* {white footer section} */}
            {/* ......... */}
            <div className="flex gap-6 mt-2 pb-4 border-t-2 py-4">
              <div className="flex items-center gap-2">
                <div className="text-xl text-red-600 cursor-pointer">
                  <FaUserCircle />
                </div>
                <div>
                  <p>Alice Adams</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaShareAlt />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaHeart />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* ........ */}
          </div>
        </div>
        <div className="2nd" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="bg-[url('../src/assets/prop2.webp')] h-72 w-[300px] bg-cover bg-no-repeat bg-center relative rounded-t-2xl">
            <div className="flex justify-between px-2 py-6">
              <div>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Featured
                </button>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Sales
                </button>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Active
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 left-2">
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoLocation color="white" className="text-md" />
                  <h3 className="text-md text-white">
                    Meadows Village, Las Vegas
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <IoVideocam color="white" className="text-md" />
                  </div>
                  <div>
                    <FaCamera color="white" className="text-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* white background section */}
          <div className="w-[300px] bg-white rounded-b-2xl p-6">
            <div>
              <h2 className="text-xl font-bold py-2">Townhouse for Sale</h2>
              <h2 className="text-3xl text-red-600 font-bold">$ 345.18</h2>
              <p className="text-md py-2">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
            </div>
            <div>
              <div className="flex gap-6 py-2">
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <LuConstruction />
                  </div>
                  <div className="text-md">3</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <FaBed />
                  </div>
                  <div className="text-md">4</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <HiMiniSquares2X2 />
                  </div>
                  <div className="text-md">450 sq ft</div>
                </div>
              </div>
            </div>
            {/* {white footer section} */}
            {/* ......... */}
            <div className="flex gap-6 mt-2 pb-4 border-t-2 py-4">
              <div className="flex items-center gap-2">
                <div className="text-xl text-red-600 cursor-pointer">
                  <FaUserCircle />
                </div>
                <div>
                  <p>Drew Alice</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaShareAlt />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaHeart />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* ........ */}
          </div>
        </div>
        <div className="3rd" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="bg-[url('../src/assets/prop3.webp')] h-72 w-[300px] bg-cover bg-no-repeat bg-center relative rounded-t-2xl">
            <div className="flex justify-between px-2 py-6">
              <div>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Featured
                </button>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Sales
                </button>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Active
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 left-2">
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoLocation color="white" className="text-md" />
                  <h3 className="text-md text-white">49 DC townhall alex</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <IoVideocam color="white" className="text-md" />
                  </div>
                  <div>
                    <FaCamera color="white" className="text-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* white background section */}
          <div className="w-[300px] bg-white rounded-b-2xl p-6">
            <div>
              <h2 className="text-xl font-bold py-2">
                Duplex sea facing for rent
              </h2>
              <h2 className="text-3xl text-red-600 font-bold">$ 652.18</h2>
              <p className="text-md py-2">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
            </div>
            <div>
              <div className="flex gap-6 py-2">
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <LuConstruction />
                  </div>
                  <div className="text-md">3</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <FaBed />
                  </div>
                  <div className="text-md">4</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <HiMiniSquares2X2 />
                  </div>
                  <div className="text-md">129 sq ft</div>
                </div>
              </div>
            </div>
            {/* {white footer section} */}
            {/* ......... */}
            <div className="flex gap-6 mt-2 pb-4 border-t-2 py-4">
              <div className="flex items-center gap-2">
                <div className="text-xl text-red-600 cursor-pointer">
                  <FaUserCircle />
                </div>
                <div>
                  <p>Fursi Bam</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaShareAlt />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaHeart />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* ........ */}
          </div>
        </div>
      </div>

      {/* {Second Row of properties} */}
      <div className="flex lg:flex-row flex-col items-center justify-center  gap-8 py-8">
        <div className="1st" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="bg-[url('../src/assets/prop4.webp')] h-72 w-[300px] bg-cover bg-no-repeat bg-center relative rounded-t-2xl">
            <div className="flex justify-between px-2 py-6">
              <div>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Featured
                </button>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Sales
                </button>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Active
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 left-2">
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoLocation color="white" className="text-md" />
                  <h3 className="text-md text-white">
                    Underground street 20 texax
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <IoVideocam color="white" className="text-md" />
                  </div>
                  <div>
                    <FaCamera color="white" className="text-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* white background section */}
          <div className="w-[300px] bg-white rounded-b-2xl p-6">
            <div>
              <h2 className="text-xl font-bold py-2">Villa with Side View</h2>
              <h2 className="text-3xl text-red-600 font-bold">$ 876.13</h2>
              <p className="text-md py-2">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
            </div>
            <div>
              <div className="flex gap-6 py-2">
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <LuConstruction />
                  </div>
                  <div className="text-md">3</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <FaBed />
                  </div>
                  <div className="text-md">4</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <HiMiniSquares2X2 />
                  </div>
                  <div className="text-md">453 sq ft</div>
                </div>
              </div>
            </div>
            {/* {white footer section} */}
            {/* ......... */}
            <div className="flex gap-6 mt-2 pb-4 border-t-2 py-4">
              <div className="flex items-center gap-2">
                <div className="text-xl text-red-600 cursor-pointer">
                  <FaUserCircle />
                </div>
                <div>
                  <p>Neon Adams</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaShareAlt />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaHeart />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* ........ */}
          </div>
        </div>
        <div className="2nd" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="bg-[url('../src/assets/prop5.webp')] h-72 w-[300px] bg-cover bg-no-repeat bg-center relative rounded-t-2xl">
            <div className="flex justify-between px-2 py-6">
              <div>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Featured
                </button>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Sales
                </button>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Active
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 left-2">
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoLocation color="white" className="text-md" />
                  <h3 className="text-md text-white">Rubari London Hills</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <IoVideocam color="white" className="text-md" />
                  </div>
                  <div>
                    <FaCamera color="white" className="text-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* white background section */}
          <div className="w-[300px] bg-white rounded-b-2xl p-6">
            <div>
              <h2 className="text-xl font-bold py-2">Awesome villa for rent</h2>
              <h2 className="text-3xl text-red-600 font-bold">$ 341.83</h2>
              <p className="text-md py-2">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
            </div>
            <div>
              <div className="flex gap-6 py-2">
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <LuConstruction />
                  </div>
                  <div className="text-md">3</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <FaBed />
                  </div>
                  <div className="text-md">4</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <HiMiniSquares2X2 />
                  </div>
                  <div className="text-md">320 sq ft</div>
                </div>
              </div>
            </div>
            {/* {white footer section} */}
            {/* ......... */}
            <div className="flex gap-6 mt-2 pb-4 border-t-2 py-4">
              <div className="flex items-center gap-2">
                <div className="text-xl text-red-600 cursor-pointer">
                  <FaUserCircle />
                </div>
                <div>
                  <p>Firari Alice</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaShareAlt />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaHeart />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* ........ */}
          </div>
        </div>
        <div className="3rd" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="bg-[url('../src/assets/prop6.webp')] h-72 w-[300px] bg-cover bg-no-repeat bg-center relative rounded-t-2xl">
            <div className="flex justify-between px-2 py-6">
              <div>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Featured
                </button>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Sales
                </button>
                <button className="text-gray-100 bg-red-600 px-4 py-1 cursor-pointer border-none outline-none rounded-2xl capitalize hover:bg-black">
                  Active
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 left-2">
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoLocation color="white" className="text-md" />
                  <h3 className="text-md text-white">Northean fersh alice</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <IoVideocam color="white" className="text-md" />
                  </div>
                  <div>
                    <FaCamera color="white" className="text-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* white background section */}
          <div className="w-[300px] bg-white rounded-b-2xl p-6">
            <div>
              <h2 className="text-xl font-bold py-2">Street Farm for sale</h2>
              <h2 className="text-3xl text-red-600 font-bold">$ 675.23</h2>
              <p className="text-md py-2">
                Beautiful, updated, ground level Co-op apartment in the
                desirable Bay Terrace neighborhood
              </p>
            </div>
            <div>
              <div className="flex gap-6 py-2">
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <LuConstruction />
                  </div>
                  <div className="text-md">3</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <FaBed />
                  </div>
                  <div className="text-md">4</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-600 font-bold text-2xl">
                    <HiMiniSquares2X2 />
                  </div>
                  <div className="text-md">340 sq ft</div>
                </div>
              </div>
            </div>
            {/* {white footer section} */}
            {/* ......... */}
            <div className="flex gap-6 mt-2 pb-4 border-t-2 py-4">
              <div className="flex items-center gap-2">
                <div className="text-xl text-red-600 cursor-pointer">
                  <FaUserCircle />
                </div>
                <div>
                  <p>Jordan Bram</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaShareAlt />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaHeart />
                </button>
                <button className="border-2 border-gray-400 cursor-pointer text-red-600 p-1 hover:bg-black">
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* ........ */}
          </div>
        </div>
      </div>
      {/* {Read More} */}
      <div className="flex justify-center py-6">
        <button className="text-white bg-red-600 cursor-pointer hover:bg-black border-none outline-none py-4 px-8 rounded-xl uppercase font-semibold">
          read more
        </button>
      </div>
    </div>
  );
};

export default Properties;
