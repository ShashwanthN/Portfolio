import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import news from "./updates";

const News = ({ onScroll }) => {
    const handleScroll = (e) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      onScroll(bottom);
    };
  return (
    <div className=" relative text-secondary overflow-y-scroll h-full no-scrollbar
    "
    onScroll={handleScroll}>
      <div className="text-2xl pt-2 pl-2 pr-2 font-medium mb-4 justify-between flex items-center">
        <div className="flex">
        <FiAlertCircle className="text-orange-500 mr-2" />
        Updates</div>
        <div className="text-sm font-mono opacity-25"> 
            Last Updated (21/08/2024)
        </div>
      </div>
      <div className="space-y-4 pb-4 pr-4 pl-4 flex flex-col">
        {news.map((item, index) => (
          <div key={index} className="flex items-center space--2">
            <a href={item.link}>
              <div className="text-md font-mono font-light flex">
                <AiOutlineArrowRight
                  size={24}
                  className="text-blue-500 mr-1 space-x-2\"
                />
                {item.title} <span className="text-sm">({item.date})</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
