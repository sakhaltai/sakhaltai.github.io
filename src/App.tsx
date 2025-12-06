// App.tsx

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teaching from "./pages/Teaching";
import BirdBingo from "./pages/BirdBingo"; // ⬅️ add this

export default function App() {
  return (
    <div className="wrap">
      <header className="py-4 flex items-center justify-between">
        <Link to="/" className="brand">
          Nic Hartmann
        </Link>
        <nav className="hidden sm:flex gap-2">
          <a className="btn" href="/#featured">
            Featured
          </a>
          <a className="btn" href="/#work">
            Work
          </a>
          <a className="btn" href="/#about">
            About
          </a>
          <a className="btn" href="/#contact">
            Contact
          </a>
          <Link className="btn" to="/teaching">
            Teaching
          </Link>
          {/* new nav link for Jojo’s page */}
          <Link className="btn" to="/bird-bingo">
            Bird Bingo
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/bird-bingo" element={<BirdBingo />} /> {/* new route */}
      </Routes>

      <Footer />
    </div>
  );
}
