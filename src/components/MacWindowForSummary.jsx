import React, { useRef, useEffect, useState } from "react";

const   MacWindow = () => {
  // const starRefs = useRef([]);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  // useEffect(() => {
  //   const starPositions = starRefs.current.map((starRef) => {
  //     if (starRef) {
  //       const rect = starRef.getBoundingClientRect();
  //       return { left: rect.left, top: rect.top };
  //     }
  //     return null;
  //   });

  //   onStarPositions(starPositions);
  // }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="md:w-[600px] h-[400px] w-full border-2 border-accent bg-black rounded-xl shadow-lg transform rotate-0 md:rotate-[357deg]"
      style={{}}
    >
      <div className="flex items-center justify-between px-3 py-1 border-b-2 border-gray-500 bg-secondary rounded-t-lg">
        <div className="flex items-center py-1 space-x-2">
          <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
          <div className="w-3 h-3 bg-[#febc2e] rounded-full"></div>
          <div className="w-3 h-3 bg-[#26c940] rounded-full"></div>
        </div>
        <span className="text-gray-2 text-sm">Hello</span>
        <div className="w-4"></div>
      </div>
      <div className="h-[92.4%] text-gray-800 flex flex-col bg-gradient-to-b from-gray-200 bg-ruled-paper rounded-lg to-gray-300 shadow-lg">
        <div className="flex items-center justify-between px-4 py-2 bg-yellow-50 shadow-lg">
          <div className="text-sm font-bold font-mono">Notes</div>
          <div className="flex space-x-4">
            <div className="font-mono text-sm text-gray-1100">
              {currentTime}
            </div>
          </div>
        </div>
        <div className="flex-grow pl-6 pr-6 pb-6 rounded-b-lg shadow-inner overflow-auto bg-ruled-paper">
          <p className="mt-2 font-handwriting text-xl leading-[30px]">
            <div className="text-3xl font-bold">Summary</div>
            {/* <div className="flex">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <div
                    key={`star-${i}`}
                    ref={(el) => (starRefs.current[i] = el)}
                    className="w-32 h-32 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 transform rotate-12 shadow-lg"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  ></div>
                ))}
            </div> */}

            <div className="mt-5 text-justify">
              I’m committed to continuous improvement, always enhancing how I
              connect and understand others. My communication skills and empathy
              help me build effective and inclusive teams. I’m focused on
              learning, evolving, and sharpening my technical expertise, eager
              to tackle challenges and find innovative solutions. My fluency in
              English allows me to express ideas with clarity and impact. My
              focus is on growth, ensuring continuous progress for myself and my
              team. I’m committed to continuous improvement, always enhancing
              how I connect and understand others. My communication skills and
              empathy help me build effective and inclusive teams. I’m focused
              on learning, evolving, and sharpening my technical expertise,
              eager to tackle challenges and find innovative solutions. My
              fluency in English allows me to express ideas with clarity and
              impact. My focus is on growth, ensuring continuous progress for
              myself and my team.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MacWindow;
