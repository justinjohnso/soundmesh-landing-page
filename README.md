# SoundMesh Landing Page

Astro-based landing page for SoundMesh, using React components and Tailwind CSS.

## Stack

- Astro
- React
- Tailwind CSS
- lucide-react icons
- pnpm

## Getting started

Install dependencies:

```bash
pnpm install
```

Start local dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project structure

- `src/pages/index.astro`: Astro page entrypoint
- `src/components/LandingPage.jsx`: Main landing page UI
- `src/styles/global.css`: Tailwind imports
- `astro.config.mjs`: Astro config + GitHub Pages base/site handling
- `.github/workflows/deploy.yml`: GitHub Actions workflow for Pages deploy

## Deploying to GitHub Pages

This repository includes an Actions workflow that deploys on pushes to `main`.

1. Push this project to a GitHub repository.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the Actions tab).

The workflow builds with `pnpm` and publishes `dist/`.

### Base path behavior

`astro.config.mjs` automatically adjusts the base path in CI:

- For project pages (`owner/repo`), base becomes `/${repo}`.
- For user/org pages (`owner.github.io`), base stays `/`.
- For custom domains (e.g. `soundmesh.xyz`), GitHub Pages metadata is used so base stays `/` and asset paths remain correct.

### Custom domain

This project includes `public/CNAME`:

```txt
soundmesh.xyz
```

GitHub Pages will publish using this domain once DNS is configured in repository settings.
