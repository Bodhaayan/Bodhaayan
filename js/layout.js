/**
 * Bodhaayan — Shared Navigation & Footer
 * Injected into every page via DOMContentLoaded
 */

const _NAV = `
<nav class="nav" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="index.html" class="nav-brand" data-nav="index">
      <span class="nav-brand-name">Bodhaayan</span>
      <span class="nav-brand-tag">A Culture of Building Intellects</span>
    </a>
    <div class="nav-links" role="menubar">
      <a href="index.html"     class="nav-a" data-nav="index">Home</a>
      <a href="about.html"     class="nav-a" data-nav="about">About</a>
      <a href="model.html"     class="nav-a" data-nav="model">Our Model</a>
      <a href="impact.html"    class="nav-a" data-nav="impact">Impact</a>
      <a href="workshops.html" class="nav-a" data-nav="workshops">Workshops</a>
      <a href="members.html"   class="nav-a" data-nav="members">Members</a>
      <a href="media.html"     class="nav-a" data-nav="media">Media</a>
      <a href="students.html"  class="nav-a" data-nav="students">For Students</a>
      <a href="involve.html"   class="nav-a cta" data-nav="involve">Get Involved</a>
    </div>
    <button class="ham" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="mob-nav" aria-label="Mobile navigation">
  <a href="index.html"     class="mob-a">Home</a>
  <a href="about.html"     class="mob-a">About</a>
  <a href="model.html"     class="mob-a">Our Model</a>
  <a href="impact.html"    class="mob-a">Impact</a>
  <a href="workshops.html" class="mob-a">Workshops</a>
  <a href="members.html"   class="mob-a">Members</a>
  <a href="media.html"     class="mob-a">Media</a>
  <a href="students.html"  class="mob-a">For Students</a>
  <a href="involve.html"   class="mob-a" style="color:var(--blue);font-weight:600;">Get Involved</a>
  <a href="contact.html"   class="mob-a">Contact</a>
</nav>`;

const _FOOTER = `
<footer class="footer" role="contentinfo">
  <div class="wrap">
    <div class="footer-g">
      <div>
        <div class="f-brand-name">Bodhaayan</div>
        <div class="f-brand-tag">A Culture of Building Intellects</div>
        <p class="f-desc">Connecting students from marginalized communities with global mentors, research labs, and funding to pursue real science.</p>
        <div class="f-socials mt4" style="margin-top:1.5rem;">
          <a href="#" class="f-social" aria-label="Twitter/X">𝕏</a>
          <a href="#" class="f-social" aria-label="LinkedIn">in</a>
          <a href="#" class="f-social" aria-label="YouTube">▶</a>
          <a href="mailto:hello@bodhaayan.org" class="f-social" aria-label="Email">✉</a>
        </div>
      </div>
      <div>
        <div class="f-col-title">Navigate</div>
        <a href="index.html"     class="f-link">Home</a>
        <a href="about.html"     class="f-link">About</a>
        <a href="model.html"     class="f-link">Our Model</a>
        <a href="impact.html"    class="f-link">Impact</a>
        <a href="workshops.html" class="f-link">Workshops</a>
        <a href="media.html"     class="f-link">Media</a>
      </div>
      <div>
        <div class="f-col-title">Community</div>
        <a href="members.html"   class="f-link">Members</a>
        <a href="students.html"  class="f-link">For Students</a>
        <a href="involve.html"   class="f-link">Become a Mentor</a>
        <a href="involve.html"   class="f-link">Partner Lab</a>
        <a href="involve.html"   class="f-link">Donate</a>
        <a href="contact.html"   class="f-link">Contact</a>
      </div>
      <div>
        <div class="f-col-title">Contact</div>
        <a href="mailto:hello@bodhaayan.org"    class="f-link">hello@bodhaayan.org</a>
        <a href="mailto:research@bodhaayan.org" class="f-link">research@bodhaayan.org</a>
        <a href="mailto:students@bodhaayan.org" class="f-link">students@bodhaayan.org</a>
        <div class="f-col-title" style="margin-top:1.5rem;">Vision</div>
        <p style="font-size:.82rem;line-height:1.7;">5 scientists from every village in India by 2047.</p>
      </div>
    </div>
    <div class="f-bottom">
      <span>© 2025 Bodhaayan Initiative · All rights reserved</span>
      <span>Built with purpose in India 🇮🇳</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const np = document.getElementById('nav-ph');
  if (np) np.outerHTML = _NAV;
  const fp = document.getElementById('footer-ph');
  if (fp) fp.outerHTML = _FOOTER;
});
