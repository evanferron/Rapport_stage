import React from "react";
import "../article.scss";
import "./article.scss";
import LogoPowerAutomate from "../2article/powerautomate_logo.png";
import LibraryLoop from "./boucle_bibliothèque.png";
import WhileLoop from "./boucle_while.png";
import FileCondition from "./condition_fichier.png";
import DeleteReport from "./rapport_suppression.png";
import GetRequestVersion from "./requete_recup_version.png";
import FluxSuppression from "./flux_suppression.png";

const Article3 = () => {
  return (
    <article id="article-3" className="article-blog">
      <h2>3. Première mission</h2>
      <img
        src={LogoPowerAutomate}
        alt="logo power automate"
        id="logo-powerautomate"
      />
      <p>
        J'ai travailler sur ce projet pendant une grande partie du stage et j'ai
        essentiellement manipuler Power automate dans cette mission.
      </p>
      <p>
        Sharepoint (=cloud Microsoft) propose un system de stockage partagé avec
        toute personne ayant accès à ce Sharepoint. Ce système de partage
        possède la fonctionnalité de stockage des versions précédentes. Si cette
        option est désactivée, un fichier n'est stocker que dans son état
        actuel. Si cette option est activée, elle offre la possibilité de stocké
        un nombre de versions définissable par l'administrateur ; l'inconvénient
        est que ce nombre ne peut pas être défini en dessous de 100.
      </p>
      <p>
        Si on décide d'activer cette option pour une meilleure sécurité et
        sauvegarde des données, l'espace disponible seras très vite réduit.
        Exemple : fichier.pptx de 100Mb de 100 versions prend une place de 10 G
      </p>
      <p>
        La solution est de créer un algorithme qui analyse et nettoie de façon
        régulière l'ensemble des fichiers stockés sur le Sharepoint. Avec pour
        objectif de ne stocker que les 10 versions précédentes de chaque
        fichier. Solution créée à l'aide de Power Automate.
      </p>

      <p>Ci-dessous des screen du flux :</p>
      <img src={FluxSuppression} alt="" className="img-flux-suppression" />
      <img src={LibraryLoop} alt="" className="img-flux-suppression" />
      <img src={WhileLoop} alt="" className="img-flux-suppression" />
      <img src={DeleteReport} alt="" className="img-flux-suppression" />

      <p>
        Ce projet m'a permis d'aborder de nombreuses fonctionnalités avancées de
        Power Automate :{" "}
      </p>
      <ul>
        <li>Parcours de sites sharepoint</li>
        <li>Analyse de données</li>
        <li>Création/Suppression de fichier</li>
      </ul>
      <p>
        J'ai travaillé sur ce projet une très grande partie de mon stage en
        parallèle avec d'autres missions.
      </p>
      <section>
        <span>Le 19/07/2024</span>
        <span>3/5</span>
      </section>
    </article>
  );
};

export default Article3;
