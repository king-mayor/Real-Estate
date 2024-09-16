import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      element.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      element.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="">
      {theme == "dark" ? (
        <FaMoon
          className="text-2xl cursor-pointer text-yellow-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : (
        <FaRegSun
          className="text-2xl cursor-pointer text-yellow-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </div>
  );
};

export default DarkMode;
