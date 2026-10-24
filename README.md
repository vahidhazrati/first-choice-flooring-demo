# First Choice Flooring digital sample room

A React prototype for a QR-linked flooring catalog. Product pages share one template and use family-level information; confirm the exact style and its current technical details with First Choice Flooring.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Run locally

```sh
npm install
npm run dev
```

Open the local address printed by Vite (normally `http://localhost:5173/`).

## Build and checks

```sh
npm run build
npm run lint
npm run preview
```

The production build includes a TypeScript project check before bundling.

## Edit product content

Product copy, gallery images, source URLs, benefits, and supported specifications live in `src/data/products.ts`. Add or update a typed entry using `Product` from `src/types/product.ts`. Routes are generated from each product's `path`, and every entry uses the shared page in `src/pages/ProductPage/ProductPage.tsx`.

Keep product-family claims separate from exact sample specifications. Update image alt text and credits with their sources; do not add unverified SKU, colour, price, availability, dimensions, or warranty information.

## Routes

- `/#/` — sample catalog
- `/#/products/mercier-maple` — Mercier Maple Hardwood concept
- `/#/products/shaw-pet-perfect-plus` — Shaw Pet Perfect Plus concept

## Live demo

- Homepage: https://vahidhazrati.github.io/first-choice-flooring-demo/
- Mercier Maple Hardwood: https://vahidhazrati.github.io/first-choice-flooring-demo/#/products/mercier-maple
- Shaw Pet Perfect Plus: https://vahidhazrati.github.io/first-choice-flooring-demo/#/products/shaw-pet-perfect-plus

The app uses hash routing so product links work on GitHub Pages without an SPA rewrite. Section links scroll within each product without replacing the route hash. The Vite base path is configured for the `first-choice-flooring-demo` repository.

## GitHub Pages deployment

Pushing to `main` runs `.github/workflows/deploy.yml`. The workflow installs from `package-lock.json` with `npm ci`, runs lint and the production build on Node.js 22, then publishes `dist` with GitHub Pages. GitHub Pages is configured to use Actions as its source. Future pushes to `main` deploy updates automatically.

## QR codes

Static PNG and SVG codes plus a printable sheet are in `qr-codes/`. To regenerate the codes after changing a live destination, update `scripts/generate-qr-codes.mjs` and run `npm run generate:qr`. The script verifies each PNG by decoding it locally and matching the exact URL.

## Media note

Images are linked from First Choice Flooring's public Squarespace gallery and Shaw Floors' public manufacturer media. Public visibility is not a reuse licence. Confirm permission or replace with retailer-approved assets before public release. The sample pages intentionally do not show a video player because a relevant, working product video could not be confirmed.