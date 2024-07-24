import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./contact.scss"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"

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
      <Header page={"contact"}></Header>
      <section id="main-contact-section">
        <section id="form-container">
          <div id="left-container">
            <img src={github} alt="link to my github" onClick={() => {
              window.location.href = "https://github.com/evanferron"
            }} />
            <img src={linkedin} alt="link to my linkedin" onClick={() => {
              window.location.href = "https://www.linkedin.com/in/evan-ferron-2b6a9a254"
            }} />
            <img src={email} alt="copy email to clipboard" onClick={() => {
              copyToClipBoard("evan.ferron53@gmail.com")
            }} />
            <p id="temp-message-hide">Email copié dans le presse papier</p>
          </div>
          <div id="right-container">
            <form action={(e) => formHandler(e)}>
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
                <button>Envoyer</button>
              </fieldset>
            </form>
          </div>
        </section>
        <section id="wave-main-bottom"></section>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Contact;
