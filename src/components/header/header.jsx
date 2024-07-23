import "./header.scss"
import Navbar from "../navbar/navbar";

const Header = ({ page }) => {
    return (
        <section id="header">
            <Navbar page={page}></Navbar>
            <h1>Bienvenue</h1>
            <button id="button-down">
                <h2>Découvrez mon expérience à Eurial</h2>
                <div></div>
            </button>
            <section></section>
        </section>
    );
};

export default Header;