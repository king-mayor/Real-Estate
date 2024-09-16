import React from "react";
import Clients from "./Clients";
import Contact from "./Contact";

import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Properties from "./Properties";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-gray-100 overflow-x-hidden dark:bg-black">
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
