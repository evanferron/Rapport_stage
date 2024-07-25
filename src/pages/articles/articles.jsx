import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import ListArticles from "../../components/listArticles/listArticles";
import "./articles.scss"

const Articles = () => {
  return (
    <main>
      <Header page={"articles"} title={"Mon Expérience"} buttonMessage={"Apprenez-en plus sur mon stage"} buttonTarget={"main-list-articles"}></Header>
      <section id="main-articles-section">
        <ListArticles></ListArticles>
        <section id="wave-main-bottom"></section>
      </section>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Articles;