import { useState } from "react";
import "./entreprise.scss";
import wave from "../../wave_bottom.svg";
import EurialLogo from "./Eurial_logo.png";
import MapEurial from "./map_eurial.png";
import HistoireEurial from "./histoire_eurial.png";

const EntrepriseContent = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const contentEurial = (
    <section id="tab-content">
      <h2>C'est quoi Eurial ?</h2>
      <img src={EurialLogo} alt="logo Eurial" />
      <p>
        Branche lait du groupe coopératif AGRIAL, EURIAL collecte des laits
        d’élevages conventionnels et bio en vache et en chèvre. Ceux-ci sont
        transformés en produits laitiers et en ingrédients de spécialité, puis
        commercialisés auprès des GMS, de la RHD et des industriels.
      </p>
      <p>
        Forte de ses valeurs coopératives, de ses principes éthiques et de sa
        proximité avec les éleveurs adhérents d’AGRIAL, EURIAL s’investit en
        faveur d’une agriculture durable et d’une alimentation responsable.
      </p>
    </section>
  );
  const contentHistoire = (
    <section id="tab-content">
      <h2>Quelle est son histoire ?</h2>
      <img src={HistoireEurial} alt="histoire eurial" id="histoire-eurial" />
      <p>
        Eurial, fondée en 1989, est le pôle laitier du groupe coopératif Agrial.
        Spécialisée dans la transformation de produits laitiers, l’entreprise
        s'est d'abord concentrée sur les fromages de chèvre, notamment la marque
        Soignon. Au fil du temps, elle a diversifié son offre avec des produits
        comme le lait UHT et les fromages de vache. Après son intégration à
        Agrial en 2015, Eurial a renforcé sa présence internationale.
        Aujourd'hui, elle se distingue par son innovation, la qualité de ses
        produits et son engagement en faveur d'une production durable.
      </p>
    </section>
  );
  const contentOu = (
    <section id="tab-content">
      <h2>Où est présent Eurial ?</h2>

      <p>
        Son siège est à Nantes et ses sites de productions sont principalement
        en France.
      </p>
      <img src={MapEurial} alt="" id="map-eurial" />
      <p>
        Historiquement présente en France, EURIAL se développe à travers ses
        filiales (Belgique, Espagne, Italie, Angleterre, Allemagne, Pologne et
        Etats-Unis) et dans le reste du monde.
      </p>
    </section>
  );
  const contentEnvironnement = (
    <section id="tab-content">
      <h2>Comment est l'environnement de travail ?</h2>
      <p>
        J'ai effectuer mon stage au siège d'Eurial dans la partie du batiment
        qui regroupais les différents métier axés informatique.
        Cette partie est un grand open space, 
      </p>
    </section>
  );

  return (
    <section id="main-entreprise-section">
      <span>
        <button
          className={`${currentTab == 1 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(1);
          }}
        >
          <p>Eurial </p>
          <p className="question-mark">?</p>
        </button>
        <button
          className={`${currentTab == 2 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(2);
          }}
        >
          <p>Histoire </p>
          <p className="question-mark">?</p>
        </button>
        <button
          className={`${currentTab == 3 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(3);
          }}
        >
          <p>Où </p>
          <p className="question-mark">?</p>
        </button>
        <button
          className={`${currentTab == 4 ? "selected" : "unselected"}`}
          onClick={() => {
            setCurrentTab(4);
          }}
        >
          <p>L'Environment </p>
          <p className="question-mark">?</p>
        </button>
      </span>
      {
        [contentEurial, contentHistoire, contentOu, contentEnvironnement][
          currentTab - 1
        ]
      }
      <img id="wave-main-bottom" src={wave}></img>
    </section>
  );
};

export default EntrepriseContent;
