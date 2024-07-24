import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import "./articles.scss"

const Articles = () => {
  return (
    <main>
      <Header page={"articles"} title={"Mon Expérience"} buttonMessage={"Apprenez-en plus sur mon stage"}></Header>
      <section id="main-articles-section">
        <section id="articles-container">

        </section>
        <section id="wave-main-bottom"></section>
      </section>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Articles;