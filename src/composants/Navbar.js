import "../index.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-item">
        <a href="#/personal-page">About me</a>
      </div>

      <div className="Navbar-item">
        <a href="#/personal-page/CV">CV</a>
      </div>

      <div className="Navbar-item">
        <a href="#/personal-page/Projects">Projects</a>
      </div>

      <div className="Navbar-item">
        <a href="#/personal-page/Music">Music</a>
      </div>

      {/* <div className="Navbar-item">
        <a href="/personal-page/Travels">Travels</a>
      </div> */}

      <div className="Navbar-item">
        <a href="#/personal-page/Contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
