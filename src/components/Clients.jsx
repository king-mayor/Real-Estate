import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
const Clients = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-red-600 text-lg">OUR CLIENTS</h2>
        <h3 className="lg:text-4xl text-2xl font-bold dark:text-gray-100">
          What are our clients
        </h3>
        <h3 className="lg:text-4xl text-2xl font-bold dark:text-gray-100">
          saying about us
        </h3>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-6 mx-10">
        <div
          className=" bg-white dark:bg-slate-800 p-10 rounded-2xl cursor-pointer hover:bg-pink-100 lg:w-[300px] w-full"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex items-center gap-6">
            <div>
              <img className="w-20 h-20" src={client1} alt="client" />
            </div>
            <div>
              <h2 className="text-black dark:text-gray-100 font-semibold text-lg">
                Dana Gilmore
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-100">
                Excellent team!
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 py-6 dark:text-gray-100">
            The WP Estate team did an outstanding job helping me buy my first
            home. The high level of service and dedication is top-notch.
          </p>
          <div className="flex gap-2">
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
          </div>
        </div>
        <div
          className=" bg-white dark:bg-slate-800 p-10 rounded-2xl cursor-pointer hover:bg-pink-100 lg:w-[300px] w-full"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex items-center gap-6">
            <div>
              <img className="w-20 h-20" src={client2} alt="client" />
            </div>
            <div>
              <h2 className="text-black font-semibold text-lg dark:text-gray-100">
                Ana Anderson
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-100">
                Very good work
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 py-6 dark:text-gray-100">
            The WP Estate team did an outstanding job helping me buy my first
            home. The high level of service and dedication is top-notch.
          </p>
          <div className="flex gap-2">
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
          </div>
        </div>
        <div
          className=" bg-white dark:bg-slate-800 p-10 rounded-2xl cursor-pointer hover:bg-pink-100 lg:w-[300px] w-full"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="flex items-center gap-6">
            <div>
              <img className="w-20 h-20" src={client3} alt="client" />
            </div>
            <div>
              <h2 className="text-black font-semibold text-l dark:text-gray-100">
                Albert adame
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-100">
                Very well
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 py-6 darK:text-gray-100">
            The WP Estate team did an outstanding job helping me buy my first
            home. The high level of service and dedication is top-notch.
          </p>
          <div className="flex gap-2">
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
          </div>
        </div>
      </div>
      {/* {Second Row} */}
      <div className="flex lg:flex-row flex-col items-center justify-center gap-6 py-6 mx-10">
        <div
          className=" bg-white dark:bg-slate-800 p-10 rounded-2xl cursor-pointer hover:bg-pink-100 lg:w-[300px] w-full"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex items-center gap-6">
            <div>
              <img className="w-20 h-20" src={client4} alt="client" />
            </div>
            <div>
              <h2 className="text-black font-semibold text-lg dark:text-gray-100">
                Dana Gilmore
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-100">
                Excellent team!
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 py-6 dark:text-gray-100">
            The WP Estate team did an outstanding job helping me buy my first
            home. The high level of service and dedication is top-notch.
          </p>
          <div className="flex gap-2">
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
          </div>
        </div>
        <div
          className=" bg-white dark:bg-slate-800 p-10 rounded-2xl cursor-pointer hover:bg-pink-100 lg:w-[300px] w-full"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex items-center gap-6">
            <div>
              <img className="w-20 h-20" src={client5} alt="client" />
            </div>
            <div>
              <h2 className="text-black font-semibold text-lg dark:text-gray-100">
                Alex Gilmore
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-100">
                Excellent team!
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 py-6 dark:text-gray-100">
            The WP Estate team did an outstanding job helping me buy my first
            home. The high level of service and dedication is top-notch.
          </p>
          <div className="flex gap-2">
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
          </div>
        </div>
        <div
          className=" bg-white dark:bg-slate-800 p-10 rounded-2xl cursor-pointer hover:bg-pink-100 lg:w-[300px] w-full"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="flex items-center gap-6">
            <div>
              <img className="w-20 h-20" src={client6} alt="client" />
            </div>
            <div>
              <h2 className="text-black font-semibold text-lg dark:text-gray-100">
                Sivay Ashbi
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-100">
                Excellent team!
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 py-6 dark:text-gray-100">
            The WP Estate team did an outstanding job helping me buy my first
            home. The high level of service and dedication is top-notch.
          </p>
          <div className="flex gap-2">
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
