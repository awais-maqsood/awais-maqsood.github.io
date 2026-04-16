import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgSite = repoName?.endsWith(".github.io") ?? false;
// Project pages: `/<repo>/`
// User/Org pages (repo is `user.github.io`): `/`
const pagesBase = repoName ? (isUserOrOrgSite ? "/" : `/${repoName}/`) : "/";

export default defineConfig(({ mode }) => ({
  base: pagesBase,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
