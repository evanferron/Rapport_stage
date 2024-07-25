import "./navbar.scss";
import logo from "../../assets/logo_ef.png";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <header id="navbar">
      <img
        src={logo}
        alt="logo Evan Ferron"
        onClick={() => {
          window.location.href = "/";
        }}
      />
      <nav>
        <ul>
          <li
            className={`navbar-link ${page == "home" ? " navbar-link-selected" : ""
              }`}
          >
            <Link to="/">ACCUEIL</Link>
          </li>
          <li
            className={`navbar-link ${page == "entreprise" ? " navbar-link-selected" : ""
              }`}
          >
            <Link to="/entreprise">L'ENTREPRISE</Link>
          </li>
          <li
            className={`navbar-link ${page == "articles" ? " navbar-link-selected" : ""
              }`}
          >
            <Link to="/articles">ARTICLES</Link>
          </li>
          <li
            className={`navbar-link ${page == "about" ? " navbar-link-selected" : ""
              }`}
          >
            <Link to="/about">A PROPOS</Link>
          </li>
        </ul>
      </nav>
      <Link to="/contact" className="button" id={`${page == 'contact' ? 'on-contact-page' : 'not-on-contact-page'}`} >CONTACT</Link>
      {/* <button onClick={() => { window.location.href = "/contact" }} id={`${page == 'contact' ? 'on-contact-page' : 'not-on-contact-page'}`} >CONTACT</button> */}
    </header>
  );
};

export default Navbar;
