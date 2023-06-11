import "../index.css";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";

function About() {
  return (
    <>
      <Header />

      <div className="Workspace">
        <Navbar />

        <div className="Page">
          <h1>Who am I?</h1>
          <p>
            Hello! My name is Filipe.
            <br></br>I invite you to get to know myself better through this
            website.
            <br></br>I was born in Brazil and I have lived, studied and worked
            both in Brazil and in France. <br></br>I speak fluently English (
            <a href="https://michiganassessment.org/michigan-tests/ecpe/">
              C2 ECPE
            </a>
            ), French (
            <a href="https://www.france-education-international.fr/article/dalf-c1?langue=fr">
              DALF C1
            </a>
            ) and Portuguese (native). <br></br>I love traveling, meeting new
            cultures and I am passionate about football and formula 1.
          </p>
          <h1>Professional experiences</h1>
          <ul>
            <li>
              2023 Data Analyst Intern at{" "}
              <a
                href="https://www.safran-group.com/fr/societes/safran-helicopter-engines"
                target="_blank"
              >
                {" "}
                Safran Helicopter Engines
              </a>{" "}
              (France)
            </li>
            <li>
              2022 IT Intern at{" "}
              <a href="https://www.amazon.com/" target="_blank">
                {" "}
                Amazon
              </a>{" "}
              (France){" "}
            </li>
            <li>
              2020-2021 Business Analyst / Data Scientist Intern at{" "}
              <a href="https://www.occstrategy.com" target="_blank">
                OC&amp;C
              </a>{" "}
              (Brazil)
            </li>
          </ul>
          <h1>Other activities</h1>
          <ul>
            <li>
              Volunteer at{" "}
              <a href="https://www.amigosdapoli.com.br/">Amigos da Poli</a>
            </li>
            <li>
              Former President of the{" "}
              <a href="https://www.policonsultingclub.com.br/">
                Poli Consulting Club
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
