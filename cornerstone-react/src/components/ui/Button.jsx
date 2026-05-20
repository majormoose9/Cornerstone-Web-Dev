import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./Button.module.css";

export default function Button({ to, href, children, variant = "primary", onClick }) {
  const cls = `${s.btn} ${s[variant]}`;
  const props = { className: cls, whileHover: { y: -2 }, whileTap: { y: 0 }, onClick };
  if (to)   return <motion.div {...props}><Link to={to}>{children}</Link></motion.div>;
  if (href) return <motion.a href={href} {...props}>{children}</motion.a>;
  return <motion.button {...props}>{children}</motion.button>;
}
