import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useEffect, useRef } from "react";
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
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    // On the very first render (hard reload), always go to top —
    // main.jsx already stripped the hash, but this guards against
    // any race where the hash is still set.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return;
    }
    // Subsequent client-side navigations: honour hash links.
    // Timeout must exceed the AnimatePresence page-transition duration (300ms)
    // so the target page has fully mounted before we try to find the element.
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return;
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  // Post-paint safety net
  useEffect(() => {
    if (!hash && !isFirstRender.current) {
      window.scrollTo(0, 0);
    }
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