import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";
import EntrepriseContent from "../../components/entreprise/entrepriseContent";

const Entreprise = () => {
  return (
    <main>
      <Header
        page={"entreprise"}
        title={"Présentation d'Eurial"}
        buttonMessage={"Apprenez-en plus sur Eurial"}
        buttonTarget={"main-entreprise-section"}
      ></Header>
      <EntrepriseContent></EntrepriseContent>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default Entreprise;
