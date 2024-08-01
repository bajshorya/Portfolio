import React from "react";
import { IntroCard } from "../Components/IntroCard";
import { Navbar } from "../Components/Navbar";
import { ProjectSection } from "../Components/ProjectSection";

export const Home = () => {
  return (
    <div>
      <div className="max-w-2xl lg:max-w-xl mx-auto">
        <Navbar />
        <IntroCard />
        <ProjectSection />
      </div>
    </div>
  );
};
