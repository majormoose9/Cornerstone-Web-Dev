# Cornerstone Web Development — Project Memory

## Project Goal
Build a transparent, modern, and aesthetically pleasing website for Cornerstone Web Development — a web agency that builds websites for local small businesses in **Massachusetts, Greater Providence (RI), and Boston area**. The site should itself demonstrate the quality of work Cornerstone delivers to clients.

---

## Business Context
- **Owner:** Tucker Gauvin (student at Bryant University)
- **Email:** tuckergauvin13@gmail.com
- **Agency name:** Cornerstone Web Development
- **Target clients:** Local small businesses — trades, services, retail, contractors, etc.
- **Service area:** Southern New England (MA, Greater Providence RI, Boston area)
- **Pricing model:** $799 flat rate, one-time payment, client owns the site forever
- **Turnaround:** 14 days guaranteed
- **Contact (placeholder — update before launch):**
  - hello@cornerstonewebdev.com
  - (508) 555-0000

---

## File Structure
```
C:\Users\student\Cornerstone Web Dev\
├── index.html          Home page (hero, how it works, trust cards)
├── services.html       Services offered
├── work.html           Portfolio / Our Work
├── pricing.html        Pricing card + FAQ accordion
├── contact.html        Contact form (Formspree)
├── logo.png            Primary logo — 1173x393px, RGBA transparent
├── kimball_before.jpeg Kimball Sand old site screenshot
├── kimball_after.jpeg  Kimball Sand redesigned site screenshot
├── serve.mjs           Local dev server → http://localhost:3000
├── screenshot.mjs      Puppeteer screenshot tool
├── package.json        Node deps (puppeteer for screenshots)
└── MEMORY.md           This file
```

---

## Design System

### Brand Colors (CSS variables)
```css
--brand:       #1A3C34   /* dark forest green — primary */
--brand-mid:   #2D6A5A   /* medium green */
--brand-light: #E8F2EF   /* pale green tint */
--accent:      #C8883A   /* gold/amber — CTAs, highlights */
--accent-light:#F7EFE4   /* pale gold tint */
--off-white:   #F9F7F4   /* page background */
--ink:         #1C1C1A   /* body text */
--ink-muted:   #5A5A56   /* secondary text */
--ink-faint:   #9A9A96   /* placeholder/faint text */
--border:      rgba(28,28,26,0.10)
```

### Typography
- **Headings:** DM Serif Display (Google Fonts)
- **Body:** DM Sans (Google Fonts)
- Large headings: `letter-spacing: -0.03em`, `line-height: 1.1`
- Body: `line-height: 1.7`, `font-size: 17px`

### Logo
- File: `logo.png` (transparent PNG, 1173×393, ~3:1 aspect ratio)
- Nav size: `height: 64px`
- Footer size: `height: 64px`
- Note: the PNG has a transparent background — do not use the old JPEG versions

---

## Nav Bar
```css
height: 82px;
background: rgba(249,247,244,0.75);  /* semi-transparent, frosted glass */
backdrop-filter: blur(12px);
```
- Mobile hamburger drawer: slide-in from right, `#navHamburger`, `#mobileDrawer`, `#drawerBackdrop`
- Nav links: How It Works, Our Work, Services, Pricing, FAQ
- CTA: "Schedule a Call" → contact.html

---

## Liquid Glass Design Theme

### How It Works
Sections with dark gradient background + frosted glass cards:
```css
/* Section background */
background: linear-gradient(140deg, #0d2218 0%, #1A3C34 55%, #1f4a3a 100%);

/* Glass card */
background: rgba(255, 255, 255, 0.07);
border: 1px solid rgba(255, 255, 255, 0.18);
backdrop-filter: blur(14px) url(#liquid-glass-filter);
box-shadow:
  inset 2px 2px 2px rgba(255,255,255,0.35),
  inset -2px -2px 2px rgba(255,255,255,0.35),
  0 8px 32px rgba(0,0,0,0.25);
```

### SVG Liquid Distortion Filter
Added before `</body>` on pages that use the glass effect:
```html
<svg style="position:absolute;width:0;height:0;overflow:hidden;" aria-hidden="true">
  <defs>
    <filter id="liquid-glass-filter" ...>
      <feTurbulence type="fractalNoise" baseFrequency="0.004 0.008" numOctaves="1"/>
      <feDisplacementMap scale="180" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>
```

### Pages with Glass Sections Applied
- **index.html:** How It Works section, Trust cards (Honest work / Locally invested / Always reachable)
- **work.html:** Our Work section + Kimball Sand project card
- **pricing.html:** Pricing section + FAQ accordion (`.faq-wrap` as single glass container)

---

## Portfolio — Kimball Sand Company, Inc.
- **Client:** Kimball Sand Company, Inc. — aggregate supplier, Blackstone MA (est. 1979)
- **Live redesign:** https://k-sand-test.vercel.app
- **Before screenshot:** `kimball_before.jpeg` — old 2000s table-based layout
- **After screenshot:** `kimball_after.jpeg` — modern dark/red redesign
- **Tags:** Custom Design, Mobile Responsive, Local SEO, Full Rebuild
- This is currently the only portfolio case study. Add new projects as clients come in.

---

## Contact Form
- **Provider:** Formspree
- **Endpoint:** `https://formspree.io/f/xojrygvw`
- **SDK:** `@formspree/ajax@1` via CDN (vanilla JS, no bundler)
- **Fields:** Name, Business Name, Email, Phone (optional), Current Website (optional), Best Time to Reach, Services dropdown, Project description
- **Services dropdown options:** First Time Website, Website Redesign, Google Business Profile
- **Success:** shows `[data-fs-success]` block in place of form
- **Fallback:** mailto link if Formspree fails

---

## Scroll Animations
- Class `.anim` → `fadeUp` (default)
- Class `.anim-left` → `fadeLeft`
- Class `.anim-right` → `fadeRight`
- Class `.anim-scale` → `scaleIn`
- Stagger via `.anim-d1` through `.anim-d4` (CSS animation-delay)
- IntersectionObserver threshold: 0.1, rootMargin: `0px 0px -40px 0px`

---

## Dev Workflow

### Local server
```bash
node serve.mjs
# → http://localhost:3000
```

### Screenshots (Puppeteer)
```bash
node screenshot.mjs http://localhost:3000 label
# saves to ./temporary screenshots/screenshot-N-label.png
```

### CLAUDE.md Rules (from OneDrive)
- Always invoke `frontend-design` skill before writing frontend code
- Always serve on localhost — never screenshot file:// URLs
- Do at least 2 screenshot comparison rounds before declaring done
- Path: `C:\Users\student\OneDrive - Bryant University\Documents\Claude Stuff\CLAUDE.md`

---

## GitHub
- **Repo:** https://github.com/majormoose9/Cornerstone-Web-Dev.git
- **Branch:** main
- **⚠️ CRITICAL:** DO NOT push to GitHub unless Tucker explicitly says to
- Push command when authorized: `git add . && git commit -m "message" && git push`

---

## Known Issues / TODOs Before Launch
- [ ] Replace placeholder phone number `(508) 555-0000` with real number
- [ ] Confirm `hello@cornerstonewebdev.com` is a live inbox
- [ ] Apply glass theme to Our Work section (work.html) — in progress
- [ ] Add more portfolio case studies as clients are completed
- [ ] Add real testimonials when available
- [ ] Deploy to Vercel (import GitHub repo, zero config needed for static site)
- [ ] Point custom domain once acquired

---

## What NOT to Do
- Do not push to GitHub without explicit instruction
- Do not use default Tailwind colors (indigo, blue) — always use brand vars
- Do not use `transition-all` — animate only `transform` and `opacity`
- Do not add fake metrics or testimonials (placeholder trust section is intentional)
- Do not use `file:///` URLs for screenshots — always use localhost:3000
