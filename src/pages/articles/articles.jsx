import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import ListArticles from "../../components/listArticles/listArticles";
import wave from "../../wave_bottom.svg"
import Article1 from "../../components/articles/1article/article";
import { useState } from "react";
import "./articles.scss"

const Articles = () => {
  const [articleId, setArticleId] = useState(0)
  const articlesComponent = [<Article1 />, <Article1 />, <Article1 />, <Article1 />, <Article1 />]
  return (
    <main>
      <Header page={"articles"} title={"Mon Expérience"} buttonMessage={"Apprenez-en plus sur mon stage"} buttonTarget={"articles-container"}></Header>
      <section id="main-articles-section">
        <section id="articles-container">
          <ListArticles setArticleId={setArticleId} articleId={articleId}></ListArticles>
          {articlesComponent[articleId]}
        </section>
        <img id="wave-main-bottom" src={wave}></img>
      </section>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Articles;