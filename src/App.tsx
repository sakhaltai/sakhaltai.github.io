// App.tsx

import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teaching from "./pages/Teaching";
import BirdBingo from "./pages/BirdBingo";
import RockyCare from "./pages/RockyCare";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="wrap">
      <header className="py-4 flex items-center justify-between relative">
        <Link to="/" className="brand">
          Nic Hartmann
        </Link>

        {/* Desktop nav */}
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
          <Link className="btn" to="/bird-bingo">
            Bird Bingo
          </Link>
          <Link className="btn" to="/rocky-care">
            Rocky Care
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden btn"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[var(--bg-elev)] border border-[var(--border)] rounded-xl mt-2 p-4 flex flex-col gap-3 sm:hidden z-50 shadow-card">
            <a
              className="btn"
              href="/#featured"
              onClick={() => setMenuOpen(false)}
            >
              Featured
            </a>
            <a className="btn" href="/#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a
              className="btn"
              href="/#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className="btn"
              href="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              className="btn"
              to="/teaching"
              onClick={() => setMenuOpen(false)}
            >
              Teaching
            </Link>
            <Link
              className="btn"
              to="/bird-bingo"
              onClick={() => setMenuOpen(false)}
            >
              Bird Bingo
            </Link>
            <Link
              className="btn"
              to="/rocky-care"
              onClick={() => setMenuOpen(false)}
            >
              Rocky Care
            </Link>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/bird-bingo" element={<BirdBingo />} />
        <Route path="/rocky-care" element={<RockyCare />} />
      </Routes>

      <Footer />
    </div>
  );
}
