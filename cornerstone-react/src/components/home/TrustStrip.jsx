import { motion } from "framer-motion";
import s from "./TrustStrip.module.css";

const pills = [
  { icon: "⚡", label: "Live in 10 business days" },
  { icon: "📞", label: "Local & reachable" },
  { icon: "🎨", label: "Custom designed"   },
  { icon: "📈", label: "Built to grow"     },
];

export default function TrustStrip() {
  return (
    <div className={s.strip}>
      <span className={s.label}>Why local businesses choose us</span>
      {pills.map((p, i) => (
        <motion.div
          key={p.label} className={s.pill}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <span className={s.icon}>{p.icon}</span>
          {p.label}
        </motion.div>
      ))}
    </div>
  );
}
