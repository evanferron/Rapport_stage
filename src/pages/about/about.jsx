import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gotop from "../../components/gotop/gotop";

const About = () => {
  return (
    <main>
      <Header page={"about"} title={"A Propos"} buttonMessage={"Apprenez-en plus sur moi"}></Header>
      <Gotop></Gotop>
      <Footer></Footer>
    </main>
  );
};

export default About;
