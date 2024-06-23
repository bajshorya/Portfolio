import React from "react";
import InstagramIcon from "../assets/icons/icons8-instagram-50.svg";
import TwitterIcon from "../assets/icons/icons8-twitter.svg";
import GithubIcon from "../assets/icons/icons8-github.svg";
import LinkedInIcon from "../assets/icons/icons8-linkedin.svg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#110C1F] min-h-screen flex justify-center items-center">
        <div className="w-full max-w-4xl mx-6">
          <h1 className="font-semibold text-7xl text-white text-center pb-8 cursor-pointer">
            Contact Me
          </h1>
          <div className="rounded-xl p-8 text-white text-lg space-y-4">
            <p className="text-xl italic p-2">
              I'm looking for any new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <h2 className="text-3xl p-2">+91-9829044679</h2>
            <h2 className="text-3xl p-2">jain.shorya11@gmail.com</h2>
            <div className="flex justify-start items-center gap-3">
              <a href="https://x.com/shorya_baj" target="_blank">
                <img src={TwitterIcon} alt="twitter" />
              </a>
              <a href="https://github.com/bajshorya" target="_blank">
                <img src={GithubIcon} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/shoryabaj-2a286279/"
                target="_blank"
              >
                <img src={LinkedInIcon} alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/shoryabaj/" target="_blank">
                <img src={InstagramIcon} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
