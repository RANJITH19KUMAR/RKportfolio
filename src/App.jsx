import React, { useState, useEffect } from "react";

import Navbars from "./Compoents/Navbars";
import Hero from "./Compoents/Hero";
import About from "./Compoents/About";
import Skill from "./Compoents/Skill";
import Projects from "./Compoents/Projects";
import Experience from "./Compoents/Experience";
import Certificate from "./Compoents/Certificate";
import Contact from "./Compoents/Contact";
import Footer from "./Compoents/Footer";

import "./App.css";

const App = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "dark-theme" : "light-theme"}>

      <Navbars
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Certificate />
      <Contact />
      <Footer />

    </div>

  );
};

export default App;