import "../index.css";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";
import Curriculo from "../images/20230613 - CV Filipe Penna Ceravolo Soares.pdf";

function CV() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="Page">
        <iframe
          title="CV"
          src={Curriculo}
          height={"680vh"}
          width={"999vw"}
          frameborder="10"
        ></iframe>
      </div>
    </>
  );
}

export default CV;
