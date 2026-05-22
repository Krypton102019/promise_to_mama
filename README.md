# A Promise for MaMa <3

A heartfelt Vite + React app built with TanStack Router and Tailwind CSS.

## Features

- Single-page experience with smooth route transitions
- Background music and video support
- Animated apology/promise steps
- Static site build ready for Netlify

## Local development

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build

```bash
npm run build
```

This produces a static build in `dist/`.

## Netlify deployment

This project includes a `netlify.toml` file configured for Netlify:

- build command: `npm install && npm run build`
- publish directory: `dist`
- SPA redirect for client-side routing

To deploy:

1. Push the project to a Git repository.
2. Connect the repository in Netlify.
3. Use the build command and publish directory above.

## Notes

- The app uses asset imports for images, audio, and video from `src/assets`.
- If you want to host this on Netlify, make sure the repo is linked and build logs show a successful `vite build`.
