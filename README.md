# Vishnu — Portfolio

Personal portfolio for **Koneti Vishnuvardhan Raju** — CSE student at Lovely Professional University, heading toward data science.

🔗 **Live:** published version linked from the portfolio conversation / your own deploy (see below)

## Concept

A "working notebook" instead of a generic dark-tech template: paper-and-ink in light mode, chalkboard-and-chalk in dark mode (follows system preference automatically).

## Latest update

- **Journey is now a two-tab section** — "Education" and "Certifications" — instead of a stacked list. Tabs reuse the site's existing accessible tablist pattern (arrow-key navigation included).
- Education is now a dotted vertical **timeline** instead of a plain row table.
- Certificates moved from the drag-scroll carousel to a **touch-friendly accordion**: each row shows the date, title and issuer, with a circular **+ button that rotates into a ×** on expand. Only one row opens at a time. Rows with an on-file certificate still open the same full-screen lightbox as before when you tap the image.
- Category filter chips (All / Programming / Soft skills / Industry) now filter the accordion rows, and collapse any open row that gets filtered out.
- Removed the hero logic-puzzle card ("A puzzle, on the house") and its six puzzles — the hero is now a single, focused column: photo, intro, and CTAs
- Removed the "Germany" mentions from the hero description, hero meta, and the Work section
- Certificates now show the **real certificate image** for every card that has one on file (5 of 8), as a clickable thumbnail
- Added a **lightbox**: click any certificate thumbnail to open the full image, with a caption, close button, backdrop click, and Escape-to-close
- Added **category filter chips** above the carousel (All / Programming / Soft skills / Industry) that filter the cards in place and keep the drag-scroll and dot indicators in sync
- Cards now lift slightly on hover for a bit more tactility

## What changed from v1

- Removed the Spotify dashboard and the Men's Shopping Website (visitor-facing filler unrelated to the current direction)
- Reframed "Work" around the one real project (Student Performance Analyzer) plus an honest "what I'm learning now" panel, instead of padding with unfinished projects
- Added all verifiable certificates/training as a **drag-to-scroll, swipeable card carousel** (8 certificates)
- New visual identity: warm paper / chalkboard theme, Fraunces + Space Grotesk + IBM Plex Mono, sentence-case labels (not template ALL-CAPS)
- Your photo, pinned into the hero

## Project structure

```
vishnu-portfolio-v2/
├── index.html                 # Page markup and content
├── styles.css                 # All styling (paper/chalkboard theme, layout, animation)
├── app.js                     # All interactivity (carousel + filters, lightbox, chart, tabs)
├── vishnu-raju-cv.pdf          # Downloadable CV
├── profile/
│   └── profile-photo.jpg       # Hero headshot
├── certificates/
│   ├── SKILLERA_CERTIFICATE.png
│   ├── HACKER_RANK_CERTIFICATE.png
│   ├── CSE_PATHSHALA_CERTIFICATE.jpeg
│   ├── NEO_COLAB_CERTIFICATE_C_PROGRAM.png
│   └── INFOSYS_CERTIFICATE.jpg
└── README.md
```

## Running locally

No build step or dependencies.

```bash
git clone https://github.com/kvvraju24/vishnu-portfolio.git vishnu-portfolio-v2
cd vishnu-portfolio-v2
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deployment

Fully static — deploy as-is to **GitHub Pages**, **Netlify**, or **Vercel**, pointing at `index.html`.

## Editing the certificates

Each certificate is an `<article class="cert-card">` block inside `#cert-carousel` in `index.html`, with a `data-category` attribute (`programming`, `soft`, or `industry`) that the filter chips use. Copy an existing block to add a new one — the carousel, dots, and filters pick it up automatically.

To give a card a clickable image, drop the file in `certificates/` and add a `<button class="cert-thumb">` inside the card, following the pattern of the existing cards — set `data-img`, `data-title`, and `data-issuer` on the button so the lightbox knows what to show. Cards without a `cert-thumb` button just show the text details, no image required.

## Author

**Koneti Vishnuvardhan Raju**
- GitHub: [@kvvraju24](https://github.com/kvvraju24)
- LinkedIn: [kvvraju24](https://www.linkedin.com/in/kvvraju24)
- Email: kvvraju24@gmail.com
