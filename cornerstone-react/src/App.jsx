import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import Navbar   from "./components/layout/Navbar";
import Footer   from "./components/layout/Footer";
import Home     from "./pages/Home";
import Services from "./pages/Services";
import Work     from "./pages/Work";
import Pricing  from "./pages/Pricing";
import Contact  from "./pages/Contact";

// Disable browser scroll restoration at module level — runs before React mounts
if (typeof window !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// useLayoutEffect fires synchronously before paint, beating the browser
// scroll restoration. Also resets body.scrollTop for Safari.
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
      return;
    }
    // Reset every scrollable target — covers Chrome, Firefox and Safari
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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