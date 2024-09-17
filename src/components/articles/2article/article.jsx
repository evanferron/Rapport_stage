import React from "react";
import "../article.scss";
import "./article.scss";
import LogoPowerApp from "./powerapp_logo.png";
import LogoPowerAutomate from "./powerautomate_logo.png";
import LoginImage from "./login_image_learning.png";
import ComposantImage from "./composant_navbar.png";
import ScriptButton from "./script_button_login.png";

const Article2 = () => {
  return (
    <article id="article-2" className="article-blog">
      <h2>2. Découverte des technologies</h2>
      <p>
        Les premiers jours de stages mon permi de découvrir les technologies que
        j'allais pouvoir manipuler : Power APP et Power Automate.
      </p>
      <div id="logo-container">
        <img src={LogoPowerApp} alt="logo eurial" id="logo-eurial" />
        <img src={LogoPowerAutomate} alt="logo eurial" id="logo-eurial" />
      </div>
      <p>
        Pour comprendre les bases de ces deux technos j'ai,dans un premier
        temps, été regarder leurs documentations. Après, avoir compris dans les
        grandes lignes le but de ces deux technologies je me suis lancé dans
        (mini-projet) afin de manipuler.
      </p>
      <p>
        Power app : C'est une plateforme de développement d'application créé par
        Microsoft. Cette technologie permet la création d'application en
        low-code/no-code: system du glisser déposer en oublier l'aspect langage
        de programmation.
      </p>
      <p>
        Power automate : Plateforme permettant de créer des flux de travail
        automatisé : programme se déclenchant en fonction d'un événement choisi
        (arrivé d'un email, création d'un fichier,...). Cette plateforme adopte
        également le principe du low-code/no-code.
      </p>
      <p>
        Ce mini-projet est un formulaire de connexion basique créé à l'aide de
        Power App:
      </p>
      <div id="app-images-container">
        <img src={LoginImage} alt="login" id="login-image" />
        <img src={ComposantImage} alt="composant" id="composant-image" />
        <p>
          PowerApp m'a également permi d'apprendre un nouveau langage : Le
          PowerFX.
        </p>
        <p>
          Power App, bien qu'étant en low-code/no-code, met quand même à
          disposition la possibilité de créer des script dans un language de
          programmation.
        </p>
        <img src={ScriptButton} alt="script button" id="script-button-image" />
      </div>
      <p>
        J'ai également manipuler Power Automate en liant un flux (script Power
        Automate) à cette application. Ce flux me permetais de crypter le mot de
        passe de l'utilisateur.
      </p>
      <p>
        Je me suis concentré sur l'apprentissage des technologies pendant
        environ 8 jours. Ce min-projet m'a permis de comprendre dans les grandes
        lignes PowerAPPs et Power Automate. Je me suis également familiarisé
        avec l'interface de la Power Plateform.
      </p>
      <section>
        <span>Le 23/06/2024</span>
        <span>2/5</span>
      </section>
    </article>
  );
};

export default Article2;
