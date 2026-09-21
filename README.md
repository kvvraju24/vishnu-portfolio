# Vishnu — Portfolio

Personal portfolio for **Koneti Vishnuvardhan Raju** — a computer science student at Lovely Professional University, heading toward a career in data science.

## Project idea

This portfolio is designed like a working notebook rather than a generic tech template: warm paper and ink in light mode, and chalkboard styling in dark mode. The theme follows the system preference automatically.

## Latest updates

- Education and certifications now live in a two-tab journey section.
- Education uses a dotted vertical timeline.
- Certificates use a touch-friendly accordion layout.
- Category filters let you view Programming, Soft skills, or Industry items.
- Each certificate with a real image opens in a full-screen lightbox.
- The hero section is simplified to a single focused column with the photo, intro, and call-to-action buttons.

## What changed from v1

- Removed filler projects unrelated to the current direction.
- Reframed the work section around one real project and honest learning goals.
- Added certificates as verifiable portfolio evidence.
- Updated the visual identity with a warm paper/chalkboard look.
- Kept the portfolio personal and content-first.

## Project structure

This is a static website. The folder name on your Mac can be anything, but the project should contain these files in the root folder:

```text
<your-folder-name>/
├── index.html
├── styles.css
├── app.js
├── vishnu-raju-cv.pdf
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
