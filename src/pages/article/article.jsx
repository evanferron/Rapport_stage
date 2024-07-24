import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";

const Article = () => {
  return (
    <main>
      <Header page={"articles"}></Header>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Article;
