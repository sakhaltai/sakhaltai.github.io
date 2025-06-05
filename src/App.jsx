// src/App.jsx

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NoteGroupingPage from "./components/NoteDroplets.tsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root" className="max-w-3xl mx-auto p-4 text-center">
      {/* 🔹 Navigation */}
      <nav className="mb-8 space-x-4">
        <Link to="/" className="underline hover:text-blue-400">
          Home
        </Link>
        <Link to="/notes" className="underline hover:text-blue-400">
          Notes
        </Link>
      </nav>

      {/* 🔹 Route Outlet */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <div className="flex justify-center space-x-8 mb-6">
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
              <div className="card mb-4">
                <button onClick={() => setCount((c) => c + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        />

        {/* Notes Route */}
        <Route path="/notes" element={<NoteGroupingPage />} />
      </Routes>
    </div>
  );
}
