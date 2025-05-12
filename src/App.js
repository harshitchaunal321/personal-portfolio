import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;