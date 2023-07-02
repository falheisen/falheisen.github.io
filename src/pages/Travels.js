import "../index.css";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";
import MapComponent from "../composants/Map";

function Travels() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="Page">
        <h1>Already visited countries</h1>
        <p>
          <i>*Excluding Brazil and France</i>
        </p>
        <div className="Continents">
          <div>
            <b>Americas</b>
            <ul>
              <li>Chile (2019)</li>
              <li>USA (2009, 2015)</li>
            </ul>
          </div>
          <div>
            <b>Europe</b>
            <ul className="no-tab-focus">
              <li>Belgium (2021)</li>
              <li>Germany (2022, 2023)</li>
              <li>Luxemburg (2022)</li>
              <li>Netherlands (2022)</li>
              <li>Portugal (2017)</li>
              <li>Spain (2009, 2015)</li>
              <li>Switzerland (2022)</li>
            </ul>
          </div>
        </div>
        <MapComponent />
      </div>
    </>
  );
}

export default Travels;
