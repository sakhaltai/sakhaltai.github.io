import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Auto-set the base path when building on GitHub Pages
// - For project sites (user.github.io/repo): base = '/repo/'
// - For user/organization sites (user.github.io): base = '/'
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isCI = !!process.env.GITHUB_ACTIONS;
const isUserSite = /\.github\.io$/.test(repo);

export default defineConfig({
  plugins: [react()],
  base: isCI ? (isUserSite ? "/" : `/${repo}/`) : "/",
});
