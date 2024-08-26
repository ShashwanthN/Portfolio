import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";

const ProjectDetailedView = ({
  project,
  setSelectedProject,
  setIsSelected,
  setBackTo,
}) => {
  return (
    <motion.div
      className="z-50 w-full mx-auto flex flex-col h-[200vh]"
      style={{
        backgroundColor: project.colors.background,
        color: project.colors.text,
      }}
      layoutId={`project-${project.id}`}
      initial={{ borderRadius: "1rem" }}
      animate={{ borderRadius: "0rem" }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => {
          setSelectedProject(null);
          setIsSelected(false);
          setBackTo(true);
        }}
        className="border w-fit px-4 m-4 rounded-full py-1 hover:bg-darkBorder border-darkBorder text-lg"
        style={{ color: project.colors.text }}
      >
        <div className="flex">
          <RiArrowGoBackLine size={16} className="my-auto mr-2 text-center" />
          <div className="font-mono text-lg">Back to Projects</div>
        </div>
      </button>

      <div className="w-full text-white">
        <div className="flex p-10 flex-col space-y-12">
          <div className="border border-accent p-2 mb-10 bg-background  ml-auto shadow-2xl">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-gray-700 via-blue-gray-800 to-black opacity-80"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="h-auto object-contain relative z-10"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="space-y-4">
              <motion.h2
                className="text-8xl mb-4 font-extrabold tracking-tighter"
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ color: project.colors.primary }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                className="text-2xl font-medium"
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ color: project.colors.text }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap space-x-2">
                {project.technologies.map((tech) => (
                  <motion.li
                    key={tech.name}
                    className="px-3 py-1 bg-secondary text-xs uppercase tracking-widest border border-white"
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={
                      {
                        // backgroundColor: tech.color,
                        // color: project.colors.text,
                      }
                    }
                  >
                    {tech.name}
                  </motion.li>
                ))}
              </div>
            </div>
            <div className="flex items-end h-16 w-72 mt-4">
              <div className="flex-1 h-full flex ">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-xl border-2 border-primary bg-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex-1"
                  style={{ color: project.colors.background }}
                >
                  Live Demo
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
              <div className="flex-1 h-full flex">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-xl border-2 border-accent bg-accent hover:bg-transparent hover:text-accent transition-all duration-300 flex-1"
                  style={{ color: project.colors.background }}
                >
                  GitHub
                  <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t border-darkBorder pt-10 text-right"></div>
        <div className="flex p-10 flex-col space-y-12">
          {project.content.map((item, index) => {
            switch (item.type) {
              case "image":
                return (
                  <motion.div key={index} className={item.styles.container}>
                    <motion.img
                      src={item.src}
                      alt={item.alt || ""}
                      className={item.styles.image}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                );
              case "video":
                return (
                  <motion.div key={index} className={item.styles.container}>
                    <motion.video
                      src={item.src}
                      controls
                      className={item.styles.video}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                );
              case "text":
                return (
                  <motion.div key={index} className={item.styles.container}>
                    <motion.p
                      className={item.styles.text}
                      initial={{ x: -150, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      style={{ color: project.colors.text }}
                    >
                      {item.text}
                    </motion.p>
                  </motion.div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailedView;
