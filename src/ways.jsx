import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Entreprise from "./pages/entreprise/entreprise";
import Articles from "./pages/articles/articles";
import Article from "./pages/article/article";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Error from "./pages/error/error";

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
