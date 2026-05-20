import { motion } from "framer-motion";
import SectionLabel from "../components/ui/SectionLabel";
import s from "./Services.module.css";

const services = [
  { icon:"🖥",  title:"Custom Website Design",        desc:"Handcrafted sites built for your specific business — not a drag-and-drop template. Looks great on every device." },
  { icon:"🔍",  title:"Local SEO Setup",              desc:"We optimize your site so people in your area can find you on Google when they're searching for exactly what you offer." },
  { icon:"⚡",  title:"Speed & Performance",          desc:"Slow sites lose customers. We build with performance as a priority — fast load times on every connection." },
  { icon:"📞",  title:"Lead Capture Setup",           desc:"Contact forms, click-to-call buttons, booking integrations — we set up the tools that turn visitors into real leads." },
  { icon:"🗺",  title:"Google Business Profile",      desc:"We set up and optimize your Google listing so you show up on maps and in local search results with confidence." },
  { icon:"🛠",  title:"30-Day Post-Launch Support",   desc:"Every project includes a 30-day revision window after launch. Need to update something? Reach out and we'll handle it." },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity:0, y:24 },
  show:   { opacity:1, y:0, transition:{ duration:.55, ease:[.22,1,.36,1] } },
};

export default function Services() {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.3}}>
      <section className={`${s.section} glass-section`} style={{paddingTop:"calc(82px + 96px)"}}>
        <div className={s.inner}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <SectionLabel>What we offer</SectionLabel>
            <h1 className={s.heading}>Everything a small business needs online</h1>
            <p className={s.sub}>We handle the full picture — not just the website itself, but everything that makes it actually bring in business.</p>
          </motion.div>

          <motion.div className={s.grid} variants={stagger} initial="hidden" animate="show">
            {services.map(sv => (
              <motion.div key={sv.title} className={s.tile} variants={item}
                whileHover={{background:"rgba(255,255,255,.07)"}}>
                <div className={s.icon}>{sv.icon}</div>
                <h3 className={s.title}>{sv.title}</h3>
                <p className={s.desc}>{sv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
