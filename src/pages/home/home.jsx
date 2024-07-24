import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";

const Home = () => {
  return (
    <main>
      <Header page={"home"} title={"Bienvenue"} buttonMessage={"Découvrez mon expérience à Eurial"} ></Header>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Home;
