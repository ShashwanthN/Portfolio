import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FloatingCircles = ({ startPositions }) => {
  const [positions, setPositions] = useState({
    projects: { top: "30%", left: "35%" },
    knowMe: { top: "30%", left: "65%" },
    socials: { top: "75%", left: "65%" },
    otherStuff: { top: "23%", left: "94%" },
  });
  const [isTransformed, setIsTransformed] = useState(false);
  const startDivRefs = useRef([]);
  const targetDivRefs = useRef([]);
  const animatedDivRefs = useRef([]);
  const animationInProgress = useRef(false);
  const [rotate, setRotate] = useState(false);

  const controls = {
    projects: useAnimation(),
    knowMe: useAnimation(),
    socials: useAnimation(),
    otherStuff: useAnimation(),
  };

  const [isAnimating, setIsAnimating] = useState(true);

  const stopAnimation = () => {
    setIsAnimating(false);
    controls.projects.stop();
    controls.knowMe.stop();
    controls.socials.stop();
    controls.otherStuff.stop();
  };

  const resumeAnimation = () => {
    setIsAnimating(true);
  };
  useEffect(() => {
    let interval;

    if (isAnimating) {
      interval = setInterval(() => {
        const newPositions = {
          projects: {
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          },
          knowMe: {
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          },
          socials: {
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          },
          otherStuff: {
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          },
        };
        
        setPositions(newPositions);
        controls.projects.start(newPositions.projects);
        controls.knowMe.start(newPositions.knowMe);
        controls.socials.start(newPositions.socials);
        controls.otherStuff.start(newPositions.otherStuff);
      }, 3500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isAnimating]);



  useEffect(() => {
    setRotate(true);
  }, []);

  useEffect(() => {
    const handleScroll = async () => { 
      if (window.scrollY > 10) {
        if (!isTransformed && !animationInProgress.current) {
          
          stopAnimation(); 
          transformDivs();
        }
      } else {
        if (isTransformed && !animationInProgress.current) {
           resumeAnimation(); 
          reverseTransformDivs();
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransformed]);
  
  const transformDivs = () => {
    animationInProgress.current = true;

    startDivRefs.current.forEach((startDiv, index) => {
      const targetDiv = targetDivRefs.current[index];
      const animatedDiv = animatedDivRefs.current[index];

      if (startDiv && targetDiv && animatedDiv) {
        requestAnimationFrame(() => {
          const startRect = startDiv.getBoundingClientRect();
          const targetRect = targetDiv.getBoundingClientRect();

          const deltaX = targetRect.left - startRect.left;
          const deltaY = targetRect.top - startRect.top;

          animatedDiv.style.transition =
            "transform 1s cubic-bezier(0.25, 0.8, 0.5, 1), width 1s cubic-bezier(0.25, 0.8, 0.5, 1), border-radius 1s cubic-bezier(0.25, 0.8, 0.5, 1)";
          animatedDiv.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          animatedDiv.style.position = "absolute";
          animatedDiv.style.borderRadius = "0";
          animatedDiv.style.width = `${targetRect.width}px`;
          animatedDiv.style.height = `${targetRect.height}px`;
          animatedDiv.classList.remove("for-reverse");
          animatedDiv.classList.add("hover-effect");

          setTimeout(() => {
            setIsTransformed(true);
            animationInProgress.current = false;
          }, 1000);
        });
      }
    });
  };

  const reverseTransformDivs = () => {
    animationInProgress.current = true;
    setIsTransformed(false);

    animatedDivRefs.current.forEach((animatedDiv) => {
      if (animatedDiv) {
        animatedDiv.style.transition =
          "transform 1s cubic-bezier(0.25, 0.8, 0.5, 1), width 1s cubic-bezier(0.25, 0.8, 0.5, 1), border-radius 1s cubic-bezier(0.25, 0.8, 0.5, 1)";
        animatedDiv.style.transform = "translate(0, 0)";
        animatedDiv.style.position = "fixed";
        animatedDiv.style.width = "7.5rem";
        animatedDiv.style.height = "7.5rem";
        animatedDiv.style.borderRadius = "50%";

        animatedDiv.classList.add("for-reverse");
      }
    });

    setTimeout(() => {
      setIsTransformed(false);
      animationInProgress.current = false;
    }, 1000);
  };

  return (
    <div className="w-4/5 mx-auto  flex items-center justify-center ">
      <div className="fixed top-0  w-4/5 mx-auto grid grid-cols-6 h-20 transition-all transform duration-500 items-center">
      
        <div
          className="navbar-item  border  border-black  w-full h-20 col-span-2 bg-blue-500 text-white flex items-center justify-center transition-opacity duration-500"
          style={{
            opacity: isTransformed ? 1 : 0,
          }}
        ></div>
        <div
          ref={(el) => (targetDivRefs.current[0] = el)}
          className="navbar-item w-full h-20 bg-blue-500 text-white flex items-center justify-center transition-opacity duration-500"
          style={{
            opacity: isTransformed ? 0 : 0,
          }}
        >
          1
        </div>
        <div
          ref={(el) => (targetDivRefs.current[1] = el)}
          className="navbar-item w-full h-20 bg-green-500 text-white flex items-center justify-center transition-opacity duration-500"
          style={{
            opacity: isTransformed ? 0 : 0,
          }}
        >
          2
        </div>
        <div
          ref={(el) => (targetDivRefs.current[2] = el)}
          className="navbar-item w-full h-20 bg-red-500 text-white flex items-center justify-center transition-opacity duration-500"
          style={{
            opacity: isTransformed ? 0 : 0,
          }}
        >
          3
        </div>
        <div
          ref={(el) => (targetDivRefs.current[3] = el)}
          className="navbar-item w-full h-20 bg-yellow-500 text-white flex items-center justify-center transition-opacity duration-500"
          style={{
            opacity: isTransformed ? 0 : 0,
          }}
        >
          4
        </div>
      </div>

        <div className="relative z-50">
      <motion.div
        ref={(el) => (startDivRefs.current[0] = setPositions[0])}
        animate={controls.projects}
        initial={positions.projects}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="fixed transform -translate-x-16 -translate-y-16"
        style={{ top: positions.projects.top, left: positions.projects.left }}
      >
        <div
          ref={(el) => (animatedDivRefs.current[0] = el)}
          className="w-[7.5rem] h-[7.5rem] for-reverse rounded-full flex font-mono items-center justify-center cursor-pointer"
          onClick={() => alert("Top Left Circle Clicked")}
        >
          Projects
        </div>
      </motion.div>

      <motion.div
        ref={(el) => (startDivRefs.current[1] = el)}
        animate={controls.knowMe}
        initial={positions.knowMe}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="fixed transform -translate-x-16 -translate-y-16"
        style={{ top: positions.knowMe.top, left: positions.knowMe.left }}
      >
        <div
          ref={(el) => (animatedDivRefs.current[1] = el)}
          className="w-[7.5rem] h-[7.5rem] for-reverse rounded-full flex font-mono items-center justify-center cursor-pointer"
          onClick={() => alert("Top Right Circle Clicked")}
        >
          Know Me
        </div>
      </motion.div>

      <motion.div
        ref={(el) => (startDivRefs.current[2] = el)}
        animate={controls.socials}
        initial={positions.socials}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="fixed transform -translate-x-16 -translate-y-16"
        style={{ top: positions.socials.top, left: positions.socials.left }}
      >
        <div
          ref={(el) => (animatedDivRefs.current[2] = el)}
          className="w-[7.5rem] h-[7.5rem] for-reverse rounded-full flex font-mono items-center justify-center cursor-pointer"
          onClick={() => alert("Bottom Right Circle Clicked")}
        >
          Socials
        </div>
      </motion.div>

      <motion.div
        ref={(el) => (startDivRefs.current[3] = el)}
        animate={controls.otherStuff}
        initial={positions.otherStuff}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="fixed transform -translate-x-16 -translate-y-16"
        style={{ top: positions.otherStuff.top, left: positions.otherStuff.left }}
      >
        <div
          ref={(el) => (animatedDivRefs.current[3] = el)}
          className="w-[7.5rem] h-[7.5rem] for-reverse rounded-full flex font-mono items-center justify-center cursor-pointer"
          onClick={() => alert("Bottom Left Circle Clicked")}
        >
          Other
        </div>
      </motion.div>

      {/* <div className="fixed bottom-4 right-4 space-x-4">
        <button
          onClick={stopAnimation}
          className="p-2 bg-red-500 text-white rounded"
        >
          Stop
        </button>
        <button
          onClick={resumeAnimation}
          className="p-2 bg-green-500 text-white rounded"
        >
          Resume
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default FloatingCircles;
