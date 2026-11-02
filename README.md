# Vishnu — Portfolio

Personal portfolio for **Koneti Vishnuvardhan Raju** — a computer science student at Lovely Professional University, heading toward a career in data science.

## Design

A clean, editorial look built for a data-science portfolio: warm off-white and ink in light mode, deep graphite with periwinkle and mint accents in dark mode. It follows the system theme by default, and the sun/moon button in the header lets visitors switch (their choice is remembered). Type is Geist for text, Geist Mono for labels and Instrument Serif italics for accents.

## What's on the page

- **Hero** — intro, CV download, profile links and a headline result from Salevora.
- **Selected work** — Salevora (featured, with live demo), FitAI, ResolveDesk, Nutryxen, and the Student Performance Analyzer with its interactive chart.
- **About** — background, what I'm learning now, and tabbed skill groups.
- **Journey** — education timeline plus a filterable certificate accordion with a full-screen image viewer.
- **Contact** — email (with copy button), GitHub, LinkedIn and résumé.

Sections fade in as you scroll, and all motion is disabled for visitors who prefer reduced motion.

## Project structure

This is a static website. The folder name on your Mac can be anything, but the project should contain these files in the root folder:

```text
<your-folder-name>/
├── index.html
├── styles.css
├── app.js
├── vishnu-raju-cv.pdf
├── cv/
│   ├── cv.html          # source of the CV PDF
│   └── build-cv.js      # rebuilds vishnu-raju-cv.pdf
├── projects/
│   └── salevora.jpg
├── profile/
│   └── profile-photo.jpg
├── certificates/
│   ├── SKILLERA_CERTIFICATE.png
│   ├── HACKER_RANK_CERTIFICATE.png
│   ├── CSE_PATHSHALA_CERTIFICATE.jpeg
│   ├── NEO_COLAB_CERTIFICATE_C_PROGRAM.png
│   └── INFOSYS_CERTIFICATE.jpg
├── README.md
└── other static assets
```

## Run locally

This project does not need a build step, package install, or dependencies.

```bash
cd /Users/vishnu/Desktop/vishnu-portfolio
python3 -m http.server 8000
```

Then open this in the browser:

```text
http://localhost:8000
```

If your folder name is different, just replace the `cd` path with your actual local folder.

## Deploy live

This is a fully static portfolio, so you can publish it anywhere that serves static files.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository in GitHub.
3. Go to Settings → Pages.
4. Choose a branch and save.
5. GitHub will give you a live URL.

### Netlify or Vercel

- Import the repository or drag the project folder into the deploy UI.
- Keep the root folder as the publish directory.
- No build command is required.

> Renaming the local folder on your Mac does not affect the live site. The important thing is that the deployed project contains `index.html` and the static assets in the correct structure.

## Updating the CV

The downloadable `vishnu-raju-cv.pdf` is generated from `cv/cv.html`. Edit the HTML, then rebuild:

```bash
npm i -D playwright && npx playwright install chromium
node cv/build-cv.js
```

You can also replace `vishnu-raju-cv.pdf` with any PDF you export yourself — keep the same file name so the download buttons keep working.

## Editing certificates

Each certificate is added as a block in `index.html` and uses a category such as `programming`, `soft`, or `industry`.

To add a certificate image:

1. Put the image file inside the `certificates/` folder.
2. Add a `cert-thumb` button in the certificate block.
3. Set the image path and title values so the lightbox knows what to show.

If a certificate has no image, it can still display text details without a thumbnail.

## Author

**Koneti Vishnuvardhan Raju**
- GitHub: [@kvvraju24](https://github.com/kvvraju24)
- LinkedIn: [kvvraju24](https://www.linkedin.com/in/kvvraju24)
- Email: kvvraju24@gmail.com
