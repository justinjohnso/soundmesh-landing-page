import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split("/") : [];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const pagesOrigin = process.env.GITHUB_PAGES_ORIGIN;
const pagesBasePath = process.env.GITHUB_PAGES_BASE_PATH;
const isUserOrOrgPagesRepo =
  owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = isGitHubActions
  ? pagesOrigin || (owner ? `https://${owner}.github.io` : undefined)
  : undefined;

const base = isGitHubActions
  ? pagesBasePath !== undefined
    ? pagesBasePath || "/"
    : repo
      ? isUserOrOrgPagesRepo
        ? "/"
        : `/${repo}`
      : "/"
  : "/";

export default defineConfig({
  output: "static",
  site: "https://soundmesh.xyz",
  integrations: [react(), tailwind(), sitemap()]
});