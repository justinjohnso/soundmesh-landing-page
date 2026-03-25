import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split("/") : [];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPagesRepo =
  owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = isGitHubActions && owner ? `https://${owner}.github.io` : undefined;
const base = isGitHubActions && repo ? (isUserOrOrgPagesRepo ? "/" : `/${repo}`) : "/";

export default defineConfig({
  output: "static",
  site,
  base,
  integrations: [react(), tailwind()]
});
