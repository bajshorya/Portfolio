import React from "react";
// import { Link } from "react-router-dom";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  return (
    <header className="padding-x py-8 lg:px-12 lg:py-6 bg-[#110C1F] text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto ">
        <a href="/" className="text-3xl ">
          Shorya Baj
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monts errat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <ul className="flex gap-8 lg:gap-12 ">
          <li>
            <Link
              to="/about"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#896fc1]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#896fc1]"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#896fc1]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#896fc1]"
            >
              Contact
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Navbar;
