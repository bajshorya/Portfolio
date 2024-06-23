import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Intro from "./Sections/Intro";
import AboutMe from "./Sections/AboutMe";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";
import Work from "./Sections/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
//  <Router>
//    <Navbar />
//    <Routes>
//      <Route path="/" element={<Intro />} />
//      <Route path="/about" element={<AboutMe />} />
//      <Route path="/skills" element={<Skills />} />
//    </Routes>
//  </Router>;
