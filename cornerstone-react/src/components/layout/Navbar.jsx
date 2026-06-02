import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import s from "./Navbar.module.css";

const links = [
  { to: "/",              label: "How It Works" },
  { to: "/work",          label: "Our Work"     },
  { to: "/services",      label: "Services"     },
  { to: "/pricing",       label: "Pricing"      },
  { to: "/pricing#faq",   label: "FAQ"          },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
        <Link to="/" className={s.logo} aria-label="Cornerstone Home">
          <img src="/logo.png" alt="Cornerstone Web Development" />
        </Link>

        <div className={s.links}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? s.active : ""}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className={s.cta}>Schedule a Call</Link>
        </div>

        <button
          className={`${s.hamburger} ${open ? s.open : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={s.backdrop}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className={s.drawer}
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {links.map(l => (
                <Link key={l.to} to={l.to} className={s.drawerLink} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className={s.drawerCta} onClick={() => setOpen(false)}>
                Schedule a Call
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
