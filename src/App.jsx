import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frameworks from "./Components/Frameworks";
import Tool_Lib from "./Components/Tool_Lib";
import Languages from "./Components/Languages";

const App = () => {

  window.addEventListener("keydown", (e) => {
    if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
      e.preventDefault();
    }
  });
  
  document.addEventListener("touchmove", (event) => {
    if (event.scale !== 1) { 
      event.preventDefault(); // Prevent zooming but allow scroll
    }
  }, { passive: false });
  



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Languages />} />
          <Route path="/Frameworks" exact element={<Frameworks />} />
          <Route path="/Frameworks/ToLib" element={<Tool_Lib />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
};

export default App;

// continue on jsFramework components and give heading, definition aur busend;
