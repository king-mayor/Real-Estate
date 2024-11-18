import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { PacmanLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <PacmanLoader color="black" size={36} />
        </div>
      ) : (
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
