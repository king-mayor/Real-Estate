import React from "react";

const Contact = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-10 bg-red-100 dark:bg-slate-800 py-20">
      <div
        className="bg-white dark:bg-black w-[400px pl-1] p-10 rounded-2xl"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <div className="flex flex-col justify-center items-center"></div>
        <div>
          <h2 className="text-2xl font-semibold py-4 dark:text-gray-100">
            Send us a message today
          </h2>
        </div>
        <div>
          <input
            className="w-full my-2 rounded-2xl border-2 border-gray-200 pl-1 py-4"
            type="text"
            placeholder="Enter your full name here"
          />
          <input
            className="w-full my-2 rounded-2xl border-2 border-gray-200  pl-1 py-4"
            type="email"
            placeholder="Enter your valid email"
          />
        </div>
        <div>
          <input
            className="w-full my-2 rounded-2xl border-2 border-gray-200  pl-1 py-4"
            type="number"
          />
        </div>
        <div>
          <textarea
            className="w-full h-32 my-2 rounded-2xl border-2 border-gray-200  pl-1"
            placeholder="Enter your message here..."
          />
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-red-600 border-none outline-none uppercase font-bold text-lg py-2 hover:bg-black dark:hover:bg-red-700 rounded-2xl w-full">
            send email
          </button>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full px-10"
        data-aos="flip-right"
        data-aos-duration="2000"
      >
        <h2 className="text-red-600 text-lg py-4">REACH US</h2>
        <h4 className="text-black lg:text-4xl text-2xl font-bold dark:text-gray-100">
          Get in touch with us today and our team will assist you
        </h4>
        <p className="text-gray-600 lg:text-xl text-lg py-4 dark:text-gray-100">
          Our experts and developers would love to contribute their expertise
          and insights and help you today. Contact us to help you plan your next
          transaction, either buying or selling a home.
        </p>
        <button className="text-white bg-red-600 cursor-pointer uppercase text-xl font-bold py-2 px-8 rounded-2xl hover:bg-black dark:hover:bg-red-700">
          contact us
        </button>
      </div>
    </div>
  );
};

export default Contact;
