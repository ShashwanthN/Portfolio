import React, { useState } from "react";
import {
  SiSpringboot,
  SiReact,
  SiMysql,
  SiJsonwebtokens,
  SiPostman,
  SiGit,
} from "react-icons/si";

const TechStack = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const techStack = [
    {
      id: 1,
      icon: <SiSpringboot size={70} />,
      name: "Spring Boot",
      color: "hover:bg-green-500",
    },
    {
      id: 2,
      icon: <SiJsonwebtokens size={70} />,
      name: "JWT",
      color: "hover:bg-pink-500",
    },
    {
      id: 4,
      icon: <SiReact size={70} />,
      name: "React",
      color: "hover:bg-[#58c4dc]",
    },
    {
      id: 6,
      icon: <SiPostman size={70} />,
      name: "Postman",
      color: "hover:bg-[#ff6c37]",
    },
    {
      id: 7,
      icon: <SiMysql size={70} />,
      name: "MySQL",
      color: "hover:bg-blue-700",
    },
    {
      id: 8,
      icon: <SiGit size={70} />,
      name: "Git",
      color: "hover:bg-red-500",
    },
  ];

  return (
    <div className="w-full min-h-screen mx-auto py-16 relative bg-gray-3">
      
      <div className="flex h-full space-x-28 mx-8">
        <h2 className="text-5xl w-full text-secondary font-bold mb-12 font-classic">
          Tech That’s Got Your (and my) <br />
          Back, Front, and Everything In Between
        </h2>
        <div className="text-md font-mono text-justify w-full">
          Spring, React, and MySQL are a perfect blend for building modern web
          apps. Spring gives a strong, reliable backend, React makes my user
          interfaces smooth and responsive, and MySQL keeps data organized and
          accessible. Together, they make development not just efficient, but a
          pleasure for me.
        </div>
      </div>
     
      <div className="absolute bottom-0 left-0 right-0">
      <div className="text-end pr-2 text-sm opacity-40">
          * Open to adapting my stack based on job needs.
        </div>
        <div className="flex border-t h-44 font-mono border-b w-full border-black divide-secondary divide-x bg- text-secondary justify-between items-center">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className={`relative flex flex-col items-center p-4 w-full h-full justify-center transition-all duration-300 transform group ${tech.color}`}
              onMouseEnter={() => setHoveredId(tech.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="z-10 flex flex-col items-center">
                <div className="mb-2 flex items-center justify-center p-2 rounded-full">
                  {tech.icon}
                </div>
              </div>
              {hoveredId === tech.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray text-white text-sm rounded-md py-1 px-2 whitespace-nowrap">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default TechStack;
