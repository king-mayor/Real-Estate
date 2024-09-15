import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div className="fixed right-5 bottom-5" onClick={handleScroll}>
      {scrollTop && (
        <FaArrowCircleUp className="text-red-600 text-4xl font-bold cursor-pointer" />
      )}
    </div>
  );
};

export default ScrollToTop;
