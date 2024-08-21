import React, { useState, useEffect } from "react";

const NormalNavbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-40 top-0 w-full md:w-4/5 mx-auto grid grid-cols-6  transition-all transform duration-500 items-center  ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="navbar-item z-50 border-b border-t border-black h-20 col-span-2 bg-blue-500 text-black flex items-center justify-center transition-opacity duration-500"></div>
      <div className="navbar-item w-full h-20 bg-accent border-b border-t text-black border-l border-black flex items-center justify-center transition-opacity duration-500">
      Projects
      </div>
      <div className="navbar-item w-full h-20 bg-accent border-b border-t text-black flex border-l border-black items-center justify-center transition-opacity duration-500">
      Know Me
      </div>
      <div className="navbar-item w-full h-20 bg-accent border-b border-t text-black border-l border-black flex items-center justify-center transition-opacity duration-500">
      Socials
      </div>
      <div className="navbar-item w-full h-20 bg-accent border-b border-r border-t border-l border-black text-black flex items-center justify-center transition-opacity duration-500">
        Others
      </div>
    </div>
  );
};

export default NormalNavbar;
