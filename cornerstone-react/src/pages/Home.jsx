import { motion } from "framer-motion";
import Hero       from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import HowItWorks from "../components/home/HowItWorks";
import TrustCards from "../components/home/TrustCards";

const page = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
  transition: { duration: 0.3 },
};

export default function Home() {
  return (
    <motion.main {...page}>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <TrustCards />
    </motion.main>
  );
}
