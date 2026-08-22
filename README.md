# The Communications Observer

An editorial-style university project analysing real-world corporate communications. The deliberately focused site contains a magazine front page and four long-form Field Notes.

## Routes

- `/` — editorial homepage
- `/blog/patagonia-corporate-storytelling/`
- `/blog/singapore-airlines-crisis-communication/`
- `/blog/airbnb-internal-communication/`
- `/blog/dbs-stakeholder-communication/`

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm check
```

The production build is a static export in `out/`.

## GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`. In the GitHub repository, set **Settings → Pages → Source** to **GitHub Actions**. The workflow builds with the repository base path and deploys the `out/` directory.

## Editing content

- Article content and metadata: `src/data/articles.ts`
- Global editorial styles: `src/app/globals.css`
- Homepage content: `src/app/page.tsx`
- Reusable Field Note layout: `src/components/ArticleTemplate.tsx`
- Replaceable photography: `public/images/`

Bracketed text such as `[ACADEMIC REFERENCE TO BE ADDED]` is intentionally left as a verification placeholder. Replace all such content before university submission.
