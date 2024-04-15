import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="bg-[#110C1F] min-h-screen py-12 pl-5 pr-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-7xl font-semibold text-center text-white mb-8">
              My Skills
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <SkillItem title="React" />
              <SkillItem title="Git & GitHub" />
              <SkillItem title="JavaScript" />
              <SkillItem title="Java" />
              <SkillItem title="HTML" />
              <SkillItem title="CSS" />
              <SkillItem title="Solidity" />
            </ul>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

const SkillItem = ({ title }) => {
  return (
    <li className="relative overflow-hidden group p-4">
      <div className="bg-[#3d315b] rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer  hover:text-white">
        <p className="text-lg font-semibold  ">{title}</p>
      </div>
    </li>
  );
};

export default Skills;
