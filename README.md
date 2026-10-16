# Goh Hui Min — Personal Portfolio

Plain HTML + Tailwind CSS (pre-compiled to `public/tailwind.css`) with a little inline vanilla JS. No build step on deploy; the CSS is rebuilt by hand when classes change (see below).

Live: https://hm-base.github.io/Goh-Hui-Min-site/

## Structure

```
public/
  index.html                  <- the whole portfolio (sections below)
  tailwind.css                <- compiled styles (generated, don't edit by hand)
  favicon.svg, og-image.png   <- tab icon and social preview image
  Hui_Min_Goh_Resume_83689592.pdf      <- the "Download Resume" file
  sg-transit/
    index.html                <- SG Transit Liveability demo snapshot
    screenshots/              <- images used by the demo page
```

Sections in `public/index.html`: `#home` `#about` `#skills` `#experience` `#projects` `#contact`

## Deploy

Push to `main` -> GitHub Actions (`.github/workflows/deploy.yml`) publishes `public/` to GitHub Pages.

## Updating the resume

Export your latest resume as a PDF, name it exactly `Hui_Min_Goh_Resume_83689592.pdf`, replace the file in `public/`, then commit and push. The button always points to that name.

## Preview locally

Open `public/index.html` in a browser (needs internet for the Google font only).

## Rebuilding the CSS (only when you add or change Tailwind classes)

1. Download the Tailwind **standalone CLI v3.4.17** for Windows (`tailwindcss-windows-x64.exe`) from
   https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.17 and put it in the repo root (it is git-ignored).
2. Run from the repo root:
   ```
   .\tailwindcss-windows-x64.exe -c tailwind.config.js -i src/input.css -o public/tailwind.css --minify
   ```
3. Commit the updated `public/tailwind.css` together with your HTML change.

Forgetting step 2 means new classes simply won't be styled. Nothing else breaks.
