/**
 * Bodhaayan — Members Data & Grid Renderer
 * Populates #membersGrid and #filterBar from the MEMBERS array.
 */

const MEMBERS = [
  {
    name: "Divyadeep",
    role: "Founder",
    domain: "Science Education · Community Research",
    cat: "core",
    initials: "D",
    av: "av-1",
    links: {}
  },
  {
    name: "Asha Trust Partner",
    role: "Partner Organisation",
    domain: "Community Outreach · Rural Education",
    cat: "partner",
    initials: "AT",
    av: "av-3",
    links: {}
  },
  {
    name: "Mentor Placeholder",
    role: "Scientific Mentor",
    domain: "Physics · Thermoelectrics",
    cat: "mentor",
    initials: "MP",
    av: "av-2",
    links: {}
  },
  {
    name: "Student Researcher",
    role: "Student",
    domain: "Energy · Agriculture",
    cat: "student",
    initials: "SR",
    av: "av-5",
    links: {}
  }
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Core Team", value: "core" },
  { label: "Mentors", value: "mentor" },
  { label: "Partners", value: "partner" },
  { label: "Students", value: "student" }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid    = document.getElementById('membersGrid');
  const bar     = document.getElementById('filterBar');
  const countEl = document.getElementById('memberCount');

  if (!grid) return;

  // Render filter chips
  if (bar) {
    bar.innerHTML = FILTERS.map(f =>
      `<button class="chip${f.value === 'all' ? ' active' : ''}" data-filter="${f.value}">${f.label}</button>`
    ).join('');
  }

  // Render member cards
  grid.innerHTML = MEMBERS.map(m => `
    <div class="member-card" data-name="${m.name.toLowerCase()}" data-role="${m.role.toLowerCase()}" data-domain="${m.domain.toLowerCase()}" data-cat="${m.cat}">
      <div class="member-avatar ${m.av}">
        <span class="member-initials">${m.initials}</span>
      </div>
      <div class="member-body">
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
        <div class="member-domain">${m.domain}</div>
      </div>
    </div>
  `).join('') + '<div class="no-results">No members found matching your search.</div>';

  if (countEl) countEl.textContent = MEMBERS.length;
});
