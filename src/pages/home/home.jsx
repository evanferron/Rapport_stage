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
import "./home.scss";

const Home = () => {
  // to do manage cookie for do or not the transition
  const content = (
    <main>
      <Header
        page={"home"}
        title={"Bienvenue"}
        buttonMessage={"Découvrez mon expérience à Eurial"}
      ></Header>
      <section id="main-home-section">
        <h2>Laissez-moi vous guider !</h2>
        <section id="link-container">
          <img src={cow} alt="cow logo" id="cow" />
          <div id="first-bulle">
            <p>Commencez par découvrir Eurial et son histoire.</p>
          </div>
          <img src={path1} alt="first path" id="first-path" />
          <div id="second-bulle"></div>
          <img src={truck} alt="truck logo" id="truck" />
          <img src={path2} alt="second path" id="second-path" />
          <img src={factory} alt="factory logo" id="factory"/>
          <div id="third-bulle"></div>
          <img src={path3} alt="third path" />
          <div id="fourth-bulle"></div>
          <img src={cheese} alt="cheese logo" />
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
