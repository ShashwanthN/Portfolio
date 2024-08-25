import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FloatingCircles = () => {
  const [positions, setPositions] = useState({
    projects: { top: "30%", left: "35%" },
    knowMe: { top: "30%", left: "65%" },
    socials: { top: "75%", left: "65%" },
    otherStuff: { top: "23%", left: "94%" },
  });
  const [isTransformed, setIsTransformed] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const startDivRefs = useRef([]);
  const targetDivRefs = useRef([]);
  const animatedDivRefs = useRef([]);
  const animationInProgress = useRef(false);
  const lineRefs = useRef([]);


  

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


    const stopAllAnimation = () => {
      setIsAnimating(false);
    
    
        
      const newPositions = {
        projects: { top: "11%", left: "calc(100% - 50px)" },
        knowMe: { top: "17%", left: "calc(100% - 50px)" },
        socials: { top: "23%", left: "calc(100% - 50px)" },
        otherStuff: { top: "29%", left: "calc(100% - 50px)" },
      };
       
        setPositions(newPositions);
        
          controls.projects.start(newPositions.projects);
          controls.knowMe.start(newPositions.knowMe);
          controls.socials.start(newPositions.socials);
          controls.otherStuff.start(newPositions.otherStuff);
      
      
  
      
    };
    useEffect(()=>{
      resumeAnimation();
    }, []);

  const resumeAnimation = () => {
    if(isStopped){
      stopAllAnimation();
    }
      setIsAnimating(true);
    
  };

  useEffect(() => {
    let interval;

    if (isAnimating && !isStopped) {
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
      }, 10000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isAnimating, isStopped]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolling(scrollPosition > 10);
  
      if (scrollPosition >= 100) {
        if (!isTransformed && !animationInProgress.current) {
          stopAnimation();
          transformDivs();
        }
      } else {
        if (isTransformed && !animationInProgress.current) {
          if (!isStopped) {
            resumeAnimation();
          }
          reverseTransformDivs();
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransformed, isStopped]);
  

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
            "transform 1s cubic-bezier(0.25, 0.8, 0.5, 1), width 1s cubic-bezier(0.25, 0.8, 0.5, 1),height 1s cubic-bezier(0.25, 0.8, 0.5, 1), border-radius 1s cubic-bezier(0.25, 0.8, 0.5, 1)";
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
          }, 10000);
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
        animatedDiv.style.width = "auto";
        animatedDiv.style.height = "auto";
        animatedDiv.style.borderRadius = "9999px";
        animatedDiv.classList.add(
          "for-reverse",
          "whitespace-nowrap",
          "px-4",
          "py-2",
          "text-center"
        );
      }
    });

    setTimeout(() => {
      setIsTransformed(false);
      if(isStopped) {
        stopAllAnimation();
      }
      animationInProgress.current = false;
    }, 1000);
  };

  return (
    <div className="md:w-4/5 w-full mx-auto flex items-center justify-center">
      <div className="fixed z-40 top-0 border-black md:w-4/5 w-full mx-auto grid grid-cols-6 h-20 transition-all transform duration-500 items-center"
      >
        <div
          className="navbar-item z-50 border-b border-l border-t border-black h-20 col-span-2 bg-blue-500 text-white flex items-center justify-center transition-opacity duration-500"
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

      <motion.div className="relative z-50">
        <motion.div
          ref={(el) => (startDivRefs.current[0] = el)}
          animate={controls.projects}
          initial={positions.projects}
          transition={{ duration: 10, ease: "easeInOut" }}
          className="fixed transform -translate-x-16 -translate-y-16"
          style={{ top: positions.projects.top, left: positions.projects.left }}
        >
          <div
            ref={(el) => (animatedDivRefs.current[0] = el)}
            className="for-reverse rounded-full flex font-mono whitespace-nowrap px-4 py-2 text-center items-center justify-center cursor-pointer"
            onClick={() => alert("Top Left Circle Clicked")}
          >
            Projects
          </div>
        </motion.div>

        <motion.div
          ref={(el) => (startDivRefs.current[1] = el)}
          animate={controls.knowMe}
          initial={positions.knowMe}
          transition={{ duration: 10, ease: "easeInOut" }}
          className="fixed transform -translate-x-16 -translate-y-16"
          style={{ top: positions.knowMe.top, left: positions.knowMe.left }}
        >
          <div
            ref={(el) => (animatedDivRefs.current[1] = el)}
            className="for-reverse rounded-full flex font-mono whitespace-nowrap px-4 py-2 text-center items-center justify-center cursor-pointer"
            onClick={() => alert("Top Right Circle Clicked")}
          >
            Know Me
          </div>
        </motion.div>

        <motion.div
          ref={(el) => (startDivRefs.current[2] = el)}
          animate={controls.socials}
          initial={positions.socials}
          transition={{ duration: 10, ease: "easeInOut" }}
          className="fixed transform -translate-x-16 -translate-y-16"
          style={{ top: positions.socials.top, left: positions.socials.left }}
        >
          <div
            ref={(el) => (animatedDivRefs.current[2] = el)}
            className="for-reverse rounded-full flex font-mono whitespace-nowrap px-4 py-2 text-center items-center justify-center cursor-pointer"
            onClick={() => alert("Bottom Right Circle Clicked")}
          >
            Socials
          </div>
        </motion.div>

        <motion.div
          ref={(el) => (startDivRefs.current[3] = el)}
          animate={controls.otherStuff}
          initial={positions.otherStuff}
          transition={{ duration: 10, ease: "easeInOut" }}
          className="fixed transform -translate-x-16 -translate-y-16"
          style={{
            top: positions.otherStuff.top,
            left: positions.otherStuff.left,
          }}
        >
          <div
            ref={(el) => (animatedDivRefs.current[3] = el)}
            className="for-reverse rounded-full flex whitespace-nowrap px-4 py-2 text-center font-mono items-center justify-center cursor-pointer"
            onClick={() => alert("Bottom Left Circle Clicked")}
          >
            Other
          </div>
        </motion.div>
      </motion.div>

      {!isScrolling && (
        <div className="fixed z-50 bottom-4 right-4 space-x-4">
          {!isStopped && (
            <button
              onClick={() => {
                setIsStopped(true);
                stopAllAnimation();
                
              }}
              className="p-2 bg-red-500 hover:bg-red-600 text-xs text-black border border-black"
            >
              Stop these annoying little things flying across my screen
            </button>
          )}
          {isStopped && (
            <button
              onClick={() => {
                
                resumeAnimation();
                setIsStopped(false);
              }}
              className="p-2 bg-[#00be43] hover:bg-green-500 text-xs text-black border border-black"
            >
              Resume
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingCircles;
