import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Intro from "./Sections/Intro";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Intro />
      </div>
    </Router>
  );
}

export default App;
