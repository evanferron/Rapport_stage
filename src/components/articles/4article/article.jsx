import React from "react";
import "../article.scss";
import "./article.scss";
import LogoEurial from "../../../assets/Eurial_logo.png";

const Article1 = () => {
  return (
    <article id="article-1" className="article-blog">
      <img src={LogoEurial} alt="logo eurial" id="logo-eurial" />
      <h2>4. Les modifications</h2>
      <section>
        <span>Le 27/07/2024</span>
        <span>4/5</span>
      </section>
    </article>
  );
};

export default Article1;
