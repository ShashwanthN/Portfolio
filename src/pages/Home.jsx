import React from "react";

import Intro from "../components/Intro";
import Boundary from "../components/Boundary";
import TechStack from "../components/TechStack";
import SessionNavigator from "../components/SessionNavigator";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Boundary>
      <div className="fixed top-0 z-50 h-20 min-w-screen bg-secondary"></div>
      <main className=" border-l h-[] bg-primary border-black border-r">
       
        <div className="">
          <Intro />
        </div>
        
        <div className="h-screen">
          <TechStack />
        </div>
       
        <div className="h-screen">
          <SessionNavigator />
          
        </div>
       
        <div className="">
        
        </div>
      </main>
    </Boundary>
  );
};

export default Home;
