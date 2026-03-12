# 🔬 Bodhaayan — Static Website

**A Culture of Building Intellects**
Pure HTML · CSS · JavaScript — zero backend, zero dependencies, host anywhere for free.

---

## 📁 File Structure

```
bodhaayan/
├── index.html          ← Homepage
├── about.html          ← About & values
├── model.html          ← Our Model + TRL framework
├── impact.html         ← Nagepur case study + gallery
├── workshops.html      ← Workshop listings
├── members.html        ← All 42 members (filterable + searchable)
├── students.html       ← Student application (Formspree)
├── involve.html        ← Mentor / Lab / Donate
├── media.html          ← Press coverage + gallery
├── contact.html        ← Contact form (Formspree)
├── 404.html            ← Error page
│
├── css/
│   └── style.css       ← Full design system
│
├── js/
│   ├── layout.js       ← Shared nav + footer
│   ├── main.js         ← Animations, scroll, members renderer
│   └── members-data.js ← ALL 42 member records — edit here
│
└── assets/
    ├── favicon.ico
    └── images/
        ├── og-image.jpg        ← 1200×630 for social sharing
        ├── workshop-1.jpg      ← Replace gallery placeholders
        ├── workshop-2.jpg
        ├── gallery-1.jpg … gallery-6.jpg
        └── media-news-1.jpg … etc.
```

---

## ⚡ Quick Local Preview

No installation needed. Just open in a browser:

```bash
# Option A: Open directly (may have CORS issues with JS modules)
open index.html

# Option B: Use Python local server (recommended)
cd bodhaayan
python3 -m http.server 8080
# Then open http://localhost:8080

# Option C: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `bodhaayan` (or `bodhaayan.github.io` for root hosting)
3. Set to **Public**
4. Do NOT initialise with README (you already have one)

### Step 2 — Push your files

```bash
cd bodhaayan
git init
git add .
git commit -m "Initial Bodhaayan website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bodhaayan.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**: select `Deploy from a branch`
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/bodhaayan`

---

## 🌐 Custom Domain via Spaceship (bodhaayan.org)

### Step 1 — Add domain in GitHub Pages

1. In **Settings → Pages**, under **Custom domain**
2. Enter: `bodhaayan.org`
3. Click **Save**
4. GitHub will create a `CNAME` file in your repo automatically

### Step 2 — Configure DNS at Spaceship

Log in to [Spaceship.com](https://www.spaceship.com) → **Manage** your domain → **DNS Records**

**Delete any existing A records for `@`, then add:**

| Type | Host | Value               | TTL  |
|------|------|---------------------|------|
| A    | @    | 185.199.108.153     | 3600 |
| A    | @    | 185.199.109.153     | 3600 |
| A    | @    | 185.199.110.153     | 3600 |
| A    | @    | 185.199.111.153     | 3600 |
| CNAME| www  | YOUR_USERNAME.github.io | 3600 |

**For `www` redirect (so www.bodhaayan.org also works):**

The CNAME record above handles this. GitHub Pages will redirect www → apex automatically.

### Step 3 — Enable HTTPS

1. Back in GitHub **Settings → Pages**
2. Wait ~10 minutes for DNS to propagate
3. Tick **Enforce HTTPS** ✓

Your site is now live at **https://bodhaayan.org** 🎉

> **DNS propagation** can take up to 48 hours in rare cases, but usually under 30 minutes.

---

## 📧 Set Up Formspree (Contact & Application Forms)

Both forms use [Formspree](https://formspree.io) — free, no server needed.

### Step 1 — Create a Formspree account

1. Go to [formspree.io](https://formspree.io) → Sign up (free)
2. Create a **New Form**
3. Copy your **Form ID** (looks like `xyzabcde`)

### Step 2 — Update form action URLs

In **`contact.html`** and **`students.html`**, find and replace:

```html
<!-- Find this: -->
action="https://formspree.io/f/YOUR_FORM_ID"

<!-- Replace with: -->
action="https://formspree.io/f/xyzabcde"
```

You can use the same form ID for both, or create two separate forms.

### Step 3 — Configure email in Formspree dashboard

- Set your **notification email** (where submissions are sent)
- Enable **email auto-reply** to send a thank-you to the sender
- Add your domain to the **Allowed Domains** list (optional but recommended)

### Free plan limits
- 50 submissions/month per form
- Upgrade at $10/month for unlimited

---

## 👥 Adding & Editing Members

All member data lives in one file: **`js/members-data.js`**

### Add a new member

Open `members-data.js` and add a new object to the `MEMBERS` array:

```javascript
{
  name:     "Dr. Priya Patel",
  role:     "Scientific Mentor",
  org:      "IIT Bombay · Mumbai",
  bio:      "Materials scientist mentoring students in energy harvesting.",
  category: "mentor",        // advisor | mentor | researcher | educator | volunteer
  photo:    "",              // "" = shows initials; or "assets/images/members/priya.jpg"
  linkedin: "https://linkedin.com/in/priyapatel",
  twitter:  "",
  email:    ""
},
```

### Add a photo for a member

1. Save their photo as `assets/images/members/firstname-lastname.jpg`
2. Recommended size: **200×200px**, square, JPEG
3. Update their record: `photo: "assets/images/members/firstname-lastname.jpg"`

### Add a new category

In `members-data.js`, add to the `CATEGORIES` array:

```javascript
{ key: "partner", label: "Partner Organisations" },
```

Then use `category: "partner"` in member records.

---

## 🖼️ Adding Workshop & Gallery Photos

Replace gallery placeholder divs with real images:

```html
<!-- Find the placeholder: -->
<div class="gal-item">
  <div class="gal-ph"><div class="ico">📷</div><span>workshop-1.jpg</span></div>
</div>

<!-- Replace with: -->
<div class="gal-item">
  <img src="assets/images/workshop-1.jpg" alt="Students building thermoelectric chulha, Nagepur 2024" loading="lazy"/>
</div>
```

### Recommended image sizes

| Usage | Size | Format |
|-------|------|--------|
| Gallery photos | 800×600px | JPEG |
| Member portraits | 200×200px | JPEG |
| OG social image | 1200×630px | JPEG |
| Media/newspaper | 800×500px | JPEG |

---

## 🔧 Updating the Site

After any changes:

```bash
git add .
git commit -m "Update members list" # or whatever you changed
git push
```

GitHub Pages re-deploys automatically within ~2 minutes.

---

## 🎨 Design System Quick Reference

### Colours
| CSS Variable | Hex | Use |
|---|---|---|
| `--navy` | `#0B1F3A` | Primary brand, headings |
| `--blue` | `#1A4A8A` | Secondary blue |
| `--sky`  | `#3A7BD5` | Accents, links |
| `--accent` | `#E8A020` | CTAs, highlights |
| `--cream` | `#F8F6F1` | Warm backgrounds |

### Key CSS classes
| Class | Description |
|---|---|
| `.reveal` | Scroll-triggered fade-in |
| `.d1`–`.d5` | Stagger animation delays |
| `.btn-p` | Navy primary button |
| `.btn-ac` | Gold accent button |
| `.card` | White elevated card |
| `.member-card` | Member profile card |
| `.ph` | Page hero (dark navy) |

---

## 📞 Contact Emails to Set Up

Point these to your email or Google Workspace:

| Address | Purpose |
|---------|---------|
| hello@bodhaayan.org | General enquiries |
| research@bodhaayan.org | Mentors & labs |
| students@bodhaayan.org | Student applications |
| partners@bodhaayan.org | Donors & institutions |
| media@bodhaayan.org | Press enquiries |

---

*Built with purpose · Bodhaayan Initiative · India 🇮🇳*
