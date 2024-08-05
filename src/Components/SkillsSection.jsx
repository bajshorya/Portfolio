import React from "react";
import { SkillCard } from "./SkillCard";
import skills from "./skills.json";

export const SkillsSection = () => {
  return (
    <div>
      <div className="text-3xl text-slate-200 font-blod mt-2">My Skills</div>
      <div className="text-slate-500  mt-2">The things I know !</div>
      <div className="flex flex-wrap justify-center p-4 my-5">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
            <SkillCard name={skill.name} link={skill.path} />
          </div>
        ))}
      </div>
    </div>
  );
};
