import "../index.css";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";
import MapComponent from "../composants/Map";

function Travels() {
  return (
    <>
      <Header />

      <div className="Workspace">
        <Navbar />

        <div className="Page">
          <h1>Already visited countries</h1>
          <p>
            <i>*Excluding Brazil and France</i>
          </p>
          <div className="Continents">
            <>
              <b>Americas</b>
              <ul>
                <li>Chile (2019)</li>
                <li>USA (2009, 2015)</li>
              </ul>
            </>
            <>
              <b>Europe</b>
              <ul>
                <li>Belgium (2021)</li>
                <li>Germany (2022, 2023)</li>
                <li>Luxemburg (2022)</li>
                <li>Netherlands (2022)</li>
                <li>Portugal (2017)</li>
                <li>Spain (2009, 2015)</li>
                <li>Switzerland (2022)</li>
              </ul>
            </>
          </div>
          <MapComponent />
        </div>
      </div>
    </>
  );
}

export default Travels;
