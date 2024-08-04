import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <div className="mt-8">
      <div className="text-3xl text-slate-200 font-blod mt-2">
        Personal Projects
      </div>
      <div className="text-slate-500  mt-2">
        Below is a selection of recent projects that I've worked on.
      </div>
      <ProjectCard />
    </div>
  );
};
