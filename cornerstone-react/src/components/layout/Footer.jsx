import { Link } from "react-router-dom";
import s from "./Footer.module.css";

const services = ["Website Design","Local SEO","Google Business","Ongoing Support"];
const company  = [
  { label:"How It Works", to:"/#how-it-works" },
  { label:"Our Work",     to:"/work"           },
  { label:"Pricing",      to:"/pricing"        },
  { label:"FAQ",          to:"/pricing#faq"    },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>
          <img src="/logo.png" alt="Cornerstone Web Development" className={s.logo} />
          <p className={s.tagline}>
            Professional websites for small businesses that want to be found, trusted, and chosen.
          </p>
        </div>

        <div className={s.col}>
          <h5>Services</h5>
          {services.map(s2 => <Link key={s2} to="/services">{s2}</Link>)}
        </div>

        <div className={s.col}>
          <h5>Company</h5>
          {company.map(c => <Link key={c.to} to={c.to}>{c.label}</Link>)}
        </div>

        <div className={s.col}>
          <h5>Contact</h5>
          <a href="mailto:hello@cornerstonewebdev.com">hello@cornerstonewebdev.com</a>
          <a href="tel:+15085550000">(508) 555-0000</a>
          <Link to="/contact">Book a Call</Link>
        </div>
      </div>

      <div className={s.bottom}>
        <span>© {new Date().getFullYear()} Cornerstone Web Development. All rights reserved.</span>
        <span>Serving local businesses with pride.</span>
      </div>
    </footer>
  );
}
