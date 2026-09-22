# 🍛 Malabar Muscat

A modern, animated restaurant website for **Malabar Muscat** — a fictional fine-dining destination in Muscat, Oman, serving authentic Kerala-inspired Indian cuisine alongside international favorites. The site presents the restaurant's story, menu, banquet hall packages, services, and photo gallery, with a booking-oriented contact page.

## ✨ Features

- **Home** — Full-screen video hero, an animated "kitchen live" showcase, and quick info cards (location, contact, hours)
- **About Us** — Restaurant history, vision, and Kerala culinary inspiration
- **Menu** — Filterable dish grid (All / Indian / International) with pricing in OMR
- **Banquet Halls** — Three venues (Royal Malabar Hall, Emerald Suite, The Pearl Lounge), each with Bronze / Silver / Gold pricing tiers
- **Services** — Dine-in, outdoor catering, corporate events, event planning, private chef, and live entertainment
- **Gallery** — Masonry-style photo gallery with hover captions
- **Contact** — Location, phone, email, and a reservation/feedback form
- Responsive layout with a sticky, scroll-aware navbar and mobile menu
- Smooth scroll-triggered animations and transitions throughout

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 6](https://vitejs.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Routing | [React Router 7](https://reactrouter.com/) (`BrowserRouter`) |
| Animation | [Motion](https://motion.dev/) (`motion/react`) for scroll/hover/page transitions |
| Icons | [Lucide React](https://lucide.dev/) |

## 📁 Project Structure

```
src/
├── components/       # Navbar, Footer, ScrollToTop
├── pages/            # Home, About, Menu, Banquet, Services, Gallery, Contact
├── App.tsx           # Router and page layout
└── main.tsx          # App entry point
public/                # Static assets, e.g. public/Vids/cook.mp4 → /Vids/cook.mp4
```

## 🚀 Run Locally

Prerequisites: [Node.js](https://nodejs.org/)

```bash
npm install       # install dependencies
npm run dev       # start the dev server (http://localhost:3000)
npm run build     # production build, output in dist/
npm run preview   # preview the production build
npm run lint      # type-check with tsc
```

## 🌐 Deploying

The site uses client-side routing (`BrowserRouter`), so the host must serve `index.html` for unknown paths (SPA fallback) — otherwise refreshing on a route like `/menu` will return a 404.
