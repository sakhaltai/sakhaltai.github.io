import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Archive from "./pages/Archive";

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
          <Link className="btn" to="/archive">
            Archive
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>

      <Footer />
    </div>
  );
}
