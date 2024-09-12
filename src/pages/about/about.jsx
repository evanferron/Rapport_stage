import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import wave from "../../wave_bottom.svg";
import ProfilePicture from "../../assets/profile_picture.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";

import "./about.scss";

const About = () => {
  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
    document.getElementById("temp-message-hide").id = "temp-message";
    sleep(2000).then(() => {
      document.getElementById("temp-message").id = "temp-message-hide";
    });
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <main>
      <Header
        page={"about"}
        title={"A Propos"}
        buttonMessage={"Apprenez-en plus sur moi"}
        buttonTarget={"main-about-section"}
      ></Header>
      <section id="main-about-section">
        <section id="header-about">
          <img
            src={ProfilePicture}
            alt="profile picture"
            id="profile-picture"
          />
          <div>
            <img
              src={github}
              alt="link to my github"
              onClick={() => {
                window.open("https://github.com/evanferron", "_blank").focus();
              }}
            />
            <img
              src={email}
              alt="copy email to clipboard"
              onClick={() => {
                copyToClipBoard("evan.ferron53@gmail.com");
              }}
            />
            <img
              src={linkedin}
              alt="link to my linkedin"
              onClick={() => {
                window
                  .open(
                    "https://www.linkedin.com/in/evan-ferron-2b6a9a254",
                    "_blank"
                  )
                  .focus();
              }}
            />
          </div>
          <span>
            <p id="temp-message-hide">Email copié dans le presse papier</p>
          </span>
        </section>
        <section id="content-about">
          <section className="content-about-left">
            <h2>1. Qui je suis ?</h2>
            <p>
              Je m'appelle Evan Ferron et j'ai 20 ans et je suis passionné
              d'informatique depuis maintenant quelques années.
            </p>
          </section>
          <section className="content-about-right">
            <h2>2. Quel est mon parcour ?</h2>
            <p>
              J'ai obtenue mon baccalauréat avec mention au lycée saint-michel à
              Chateau-Gontier. Je suis actuellement sur ma troisième années en
              étude d'informatique (développement) à Ynov Nantes.
            </p>
          </section>
          <section className="content-about-left">
            <h2>3. Pourquoi ce site ?</h2>
            <p>
              Ce site sert de rapport de stage, me permettant de présenter de
              manière claire et structurée l'expérience que j'ai acquise au
              cours de cette période. Il met en avant les compétences que j'ai
              développées et les projets sur lesquels j'ai travaillé, tout en
              illustrant les apprentissages et les défis relevés durant mon
              stage.
            </p>
          </section>
          <section className="content-about-right">
            <h2>4. Titre 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              nemo maxime officia vel rem nostrum. Quae, suscipit quibusdam.
              Amet saepe pariatur totam sed temporibus atque similique
              accusantium nostrum eum facilis?
            </p>
          </section>
        </section>
        <img id="wave-main-bottom" src={wave}></img>
      </section>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default About;
