import React from "react";
import { Link } from "react-router-dom";

export const ContactLinks = ({
  contact,
  link,
  toLink = "",
  isExternal = false,
}) => {
  return (
    <>
      {!isExternal ? (
        <Link to={toLink}>
          <div className="hover:cursor-pointer text-left">
            <div className="text-2xl font-semibold text-slate-700">
              {contact}
            </div>
            <div className="text-slate-500">{link}</div>
          </div>
        </Link>
      ) : (
        <a href={toLink} target="_blank" rel="noopener noreferrer">
          <div className="hover:cursor-pointer text-left">
            <div className="text-2xl font-semibold text-slate-700">
              {contact}
            </div>
            <div className="text-slate-500">{link}</div>
          </div>
        </a>
      )}
    </>
  );
};
