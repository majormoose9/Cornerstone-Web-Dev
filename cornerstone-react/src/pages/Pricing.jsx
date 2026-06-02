import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";
import s from "./Pricing.module.css";

const features = [
  "Custom-designed website",
  "Mobile-responsive on every device",
  "Contact form & click-to-call button",
  "Local SEO setup so Google can find you",
  "Google Business Profile setup",
  "Fast load times & SSL security",
  "Hosting setup & domain guidance",
  "30 days of free revisions after launch",
];

const faqs = [
  { q:"Do I need to know anything about technology?",
    a:"Not at all. Our whole process is designed for business owners, not tech people. You focus on describing your business and what you want — we handle every technical detail." },
  { q:"How long does it take to build my website?",
    a:"Most websites are live within a week of our first conversation. The process: discovery call → design preview within 5 business days → feedback → finalize and launch." },
  { q:"Will I be able to update the website myself?",
    a:"Yes — within 30 days of launch, just reach out and we'll take care of any updates for you. After that window, the site is fully yours to manage." },
  { q:"Is there a contract? What if I want to cancel?",
    a:"No contract at all. You pay once, we build your site, and you own it outright. There's no subscription to cancel and no recurring commitment." },
  { q:"What areas do you serve?",
    a:"We're based out of Massachusetts and primarily serve businesses across the Greater Boston area, South Shore, and Rhode Island — but we happily work with clients from anywhere in the country. Everything we do is fully remote." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.faqItem}>
      <button className={s.faqQ} onClick={() => setOpen(v => !v)} aria-expanded={open}>
        {q}
        <motion.span className={s.toggle} animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={s.faqA}
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: "0.75rem" }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}>
            <div className={s.faqAInner}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.3}}>
      {/* Pricing */}
      <section className={`${s.section} glass-section`}>
        <div className={s.inner}>
          <motion.div className={s.header}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <SectionLabel center>Transparent pricing</SectionLabel>
            <h1 className={s.heading}>Simple, honest pricing</h1>
            <p className={s.sub}>One flat rate. No monthly fees. No hidden costs. You own your website outright.</p>
          </motion.div>

          <motion.div className={s.card}
            initial={{opacity:0,y:32}} animate={{opacity:1,y:0}}
            transition={{delay:.2,duration:.6,ease:[.22,1,.36,1]}}>
            <div className={s.badge}>Everything included</div>
            <div className={s.planName}>Complete Website Package</div>
            <div className={s.price}><sup>$</sup>499</div>
            <div className={s.priceNote}>one-time payment · you own it forever</div>
            <hr className={s.divider} />
            <ul className={s.features}>
              {features.map(f => <li key={f}><span className={s.check}>✓</span>{f}</li>)}
            </ul>
            <Link to="/contact" className={s.cta}>Schedule a Call</Link>
          </motion.div>

          <div className={s.pills}>
            {["No monthly fees","Live in a week","Free discovery call"].map(p => (
              <div key={p} className={s.pill}><span className={s.pillCheck}>✓</span>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${s.faqSection} glass-section`}>
        <div className={s.inner}>
          <motion.div className={s.header}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
            viewport={{once:true}} transition={{duration:.6}}>
            <SectionLabel center>FAQ</SectionLabel>
            <h2 className={s.heading}>Questions we hear a lot</h2>
          </motion.div>
          <div className={s.faqWrap}>
            {faqs.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
