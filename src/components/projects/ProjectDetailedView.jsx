import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";

const ProjectDetailedView = ({
  project,
  setSelectedProject,
  setIsSelected,
  setBackTo,
}) => {
  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedProject(null);
    setIsSelected(false);
    setBackTo(true);
  };

  return (
    <motion.div
      className="z-50 w-full  mx-auto flex flex-col"
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
        onClick={handleBack}
        className="border w-fit px-4 m-4 rounded-full py-1 hover:bg-darkBorder border-darkBorder text-lg"
        style={{ color: project.colors.text }}
      >
        <div className="flex">
          <RiArrowGoBackLine size={16} className="my-auto mr-2 text-center" />
          <div className="font-mono text-lg">Back to Projects</div>
        </div>
      </button>

      <div className="w-full border-b border-darkBorder text-white">
        <div className="flex p-10 flex-col space-y-12">
          <div className="border border-accent p-2 mb-10 bg-background ml-auto shadow-2xl">
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

          <div className="md:flex  justify-between">
            <div className="space-y-4 ">
              <motion.h2
                className="md:text-8xl text-4xl mb-4 font-extrabold tracking-tighter"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ color: project.colors.primary }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                className="md:text-2xl tracking-wide font-light text-gray-3 md:font-medium"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap space-x-2">
                {project.technologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    className="px-3 py-1 bg-secondary text-xs uppercase tracking-widest border border-white"
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {tech.name}
                  </motion.li>
                ))}
              </div>
            </div>
            <div className="md:flex  items-end md:h-16 space-y-2  md:w-72 md:mt-4 mt-10">
              <div className="flex-1 h-full flex ">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-sm border-2 border-primary bg-primary text-secondary p-2 font-mono font-light hover:bg-transparent hover:text-primary transition-all duration-300 flex-1"
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
                  className="flex items-center p-2 text-secondary hover:text-accent justify-center text-sm font-mono font-light border-2 border-accent bg-accent hover:bg-transparent transition-all duration-300 flex-1"
                >
                  GitHub
                  <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:p-0 md:pt-4 p-4 border-t border-darkBorder bg-zinc-900  justify-between  ">
          {project.content.map((list, index) => (
            <div
              key={index}
              className=" flex flex-col  justify-between md:border-b md:border-t border  border-gray drop-shadow-lg"
            >
              {list.map((item, itemIndex) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true });

                switch (item.type) {
                  case "image":
                    return (
                      <motion.div
                        key={itemIndex}
                        className={item.styles.container}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                      >
                        <div className={item.styles.text}>{item.text}</div>
                        <motion.img
                          src={item.src}
                          alt={item.alt || ""}
                          className={item.styles.image}
                        />
                      </motion.div>
                    );
                  case "video":
                    return (
                      <motion.div
                        key={itemIndex}
                        className={item.styles.container}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.video
                          controls
                          muted
                          src={item.src}
                          className={item.styles.video}
                        />
                      </motion.div>
                    );
                  case "text":
                    return (
                      <motion.div
                        key={itemIndex}
                        className={item.styles.container}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.p className={item.styles.text}>
                          {item.text}
                        </motion.p>
                      </motion.div>
                    );
                  case "carousel":
                    return (
                      <motion.div
                        key={itemIndex}
                        className={`${item.styles.container} halo`}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                      >
                        <div className={`${item.styles.carousel} halo`}>
                          {item.componentC}
                        </div>
                      </motion.div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailedView;
