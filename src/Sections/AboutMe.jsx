import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="bg-[#221938] min-h-screen flex justify-center items-center">
        <div className="max-w-4xl mx-6 ">
          <h1 className="font-semibold text-7xl text-white pb-8 text-center   cursor-pointer">
            About Me
          </h1>
          <div className="bg-[#3d315b] rounded-xl p-8 text-white text-lg  hover:shadow-2xl hover:border border-white cursor-pointer">
            <p className="mb-8">
              Hey hey! I'm{" "}
              <span className="text-[#896fc1] font-bold">Shorya Baj</span>, a
              frontend fanatic with a dash of blockchain brilliance. Currently
              cruising through my B.Tech journey, where I'm not only mastering
              the art of frontend web development but also diving deep into the
              fascinating world of blockchain technology.
            </p>
            <p className="mb-8">
              Armed with HTML, CSS, JavaScript, and React, I'm all about
              bringing stunning designs to life and sprinkling a bit of
              blockchain magic wherever I go. Whether I'm crafting sleek
              interfaces or exploring the endless possibilities of decentralized
              apps, I'm constantly fueled by curiosity and creativity.
            </p>
            <p>
              When I'm not coding up a storm, you can find me soaking up the
              latest tech trends, tinkering with new gadgets, or plotting my
              next big project. Let's join forces and revolutionize the web, one
              blockchain-powered masterpiece at a time!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
