# The Communications Observer

An editorial-style university project analysing real-world corporate communications. The deliberately focused site contains a magazine front page and four long-form articles.

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

### Responsive checks

Check the homepage and all four articles at 320, 390, 640, 768, 820, 1024 and 1440px widths, plus phone landscape. Home and Articles should stay visible with at least 44px-high tap targets. Article cards stack at 640px and below; figures reflow for narrow screens, and adjacent-article links stack at 520px and below.

When adjusting the navigation height, update `--header-height` in `src/app/globals.css` so anchor offsets and the reading-progress bar stay aligned. Check long reference links for horizontal overflow, keyboard focus visibility, and the Articles anchor below the sticky header. Browser viewport checks do not replace a final check on a real phone or tablet.

## GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`. In the GitHub repository, set **Settings → Pages → Source** to **GitHub Actions**. The workflow builds with the repository base path and deploys the `out/` directory.

## Editing content

- Article content and metadata: `src/data/articles.ts`
- Shared reference records: `src/data/references.ts` (article lists are alphabetised automatically)
- Combined reference list for submission: `docs/references.md` (update this copy when reference records change)
- Global editorial styles: `src/app/globals.css`
- Homepage content: `src/app/page.tsx`
- Reusable article layout: `src/components/ArticleTemplate.tsx`
- Replaceable photography: `public/images/`

All factual claims, quotations and references should be checked against the linked primary and academic sources before university submission.
