import React from "react";
import { Link } from "react-router-dom";
import projects from "./projects.json";
import medium from "../assets/svg/medium.svg";
import FoodApp from "../assets/svg/FoodApp.svg";
import newsApp from "../assets/svg/newsApp.svg";

const imageMap = {
  "medium.svg": medium,
  "FoodApp.svg": FoodApp,
  "newsApp.svg": newsApp,
};

export const ProjectCard = () => {
  return (
    <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
      {projects.map((project) =>
        project.isExternal ? (
          <a
            key={project.id}
            className="group flex flex-col justify-center bg-slate-100 hover:bg-slate-400 transition-colors rounded-xl p-8"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-xl mb-4 shadow-project">
              <img
                alt={project.name}
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                className="rounded-xl bg-cover"
                src={imageMap[project.imageName]}
                style={{ color: "transparent" }}
              />
            </div>
            <h3 className="text-slate-700 group-hover:text-white font-semibold tracking-tight text-xl transition-colors">
              {project.name}
            </h3>
            <p className="text-slate-500 group-hover:text-white text-base transition-colors">
              {project.description}
            </p>
            <h3 className="font-bold text-xl mt-4 group-hover:text-white transition-colors">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-200 text-slate-700 group-hover:bg-slate-600 group-hover:text-white px-2 py-1 rounded-md text-sm transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ) : (
          <Link
            key={project.id}
            className="group flex flex-col justify-center bg-slate-100 hover:bg-slate-400 transition-colors rounded-xl p-8"
            to={project.link}
          >
            <div className="relative rounded-xl mb-4 shadow-project">
              <img
                alt={project.name}
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                className="rounded-xl bg-cover"
                src={imageMap[project.imageName]}
                style={{ color: "transparent" }}
              />
            </div>
            <h3 className="text-slate-700 group-hover:text-white font-semibold tracking-tight text-xl transition-colors">
              {project.name}
            </h3>
            <p className="text-slate-500 group-hover:text-white text-base transition-colors">
              {project.description}
            </p>
            <h3 className="font-bold text-xl mt-4 group-hover:text-white transition-colors">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-200 text-slate-700 group-hover:bg-slate-600 group-hover:text-white px-2 py-1 rounded-md text-sm transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        )
      )}
    </div>
  );
};
