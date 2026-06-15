import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import s from "./TrustCards.module.css";

const cards = [
  { emoji: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C8883A" width="30" height="30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ), title:"Always Transparent",
    desc:"We tell you exactly what you're getting, what it costs, and what to expect. No surprises, no upsells you didn't ask for." },
  { emoji: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C8883A" width="30" height="30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ), title:"Locally invested",
    desc:"We are dedicated to helping our community grow across MA and RI — but we're happy to work with any small business across the country." },
  { emoji: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C8883A" width="30" height="30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ), title:"Always reachable",
    desc:"You'll have a direct line to a real person — not a support ticket queue. Email us and we respond fast." },
];

export default function TrustCards() {
  return (
    <section className={`${s.section} glass-section`}>
      <div className={s.inner}>
        <motion.div className={s.header}
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:.6 }}>
          <SectionLabel center>Who we are</SectionLabel>
          <h2 className={s.heading}>Built to earn your trust</h2>
          <p className={s.sub}>We are a student-run agency helping small businesses build and improve their online presences. Our goal is to make an impact on how you do business through Google Business Profile optimization and website development. We specialize in setting up simple, effective customer acquisition systems that turn online traffic into real customers.</p>
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
