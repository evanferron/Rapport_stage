import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import transition from "../../utils/transition";
import wave from "../../wave_bottom.svg";
import cow from "./cow.png";
import factory from "./factory.png";
import truck from "./truck.png";
import cheese from "./cheese.png";
import path1 from "./1path.png";
import path2 from "./2path.png";
import path3 from "./3path.png";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  // to do manage cookie for do or not the transition
  const content = (
    <main>
      <Header
        page={"home"}
        title={"Bienvenue"}
        buttonMessage={"Découvrez mon expérience chez Eurial"}
        buttonTarget={"main-home-section"}
      ></Header>
      <section id="main-home-section">
        <h2>Laissez-moi vous guider !</h2>
        <section id="link-container">
          <img src={cow} alt="cow logo" id="cow" />
          <Link
            id="first-bulle"
            to={"entreprise"}
            className="bulle"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p>Commencez par découvrir Eurial et son histoire.</p>
          </Link>
          <img src={path1} alt="first path" id="first-path" />
          <Link
            id="second-bulle"
            to={"articles"}
            className="bulle"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p>Plongez dans mon quotidien à travers des articles.</p>
          </Link>
          <img src={truck} alt="truck logo" id="truck" />
          <img src={path2} alt="second path" id="second-path" />
          <img src={factory} alt="factory logo" id="factory" />
          <Link
            id="third-bulle"
            to={"about"}
            className="bulle"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p>Apprenez en plus sur moi.</p>
          </Link>
          <img src={path3} alt="third path" id="third-path" />
          <Link
            id="fourth-bulle"
            to={"contact"}
            className="bulle"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p>Si vous voulez me contacter c'est juste ici !</p>
          </Link>
          <img src={cheese} alt="cheese logo" id="cheese" />
        </section>
        <img id="wave-main-bottom" src={wave}></img>
      </section>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );

  return content;
};

export default transition(Home);
