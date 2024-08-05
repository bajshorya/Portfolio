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
    <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16 text-black">
      {projects.map((project) =>
        project.isExternal ? (
          <a
            key={project.id}
            className="group flex flex-col justify-center bg-slate-700 hover:bg-slate-600 transition-colors rounded-xl p-8 hover:shadow-xl transform hover:scale-105 ease-in-out duration-300"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-xl mb-4 overflow-hidden shadow-md transition-shadow duration-300 ease-in-out">
              <img
                alt={project.name}
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                className="rounded-xl bg-cover transition-transform duration-300 ease-in-out"
                src={imageMap[project.imageName]}
                style={{ color: "transparent" }}
              />
            </div>
            <h3 className="text-slate-300 group-hover:text-slate-200 font-semibold tracking-tight text-xl transition-colors duration-300 ease-in-out">
              {project.name}
            </h3>
            <p className="text-slate-400 group-hover:text-slate-200 text-base transition-colors duration-300 ease-in-out">
              {project.description}
            </p>
            <h3 className="font-bold text-xl text-slate-300 my-4 group-hover:text-slate-200 transition-colors duration-300 ease-in-out">
              Technologies Used :-
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-200 text-slate-700 group-hover:bg-slate-600 group-hover:text-slate-200 px-2 py-1 rounded-md text-sm transition-colors duration-300 ease-in-out"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ) : (
          <Link
            key={project.id}
            className="group flex flex-col justify-center bg-slate-900 hover:bg-slate-800 transition-colors rounded-xl p-8 hover:shadow-xl transform hover:scale-105 ease-in-out duration-300"
            to={project.link}
          >
            <div className="relative rounded-xl mb-4 overflow-hidden shadow-md transition-shadow duration-300 ease-in-out">
              <img
                alt={project.name}
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                className="rounded-xl bg-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={imageMap[project.imageName]}
                style={{ color: "transparent" }}
              />
            </div>
            <h3 className="text-slate-200 group-hover:text-slate-200 font-semibold tracking-tight text-xl transition-colors duration-300 ease-in-out">
              {project.name}
            </h3>
            <p className="text-slate-400 group-hover:text-slate-200 text-base transition-colors duration-300 ease-in-out">
              {project.description}
            </p>
            <h3 className="font-bold text-xl text-slate-200 my-4 group-hover:text-slate-200 transition-colors duration-300 ease-in-out">
              Technologies Used :-
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-200 text-slate-700 group-hover:bg-slate-600 group-hover:text-slate-200 px-2 py-1 rounded-md text-sm transition-colors duration-300 ease-in-out"
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
