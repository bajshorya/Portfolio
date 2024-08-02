import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="max-w-2xl lg:max-w-xl mx-auto">
      <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
        <Link to="/">
          <h1 className="text-base  font-semibold text-slate-950">sb</h1>
        </Link>
        <nav className="flex gap-4">
          <Link
            className="text-950 text-sm tracking-tighter  font-semibold"
            to="/info"
          >
            Information
          </Link>
          <Link
            className="text-950 text-sm tracking-tighter  font-semibold"
            to="/work"
          >
            Work
          </Link>
          <Link
            className="text-950 text-sm tracking-tighter  font-semibold"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};
