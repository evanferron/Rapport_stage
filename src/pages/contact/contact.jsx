import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import "./contact.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import wave from "../../wave_bottom.svg";
import emailjs from "emailjs-com";
import { useState } from "react";
import LoadingIcon from "../../components/loadingIcon/loadingIcon";

const Contact = () => {
  const [isFormLoading, setisFormLoading] = useState(false);
  const formHandler = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    setisFormLoading(true);
    // Validation basique
    const emailInput = document.getElementById("email").value;
    const objectInput = document.getElementById("object").value;
    const messageInput = document.getElementById("message").value;

    if (!emailInput || !objectInput || !messageInput) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Si vous utilisez EmailJS pour envoyer le formulaire
    emailjs
      .sendForm(
        "service_h8yj62l",
        "template_22k2aw4",
        e.target,
        "2gEgpgjiH9ivsC7vD"
      )
      .then(
        (res) => {
          alert("Message envoyé avec succès !");
          // Réinitialiser le formulaire après l'envoi
          e.target.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi, veuillez réessayer.");
          console.error("Erreur EmailJS :", error);
        }
      );
    isFormLoading(false);
  };
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
        page={"contact"}
        title={"Mon Contact"}
        buttonMessage={"Contactez-moi"}
        buttonTarget={"main-contact-section"}
      ></Header>
      <section id="main-contact-section">
        <section id="form-container">
          <div id="left-container">
            <img
              src={github}
              alt="link to my github"
              onClick={() => {
                window.open("https://github.com/evanferron", "_blank").focus();
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
            <img
              src={email}
              alt="copy email to clipboard"
              onClick={() => {
                copyToClipBoard("evan.ferron53@gmail.com");
              }}
            />
            <p id="temp-message-hide">Email copié dans le presse papier</p>
          </div>
          <div id="right-container">
            <form onSubmit={formHandler}>
              <fieldset>
                <legend>Formulaire de Contact</legend>
                <div className="input-container">
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="nom.prenom@gmail.com"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="object">Object :</label>
                  <input
                    type="text"
                    name="object"
                    id="object"
                    placeholder="prendre contact"
                  />
                </div>
                <div id="message-container">
                  <label htmlFor="message">Message :</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Bonjour, ..."
                  ></textarea>
                </div>
                {/* {isFormLoading ? (
                  <LoadingIcon></LoadingIcon>
                ) : (
                  <button type="submit">Envoyer</button>
                )} */}
                <button type="submit">Envoyer</button>
              </fieldset>
            </form>
          </div>
        </section>
        <img id="wave-main-bottom" src={wave}></img>
      </section>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Contact;
