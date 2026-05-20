# GitHub to Vercel deployment

This project is intended to use the flow:

```text
Local changes -> GitHub main branch -> Vercel automatic deployment
```

## Local push

From the project folder:

```bash
sh scripts/push-to-github.sh "Update site"
```

The script stages all local changes, creates a commit, and pushes it to `origin/main`.

## Vercel setup

In Vercel, connect the project to:

```text
https://github.com/kairosir/maslennikov
```

Recommended settings:

- Framework Preset: `Next.js`
- Production Branch: `main`
- Install Command: `pnpm install`
- Build Command: `node .v0/inject-built-with-v0.mjs && next build`
- Output Directory: keep default for Next.js

The repository already contains `vercel.json` with the build command Vercel should use.

After the Vercel Git integration is connected, every push to `main` will trigger a production deployment.
