import React from "react";
import { SkillCard } from "./SkillCard";

// Import all SVG files as modules
import TypeScript from "../assets/skills/typescript.svg";
import NodeJS from "../assets/skills/nodejs.svg";
import ExpressJS from "../assets/skills/express-js.svg";
import JavaScript from "../assets/skills/javascript.svg";
import ReactJS from "../assets/skills/reactjs.svg";
import PrismaORM from "../assets/skills/prismaorm.svg";
import PostgreSQL from "../assets/skills/postgres.svg";
import MongoDB from "../assets/skills/mongodb.svg";
import MySQL from "../assets/skills/mysql.svg";
import Rust from "../assets/skills/rust.svg";
import Solidity from "../assets/skills/solidity.svg";
import Tailwind from "../assets/skills/tailwind.svg";
import Git from "../assets/skills/git.svg";
import Java from "../assets/skills/java.svg";
import Bootstrap from "../assets/skills/bootstrap.svg";
import HTML from "../assets/skills/html.svg";
import CSS from "../assets/skills/css.svg";

// Map skill names to their imported SVG modules
const skillImages = {
  TypeScript: TypeScript,
  "Node.js": NodeJS,
  "Express.js": ExpressJS,
  JavaScript: JavaScript,
  "React.js": ReactJS,
  PrismaORM: PrismaORM,
  PostgreSQL: PostgreSQL,
  MongoDB: MongoDB,
  MySQL: MySQL,
  Rust: Rust,
  Solidity: Solidity,
  Tailwind: Tailwind,
  Git: Git,
  Java: Java,
  Bootstrap: Bootstrap,
  HTML: HTML,
  CSS: CSS,
};

export const SkillsSection = () => {
  const skills = Object.keys(skillImages).map((name) => ({
    name,
    path: skillImages[name],
  }));

  return (
    <div>
      <div className="text-3xl text-slate-200 font-bold mt-2">My Skills</div>
      <div className="text-slate-500 mt-2">The things I know!</div>
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
