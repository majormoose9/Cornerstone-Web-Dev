const fs = require("fs");
const base = "C:/Users/student/Cornerstone Web Dev/cornerstone-react/src";

// ── Hero ──────────────────────────────────────────────────────────────────────
const heroCSS = fs.readFileSync(`${base}/components/home/Hero.module.css`,"utf8");
const heroFixed = heroCSS.replace(
  "@media (max-width: 900px) {\n  .hero { padding-top: 120px; margin-left: 2rem; }\n}",
  `@media (max-width: 900px) {
  .hero {
    padding: 120px 1.5rem 60px;
    margin-left: 0;
    max-width: 100%;
  }
  .hero h1 { font-size: clamp(2rem, 8vw, 2.8rem); }
  .sub { font-size: 1rem; }
  .actions { flex-direction: column; align-items: flex-start; }
  .btnPrimary, .btnGhost { width: 100%; justify-content: center; }
}`);
fs.writeFileSync(`${base}/components/home/Hero.module.css`, heroFixed, "utf8");

// ── HowItWorks ────────────────────────────────────────────────────────────────
const howCSS = fs.readFileSync(`${base}/components/home/HowItWorks.module.css`,"utf8");
const howFixed = howCSS.replace(
  "@media(max-width:900px){.grid{grid-template-columns:1fr;}.connector{display:none;}}",
  `@media(max-width:900px){
  .section { padding: 64px 1.5rem; }
  .grid { grid-template-columns: 1fr; gap: 1rem; margin-top: 2.5rem; }
  .connector { display: none; }
  .heading { font-size: 1.8rem; }
}`);
fs.writeFileSync(`${base}/components/home/HowItWorks.module.css`, howFixed, "utf8");

// ── TrustCards ────────────────────────────────────────────────────────────────
const tcCSS = fs.readFileSync(`${base}/components/home/TrustCards.module.css`,"utf8");
fs.writeFileSync(`${base}/components/home/TrustCards.module.css`,
  tcCSS + `\n@media(max-width:900px){
  .section { padding: 64px 1.5rem; }
  .stack { gap: 0.75rem; }
  .card { gap: 1rem; padding: 1.25rem; }
  .heading { font-size: 1.8rem; }
}`, "utf8");

// ── TrustStrip ────────────────────────────────────────────────────────────────
const stripCSS = fs.readFileSync(`${base}/components/home/TrustStrip.module.css`,"utf8");
fs.writeFileSync(`${base}/components/home/TrustStrip.module.css`,
  stripCSS + `\n@media(max-width:700px){
  .strip { gap: 1.25rem; padding: 1.25rem 1rem; }
  .label { display: none; }
}`, "utf8");

// ── Navbar ────────────────────────────────────────────────────────────────────
const navCSS = fs.readFileSync(`${base}/components/layout/Navbar.module.css`,"utf8");
fs.writeFileSync(`${base}/components/layout/Navbar.module.css`,
  navCSS + `\n@media(max-width:900px){
  .nav { padding: 0 1.25rem; }
  .logo img { height: 48px; }
}`, "utf8");

// ── Footer ────────────────────────────────────────────────────────────────────
const footCSS = fs.readFileSync(`${base}/components/layout/Footer.module.css`,"utf8");
const footFixed = footCSS.replace(
  "@media (max-width: 900px) {\n  .inner { grid-template-columns: 1fr 1fr; gap: 2rem; }\n}",
  `@media (max-width: 900px) {
  .inner { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .logo { height: 48px; }
}
@media (max-width: 600px) {
  .inner { grid-template-columns: 1fr; gap: 1.5rem; }
  .bottom { flex-direction: column; gap: 0.4rem; font-size: 0.72rem; }
}`);
fs.writeFileSync(`${base}/components/layout/Footer.module.css`, footFixed, "utf8");

// ── Services page ─────────────────────────────────────────────────────────────
const svcCSS = fs.readFileSync(`${base}/pages/Services.module.css`,"utf8");
const svcFixed = svcCSS.replace(
  "@media(max-width:700px){.grid{grid-template-columns:1fr;}}",
  `@media(max-width:900px){
  .section { padding: 64px 1.5rem; padding-top: calc(82px + 64px); }
  .heading { font-size: 1.8rem; }
  .grid { grid-template-columns: 1fr; }
  .sub { margin-bottom: 2rem; }
}`);
fs.writeFileSync(`${base}/pages/Services.module.css`, svcFixed, "utf8");

// ── Work page ─────────────────────────────────────────────────────────────────
const workCSS = fs.readFileSync(`${base}/pages/Work.module.css`,"utf8");
const workFixed = workCSS.replace(
  "@media(max-width:700px){.screenshots{grid-template-columns:1fr;}.meta{grid-template-columns:1fr;}}",
  `@media(max-width:900px){
  .section { padding: 64px 1.5rem; padding-top: calc(82px + 64px); }
  .heading { font-size: 1.8rem; }
  .screenshots { grid-template-columns: 1fr; }
  .meta { grid-template-columns: 1fr; gap: 1.25rem; }
  .screenshot { height: 220px; }
}
@media(max-width:600px){
  .cta { margin-top: 2.5rem; }
  .ctaBtn { width: 100%; justify-content: center; }
}`);
fs.writeFileSync(`${base}/pages/Work.module.css`, workFixed, "utf8");

// ── Pricing page ──────────────────────────────────────────────────────────────
const pricingCSS = fs.readFileSync(`${base}/pages/Pricing.module.css`,"utf8");
fs.writeFileSync(`${base}/pages/Pricing.module.css`,
  pricingCSS + `\n@media(max-width:900px){
  .section, .faqSection { padding: 64px 1.5rem; }
  .section { padding-top: calc(82px + 64px); }
  .heading { font-size: 1.8rem; }
  .card { padding: 2rem 1.5rem; }
  .pills { gap: 1.25rem; }
  .faqWrap { padding: 0 1.25rem; }
}`, "utf8");

// ── Contact page ──────────────────────────────────────────────────────────────
const contactCSS = fs.readFileSync(`${base}/pages/Contact.module.css`,"utf8");
const contactFixed = contactCSS.replace(
  "@media(max-width:900px){.inner{grid-template-columns:1fr;gap:3rem;}.row{grid-template-columns:1fr;}}",
  `@media(max-width:900px){
  .section { padding: 64px 1.5rem; padding-top: calc(82px + 48px); }
  .inner { grid-template-columns: 1fr; gap: 3rem; }
  .row { grid-template-columns: 1fr; }
  .formWrap { padding: 1.75rem 1.25rem; }
  .infoHeading { font-size: 1.7rem; }
}
@media(max-width:600px){
  .section { padding-left: 1rem; padding-right: 1rem; }
}`);
fs.writeFileSync(`${base}/pages/Contact.module.css`, contactFixed, "utf8");

// ── globals: fluid base font ──────────────────────────────────────────────────
const globalCSS = fs.readFileSync(`${base}/styles/globals.css`,"utf8");
if (!globalCSS.includes("@media(max-width:600px)")) {
  fs.writeFileSync(`${base}/styles/globals.css`,
    globalCSS + `\n@media(max-width:600px){\n  body { font-size: 16px; }\n}`, "utf8");
}

console.log("All mobile styles applied");
