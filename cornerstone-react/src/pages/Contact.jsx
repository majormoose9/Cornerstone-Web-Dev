import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "../components/ui/SectionLabel";
import s from "./Contact.module.css";

const ENDPOINT = "https://formspree.io/f/xojrygvw";

const details = [
  { icon:"✉", label:"Email us", value:"cornerstone.website.development@gmail.com", href:"mailto:cornerstone.website.development@gmail.com" },
  { icon:"⏱", label:"Response time", value:"Within one business day — usually same day" },
];

export default function Contact() {
  const [form, setForm]       = useState({ name:"", business:"", email:"", phone:"", current_website:"", best_time:"", services:"", message:"" });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Please enter your name.";
    if (!form.business.trim())e.business= "Please enter your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please describe your project.";
    return e;
  };

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({}); setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, { method:"POST", body:new FormData(e.target), headers:{ Accept:"application/json" } });
      if (res.ok) setStatus("success"); else throw new Error();
    } catch { setStatus("error"); }
  };

  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.3}}>
      <section className={s.section}>
        <div className={s.inner}>

          {/* Form */}
          <motion.div className={s.formWrap}
            initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.6,ease:[.22,1,.36,1]}}>
            {status === "success" ? (
              <div className={s.success}>
                <div className={s.successIcon}>✓</div>
                <h3>Message received!</h3>
                <p>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h2 className={s.formTitle}>Let's talk about your site</h2>
                <p className={s.formSub}>Fill this out and we'll get back to you within one business day — usually much faster.</p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className={s.row}>
                    <div className={`${s.field} ${errors.name ? s.hasError : ""}`}>
                      <label htmlFor="name">Your Name <span>*</span></label>
                      <input id="name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} autoComplete="name" />
                      {errors.name && <span className={s.err}>{errors.name}</span>}
                    </div>
                    <div className={`${s.field} ${errors.business ? s.hasError : ""}`}>
                      <label htmlFor="business">Business Name <span>*</span></label>
                      <input id="business" name="business" type="text" placeholder="Smith Plumbing LLC" value={form.business} onChange={handleChange} autoComplete="organization" />
                      {errors.business && <span className={s.err}>{errors.business}</span>}
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={`${s.field} ${errors.email ? s.hasError : ""}`}>
                      <label htmlFor="email">Email <span>*</span></label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} autoComplete="email" />
                      {errors.email && <span className={s.err}>{errors.email}</span>}
                    </div>
                    <div className={s.field}>
                      <label htmlFor="phone">Phone <small>(optional)</small></label>
                      <input id="phone" name="phone" type="tel" placeholder="(508) 555-0000" value={form.phone} onChange={handleChange} autoComplete="tel" />
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label htmlFor="current_website">Current Website <small>(optional)</small></label>
                      <input id="current_website" name="current_website" type="url" placeholder="https://yoursite.com" value={form.current_website} onChange={handleChange} />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="best_time">Best Time to Reach You</label>
                      <select id="best_time" name="best_time" value={form.best_time} onChange={handleChange}>
                        <option value="" disabled>Select a time...</option>
                        <option value="Morning (8am - 12pm)">Morning (8am – 12pm)</option>
                        <option value="Afternoon (12pm - 5pm)">Afternoon (12pm – 5pm)</option>
                        <option value="Evening (5pm - 8pm)">Evening (5pm – 8pm)</option>
                        <option value="Anytime">Anytime works</option>
                      </select>
                    </div>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="services">Services You're Interested In</label>
                    <select id="services" name="services" value={form.services} onChange={handleChange}>
                      <option value="" disabled>Select a service...</option>
                      <option value="First Time Website">First Time Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Google Business Profile">Google Business Profile</option>
                    </select>
                  </div>
                  <div className={`${s.field} ${errors.message ? s.hasError : ""}`}>
                    <label htmlFor="message">Tell Us About Your Project <span>*</span></label>
                    <textarea id="message" name="message" rows={5} placeholder="What kind of business do you run? What are you hoping a new website will do for you?" value={form.message} onChange={handleChange} />
                    {errors.message && <span className={s.err}>{errors.message}</span>}
                  </div>
                  {status === "error" && <p className={s.formError}>Something went wrong. Please try again.</p>}
                  <motion.button type="submit" className={s.submit} disabled={status==="sending"}
                    whileHover={{y:-2}} whileTap={{y:0}}>
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>

          {/* Info */}
          <motion.div className={s.info}
            initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{delay:.2,duration:.6,ease:[.22,1,.36,1]}}>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className={s.infoHeading}>Ready to get a website that works as hard as you do?</h2>
            <p className={s.infoSub}>It starts with a free, no-pressure conversation. Tell us about your business and we'll show you exactly what we'd build.</p>
            {details.map(d => (
              <div key={d.label} className={s.detail}>
                <div className={s.detailIcon}>{d.icon}</div>
                <div>
                  <h4>{d.label}</h4>
                  {d.href ? <a href={d.href}>{d.value}</a> : <p>{d.value}</p>}
                </div>
              </div>
            ))}
            <p className={s.legal}>No commitment. No sales pitch. Just a friendly conversation about your goals.</p>
          </motion.div>

        </div>
      </section>
    </motion.main>
  );
}
