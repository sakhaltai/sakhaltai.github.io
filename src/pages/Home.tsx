// src/pages/Home.tsx

import About from "../components/About";
import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import WorkHistory from "../components/WorkHistory";

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
