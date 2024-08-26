import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectDetailedView from "../components/projects/ProjectDetailedView";
import HomePageOfEb from "../assets/HomePageOfEb.png";
import { motion, AnimatePresence } from "framer-motion";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const detailedViewRef = useRef(null);
  const projectGridRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  const [backTo, setBackTo] = useState(false);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#121212";

    return () => {
      document.documentElement.style.backgroundColor = "#e2e4dd";
    };
  }, []);

  useEffect(() => {
    if (selectedProject && detailedViewRef.current) {
      window.scrollTo({
        top: detailedViewRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (!selectedProject && projectGridRef.current && backTo) {
      window.scrollTo({
        top: projectGridRef.current.offsetTop,
      });
      setBackTo(false);
    }
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack application built with React and Spring Boot.",
      tagline: "Effortless application management.",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Spring Boot", color: "#6DB33F" },
        { name: "MySQL", color: "#4479A1" },
        { name: "Tailwind CSS", color: "#38B2AC" },
      ],
      imageUrl: HomePageOfEb,
      content: [
        {
          type: "image",
          src: "/path/to/project-one-image.jpg",
          alt: "Project One Image",
          styles: {
            container: "my-8 w-full flex justify-center",
            image: "rounded-lg shadow-lg",
            text: "rounded-lg shadow-lg",
          },
        },
        {
          type: "video",
          src: "/path/to/project-one-video.mp4",
          styles: {
            container: "my-8 w-full flex justify-center",
            video: "rounded-lg shadow-lg max-w-full h-auto",
            text: "rounded-lg shadow-lg",
          },
        },
        {
          type: "text",
          text: "This is additional text content for Project One.",
          styles: {
            container: "my-8",
            text: "text-xl font-semibold leading-relaxed",
          },
        },
      ],
      link: "#",
      github: "https://github.com/your-repo/project-one",
      colors: {
        background: "#1c1c1e",
        text: "#f5f5f7",
        primary: "#2d87ff",
        secondary: "#1c85ff",
        accent: "#646464",
        border: "#3a3a3c",
      },
    },
    {
      id: 2,
      title: "Project Two",
      description: "A scalable microservices architecture.",
      tagline: "Powering the future of applications.",
      technologies: [
        { name: "Node.js", color: "#339933" },
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "MongoDB", color: "#47A248" },
      ],
      content: [
        {
          type: "image",
          src: "/path/to/project-two-image.jpg",
          alt: "Project Two Image",
          styles: {
            container: "my-8 w-full flex justify-center",
            image: "rounded-lg shadow-lg",
          },
        },
        {
          type: "video",
          src: "/path/to/project-two-video.mp4",
          styles: {
            container: "my-8 w-full flex justify-center",
            video: "rounded-lg shadow-lg max-w-full h-auto",
          },
        },
        {
          type: "text",
          text: "This is additional text content for Project Two.",
          styles: {
            container: "my-8",
            text: "text-xl font-semibold leading-relaxed",
          },
        },
      ],
      imageUrl: HomePageOfEb,
      link: "#",
      github: "https://github.com/your-repo/project-two",
      colors: {
        background: "#1c1c1e",
        text: "#f5f5f7",
        primary: "#8c77ff",
        secondary: "#6a5acd",
        accent: "#646464",
        border: "#3a3a3c",
      },
    },
    {
      id: 3,
      title: "Project Three",
      description: "A security-focused web application.",
      tagline: "Keep your data safe.",
      technologies: [
        { name: "Angular", color: "#DD0031" },
        { name: "Express", color: "#000000" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "AWS", color: "#FF9900" },
      ],
      content: [
        {
          type: "image",
          src: "/path/to/project-three-image.jpg",
          alt: "Project Three Image",
          styles: {
            container: "my-8 w-full flex justify-center",
            image: "rounded-lg shadow-lg",
          },
        },
        {
          type: "video",
          src: "/path/to/project-three-video.mp4",
          styles: {
            container: "my-8 w-full flex justify-center",
            video: "rounded-lg shadow-lg max-w-full h-auto",
          },
        },
        {
          type: "text",
          text: "This is additional text content for Project Three.",
          styles: {
            container: "my-8",
            text: "text-xl font-semibold leading-relaxed",
          },
        },
      ],
      imageUrl: "/path/to/project-three-image.jpg",
      link: "#",
      github: "https://github.com/your-repo/project-three",
      colors: {
        background: "#1c1c1e",
        text: "#f5f5f7",
        primary: "#ff6b6b",
        secondary: "#ff5252",
        accent: "#646464",
        border: "#3a3a3c",
      },
    },
  ];
  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setIsSelected(true);
  };

  return (
    
    <div className=" bg-[#121212]">
      <div
        className="w-4/5 mx-auto flex flex-col border-r border-l border-darkBorder text-white"
        style={{ backgroundColor: "#121212" }}
      >
        <div className=" justify-between flex flex-col">
          <div
            className={`flex flex-col  justify-end items-end ${
              isSelected ? "" : "h-screen"
            }`}
            style={{ flexGrow: 1 }}
            ref={detailedViewRef}
          >
            <div
              className={`text-5xl font-bold font-mono m-10 text-right leading-[4rem] ${
                isSelected ? "hidden" : ""
              }`}
            >
              Let's shift
              <br />
              <span className="font-classic italic text-9xl">the tone</span>
              <br />
              for a bit
            </div>

            <motion.div
              className={` font-mono font-bold border-t border-black w-full ${
                isSelected ? "text-4xl p-4" : "text-9xl p-10"
              }`}
              style={{
                borderColor: "#3a3a3c",
                alignSelf: "flex-start",
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.div>
          </div>

          <AnimatePresence>
            {selectedProject ? (
              <div className="border-t border-darkBorder">
                <AnimatePresence>
                  <ProjectDetailedView
                    project={projects.find((p) => p.id === selectedProject)}
                    setSelectedProject={setSelectedProject}
                    setIsSelected={setIsSelected}
                    setBackTo={setBackTo}
                    detailedViewRef={detailedViewRef}
                  />
                </AnimatePresence>
              </div>
            ) : (
              <div
                className="h-screen flex flex-col border-darkBorder border-t"
                ref={projectGridRef}
              >
                <div className="h-full"></div>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      handleProjectClick={handleProjectClick}
                    />
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


export default Projects;
