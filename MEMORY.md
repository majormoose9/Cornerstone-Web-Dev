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
- **Pricing model:** $499 flat rate, one-time payment, client owns the site forever
- **Turnaround:** 14 days guaranteed
- **Contact (placeholder — update before launch):**
  - hello@cornerstonewebdev.com
  - (508) 555-0000

---

## Two Versions of the Site

### Version 1 — Static HTML/CSS/JS
Location: `C:\Users\student\Cornerstone Web Dev\` (repo root)
- 5 standalone HTML files served via `node serve.mjs` → http://localhost:3000
- Liquid glass card sections, mesh gradient hero, Formspree contact form
- **Status:** Complete, in repo but NOT the deployed version

### Version 2 — React (Vite + React Router + Framer Motion) ← ACTIVE
Location: `C:\Users\student\Cornerstone Web Dev\cornerstone-react\`
- **Live URL:** Deployed to Vercel (public URL, live on mobile)
- Dev server: `cd cornerstone-react && npm run dev` → http://localhost:5173
- **This is the version being actively developed and deployed**

---

## React Project Structure
```
cornerstone-react/
  src/
    components/
      home/       Hero, HowItWorks, TrustCards, TrustStrip
      layout/     Navbar, Footer
      ui/         Button, SectionLabel
    pages/        Home, Services, Work, Pricing, Contact
    styles/       globals.css
    App.jsx       Routes + ScrollToHash + AnimatePresence
    main.jsx
  public/
    logo.png, kimball_before.jpeg, kimball_after.jpeg
```

## React Tech Stack
- **Vite** — build tool
- **React Router v6** — client-side routing with animated page transitions
- **Framer Motion** — scroll animations, page fades, staggered cards
- **CSS Modules** — scoped styles per component (Component.module.css)
- **Formspree** — contact form backend (endpoint: xojrygvw)

## React Key Behaviours
- Navbar: solid white at top of page → frosted glass (72% opacity) on scroll
- `history.scrollRestoration = "manual"` — always loads to top of page
- `ScrollToHash` component — `/pricing#faq` deep-links to FAQ section
- All headings: `font-weight: 400` (DM Serif Display only ships regular weight)
- Mobile breakpoint: 900px — all pages use `padding-top: 90px` on mobile

---

## File Structure (Static Version)
```
C:\Users\student\Cornerstone Web Dev\
├── index.html          Home page
├── services.html       Services
├── work.html           Our Work
├── pricing.html        Pricing + FAQ
├── contact.html        Contact form
├── logo.png            Primary logo — 1173x393px, RGBA transparent
├── kimball_before.jpeg Kimball Sand old site
├── kimball_after.jpeg  Kimball Sand redesigned site
├── serve.mjs           Local dev server → http://localhost:3000
├── screenshot.mjs      Puppeteer screenshot tool
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
- **Headings:** DM Serif Display (Google Fonts) — always `font-weight: 400`
- **Body:** DM Sans (Google Fonts)
- Large headings: `letter-spacing: -0.03em`, `line-height: 1.1`
- Body: `line-height: 1.7`, `font-size: 17px`

### Logo
- File: `logo.png` (transparent PNG, 1173×393, ~3:1 aspect ratio)
- Nav size: `height: 64px`
- Footer size: `height: 64px`

---

## Portfolio — Kimball Sand and Gravel
- **Client:** Kimball Sand and Gravel — aggregate supplier, Blackstone MA (est. 1979)
- **Live redesign:** https://k-sand-test.vercel.app
- **Before screenshot:** `kimball_before.jpeg`
- **After screenshot:** `kimball_after.jpeg`
- This is the only portfolio case study. Add new projects as clients come in.

---

## Contact Form
- **Provider:** Formspree
- **Endpoint:** `https://formspree.io/f/xojrygvw`
- **Fields:** Name, Business Name, Email, Phone (optional), Current Website (optional), Best Time to Reach, Services dropdown, Project description
- **Services options:** First Time Website, Website Redesign, Google Business Profile

---

## GitHub
- **Repo:** https://github.com/majormoose9/Cornerstone-Web-Dev.git
- **Branch:** main
- **⚠️ CRITICAL:** DO NOT push to GitHub unless Tucker explicitly says to
- The repo contains BOTH versions — Vercel is configured to deploy from `cornerstone-react/` subfolder
- Push command when authorized: `git add -A && git commit -m "message" && git push`

---

## Vercel Deployment
- **Deployed version:** React app (`cornerstone-react/`)
- **Root directory setting:** `cornerstone-react`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- Vercel auto-deploys on every push to main

---

## TODOs / Next Steps
- [ ] Replace placeholder phone `(508) 555-0000` with real number
- [ ] Confirm `hello@cornerstonewebdev.com` is a live inbox
- [ ] Add real testimonials when available
- [ ] Add more portfolio case studies as clients come in
- [ ] Set up custom domain on Vercel
- [ ] Add Google Analytics or Plausible for visitor tracking
- [ ] Add meta descriptions and Open Graph tags to each React page

---

## What NOT to Do
- Do not push to GitHub without explicit instruction from Tucker
- Do not touch the static HTML version unless asked — React is the active version
- Do not use `font-weight: bold` on headings — DM Serif Display is weight 400 only
- Do not add fake metrics or testimonials
