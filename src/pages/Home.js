import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="background-image" />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
