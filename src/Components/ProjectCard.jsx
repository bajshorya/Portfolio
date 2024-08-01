import React from "react";
import { Link } from "react-router-dom";
import projects from "./projects.json";

export const ProjectCard = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="flex flex-col justify-center bg-slate-100 hover:bg-slate-300 transition-colors rounded-xl p-8"
            to={project.link}
          >
            <div className="relative rounded-xl mb-4 shadow-project"></div>
            <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
              {project.name}
            </h3>
            <p className="text-slate-500 text-base">{project.description}</p>
            <h3 className="font-bold text-xl mt-4">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-200 text-slate-700 px-2 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
