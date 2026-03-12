# Bodhaayan — GitHub Pages + Spaceship Domain Setup Guide

## Step 1 — Create a GitHub Repository

1. Go to https://github.com and sign in (or create a free account)
2. Click **New repository**
3. Name it: `bodhaayan` (or `bodhaayan.github.io` for a user page)
4. Set it to **Public**
5. Do NOT initialise with README — leave it empty
6. Click **Create repository**

---

## Step 2 — Upload the Site Files

### Option A — GitHub Web Interface (easiest)
1. In your new empty repo, click **uploading an existing file**
2. Drag and drop ALL files from this folder (including subfolders: `css/`, `js/`, `assets/`)
3. Commit message: `Initial Bodhaayan website`
4. Click **Commit changes**

### Option B — Git command line
```bash
cd /path/to/bodhaayan-static
git init
git add .
git commit -m "Initial Bodhaayan website"
git remote add origin https://github.com/YOUR_USERNAME/bodhaayan.git
git push -u origin main
```

---

## Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (top right)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose branch: `main` (or `master`)
6. Folder: `/ (root)`
7. Click **Save**

GitHub will give you a URL like: `https://yourusername.github.io/bodhaayan`

---

## Step 4 — Connect Spaceship Domain (bodhaayan.org)

### In GitHub Pages settings:
1. Go to Settings → Pages
2. Under **Custom domain**, type: `bodhaayan.org`
3. Click **Save**
4. Check ✅ **Enforce HTTPS** (after DNS propagates)

### In Spaceship (your domain registrar):
Log in to Spaceship → Domains → bodhaayan.org → DNS Settings

**Add these DNS records:**

#### A Records (for apex domain bodhaayan.org):
| Type | Name | Value              |
|------|------|--------------------|
| A    | @    | 185.199.108.153    |
| A    | @    | 185.199.109.153    |
| A    | @    | 185.199.110.153    |
| A    | @    | 185.199.111.153    |

#### CNAME Record (for www subdomain):
| Type  | Name | Value                          |
|-------|------|--------------------------------|
| CNAME | www  | YOUR_GITHUB_USERNAME.github.io |

**Example:** if your GitHub username is `piyush-bodhaayan`, set:
```
CNAME  www  piyush-bodhaayan.github.io
```

---

## Step 5 — Wait for DNS Propagation

- DNS changes typically take **15 minutes to 48 hours**
- You can check at: https://dnschecker.org (search for bodhaayan.org)
- Once propagated, GitHub will issue a free SSL certificate automatically

---

## Step 6 — Formspree (Contact Forms)

The contact form and student application form use Formspree for free.

1. Go to https://formspree.io and sign up (free)
2. Click **New Form**, name it "Bodhaayan Contact"
3. Copy the form ID (looks like: `xkgwrjpn`)
4. Open `contact.html` and replace `YOUR_FORM_ID`:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   → becomes:
   ```
   action="https://formspree.io/f/xkgwrjpn"
   ```
5. Repeat for `students.html` (create a second Formspree form: "Bodhaayan Student Applications")
6. Commit and push the changes to GitHub

Formspree free plan: **50 submissions/month** — upgrade if needed.

---

## Step 7 — Add Member Photos (optional)

1. Add photo files to: `assets/images/members/`
   - Recommended: `firstname-lastname.jpg` (square, 400×400px minimum)
2. Open `js/members-data.js`
3. For each member, set the `photo` field:
   ```js
   photo: "assets/images/members/ananya-krishnamurthy.jpg",
   ```
4. Leave `photo: ""` for members without photos — initials will show.

---

## Step 8 — Add Gallery Photos

Replace placeholder divs in `impact.html` and `workshops.html`:
```html
<!-- Before -->
<div class="gal-item"><div class="gal-ph">...</div></div>

<!-- After -->
<div class="gal-item"><img src="assets/images/nagepur-workshop-1.jpg" alt="Students at Nagepur workshop"/></div>
```

Recommended photo names:
- `assets/images/nagepur-day1.jpg` through `nagepur-day4.jpg`
- `assets/images/og-image.jpg` (1200×630px — used for social media sharing)

---

## Step 9 — Update Member Data

To add, edit or remove members, open `js/members-data.js` — it is heavily commented with instructions. The members page automatically reads this file.

---

## Adding More Members Over Time

The members page is designed to grow. Simply:
1. Open `js/members-data.js`
2. Add a new block at the end of the MEMBERS array (copy any existing block as a template)
3. Save and push to GitHub — the page updates automatically

---

## Site Structure at a Glance

```
bodhaayan-static/
├── index.html          Homepage
├── about.html          About & origins
├── model.html          Research model & TRL framework
├── impact.html         Nagepur case study
├── workshops.html      Workshop listings
├── members.html        Members directory (auto-rendered from JS)
├── students.html       Student application
├── involve.html        Get Involved (mentor / lab / donate)
├── media.html          Press & gallery
├── contact.html        Contact form (Formspree)
├── 404.html            Custom not-found page
├── CNAME               Custom domain for GitHub Pages
├── _config.yml         GitHub Pages config
├── css/style.css       Complete design system
├── js/
│   ├── layout.js       Shared nav + footer (injected into all pages)
│   ├── main.js         Scroll animations, counter, nav toggle
│   └── members-data.js All 42 member records — easy to edit
└── assets/images/      Add photos here
```
