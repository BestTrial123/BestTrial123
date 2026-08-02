# Deployment Guide

This is a static React + Tailwind CSS website. It can be deployed to any static site host.

## Build

```bash
npm install
npm run build
```

The production-ready files are output to the `dist/` folder.

## Option 1: Netlify (Recommended)

1. Push this repo to GitHub/GitLab.
2. Go to [Netlify](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect your repo.
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**.

## Option 2: Vercel

1. Push this repo to GitHub/GitLab.
2. Go to [Vercel](https://vercel.com) → **Add New Project**.
3. Import your repo.
4. Vercel auto-detects Vite. Framework preset: **Vite**. Build command: `npm run build`, Output directory: `dist`.
5. Click **Deploy**.

## Option 3: GitHub Pages

1. Install `gh-pages` as a dev dependency:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## Option 4: Any Static Host

Upload the contents of the `dist/` folder to any static file host (S3, Firebase Hosting, Cloudflare Pages, etc.).

## Local Development

```bash
npm install
npm run dev
```

Then visit http://localhost:5173
