import s from "./SectionLabel.module.css";
export default function SectionLabel({ children, center = false }) {
  return (
    <div className={`${s.label} ${center ? s.center : ""}`}>{children}</div>
  );
}
