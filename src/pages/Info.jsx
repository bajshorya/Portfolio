import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { InfoPara } from "../Components/InfoPara";

const Info = () => {
  return (
    <div>
      <div className="max-w-2xl lg:max-w-xl mx-auto content">
        <div>
          <Navbar />
        </div>
        <div>
          <InfoPara />
        </div>
        <hr className="my-10" />
        <div>
          <SkillsSection />
        </div>
        <hr className="my-10" />

        <div>
          <ProjectSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Info;
