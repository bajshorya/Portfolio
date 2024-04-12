import React from "react";
import { me } from "../assets/img";

const Intro = () => {
  return (
    <>
      <div className="bg-[#221938] min-h-screen flex justify-center items-center">
        <div className="max-w-4xl px-6 py-12 text-gray-400 flex items-center">
          <div>
            <h1 className="sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="text-coral-red text-3xl">Hi, my name is</span>
              <br />
              <span className="text-white text-9xl hover:text-[#6345a3] hover:cursor-pointer ">
                Shorya Baj
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              I craft things for the web.
            </p>
          </div>
          <div className="ml-10">
            <img
              src={me}
              alt="Shorya"
              width={400}
              className=" rounded-3xl p-5 transition-transform hover:scale-105 hover:border hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
