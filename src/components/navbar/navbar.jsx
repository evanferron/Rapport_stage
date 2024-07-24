import "./navbar.scss";
import logo from "../../assets/logo_ef.png";

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
            <a href="/">ACCUEIL</a>
          </li>
          <li
            className={`navbar-link ${page == "entreprise" ? " navbar-link-selected" : ""
              }`}
          >
            <a href="/entreprise">L'ENTREPRISE</a>
          </li>
          <li
            className={`navbar-link ${page == "articles" ? " navbar-link-selected" : ""
              }`}
          >
            <a href="articles">ARTICLES</a>
          </li>
          <li
            className={`navbar-link ${page == "about" ? " navbar-link-selected" : ""
              }`}
          >
            <a href="/about">A PROPOS</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => { window.location.href = "/contact" }} id={`${page == 'contact' ? 'on-contact-page' : 'not-on-contact-page'}`} >CONTACT</button>
    </header>
  );
};

export default Navbar;
