// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/nav";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
