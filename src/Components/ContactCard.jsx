import React from "react";
import { ContactLinks } from "./ContactLinks";

export const ContactCard = () => {
  return (
    <div>
      {" "}
      <div className="text-4xl font-bold text-slate-700 my-5">Contact </div>
      <div className="text-2xl text-slate-500 font-thin mt-5">
        If you'd like to get in touch, you can reach me using the following
        methods.
      </div>
      <div className="text-slate-800  mt-5">
        Please note, that I'm currently "Available" for freelance projects, and
        Internships.
      </div>
      <hr className="my-10" />
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactLinks contact={"Email"} link={"jain.shorya11@gmail.com"} />
          <ContactLinks
            contact={"X/Twitter"}
            link={"@shorya_baj"}
            isExternal={true}
            toLink="https://x.com/shorya_baj"
          />
          <ContactLinks
            contact={"Github"}
            link={"git/bajshorya"}
            isExternal={true}
            toLink="https://github.com/bajshorya"
          />
          <ContactLinks
            contact={"LinkedIn"}
            link={"in/shoryabaj"}
            isExternal={true}
            toLink="https://www.linkedin.com/in/shoryabaj-2a286279/"
          />
        </div>
      </div>
    </div>
  );
};
