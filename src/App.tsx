import React from "react";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import WorkHistory from "./components/WorkHistory";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="wrap">
      <header className="py-4 flex items-center justify-between">
        <a href="#top" className="brand">
          Nic Hartmann
        </a>
        <nav className="hidden sm:flex gap-2">
          <a className="btn" href="#featured">
            Featured
          </a>
          <a className="btn" href="#work">
            Work
          </a>
          <a className="btn" href="#about">
            About
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="grid gap-6 md:gap-8">
        <Hero />
        <Featured />
        <WorkHistory />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
