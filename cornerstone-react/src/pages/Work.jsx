import { motion } from "framer-motion";
import SectionLabel from "../components/ui/SectionLabel";
import s from "./Work.module.css";

const tags = ["Custom Design","Mobile Responsive","Local SEO","Full Rebuild"];

export default function Work() {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.3}}>
      <section className={`${s.section} glass-section`} style={{paddingTop:"calc(82px + 96px)"}}>
        <div className={s.inner}>
          <motion.div className={s.header}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <SectionLabel center>Our work</SectionLabel>
            <h1 className={s.heading}>Real sites. Real transformations.</h1>
            <p className={s.sub}>Here's what we've actually built — so you can see the difference a properly designed website makes.</p>
          </motion.div>

          <motion.div className={s.card}
            initial={{opacity:0,y:32}} animate={{opacity:1,y:0}}
            transition={{delay:.2,duration:.6,ease:[.22,1,.36,1]}}>

            <div className={s.screenshots}>
              <div className={s.screenshot}>
                <span className={s.labelBefore}>Before</span>
                <img src="/kimball_before.jpeg" alt="Kimball Sand original site" />
              </div>
              <div className={s.screenshot}>
                <span className={s.labelAfter}>After</span>
                <img src="/kimball_after.jpeg" alt="Kimball Sand redesigned site" />
              </div>
            </div>

            <div className={s.meta}>
              <div className={s.metaLeft}>
                <h2 className={s.client}>Kimball Sand and Gravel</h2>
                <p className={s.desc}>
                  A complete ground-up redesign for a long-established aggregate supplier in Blackstone, MA. We replaced a dated, table-based website with a modern, fast-loading site — improving mobile usability, local search visibility, and the overall impression customers get before they ever make a call.
                </p>
                <div className={s.tags}>
                  {tags.map(t => <span key={t} className={s.tag}>{t}</span>)}
                </div>
              </div>
              <motion.a
                href="https://k-sand-test.vercel.app/" target="_blank" rel="noopener"
                className={s.liveLink}
                whileHover={{background:"var(--accent)",color:"#fff"}}
                transition={{duration:.2}}>
                View live site →
              </motion.a>
            </div>
          </motion.div>

          <motion.div className={s.cta}
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>
            <p>Want to be our next case study?</p>
            <motion.a href="/contact" className={s.ctaBtn}
              whileHover={{y:-2}} whileTap={{y:0}}>
              Let's talk about your site →
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
