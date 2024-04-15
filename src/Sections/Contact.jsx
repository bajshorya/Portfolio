import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#110C1F] min-h-screen flex justify-start items-center">
        <div className="max-w-4xl mx-6 ">
          <h1 className="font-semibold text-7xl text-white pb-8 cursor-pointer">
            Contact Me
          </h1>
          <div className="rounded-xl p-8 text-white text-lg  hover:shadow-2xl cursor-pointer">
            <p className="text-xl italic p-2 ">
              I'm looking for any new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <h2 className="text-3xl p-2">+91-9829044679</h2>
            <h2 className="text-3xl p-2">jain.shorya11@gmail.com</h2>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
