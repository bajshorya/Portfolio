import React from "react";
import { Link } from "react-router-dom";

export const InfoPara = () => {
  return (
    <div>
      <div className="text-4xl font-bold text-slate-300">
        Information About Me,
      </div>
      <div className="text-lg text-slate-400 my-5">
        <div>
          I'm{" "}
          <Link to={"/"}>
            <span className="font-bold text-slate-300 transition-colors duration-300 ease-in-out hover:text-orange-700 cursor-pointer">
              Shorya Baj
            </span>
          </Link>
          , a 20-year-old student at JECRC University, Jaipur, currently
          pursuing a BTech degree. My academic focus is on Web3 technologies and
          full-stack development, where I dive deep into TypeScript, Node.js,
          and Solidity. I'm actively working on a variety of projects that
          involve building robust backend systems and creating efficient,
          scalable applications. One of my notable projects includes a Medium
          blog clone developed with React TypeScript, Cloudflare backend, and
          Prisma.
        </div>
        <div>
          In addition to my studies, I'm passionate about exploring new
          technologies and building personal projects to address specific
          challenges. My current interests include integrating modern frameworks
          and tools to enhance functionality and performance across different
          platforms. With a strong inclination towards hands-on learning and
          problem-solving, I'm committed to advancing my technical skills and
          contributing to innovative solutions in the tech space.
        </div>
      </div>
    </div>
  );
};
