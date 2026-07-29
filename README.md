# myersjack.dev

Personal site for Jack Myers. Astro, fully static, no client frameworks.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Structure

- `src/pages/` — index (About), projects, research, blog
- `src/content/blog/` — Markdown posts (frontmatter: `title`, `date`,
  optional `description`, `draft`). `draft: true` posts are excluded.
- `src/layouts/Base.astro` — shared shell (nav, footer, meta)
- `src/styles/global.css` — all styling (dark theme, no framework)
- `public/assets/` — render images · `public/files/` — resume + thesis PDFs
- `public/CNAME` — custom-domain file for GitHub Pages (`myersjack.dev`)

## Deploy to GitHub Pages (custom domain myersjack.dev)

The old site is served from the `jackm97/jackm97.github.io` fork (al-folio).
Recommended path — new repo, keep the old one until cutover:

1. Create the repo and push:
   ```sh
   gh repo create jackm97/myersjack-dev --public --source . --push
   ```
2. Add the GitHub Actions workflow for Astro Pages deploys:
   ```sh
   mkdir -p .github/workflows
   # use the official Astro action: withastro/action
   ```
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   on:
     push: { branches: [main] }
     workflow_dispatch:
   permissions: { contents: read, pages: write, id-token: write }
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: withastro/action@v3
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```
3. Repo Settings → Pages → Source: **GitHub Actions**.
4. **Custom domain cutover:** remove `myersjack.dev` from the old
   `jackm97.github.io` repo's Pages settings, then set it on this repo
   (Settings → Pages → Custom domain → `myersjack.dev`). The `public/CNAME`
   file keeps it pinned across deploys. DNS should already point at GitHub
   Pages; no DNS changes needed if the domain worked before.
5. Verify `https://myersjack.dev` serves the new site; then archive the
   al-folio fork.

## Content rules (do not violate)

- No "SIGGRAPH" anywhere on the site (double-blind review protection);
  light-transport work is "publication in preparation."
- No NAGA Labs LLC / company / funding language.
- Mycelium: capability-level prose only — no math, no mechanisms.
- "Substrate" is Mycelium-internal vocabulary — never used for CospanMDAO.
- Professional email: jack@myersjack.dev.
