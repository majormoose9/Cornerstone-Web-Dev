import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar   from "./components/layout/Navbar";
import Footer   from "./components/layout/Footer";
import Home     from "./pages/Home";
import Services from "./pages/Services";
import Work     from "./pages/Work";
import Pricing  from "./pages/Pricing";
import Contact  from "./pages/Contact";

// Scrolls to #hash after route change
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [pathname, hash]);
  return null;
}

const page = { initial:{opacity:0}, animate:{opacity:1}, exit:{opacity:0}, transition:{duration:0.3} };

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"         element={<Home />}     />
          <Route path="/services" element={<Services />} />
          <Route path="/work"     element={<Work />}     />
          <Route path="/pricing"  element={<Pricing />}  />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}