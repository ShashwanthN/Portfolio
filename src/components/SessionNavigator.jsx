import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Project from "../assets/image.png";
import DRDO from "../assets/DRDO.png";
import Me from "../assets/me.jpg";

const GridItem = ({
  label,
  path,
  color,
  style,
  bgColor,
  image,
  hoveredIndex,
  index,
  handleMouseEnter,
  handleMouseLeave,
  title,
  content,
  imageWidth,
  anyDesigns,
  ascii,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    navigate(path);
  };
  

  return (
    <div
      className={`col-span-1 w-full h-full transform transition-all duration-300 ease-in-out flex border-b relative ${bgColor}`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`absolute pl-2 p-1 bottom-0 w-full bg-white border-t border-black text-sm z-10 font-light font-mono ${style}`}
      >
        {label}
      </div>
      <div
        className={`absolute transform transition-all duration-700 ease-out ${
          hoveredIndex === index
            ? "translate-x-0 opacity-100"
            : "-translate-x-8 opacity-0"
        } self-start w-full h-full flex items-center justify-center`}
      >
        {image && (
          <img
            src={image}
            alt={label}
            className={`transition-all duration-700 ease-out ${color}`}
            style={{
              width: imageWidth,
              objectFit: "cover",
              filter:
                hoveredIndex === index
                  ? "blur(0px) grayscale(0)"
                  : "blur(20px) grayscale(100%)",
              opacity: hoveredIndex === index ? 1 : 0,
              transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
            }}
          />
        )}
      </div>
      {hoveredIndex !== index && (
        <div
          className={`absolute my-10 h-full w-full p-4 z-20 transition-all duration-700 ease-out transform opacity-100 translate-y-0 ${color} bg-gray-800`}
        >
          <h3 className="text-5xl font-mono font-light">{title}</h3>
          <p className="font-sans text-gray-200 mt-4 text-sm">{content}</p>
          <pre
            className={`text-xs absolute right-0 bottom-0 font-bold font-mono text-accent z-0 ${anyDesigns}`}
          >
            {ascii}
          </pre>
        </div>
      )}
    </div>
  );
};

const SessionNavigator = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const gridItems = [
    {
      label: "Projects",
      title: "What I do?",
      content: "Check out some cool stuff I built.",
      path: "/projects",
      color: "text-white right-0 left-0 top-0 bottom-0",
      style: "text-black",
      bgColor: "bg-secondary border-r",
      image: Project,
      imageWidth: "100%",
      anyDesigns: "bottom-16",
      ascii: `
                           ______                     
 _________        .-----"""      """-----.              
:______.-':      :  .------------------.  :             
| ______  |      | :                    : |             
|:______B:|      | |  Loading Projects: | |             
|:______B:|      | |                    | |             
|:______B:|      | |                    | |             
|         |      | |  Click here.       | |             
|:_____:  |      | |                    | |             
|    ==   |      | :                    : |             
|       O |      :  '------------------'  :             
|       o |      :'-----...______...-----'              
|       o |-._.-i____./'            '\._              
|'-.____o_|   '-.     '-...______...-'  \`-._          
:_________:      \`.______________________     \`-.___.-. 
                 .'.eeeeeeeeeeeeeeeeeeee.'.       :___:
    fsc        .'.eeeeeeeeeeeeeeeeeeeeeeee.'.         
              :______________________________:
      `,
    },
    {
      label: "Experience",
      title: "My Journey",
      content: "Explore my professional experience.",
      path: "/experience",
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white text-black",
      image: DRDO,
      imageWidth: "50%",
      anyDesigns: "bottom-16 left-96",
      ascii: `                                    
   ______
  /(    )\\
  \\ \\  / /
   \\/[]\\/
     /\\
    |  |
    |  |
    |  |
    |  |
    |  |
    \\  / 
     \\/`,
    },
    {
      label: "Know Me",
      title: "What am I like?",
      content: "Learn more about me.",
      path: "/KnowMe",
      color: "text-black object-contain h-full max-w-full",
      style: "text-black",
      bgColor: "bg-white border-r",
      image: Me,
      imageWidth: "100%",
      anyDesigns: "bottom-16 ",
      ascii: `
   |\\/\\/\\/|  
   |      |  
   |      |  
   | (o)(o)  
   C      _) 
    | ,___|  
    |   /    
   /____\\    
  /      \\
  `,
    },
    {
      label: "Skills",
      title: "My Skills",
      content: "Discover the skills I've acquired.",
      path: "/skills",
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white border-r",
      image: "",
      ascii: "",
    },
    {
      label: "Contact",
      title: "Get in Touch",
      content: "Let's connect! Reach out to me here.",
      path: "/contact",
      color: "text-black",
      style: "text-black",
      bgColor: "bg-white",
      image: "",
      ascii: "",
    },
  ];

  return (
    <div className="grid grid-rows-5 border-black min-h-screen">
      <div className="row-span-3 grid grid-cols-2 w-full h-full">
        {gridItems.slice(0, 2).map((item, index) => (
          <GridItem
            key={index}
            index={index}
            {...item}
            hoveredIndex={hoveredIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      <div className="row-span-2 grid grid-cols-3 w-full h-full">
        {gridItems.slice(2, 5).map((item, index) => (
          <GridItem
            key={index + 2}
            index={index + 2}
            {...item}
            hoveredIndex={hoveredIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default SessionNavigator;
