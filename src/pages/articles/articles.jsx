import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";

const Articles = () => {
  return (
    <main>
      <Header page={"articles"} title={"Mon Expérience"} buttonMessage={"Apprenez-en plus sur mon stage"}></Header>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Articles;