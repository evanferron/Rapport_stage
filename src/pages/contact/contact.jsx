import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import "./contact.scss"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"
import wave from "../../wave_bottom.svg"
import transition from "../../utils/transition";

const Contact = () => {
  const formHandler = (e) => {

  }
  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
    document.getElementById("temp-message-hide").id = "temp-message"
    sleep(2000).then(() => {
      document.getElementById("temp-message").id = "temp-message-hide"
    })
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <main>
      <Header page={"contact"} title={"Mon Contact"} buttonMessage={"Contactez-moi"} buttonTarget={"main-contact-section"}></Header>
      <section id="main-contact-section">
        <section id="form-container">
          <div id="left-container">
            <img src={github} alt="link to my github" onClick={() => {
              window.open("https://github.com/evanferron", "_blank").focus()
            }} />
            <img src={linkedin} alt="link to my linkedin" onClick={() => {
              window.open("https://www.linkedin.com/in/evan-ferron-2b6a9a254", "_blank").focus()
            }} />
            <img src={email} alt="copy email to clipboard" onClick={() => {
              copyToClipBoard("evan.ferron53@gmail.com")
            }} />
            <p id="temp-message-hide">Email copié dans le presse papier</p>
          </div>
          <div id="right-container">
            <form>
              <fieldset>
                <legend>Formulaire de Contact</legend>
                <div className="input-container">
                  <label htmlFor="email-input">Email :</label>
                  <input type="text" name="email" id="email-input" placeholder="nom.prenom@gmail.com" />
                </div>
                <div className="input-container">
                  <label htmlFor="object">Object :</label>
                  <input type="text" name="object" id="object" placeholder="prendre contact" />
                </div>
                <div id="message-container">
                  <label htmlFor="message-input">Message :</label>
                  <textarea name="message" id="message-input" placeholder="Bonjour, ..."></textarea>
                </div>
                <button onClick={(e) => formHandler(e)}>Envoyer</button>
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
