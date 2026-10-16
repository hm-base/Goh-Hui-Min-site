# Goh Hui Min — Personal Portfolio

Plain HTML + Tailwind (via CDN) with a little inline vanilla JS. No build step.

Live: https://hm-base.github.io/Goh-Hui-Min-site/

## Structure

```
public/
  index.html                  <- the whole portfolio (sections below)
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

Open `public/index.html` in a browser (needs internet for the Tailwind CDN and fonts).
