import React, { useState } from "react";
import { User, Briefcase, LayoutGrid, Award, Mail, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
const SessionNavigator = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const gridItems = [
    {
      label: "Projects",
      title: "What I did?",
      content: "Check out some cool stuff I built.",
      path: "/projects", 
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white border-r",
    },
    {
      label: "Experience",
      title: "My Journey",
      content: "Explore my professional experience.",
      path: "/experience", 
      color: "text-white",
      style: "text-black",
      bgColor: "bg-secondary text-black",
    },
    {
      label: "Know Me",
      title: "What am I like?",
      content: "Dive into the person I am",
      path: "/KnowMe", 
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white border-r",
    },
    {
      label: "Skills",
      title: "My Skills",
      content: "Discover the skills I've acquired.",
      path: "/skills",
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white border-r",
    },
    {
      label: "Contact",
      title: "Get in Touch",
      content: "Let's connect! Reach out to me here.",
      path: "/contact", 
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white",
    },
  ];
  const handleItemClick = (path) => {
    navigate(path); 
  };
  return (
    <div className="grid grid-rows-5 border-black min-h-screen">
      <div className="row-span-3 grid grid-cols-2 w-full h-full">
        {gridItems.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`col-span-1 w-full h-full flex border-b relative ${item.bgColor}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick(item.path)}
          >
            <div className={`absolute pl-2 p-1 bottom-0 w-full bg-white border-t border-black text-sm z-10 font-light font-mono ${item.style}`}>
              {item.label}
            </div>
            <div className={`ml-auto ${item.color} self-start p-4`}>
              {item.image}
            </div>
            {hoveredIndex === index && (
              <div
                className={`absolute top-0 left-0 w-full p-4 z-20 transition-all duration-500 transform opacity-100 translate-y-0 ${item.color} bg-gray-800`}
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="row-span-2 grid grid-cols-3 w-full h-full">
        {gridItems.slice(2, 5).map((item, index) => (
          <div
            key={index}
            className={`col-span-1 w-full h-full flex border-b relative ${item.bgColor}`}
            onMouseEnter={() => handleMouseEnter(index + 2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick(item.path)} 
          >
            <div className={`absolute pl-2 p-1 bottom-0 w-full border-t bg-white text-sm z-10 font-light font-mono ${item.color}`}>
              {item.label}
            </div>
            <div className={`ml-auto ${item.color} self-start p-4`}>
              {item.image}
            </div>
            {hoveredIndex === index + 2 && (
              <div
                className={`absolute top-0 left-0 w-full p-4 z-20 transition-all duration-500 transform opacity-100 translate-y-0 ${item.color} bg-gray-800`}
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionNavigator;
