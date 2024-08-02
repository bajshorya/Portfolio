import React from "react";
import { IntroCard } from "../Components/IntroCard";
import { Navbar } from "../Components/Navbar";
import { ProjectSection } from "../Components/ProjectSection";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <div className=" home-container">
      <div className="max-w-2xl lg:max-w-xl mx-auto content">
        <Navbar />
        <IntroCard />
        <ProjectSection />
        <Footer />
      </div>
    </div>
  );
};
