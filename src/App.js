import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Qualification from "./components/Qualification";
import Certifications from "./components/Certifications";


function App(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
