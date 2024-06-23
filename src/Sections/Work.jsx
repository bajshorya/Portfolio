import React from "react";
import { projectsArray } from "../Components/ProjectsArray";

const Work = () => {
  return (
    <section
      id="work"
      className="bg-[#110C1F] text-white py-16 px-8 font-roboto"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Some Projects I've Made
        </h1>
        <hr className="border-gray-600 mb-8" />
        <div className="grid gap-8">
          {projectsArray.map((project) => (
            <div
              className="group flex flex-col pb-12 relative bg-[#1A1A2E] p-6 rounded-lg hover:bg-[#2E2E3E] transition-all duration-300"
              key={project.id}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <a
                  href={project.code}
                  className="text-white font-semibold text-lg bg-gray-800 px-4 py-2 rounded"
                >
                  View Code
                </a>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg py-4 space-y-2 sm:space-y-0 sm:space-x-4">
                <h2 className="text-2xl font-semibold">{project.Name}</h2>
                <p className="flex-1">{project.Description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.Technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <hr className="border-gray-600 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
