import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import s from "./HowItWorks.module.css";

const steps = [
  { num:"01", title:"Free discovery call",
    desc:"We dedicate time to understanding your business, your customers, and what you want your website to do for you. No commitment, no pressure." },
  { num:"02", title:"Design & build",
    desc:"We design and develop your site from scratch. You'll see a preview before anything goes live, and we revise until you're genuinely happy with it." },
  { num:"03", title:"Launch & grow",
    desc:"We handle the technical launch — hosting, domain, speed optimization, and Google setup. Then we stay available for updates and support as you grow." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`${s.section} glass-section`}>
      <div className={s.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <SectionLabel>The process</SectionLabel>
          <h2 className={s.heading}>From conversation to live site in three steps</h2>
          <p className={s.sub}>We make the process simple and transparent. No technical jargon. No surprises on the bill.</p>
        </motion.div>

        <motion.div className={s.grid} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {steps.map((st, i) => (
            <motion.div key={st.num} className={s.card} variants={card}
              whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,.25)" }}>
              <div className={s.num}>{st.num}</div>
              <h3 className={s.title}>{st.title}</h3>
              <p className={s.desc}>{st.desc}</p>
              {i < steps.length - 1 && <div className={s.connector} />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
