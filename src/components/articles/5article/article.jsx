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
        Avant de conclure, je vais rapidement vous parler de des choses que je
        n'ai pas pus dire dans les articles précédents.
      </p>
      <p>
        Au-delà des compétences techniques que j'ai apprise et que je vous ai
        présenté précédemment, j'ai pu découvrir comment fonctionne une équipe,
        comment un projet était imaginé et approché ou encore 
      </p>
      <section>
        <span>Le 8/08/2024</span>
        <span>5/5</span>
      </section>
    </article>
  );
};

export default Article1;
