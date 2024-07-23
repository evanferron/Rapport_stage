import "./navbar.scss"
import logo from "../../assets/logo_ef.png"

const Navbar = () => {
  return (
    <header id="navbar">
      <img src={logo} alt="logo Evan Ferron" />
      <nav>
        <ul>
          <li className="navbar-link">
            <a href="/">
              ACCUEIL
            </a>
          </li>
          <li className="navbar-link">
            <a href="/entreprise">
              L'ENTREPRISE
            </a>
          </li>
          <li className="navbar-link">
            <a href="articles">
              ARTICLES
            </a>
          </li>
          <li className="navbar-link">
            <a href="/apropos">
              A PROPOS
            </a>
          </li>
        </ul>
      </nav>
      <button>CONTACT</button>
    </header>
  );
};

export default Navbar;
