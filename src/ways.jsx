import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Entreprise from "./pages/entreprise/entreprise";
import Articles from "./pages/articles/articles";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Error from "./pages/error/error";
import { AnimatePresence } from "framer-motion";

function Ways() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}
export default Ways;
