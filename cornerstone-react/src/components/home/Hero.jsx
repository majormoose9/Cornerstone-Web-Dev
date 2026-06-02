import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./Hero.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22,1,0.36,1] },
});

export default function Hero() {
  return (
    <section className={s.wrapper}>
      {[1,2,3,4,5,6,7,8].map(n => (
        <div key={n} className={`${s.blob} ${s[`blob${n}`]}`} />
      ))}
      <div className={s.noiseOverlay} />

      <div className={s.hero}>
        <motion.div className={s.eyebrow} {...fadeUp(0.1)}>
          <span className={s.dot} />
          Local web development, done right
        </motion.div>

        <motion.h1 {...fadeUp(0.2)}>
          Your business deserves a website that{" "}
          <em>actually works</em>
        </motion.h1>

        <motion.p className={s.sub} {...fadeUp(0.35)}>
          We build fast, beautiful, trust-building websites for small businesses because we believe a good website is a <strong>Cornerstone</strong> of every great business.
        </motion.p>

        <motion.div className={s.actions} {...fadeUp(0.5)}>
          <Link to="/contact" className={s.btnPrimary}>
            Schedule a Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
          <a href="#how-it-works" className={s.btnGhost}>See how it works</a>
        </motion.div>
      </div>

    </section>
  );
}