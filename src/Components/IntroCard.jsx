import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/me.jpg"; // Make sure this path is correct

export const IntroCard = () => {
  return (
    <div className="p-6">
      <div className="text-4xl font-bold text-slate-300 mb-2">
        Namaste, I'm <span className="text-slate-100">Shorya</span>.
      </div>
      <div className="text-2xl text-slate-200 font-thin mb-4">
        A developer from Jaipur, India.
      </div>
      <div className="flex items-center">
        <div className="text-slate-500 flex-1 mr-5">
          I'm a passionate developer specializing in full stack and Web3
          technologies. With expertise in TypeScript, Express.js, Node.js,
          React, and Solidity, I create innovative, cutting-edge solutions.
          Driven by curiosity and a love for technology, I'm always pushing
          boundaries and exploring new frontiers.
        </div>
        <div className="flex-shrink-0">
          <div className="relative h-52 w-52">
            <img
              src={myImage}
              alt="Shorya Baj"
              className="object-cover h-full w-full border border-slate-200 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-slate-500"
            />
            <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-slate-500 rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/info">
          <button
            type="button"
            className="py-2.5 px-8 text-sm font-medium text-white bg-slate-700 rounded-full hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 transition ease-in-out duration-200 hover:-translate-y-1"
          >
            More Information
          </button>
        </Link>
      </div>
      <hr className="my-7 border-slate-600" />
    </div>
  );
};
