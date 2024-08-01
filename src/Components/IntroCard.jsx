import React from "react";
import { Link } from "react-router-dom";

export const IntroCard = () => {
  return (
    <div>
      <div className="text-4xl font-bold  ">Namaste, I'm Shorya.</div>
      <div className="text-2xl text-slate-500 font-thin mt-2">
        A developer from Jaipur, India.
      </div>
      <div className="text-slate-800  mt-2">
        I'm a passionate developer specializing in full stack and Web3
        technologies. With expertise in TypeScript, Express.js, Node.js, React,
        and Solidity, I create innovative, cutting-edge solutions. Driven by
        curiosity and a love for technology, I'm always pushing boundaries and
        exploring new frontiers.
      </div>
      <div className="">
        <Link to="/info">
          <button
            type="button"
            className="py-2.5 px-8  mb-2 mt-5 text-sm  font-medium text-white focus:outline-none bg-black  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-slate-600 focus:z-10 focus:ring-4 focus:ring-gray-100 transition ease-in-out delay-150  hover:-translate-y-1"
          >
            More Information
          </button>
        </Link>
      </div>
      <hr className="mt-5 " />{" "}
    </div>
  );
};
