import React from "react";
import "../article.scss";
import "./article.scss";
import LogoPowerAutomate from "../2article/powerautomate_logo.png";
import LibraryLoop from "./boucle_bibliothèque.png";
import WhileLoop from "./boucle_while.png";
import FileCondition from "./condition_fichier.png";
import DeleteReport from "./rapport_suppression.png";
import GetRequestVersion from "./requete_recup_version.png";

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
        J'ai travailler sur ce projet pendant une grande partie du stage, ...
        J'ai essentiellement manipuler Power automate dans cette mission.
      </p>
      <p>
        Context : Sharepoint propose un system de stockage partagé avec toute
        personne ayant accès à ce Sharepoint. Ce system de partage possède la
        fonctionnalité de stockage des versions précédentes. Si cette option est
        désactivée, un fichier n'est stocké que dans son état actuel. Si cette
        option est activée, elle offre la possibilité de stocké un nombre de
        versions définissable par l'administrateur ; l'inconvénient est que ce
        nombre ne peut pas être défini en dessous de 100.
      </p>
      <p>
        Problème : Si on décide d'activer cette option pour une meilleure
        sécurité et sauvegarde des données, l'espace disponible seras très vite
        réduis. Exemple : fichier.pptx de 100Mb de 100 versions prend une place
        de 10 G
      </p>
      <p>
        Solution : Créer un algorithme qui analyse et nettoye de façon régulière
        l'ensemble des fichiers stockés sur le Sharepoint. Avec pour objectif de
        ne stocker que les 10 versions précédentes de chaque fichier. Solution
        créée à l'aide de Power Automate.
      </p>
      
      <section>
        <span>Le 22/06/2024</span>
      </section>
    </article>
  );
};

export default Article3;
