'use strict';

/* ============================================================
   Mobile nav
   ============================================================ */
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.hasAttribute('hidden');
    if (open) mobileNav.removeAttribute('hidden'); else mobileNav.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ============================================================
   Scroll-spy nav highlighting
   ============================================================ */
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const spySections = navLinks
  .map((a) => document.getElementById(a.hash.slice(1)))
  .filter(Boolean);
if ('IntersectionObserver' in window && spySections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle('active', a.hash === '#' + entry.target.id));
      });
    },
    { rootMargin: '-20% 0px -70% 0px' }
  );
  spySections.forEach((s) => spy.observe(s));
}

/* ============================================================
   Featured project chart (Student Performance Analyzer)
   ============================================================ */
const chartData = {
  subjects: [
    { name: 'Math', value: 66.09 },
    { name: 'Reading', value: 69.17 },
    { name: 'Writing', value: 68.05 }
  ],
  grades: [
    { name: 'A', value: 52, range: '90\u2013100' },
    { name: 'B', value: 146, range: '80 to below 90' },
    { name: 'C', value: 261, range: '70 to below 80' },
    { name: 'D', value: 256, range: '60 to below 70' },
    { name: 'E', value: 182, range: '50 to below 60' },
    { name: 'F', value: 103, range: 'below 50' }
  ]
};
const chartEl = document.getElementById('student-chart');
const chartCaption = document.getElementById('chart-caption');
const dataSourceLink = document.querySelector('.data-source');

function renderChart(mode) {
  if (!chartEl) return;
  const subjects = mode === 'subjects';
  chartEl.innerHTML = chartData[mode]
    .map(
      (item) => `<button type="button" class="bar-item" aria-pressed="false">
        <span class="bar-track"><span class="bar-fill" style="height:${
          (item.value / (subjects ? 100 : 300)) * 100
        }%"><span class="bar-value">${item.value}</span></span></span>
        <span class="bar-label">${subjects ? item.name : 'Grade ' + item.name}</span>
      </button>`
    )
    .join('');
  if (chartCaption)
    chartCaption.textContent = subjects
      ? 'Mean subject score, out of 100. Tap a bar to inspect.'
      : 'Number of students per grade. Tap a bar to inspect.';
  if (dataSourceLink)
    dataSourceLink.href = subjects
      ? 'https://github.com/kvvraju24/student-performance-analyzer/blob/main/output/class_summary.csv'
      : 'https://github.com/kvvraju24/student-performance-analyzer/blob/main/output/student_results.csv';
  chartEl.querySelectorAll('.bar-item').forEach((bar, i) => {
    bar.addEventListener('click', () => {
      chartEl.querySelectorAll('.bar-item').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      bar.setAttribute('aria-pressed', 'true');
      const item = chartData[mode][i];
      if (chartCaption)
        chartCaption.textContent = subjects
          ? `${item.name}: ${item.value} / 100 average across 1,000 records.`
          : `Grade ${item.name}: ${item.value} students \u00b7 average ${item.range}.`;
    });
  });
}
document.querySelectorAll('[data-chart]').forEach((btn) =>
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-chart]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    renderChart(btn.dataset.chart);
  })
);
renderChart('subjects');

/* ============================================================
   Accessible tabs (skills)
   ============================================================ */
document.querySelectorAll('[role="tablist"]').forEach((list) => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  function select(tab) {
    tabs.forEach((t) => {
      const active = t === tab;
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        select(tabs[next]);
        tabs[next].focus();
      }
    });
  });
});

/* ============================================================
   Certificate accordion: category filter + touch-friendly
   +/× expand-collapse (one open at a time)
   ============================================================ */
(function setupCertAccordion() {
  const accordion = document.getElementById('cert-accordion');
  const filterButtons = document.querySelectorAll('.cert-filter');
  if (!accordion) return;
  const rows = [...accordion.querySelectorAll('.cert-row')];

  function closeRow(row) {
    const toggle = row.querySelector('.cert-row-toggle');
    const detail = row.querySelector('.cert-detail');
    row.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    detail?.setAttribute('inert', '');
  }
  function openRow(row) {
    rows.forEach((r) => { if (r !== row) closeRow(r); }); /* accordion: only one open */
    const toggle = row.querySelector('.cert-row-toggle');
    const detail = row.querySelector('.cert-detail');
    row.classList.add('open');
    toggle?.setAttribute('aria-expanded', 'true');
    detail?.removeAttribute('inert');
  }
  rows.forEach((row) => {
    row.querySelector('.cert-row-toggle')?.addEventListener('click', () => {
      row.classList.contains('open') ? closeRow(row) : openRow(row);
    });
  });

  /* category filter chips */
  function applyFilter(category) {
    rows.forEach((row) => {
      const match = category === 'all' || row.dataset.category === category;
      row.hidden = !match;
      if (!match && row.classList.contains('open')) closeRow(row);
    });
  }
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.toggle('active', b === btn));
      applyFilter(btn.dataset.filter);
    });
  });
})();

/* ============================================================
   Certificate lightbox: click a thumbnail to view the full image
   ============================================================ */
(function setupCertLightbox() {
  const lightbox = document.getElementById('cert-lightbox');
  const lightboxImg = document.getElementById('cert-lightbox-img');
  const lightboxCaption = document.getElementById('cert-lightbox-caption');
  if (!lightbox || !lightboxImg || !lightboxCaption) return;

  let lastFocused = null;

  function openLightbox(thumb) {
    const { img, title, issuer } = thumb.dataset;
    lightboxImg.src = img;
    lightboxImg.alt = `${title} — ${issuer}`;
    lightboxCaption.textContent = `${title} · ${issuer}`;
    lastFocused = document.activeElement;
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.cert-lightbox-close')?.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    lightboxImg.src = '';
    document.body.style.overflow = '';
    lastFocused?.focus();
  }

  document.querySelectorAll('.cert-thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => openLightbox(thumb));
  });
  lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) =>
    el.addEventListener('click', closeLightbox)
  );
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hasAttribute('hidden')) closeLightbox();
  });
})();

/* ============================================================
   Copy email
   ============================================================ */
let toastTimer;
function toast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}
document.querySelector('.copy-email')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('kvvraju24@gmail.com');
    toast('Email copied to clipboard.');
  } catch {
    toast('Copy this email: kvvraju24@gmail.com');
  }
});

/* ============================================================
   Escape closes mobile nav
   ============================================================ */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileNav && !mobileNav.hasAttribute('hidden')) {
    mobileNav.setAttribute('hidden', '');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.focus();
  }
});
