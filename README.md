# Portfolio — Mahpara Islam Nafisa

A personal portfolio built with **React + Vite**, deployed on **GitHub Pages**.

## Run locally (optional)
Requires Node.js 18+.
```bash
npm install
npm run dev      # open the URL it prints (usually http://localhost:5173)
```

## Edit your info
All personal content is in **`src/config.js`** — edit that one file.

## Deploy to GitHub Pages (recommended: GitHub Actions)
1. Create a **public** GitHub repository named **`portfolio`**
   (the name must match `base` in `vite.config.js`, which is `/portfolio/`).
2. Upload all these project files to the repo (do NOT upload `node_modules`).
3. On GitHub: **Settings → Pages → Source → "GitHub Actions"**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys
   automatically on every push. After ~2 minutes your site is live at:
   `https://nafisa577.github.io/portfolio/`

## Tech
React 18, Vite 5, custom CSS. No backend.
