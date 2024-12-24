import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, handleProjectClick }) => {
  return (
    <motion.div
      key={project.id}
      onClick={() => handleProjectClick(project.id)}
      className={`relative border-t border-darkBorder p-4 cursor-pointer transition-all duration-150 flex flex-col justify-between`} 
      style={{
        backgroundColor: project.colors.background,
        borderColor: project.colors.border,
        color: project.colors.text,
        borderRight: "0.5px solid #3a3a3c",
        borderLeft: "0.5px solid #3a3a3c",
      }}
      layoutId={`project-${project.id}`}
    >
      <div className="relative overflow-hidden h-48 border border-darkBorder mb-2">
        <img
        src={project.imageUrl}
        alt={project.title}
        className="object-cover w-full h-full"
      />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none" />

      {/* Move this content to the bottom */}
      <div className="flex flex-col mt-auto">
        <motion.h2
          className="text-3xl font-bold tracking-widest mt-3 mb-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h2>
        <motion.p
          className="my-2 font-mono text-xs text-gray-3"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.tagline}
        </motion.p>
        {/* <motion.p
          className="mt-1 mb-2 text-base"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.description}
        </motion.p> */}
        <div className="flex flex-wrap space mt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-2 bg-secondary border py-1 mr-2 mb-2 text-xs"
              style={{
                color: project.colors.text,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
