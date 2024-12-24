import React, { useState } from "react";
import FloatingCircles from "./FloatingCircles";
import MacWindow from "./MacWindowForSummary";
import verified from "../assets/file.png";
import News from "./News";
import { RiAddLargeFill } from "react-icons/ri";
import { PiPaintBrushBroadLight, PiCursorLight } from "react-icons/pi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { MdOutlineAccessibility, MdSpeed } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const Intro = () => {
  const [starPositions, setStarPositions] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [isBottom, setIsBottom] = useState(false);

  const handleStarPositions = (positions) => {
    setStarPositions(positions);
  };

  const options = [
    {
      id: 1,
      label: "Scalability",
      hoverText: "Performance",
      color: "border-[#0582ff]",
      bgColor: "bg-[#0582ff]",
      icon: <RiAddLargeFill />,
      hoverIcon: <MdSpeed />,
    },
    {
      id: 2,
      label: "Beautiful Interfaces",
      hoverText: "Stunning UI for enhanced user experience",
      color: "border-[#ffb202]",
      bgColor: "bg-[#ffb202]",
      icon: <PiPaintBrushBroadLight />,
      hoverIcon: <PiCursorLight />,
    },
    {
      id: 3,
      label: "Security",
      hoverText: "Robust protection against cyber threats",
      color: "border-[#00be43]",
      bgColor: "bg-[#00be43]",
      icon: <AiOutlineSecurityScan />,
      hoverIcon: <MdOutlineAccessibility />,
    },
    {
      id: 4,
      label: "Maintainability",
      hoverText: "Clean and reusable",
      color: "border-accent",
      bgColor: "bg-accent",
      icon: <IoAnalyticsOutline />,
      hoverIcon: <FiCpu />,
    },
  ];

  const handleScroll = (bottom) => {
    setIsBottom(bottom);
  };

  return (
    <div>
     
    <div className="min-h-screen flex flex-col relative border-t border-black">
      <FloatingCircles startPositions={starPositions} />

      <div className="flex flex-col h-screen md:flex-row">
        <div className="md:w-1/2 border-r border-black flex flex-col">
          <div className="h-64 no-scrollbar relative">
            <News onScroll={handleScroll} />
            {!isBottom && (
              <div className="absolute bottom-0 left-0 w-full h-12 flex justify-center items-center bg-gradient-to-t from-primary to-transparent">
                <FaArrowDown className="text-accent animate-bounce" size={18} />
              </div>
            )}
             {isBottom && (
              <div className="absolute top-0 left-0 w-full h-12 flex justify-center items-center bg-gradient-to-b from-primary to-transparent">
                <FaArrowUp className="text-accent animate-bounce" size={18} />
              </div>
            )}
            
          </div>

          <div className="flex flex-col border-t h-full border-b border-r border-black text-primary justify-center bg-secondary items-start p-5 relative h-full">
            <div className="text-3xl mb-2 font-medium font-mono">
              Shashwanth
            </div>
            <div className="text-5xl font-thin bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Full-Stack Engineering
            </div>
            <div className="font-mono">3rd Year Student</div>
            <pre className="text-xs absolute right-0 bottom-0 font-bold text-white z-0">
              {
                "       _                        \n       \\`*-.                    \n        )  _`-.                 \n       .  : `. .                \n       : _   '  \\               \n       ; *` _.   `*-._          \n       `-.-'          `-.       \n         ;       `       `.     \n         :.       .        \\    \n         . \\  .   :   .-'   .   \n         '  `+.;  ;  '      :   \n         :  '  |    ;       ;-. \n         ; '   : :`-:     _.`* ;\n[bug] .*' /  .*' ; .*`- +'  `*' \n      `*-*   `*-*  `*-*' "
              }
            </pre>
          </div>

          <div className="flex-1 bg">
            <div className="max-w-full h-full mx-auto">
              {options.map((option) => (
                <div
                  key={option.id}
                  onMouseEnter={() => setHoveredId(option.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative flex items-center p-4 h-20 overflow-hidden border-b border-black transition-all duration-300"
                >
                  <div
                    className={`w-2 h-full ${option.bgColor} absolute left-0 top-0`}
                  />
                  <div
                    className={`absolute inset-0 transform ${
                      hoveredId === option.id
                        ? `translate-x-0 ${option.bgColor} transition-transform duration-300 ease-out`
                        : "-translate-x-full"
                    }`}
                  />
                  <div className="relative z-10 flex font-thin font-mono items-center pl-6">
                    <span className="text-2xl mr-4">
                      {hoveredId === option.id ? option.hoverIcon : option.icon}
                    </span>
                    <span className="text-xl">
                      {hoveredId === option.id
                        ? option.hoverText
                        : option.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-grid flex flex-col border-black border-b justify-center relative">
          <div className="absolute top-0 right-0 text-end w-3/4 opacity-40 font-thin text-3xl px-4 py-2 bg-gray-800 text-black">
            It's not always about making things "clean"—sometimes, the magic
            happens when you let messy corners of creativity in.   
              ;)
          </div>
          <MacWindow />
          <div className="absolute bottom-0 right-0 transform duration-500 w-32 md:w-48 hover:scale-105">
            <img src={verified} alt="verified full-stack developer!" />
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
  );
};

export default Intro;
