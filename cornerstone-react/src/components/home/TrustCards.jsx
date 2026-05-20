import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import s from "./TrustCards.module.css";

const cards = [
  { emoji:"🤝", title:"Honest work",
    desc:"We tell you exactly what you're getting, what it costs, and what to expect. No surprises, no upsells you didn't ask for." },
  { emoji:"📍", title:"Locally invested",
    desc:"We live and work in this area too. When your business grows, so does our community. That's not a tagline — it's why we started this." },
  { emoji:"📬", title:"Always reachable",
    desc:"You'll have a direct line to a real person — not a support ticket queue. Text us, call us, email us. We respond." },
];

export default function TrustCards() {
  return (
    <section className={`${s.section} glass-section`}>
      <div className={s.inner}>
        <motion.div className={s.header}
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:.6 }}>
          <SectionLabel center>Client results</SectionLabel>
          <h2 className={s.heading}>Built to earn your trust</h2>
          <p className={s.sub}>We're a new local business — just like the clients we serve. We don't have a wall of reviews yet, but we do have a clear commitment: we build every site as if our reputation depends on it. Because it does.</p>
        </motion.div>

        <div className={s.stack}>
          {cards.map((c, i) => (
            <motion.div key={c.title} className={s.card}
              initial={{ opacity:0, x:-24 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay: i*0.1, duration:.55, ease:[.22,1,.36,1] }}
              whileHover={{ x:4 }}>
              <span className={s.emoji}>{c.emoji}</span>
              <div>
                <h4 className={s.title}>{c.title}</h4>
                <p className={s.desc}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
