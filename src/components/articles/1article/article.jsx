import React from "react";
import "../article.scss";
import "./article.scss";
import LogoEurial from "../../../assets/Eurial_logo.png";
import Organnigrame from "./organnigrame.png";

const Article1 = () => {
  return (
    <article id="article-1" className="article-blog">
      <img src={LogoEurial} alt="logo eurial" id="logo-eurial" />
      <h2>1. Découverte de l'Entreprise, du lieu de travail et de l'équipe</h2>
      <p>
        Mon aventure au sein d'Eurial débute le 13 juin, ces premiers jours
        m'ont permis de rencontrer l'équipe que j'allais intégrer pendant ces 6
        semaines de stage.
      </p>
      <img src={Organnigrame} alt="" id="organnigrame" />
      <p>
        Après avoir rencontré l'équipe je me suis familiarisé avec le lieu de
        travail:
      </p>
      <ul>
        <li>Grand open space</li>
        <li>De nombreuse salles de réunions</li>
      </ul>
      <p>J'ai également pu participer à certaines réunions d'équipes.</p>
      <section>
        <span>Le 22/06/2024</span>
        <span>1/5</span>
      </section>
    </article>
  );
};

export default Article1;
