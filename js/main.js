/**
 * Bodhaayan — main.js
 * Nav · Hamburger · Scroll Reveal · Counter · Members Filter · GSAP Hero
 */

/* ─── NAV ───────────────────────────────────────── */
(function initNav() {
  const nav = document.querySelector('.nav');
  const ham = document.querySelector('.ham');
  const mob = document.querySelector('.mob-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  if (ham && mob) {
    ham.addEventListener('click', () => {
      const open = mob.classList.toggle('open');
      ham.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mob.classList.remove('open');
      ham.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  // Highlight active nav link
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === page);
  });
})();

/* ─── SCROLL REVEAL ─────────────────────────────── */
(function initReveal() {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ─── COUNTER ANIMATION ─────────────────────────── */
(function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      if (isNaN(target)) return;
      const dur = 1800, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + suffix;
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));
})();

/* ─── GSAP HERO ANIMATION ───────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: .7, delay: .1 })
      .from('.hero-headline', { opacity: 0, y: 32, duration: .85 }, '-=.45')
      .from('.hero-sub',      { opacity: 0, y: 22, duration: .75 }, '-=.55')
      .from('.hero-btns',     { opacity: 0, y: 18, duration: .7  }, '-=.55')
      .from('.hero-stats',    { opacity: 0, y: 14, duration: .65 }, '-=.5')
      .from('.hero-card',     { opacity: 0, x: 28, duration: .65, stagger: .13 }, '-=.6');
  }
  gsap.from('.page-hero-inner > *', {
    opacity: 0, y: 22, duration: .7, stagger: .12, ease: 'power3.out', delay: .2
  });
});

/* ─── MEMBERS SEARCH + FILTER ───────────────────── */
(function initMembers() {
  const grid    = document.getElementById('membersGrid');
  const input   = document.getElementById('memberSearch');
  const chips   = document.querySelectorAll('.chip');
  const countEl = document.querySelector('.member-count');
  const noRes   = document.querySelector('.no-results');
  if (!grid) return;

  let activeFilter = 'all';

  function setCount(n) {
    if (countEl) countEl.textContent = n + ' member' + (n !== 1 ? 's' : '');
  }

  function applyFilter() {
    const q = input ? input.value.toLowerCase().trim() : '';
    let visible = 0;
    grid.querySelectorAll('.member-card').forEach(card => {
      const name   = (card.dataset.name   || '').toLowerCase();
      const role   = (card.dataset.role   || '').toLowerCase();
      const domain = (card.dataset.domain || '').toLowerCase();
      const cat    = (card.dataset.cat    || '');

      const matchSearch = !q || name.includes(q) || role.includes(q) || domain.includes(q);
      const matchCat    = activeFilter === 'all' || cat === activeFilter;

      if (matchSearch && matchCat) { card.classList.remove('hidden'); visible++; }
      else card.classList.add('hidden');
    });
    setCount(visible);
    if (noRes) noRes.classList.toggle('show', visible === 0);
  }

  if (input) input.addEventListener('input', applyFilter);

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter || 'all';
      applyFilter();
    });
  });

  setCount(grid.querySelectorAll('.member-card').length);
})();

/* ─── SMOOTH ANCHOR SCROLL ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
