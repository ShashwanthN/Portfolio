import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectDetailedView from "../components/projects/ProjectDetailedView";
import HomePageOfEb from "../assets/HomePageOfEb.png";
import vid from "../assets/NoSurprises.mp4";
import { motion, AnimatePresence } from "framer-motion";
import JWT from "../assets/jwtimg.png";
import Carousel from "../components/Carousal";
import Razorpay from "../assets/Razorpay.png";
import MinimalNavbar from "../components/MinimalNavbar";
import ProjectCarousel from "../components/ProjectCarousel";
import projectImg000 from "../assets/project1Img/projectImg-000.jpg";
import projectImg001 from "../assets/project1Img/projectImg-001.jpg";
import projectImg002 from "../assets/project1Img/projectImg-002.jpg";
import projectImg003 from "../assets/project1Img/projectImg-003.jpg";
import projectImg004 from "../assets/project1Img/projectImg-004.jpg";
import projectImg005 from "../assets/project1Img/projectImg-005.jpg";
import projectImg006 from "../assets/project1Img/projectImg-006.jpg";
import projectImg007 from "../assets/project1Img/projectImg-007.jpg";
import projectImg008 from "../assets/project1Img/projectImg-008.jpg";
import projectImg009 from "../assets/project1Img/projectImg-009.jpg";
import projectImg010 from "../assets/project1Img/projectImg-010.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const detailedViewRef = useRef(null);
  const projectGridRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  const [backTo, setBackTo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#121212";

    return () => {
      document.documentElement.style.backgroundColor = "#e2e4dd";
    };
  }, []);

  // useEffect(() => {
  //   if (selectedProject && detailedViewRef.current) {
  //     window.scrollTo({
  //       top: detailedViewRef.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   } else if (!selectedProject && projectGridRef.current && backTo) {
  //     window.scrollTo({
  //       top: projectGridRef.current.offsetTop,
  //     });
  //     setBackTo(false);
  //   }
  // }, [selectedProject]);

  const projects = [
    // {
    //   id: 1,
    //   title: "Project One",
    //   description: "A full-stack application built with React and Spring Boot.",
    //   tagline: "Effortless application management.",
    //   technologies: [
    //     { name: "React", color: "#61DAFB" },
    //     { name: "Spring Boot", color: "#6DB33F" },
    //     { name: "MySQL", color: "#4479A1" },
    //     { name: "Tailwind CSS", color: "#38B2AC" },
    //   ],
    //   imageUrl: HomePageOfEb,
    //   content: [
    //     {
    //       type: "image",
    //       src: "/path/to/project-one-image.jpg",
    //       alt: "Project One Image",
    //       styles: {
    //         container: "my-8 w-full flex justify-center",
    //         image: "rounded-lg shadow-lg",
    //         text: "rounded-lg shadow-lg",
    //       },
    //     },
    //     {
    //       type: "video",
    //       src: "/path/to/project-one-video.mp4",
    //       styles: {
    //         container: "my-8 w-full flex justify-center",
    //         video: "shadow-lg max-w-full h-auto",
    //         text: "rounded-lg shadow-lg",
    //       },
    //     },
    //     {
    //       type: "text",
    //       text: "This is additional text content for Project One.",
    //       styles: {
    //         container: "my-8",
    //         text: "text-xl font-semibold leading-relaxed",
    //       },
    //     },
    //   ],
    //   link: "#",
    //   github: "https://github.com/your-repo/project-one",
    //   colors: {
    //     background: "#1c1c1e",
    //     text: "#f5f5f7",
    //     primary: "#2d87ff",
    //     secondary: "#1c85ff",
    //     accent: "#646464",
    //     border: "#3a3a3c",
    //   },
    // },
    {
      id: 2,
      title: "EB Billing System",
      description:
        "An advanced electronic billing system built to manage and automate utility billing processes efficiently.",
      tagline: "Transforming utility payments into a seamless experience.",
      technologies: [
        { name: "Spring Boot", color: "#6DB33F" },
        { name: "React", color: "#61DAFB" },
        { name: "MySQL", color: "#4479A1" },
        { name: "JWT", color: "#000000" },
      ],
      content: [
        [
          {
            type: "text",
            text: (
              <>
                Designed to be <span className="text-accent">scalable.</span>
              </>
            ),
            styles: {
              container:
                "border-b bg-accent border-r border-darkBorder flex justify-start",
              image: "rounded-lg border-r border-darkBorder shadow-lg",
              text: "text-5xl md:text-7xl p-8 md:p-20 bg-charcoal font-thin font-classic",
            },
          },
          {
            type: "video",
            src: vid,
            styles: {
              container: "bg-gray-5 flex-grow",
              video: "border-l border-darkBorder h-auto md:h-full ml-auto md:w-4/5",
            },
          },
          {
            type: "text",
            text: (
              <>
                The EB Billing System is an innovative platform that simplifies the
                management of electricity billing by automating key processes. Built
                with performance in mind, it ensures accuracy and reliability at
                every step.{" "}
                <span className="text-softCoral">
                  Experience seamless integration and robust functionality.
                </span>
              </>
            ),
            styles: {
              container: "border-t bg-charcoal border-darkBorder",
              text: "text-xs  md:text-sm text-white md:w-1/2 border-r bg-gray-1 border-darkBorder md:p-20 p-8 font-light leading-relaxed font-mono text-justify mr-auto",
            },
          },
        ],
        [
          {
            type: "text",
            text: (
              <>
                <span className="text-blue-500">Security</span> at the core.
              </>
            ),
            styles: {
              container:
                "w-full border-b bg-blue-800 border-darkBorder flex justify-end",
              image: "rounded-lg shadow-lg",
              text: "text-5xl md:text-7xl font-thin bg-secondary border-l border-darkBorder p-8 md:p-20 font-classic",
            },
          },
          {
            type: "image",
            src: JWT,
            styles: {
              container:
                "w-full h-auto md:h-full bg-[#070D16] flex justify-center mx-auto",
              image: "w-4/5 md:w-3/5 border-darkBorder outline-image",
            },
          },
          {
            type: "text",
            text: "The EB Billing System employs JWT (JSON Web Tokens) to ensure secure and reliable authentication. By leveraging JWT, the system safeguards user data, providing a secure environment for managing billing information online.",
            styles: {
              container: "border-t bg-[#0A1B2E] border-darkBorder",
              text: "text-xs md:text-sm text-white md:w-3/5 border-l bg-shade1 border-r border-darkBorder p-10 md:p-20 font-light leading-relaxed font-mono text-justify mr-auto",
            },
          },
        ],
        [
          {
            type: "text",
            text: (
              <>
                <span className="text-green-400">Automated </span> billing
                processes.
              </>
            ),
            styles: {
              container:
                "border-b bg-green-600 border-r border-darkBorder flex justify-start",
              image: "rounded-lg border-r border-darkBorder shadow-lg",
              text: "text-5xl md:text-7xl p-10 md:p-20 bg-charcoal font-thin font-classic",
            },
          },
          {
            type: "text",
            text: (
              <>
                The system automates billing processes to reduce manual effort and
                minimize errors. This automation leads to faster processing times
                and more accurate billing, enhancing overall efficiency.{" "}
                <span className="text-blue-300">Streamline your billing operations</span>{" "}
                with our advanced solution.
              </>
            ),
            styles: {
              container: "border-t bg-[#0B1E13] border-darkBorder",
              text: "text-xs md:text-sm text-white bg-gray-1 border-darkBorder p-10 md:p-20 w-full font-light leading-relaxed font-mono text-justify mr-auto",
            },
          },
        ],
        [
          {
            type: "text",
            text: (
              <>
                <span className="text-yellow-400">User-friendly </span> interface.
              </>
            ),
            styles: {
              container:
                "border-b bg-yellow-400 border-r border-darkBorder flex justify-start",
              image: "rounded-lg border-r border-darkBorder shadow-lg",
              text: "text-5xl md:text-7xl p-10 md:p-20 bg-gray-5 font-thin font-classic",
            },
          },
          {
            type: "carousel",
            componentC: [
              <Carousel slides={[HomePageOfEb, HomePageOfEb, HomePageOfEb]} />,
            ],
            styles: {
              container: "bg-yellow-800 flex justify-center",
              carousel: "border-l border-r border-darkBorder",
            },
          },
          {
            type: "text",
            text: (
              <>
                The EB Billing System offers a{" "}
                <span className="text-yellow-300">user-friendly interface</span> that
                makes it easy for users to navigate and manage their billing
                information. With intuitive design and responsive layout, users can
                access their billing details anytime, anywhere.
              </>
            ),
            styles: {
              container: "border-t bg-gray border-darkBorder",
              text: "text-xs md:text-sm text-yellow-200 md:w-1/2 bg-bg border-l border-darkBorder p-10 md:p-20 font-light leading-relaxed font-mono text-justify ml-auto",
            },
          },
        ],
        [
          {
            type: "text",
            text: (
              <>
                Leveraging{" "}
                <span className="text-indigo-400">advanced technologies</span>.
              </>
            ),
            styles: {
              container:
                "border-b bg-yellow-400 border-r border-darkBorder flex justify-start",
              image: "rounded-lg border-r border-darkBorder shadow-lg",
              text: "text-5xl md:text-7xl p-10 md:p-20 bg-gray-5 font-thin font-classic",
            },
          },
          {
            type: "text",
            text: (
              <>
                Our system is built using modern frameworks like Spring Boot and
                React, ensuring that the application is not only fast and responsive
                but also easy to maintain and extend.{" "}
                <span className="text-indigo-400">Modern technology</span> powers every
                aspect of the EB Billing System, from user management to secure
                transactions.
              </>
            ),
            styles: {
              container: "border-t bg-charcoal border-darkBorder",
              text: "text-xs md:text-sm text-white md:w-1/2 border-r bg-gray-1 border-darkBorder p-10 md:p-20 font-light leading-relaxed font-mono text-justify mr-auto",
            },
          },
        ],
        [
          {
            type: "text",
            text: (
              <>
                Seamless
                <span className="text-burntSienna"> payment integration. </span>
              </>
            ),
            styles: {
              container:
                "border-b bg-[#e76f51] border-r border-darkBorder flex justify-start",
              image: "rounded-lg border-r border-darkBorder shadow-lg",
              text: "text-5xl md:text-7xl p-10 md:p-20 bg-gray-5 font-thin font-classic",
            },
          },
          {
            type: "image",
            src: Razorpay,
            styles: {
              container: "flex justify-center mx-auto",
              image: "w-4/5 md:w-3/5 border-darkBorder outline-image",
            },
          },
          {
            type: "text",
            text: (
              <>
                The EB Billing System integrates with UPI payment systems, allowing
                users to pay their bills securely and conveniently. The integration
                ensures that transactions are processed quickly, with minimal
                disruption to the user experience.
              </>
            ),
            styles: {
              container: "border-t bg-charcoal border-darkBorder",
              text: "text-xs md:text-sm text-white md:w-1/2 border-r bg-gray-1 border-darkBorder p-10 md:p-20 font-light leading-relaxed font-mono text-justify mr-auto",
            },
          },
        ],
      ],
      imageUrl: HomePageOfEb,
      link: "#",
      github: "https://github.com/ShashwanthN/EB-Billing-System.git",
      colors: {
        background: "#1c1c1e",
        text: "#f5f5f7",
        primary: "#8c77ff",
        secondary: "#6a5acd",
        accent: "#ff685b",
        muted: "#404040",
      },
    }
,    
    // {
    //   id: 3,
    //   title: "Project Three",
    //   description: "A security-focused web application.",
    //   tagline: "Keep your data safe.",
    //   technologies: [
    //     { name: "Angular", color: "#DD0031" },
    //     { name: "Express", color: "#000000" },
    //     { name: "PostgreSQL", color: "#336791" },
    //     { name: "AWS", color: "#FF9900" },
    //   ],
    //   content: [
    //     {
    //       type: "image",
    //       src: "/path/to/project-three-image.jpg",
    //       alt: "Project Three Image",
    //       styles: {
    //         container: "my-8 w-full flex justify-center",
    //         image: "rounded-lg shadow-lg",
    //       },
    //     },
    //     {
    //       type: "video",
    //       src: "/path/to/project-three-video.mp4",
    //       styles: {
    //         container: "my-8 w-full flex justify-center",
    //         video: "rounded-lg shadow-lg max-w-full h-auto",
    //       },
    //     },
    //     {
    //       type: "text",
    //       text: "This is additional text content for Project Three.",
    //       styles: {
    //         container: "my-8",
    //         text: "text-xl font-semibold leading-relaxed",
    //       },
    //     },
    //   ],
    //   imageUrl: "/path/to/project-three-image.jpg",
    //   link: "#",
    //   github: "https://github.com/your-repo/project-three",
    //   colors: {
    //     background: "#1c1c1e",
    //     text: "#f5f5f7",
    //     primary: "#ff6b6b",
    //     secondary: "#ff5252",
    //     accent: "#646464",
    //     border: "#3a3a3c",
    //   },
    // },
  ];
  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setIsSelected(true);
  };

  const projectImages = [
    projectImg000,
    projectImg001,
    projectImg002,
    projectImg003,
    projectImg004,
    projectImg005,
    projectImg006,
    projectImg007,
    projectImg008,
    projectImg009,
    projectImg010
  ];


  return (
    <div className=" bg-[#121212]">
      {selectedProject ? <div></div> : <MinimalNavbar />}

      <div
        className="md:w-4/5 w-full mx-auto flex flex-col border-r border-l border-t border-darkBorder text-white"
        style={{ backgroundColor: "#121212" }}
      >
        <div className=" justify-between flex flex-col">
          <div
            className={`flex flex-col  justify-end items-end ${
              isSelected ? "" : "min-h-screen"
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
                className="h-screen flex flex-col border-darkBorder border-t border-b"
                ref={projectGridRef}
              >
                <ProjectCarousel 
                  images={projectImages}
                  className="w-full h-full border-b border-darkBorder"
                />
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-2/5  w-full"
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
