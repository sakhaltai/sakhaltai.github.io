// src/App.tsx

import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import BirdBingo from "./pages/BirdBingo";
import Home from "./pages/Home";
import JapaneseArticles from "./pages/JapaneseArticles";
import RockyCare from "./pages/RockyCare";
import Teaching from "./pages/Teaching";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Click-away boundary: ONLY button + dropdown card
  const menuRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    if (!menuOpen) return;

    lastScrollYRef.current = window.scrollY;

    const onPointerDown = (e: PointerEvent) => {
      const wrap = menuRef.current;
      if (!wrap) return;
      if (!wrap.contains(e.target as Node)) setMenuOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const onScroll = () => {
      // Close only when scrolling DOWN
      const y = window.scrollY;
      const prev = lastScrollYRef.current;
      if (y > prev) setMenuOpen(false);
      lastScrollYRef.current = y;
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  return (
    <div className="wrap">
      <header className="py-4 flex items-center justify-between relative">
        <Link to="/" className="brand">
          Nic Hartmann
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex flex-wrap gap-2 justify-end">
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
          <Link className="btn" to="/jp">
            日本語読解練習
          </Link>
        </nav>

        {/* Mobile menu alignment wrapper (no ref here) */}
        <div className="sm:hidden relative flex-1 flex justify-end">
          {/* Ref boundary is tight: button + dropdown */}
          <div ref={menuRef} className="relative">
            <button
              className="btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>

              {/* Animated hamburger/X */}
              <span className="relative inline-block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-current rounded transition-all duration-200 ease-out
                    ${
                      menuOpen
                        ? "translate-y-[7px] rotate-45"
                        : "translate-y-0 rotate-0"
                    }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current rounded transition-all duration-200 ease-out
                    ${
                      menuOpen
                        ? "opacity-0 scale-x-75"
                        : "opacity-100 scale-x-100"
                    }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-5 bg-current rounded transition-all duration-200 ease-out
                    ${
                      menuOpen
                        ? "-translate-y-[7px] -rotate-45"
                        : "translate-y-0 rotate-0"
                    }`}
                />
              </span>
            </button>

            {menuOpen && (
              <div
                className="absolute top-full right-0 mt-2 z-50 shadow-card
                           w-[min(92vw,520px)]
                           bg-[var(--bg-elev)] border border-[var(--border)] rounded-xl p-4
                           flex flex-col gap-3"
              >
                <div className="text-sm font-semibold">Jump</div>

                <a
                  className="btn"
                  href="/#featured"
                  onClick={() => setMenuOpen(false)}
                >
                  Featured
                </a>
                <a
                  className="btn"
                  href="/#work"
                  onClick={() => setMenuOpen(false)}
                >
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
                <Link
                  className="btn"
                  to="/jp"
                  onClick={() => setMenuOpen(false)}
                >
                  日本語読解練習
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/bird-bingo" element={<BirdBingo />} />
        <Route path="/rocky-care" element={<RockyCare />} />

        <Route path="/jp" element={<JapaneseArticles />} />
        <Route path="/jp/:id" element={<JapaneseArticles />} />
      </Routes>

      <Footer />
    </div>
  );
}
