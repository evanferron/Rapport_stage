import "./header.scss";
import Navbar from "../navbar/navbar";

const Header = ({ page, title, buttonMessage, buttonTarget }) => {
  return (
    <section id="header">
      <Navbar page={page}></Navbar>
      <h1>{title}</h1>
      <button id="button-down" onClick={() => {
        window.location.href = "#" + buttonTarget
      }}>
        <h2>{buttonMessage}</h2>
        <div></div>
      </button>
      <section></section>
    </section>
  );
};

export default Header;
