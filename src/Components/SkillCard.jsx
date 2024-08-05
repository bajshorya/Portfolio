import React from "react";
import PropTypes from "prop-types";

export const SkillCard = ({ name, link }) => {
  return (
    <div className="bg-slate-300 border border-gray-200 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-slate-100 hover:border-slate-300 hover:shadow-lg ease-in-out duration-300 hover:cursor-pointer">
      <div className="flex flex-col items-center p-4">
        <img
          src={link}
          alt={name}
          className="w-12 h-12 mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="text-sm font-medium text-gray-800">{name}</div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
