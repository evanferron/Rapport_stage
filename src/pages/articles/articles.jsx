import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import ListArticles from "../../components/listArticles/listArticles";
import wave from "../../wave_bottom.svg";
import Article1 from "../../components/articles/1article/article";
import Article2 from "../../components/articles/2article/article";
import Article3 from "../../components/articles/3article/article";
import Article4 from "../../components/articles/4article/article";
import Article5 from "../../components/articles/5article/article";
import { useState } from "react";
import "./articles.scss";

const Articles = () => {
  const [articleId, setArticleId] = useState(0);
  const articlesComponent = [
    <Article1 />,
    <Article2 />,
    <Article3 />,
    <Article4 />,
    <Article5 />,
  ];
  return (
    <main>
      <Header
        page={"articles"}
        title={"Mon Expérience"}
        buttonMessage={"Apprenez-en plus sur mon stage"}
        buttonTarget={"articles-container"}
      ></Header>
      <section id="main-articles-section">
        <section id="articles-container">
          <ListArticles
            setArticleId={setArticleId}
            articleId={articleId}
          ></ListArticles>
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
