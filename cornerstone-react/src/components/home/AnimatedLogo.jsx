import { motion } from "framer-motion";
import s from "./AnimatedLogo.module.css";

const tileVariants = {
  rest: { filter: "drop-shadow(0 0 0px rgba(200,136,58,0))" },
};

const tiles = [
  {
    id: "left",
    points: "28,52 168,52 120,76 120,100 78,116 78,172 28,152",
    fill: "#1A3C34",
    hover: { x: -22, y: 0, scale: 1.06, rotateY: -6,
             filter: "drop-shadow(0 0 18px rgba(31,61,46,0.6))" },
  },
  {
    id: "arm-right",
    points: "168,52 120,76 120,100 168,76",
    fill: "#122B25",
    hover: { x: -22, y: 0, scale: 1.06, rotateY: -6,
             filter: "drop-shadow(0 0 18px rgba(31,61,46,0.6))" },
  },
  {
    id: "orange-top",
    points: "78,116 120,100 162,78 120,94",
    fill: "#F59E0B",
    hover: { x: 14, y: -16, scale: 1.08,
             filter: "drop-shadow(0 0 24px rgba(245,158,11,0.85))" },
  },
  {
    id: "orange-front",
    points: "78,116 120,100 162,78 162,136 120,158 78,158",
    fill: "#C8883A",
    hover: { x: 22, y: 12, scale: 1.06, rotateY: 6,
             filter: "drop-shadow(0 0 28px rgba(200,136,58,0.85))" },
  },
  {
    id: "top",
    points: "100,8 168,52 100,96 28,52",
    fill: "#2D6A5A",
    hover: { x: 0, y: -22, scale: 1.06, rotateX: 6,
             filter: "drop-shadow(0 0 18px rgba(31,61,46,0.6))" },
  },
];

export default function AnimatedLogo() {
  return (
    <div className={s.container}>
      <svg viewBox="0 0 200 215" className={s.svg} xmlns="http://www.w3.org/2000/svg">
        {tiles.map(t => (
          <motion.polygon
            key={t.id}
            points={t.points}
            fill={t.fill}
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            style={{ transformOrigin: "center center" }}
            variants={tileVariants}
            initial="rest"
            whileHover={t.hover}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          />
        ))}
      </svg>
    </div>
  );
}
