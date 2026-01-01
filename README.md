# Uber Frontend

This is the frontend for the sample Uber-like application. It's a Vite + React app located in the `uber_frontend` folder.

## Prerequisites
- Node.js 16+ or later
- npm (or yarn)

## Setup
1. Install dependencies:

```bash
npm install
```

2. Create a local environment file (optional) to point the frontend to your backend. Example `.env` or `.env.local`:

```
VITE_API_URL=http://localhost:5000
```

## Development
Start the development server (Vite):

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite shows) in your browser.

## Build
Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Useful scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build

## Project structure (key files)
- `src/main.jsx` — app entry
- `src/pages` — page components (Home, Login, Register, Captain pages)

## Notes
- Environment variables for the client must start with `VITE_` to be exposed to the browser.
- If your backend runs on a different port, set `VITE_API_URL` accordingly.

If you'd like, I can also add a short contribution guide or include exact `package.json` scripts here.

