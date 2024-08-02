import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="max-w-2xl  lg:max-w-xl  mx-auto mb-10">
      <hr className="my-7" />
      <div className="flex justify-between mt-5">
        <div className="text-xs text-slate-400 ">
          © 2022 - 2024 / Shorya Baj
        </div>
        <Link to={"https://github.com/bajshorya/Portfolio.git"}>
          <div className="text-xs text-slate-400">View Source</div>
        </Link>
      </div>
    </div>
  );
};
