import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="padding-x py-8 lg:px-12 lg:py-6 bg-[#110C1F] text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-3xl ">
          Shorya Baj
        </Link>

        <ul className="flex gap-8 lg:gap-12">
          <li>
            <Link to="/about" className="text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-lg">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-lg">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
