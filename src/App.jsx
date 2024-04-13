import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Intro from "./Sections/Intro";
import AboutMe from "./Sections/AboutMe";
import Skills from "./Sections/Skills";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Intro />

        <AboutMe />
        <hr />
        <Skills />
      </div>
    </Router>
  );
}

export default App;
