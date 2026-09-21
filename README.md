# Malabar Muscat

Restaurant website (React + Vite + Tailwind).

## Run locally

Prerequisites: Node.js

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Production build: `npm run build` (output in `dist/`), preview it with `npm run preview`

## Assets

Static files live in `public/` and are served from the site root, e.g. `public/Vids/cook.mp4` is `/Vids/cook.mp4`.

## Deploying

The site uses client-side routing (`BrowserRouter`), so the host must serve `index.html` for unknown paths
(SPA fallback), otherwise refreshing on `/menu` etc. returns a 404.
