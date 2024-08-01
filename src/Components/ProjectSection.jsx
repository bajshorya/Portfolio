import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <div className="mt-5">
      <div className="text-2xl text-slate-500 font-thin mt-2">
        Personal Projects
      </div>
      <div className="text-slate-800  mt-2">
        Below is a selection of recent projects that I've worked on.
      </div>
      <ProjectCard />
    </div>
  );
};
