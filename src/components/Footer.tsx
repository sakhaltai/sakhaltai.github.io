import React from "react";
import { site } from "../content";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-[var(--muted)]">
      <p>
        © {new Date().getFullYear()} {site.name}. Built with React + Vite +
        Tailwind.
        <a
          className="underline-offset-2 hover:underline ml-1"
          href={site.contactHref}
        >
          Get in touch
        </a>
        .
      </p>
    </footer>
  );
}
