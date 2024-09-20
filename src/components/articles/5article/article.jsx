import React from "react";
import "../article.scss";
import "./article.scss";
import LogoEurial from "../../../assets/Eurial_logo.png";

const Article1 = () => {
  return (
    <article id="article-1" className="article-blog">
      <img src={LogoEurial} alt="logo eurial" id="logo-eurial" />
      <h2>5. Bilan</h2>
      <p>
        Avant de conclure, je souhaite aborder certains aspects que je n'ai pas
        mentionnés dans les articles précédents.
      </p>
      <p>
        Au-delà des compétences techniques que j'ai apprises et que je vous ai
        décrites, ce stage m'a également permis de découvrir le fonctionnement
        d'une équipe, la manière dont un projet est conçu et géré, ainsi que la
        vie quotidienne en entreprise en tant que collègue.
      </p>
      <p>
        Ce stage m'a permis de m'améliorer aussi bien techniquement que
        professionellement et même au-delà des choses que cela m'a apporté j'en
        garderai un excellent souvenir. Ces apprentissages seront précieux pour
        la suite de mon parcours, et je suis reconnaissant pour cette expérience
        enrichissante.
      </p>
      <p id="end-message">
        Je tiens à remercier chaleureusement l'équipe de transformation
        numérique qui m'a accueilli et accompagné tout au long de ce stage.
      </p>
      <section>
        <span>Le 8/08/2024</span>
        <span>5/5</span>
      </section>
    </article>
  );
};

export default Article1;
