import React from "react";
import "../article.scss";
import "./article.scss";
import LogoEurial from "../../../assets/Eurial_logo.png";
import ReceptionLitrage from "./flux1.png";
import EmailAsscoMoyon from "./screen_echantillon/email_assco_to_moyon.png";
import EmailMoyonAssco from "./screen_echantillon/email_moyon_to_assco.png";
import FormDemandeEch from "./screen_echantillon/formulaire_demande_echantillion.png";

const Article1 = () => {
  return (
    <article id="article-1" className="article-blog">
      <h2>4. Les modifications</h2>
      <p>
        En parallèle avec le projet de suppression des versions, j'ai pu
        également ajouter de nouvelles fonctionnalités à des projets existants.
      </p>
      <h3>.Flux de réception de litrage</h3>
      <p>
        Eurial s'occupe de la transformation du lait mais également de la
        récupération et du transport de celui-ci. Pour avoir un suivi sur le
        stockage de lait il est nécessaire de récupérer les comptes rendu de
        livraison des transports aux usines de fabrications. C'est pour cela
        qu'un flux(un programme) a été développé afin de récupérer ces comptes
        rendus et de les stocker dans un serveur de stockage. Il existe
        cependant un problème : il peut arriver que le serveur de stockage en
        question coupe la communication avec le flux pendant que celui-ci est en
        train de transférer des comptes rendus. Pour palier à ce problème, les
        développeurs du flux ont décidé de s'envoyer un mail dans lequel il
        aurait l'information qu'un des rendus n'as pas été transféré.
      </p>
      <p>
        Le problème de cette solution était que les informations renseignés dans
        le mail était insuffisante pour régler le problème à la main: Il
        manquait le rendu, le lien direct de l'exécution du flux et quelques
        autres informations complémentaires. Egalement, le statu de l'exécution
        du flux ne changeais pas si celui-ci ne se déroulait pas bien.
      </p>
      <p>
        Ma mission était donc d'arriver à renseigner les informations manquantes
        et de changer le statut d'exécution du flux losrqu'il est en erreur.
      </p>
      <img
        src={ReceptionLitrage}
        alt="flux qui gère la réception de litrage"
        className="img-modification"
      />
      <p>
        Cette mission m'a permis de comprendre la gestion d'erreur dans un flux
        Power Automate.
      </p>
      <h3>.Projet échantillon</h3>
      <p>
        Ce projet permet aux assistantes commerciales d'Eurial de faire des
        demandes d'échantillon aux laboratoires qui préparent les produits. Il
        fonctionne à partir d'un système de formulaire et d'email et à été créé
        par le stagiaire précédent Matias BELLAUD.
      </p>
      <p>
        Les assistantes commerciales ont demandé certains ajouts/modifications :
      </p>
      <ul>
        <li>Un système de pièces jointes dans le formulaire de demande</li>
        <li>
          Ajout d'information dans le corps des mails envoyés automatiquement
        </li>
        <li>Modifier la destination de ces emails</li>
      </ul>
      <p>
        J'ai commencé cette mission en ajoutant le système de pièces jointes au
        formulaire de demande :
      </p>
      <p>(Formulaire à été créé à l'aide de Power App)</p>
      <img src={FormDemandeEch} alt="" />
      <p>
        Cette mission m'a permis de me plonger dans un projet assez complet déjà
        existant.
      </p>
      <section>
        <span>Le 27/07/2024</span>
        <span>4/5</span>
      </section>
    </article>
  );
};

export default Article1;
