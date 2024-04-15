import React from "react";
import { me } from "../assets/img";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="bg-[#110C1F] min-h-screen flex justify-center items-center">
          <div className="max-w-screen-xl px-6 py-12 text-gray-400 flex flex-col sm:flex-row items-center">
            <div className="text-center sm:text-left sm:mr-10 mb-10 sm:mb-0 sm:w-1/2">
              <h1 className="sm:text-5xl md:text-6xl font-bold mb-8">
                <span className="text-coral-red text-3xl">Hi, my name is</span>
                <br />
                <span className="text-white text-9xl transition-colors duration-300 ease-in-out hover:text-[#6345a3] hover:cursor-pointer hover:scale-105 hover:shadow-xl">
                  Shorya Baj
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8">
                I craft things for the web.
              </p>
            </div>
            <div className="sm:w-1/2">
              <img
                src={me}
                alt="Shorya"
                className="rounded-3xl p-5 transition-transform hover:scale-105 hover:border hover:cursor-pointer"
                width={350}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
