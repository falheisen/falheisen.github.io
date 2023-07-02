import "../index.css";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";
import ProfExp from "../composants/ProfExp";
import safran from "../images/safran-logo.png";
import amazon from "../images/amazon-logo.png";
import ocec from "../images/occ-logo.png";
import france from "../images/france-icon.png";
import brazil from "../images/brazil-icon.png";
import amigosdapoli from "../images/adp-logo.png";
import policonsultingclub from "../images/policc-logo.png";
import centraleLyon from "../images/centralelyon-logo.png";
import USP from "../images/USP-logo.png";

function About() {
  return (
    <>
      <Header />
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
        <h1>Education</h1>
        <div className="ProfExp-above">
          <ProfExp
            Logo={centraleLyon}
            CompanyLink="https://www.ec-lyon.fr/"
            CompanyName="École Centrale de Lyon"
            Role="Master of Engineering"
            Year="2021 - 2023"
            City="Greater Lyon Area"
            CountryIcon={france}
          />
          <ProfExp
            Logo={USP}
            CompanyName="USP (Escola Politécnica)"
            CompanyLink="https://www.poli.usp.br/"
            Role="Bachelor of Engineering"
            Year="2018 - 2023"
            City="São Paulo"
            CountryIcon={brazil}
          />
        </div>
        <h1>Professional experiences</h1>
        <div className="ProfExp-above">
          <ProfExp
            Logo={safran}
            CompanyName="Safran Helicopter Engines"
            CompanyLink="https://www.safran-group.com/companies/safran-helicopter-engines"
            Role="Data Analyst Intern"
            Year="2023"
            City="Bordes"
            CountryIcon={france}
          />
          <ProfExp
            Logo={amazon}
            CompanyName="Amazon"
            CompanyLink="https://www.amazon.com/"
            Role="IT Intern"
            Year="2022"
            City="Greater Paris Area"
            CountryIcon={france}
          />
          <ProfExp
            Logo={ocec}
            CompanyName="ADVISIA OC&C Strategy Consultants"
            CompanyLink="https://www.occstrategy.com/"
            Role="Data Scientist Intern"
            Year="2021"
            City="São Paulo"
            CountryIcon={brazil}
          />
          <ProfExp
            Logo={ocec}
            CompanyName="ADVISIA OC&C Strategy Consultants"
            CompanyLink="https://www.occstrategy.com/"
            Role="Business Analyst"
            Year="2020"
            City="São Paulo"
            CountryIcon={brazil}
          />
        </div>
        <h1>Other activities</h1>
        <div className="ProfExp-above">
          <ProfExp
            Logo={amigosdapoli}
            CompanyName="Amigos da Poli"
            CompanyLink="https://www.amigosdapoli.com.br/"
            Role="Volunteer"
            Year="2019 - Present"
            City="São Paulo"
            CountryIcon={brazil}
          />
          <ProfExp
            Logo={policonsultingclub}
            CompanyName="Poli Consulting Club"
            Role="President"
            CompanyLink="https://www.policonsultingclub.com.br/"
            Year="2018 - 2020"
            City="São Paulo"
            CountryIcon={brazil}
          />
        </div>
      </div>
    </>
  );
}

export default About;
