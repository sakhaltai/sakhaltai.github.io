import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import WorkHistory from "../components/WorkHistory";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="grid gap-6 md:gap-8">
      <Hero />
      <Featured />
      <WorkHistory />
      <About />
      <Contact />
    </main>
  );
}
