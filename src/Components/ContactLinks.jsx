import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/icons/icons8-github.svg";
import twitterIcon from "../assets/icons/icons8-twitter.svg";
import linkedinIcon from "../assets/icons/icons8-linkedin.svg";
import emailIcon from "../assets/icons/icons8-gmail.svg";
const iconMap = {
  Github: githubIcon,
  "X/Twitter": twitterIcon,
  LinkedIn: linkedinIcon,
  Email: emailIcon,
};

export const ContactLinks = ({
  contact,
  link,
  toLink = "",
  isExternal = false,
}) => {
  const Icon = iconMap[contact];
  return (
    <>
      {!isExternal ? (
        <Link to={toLink} target="_blank" rel="noopener noreferrer">
          <div className="hover:cursor-pointer text-left flex items-center space-x-2">
            {Icon && (
              <img
                src={Icon}
                alt={`${contact} icon`}
                className="w-10 h-10 mr-2"
              />
            )}
            <div>
              <div className="text-2xl font-semibold text-slate-300">
                {contact}
              </div>
              <div className="text-slate-400">{link}</div>
            </div>
          </div>
        </Link>
      ) : (
        <a href={toLink} target="_blank" rel="noopener noreferrer">
          <div className="hover:cursor-pointer text-left flex items-center space-x-2 ">
            {Icon && (
              <img
                src={Icon}
                alt={`${contact} icon`}
                className="w-10 h-10 mr-2"
              />
            )}
            <div>
              <div className="text-2xl font-semibold text-slate-300">
                {contact}
              </div>
              <div className="text-slate-500">{link}</div>
            </div>
          </div>
        </a>
      )}
    </>
  );
};
