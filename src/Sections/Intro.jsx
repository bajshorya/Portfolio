import React from "react";

const Intro = () => {
  return (
    <>
      <div>
        <section className="w-full flex justify-center min-h-screen bg-[#221938]">
          <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:p-10 pt-18 text-gray-400 xl:items-center">
            <p className="text-3xl font-montserrat text-coral-red text-center xl:text-left">
              Hi, my name is
            </p>

            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-6xl max-sm:leading-10 font-bold text-white text-center xl:text-left">
              <span className="xl:whitespace-nowrap">Shorya Baj</span>
              <br />
              <span className="xl:whitespace-nowrap">
                I craft things for the web.
              </span>
              <br />
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-center xl:text-left">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Intro;
