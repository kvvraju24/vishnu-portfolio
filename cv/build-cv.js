// Rebuilds ../vishnu-raju-cv.pdf from cv.html.
// Usage (from the repo root):  npm i -D playwright && npx playwright install chromium && node cv/build-cv.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'cv.html'), { waitUntil: 'load' });
  await page.pdf({
    path: path.join(__dirname, '..', 'vishnu-raju-cv.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log('Wrote vishnu-raju-cv.pdf');
})();
