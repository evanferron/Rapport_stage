import "./header.scss";
import Navbar from "../navbar/navbar";
import wave from "./wave_header.svg"
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
      <img id="wave-header" src={wave}></img>
    </section>
  );
};

export default Header;
