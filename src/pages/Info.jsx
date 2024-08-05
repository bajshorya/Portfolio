import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";

const Info = () => {
  return (
    <div>
      <div className="max-w-2xl lg:max-w-xl mx-auto content">
        <div>
          <Navbar />
        </div>
        <div>
          <SkillsSection />
        </div>
        <div>
          <ProjectSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Info;
