import React from "react";
import { Navbar } from "../Components/Navbar";
import { ContactCard } from "../Components/ContactCard";
import { Footer } from "../Components/Footer";

export const Contact = () => {
  return (
    <div>
      <div className="max-w-2xl lg:max-w-xl mx-auto">
        <Navbar />
        <div>
          <ContactCard />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
