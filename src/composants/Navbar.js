import "../index.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-item">
        <a href="/">About me</a>
      </div>

      <div className="Navbar-item">
        <a href="/CV">CV</a>
      </div>

      <div className="Navbar-item">
        <a href="/Projects">Projects</a>
      </div>

      <div className="Navbar-item">
        <a href="/Music">Music</a>
      </div>

      <div className="Navbar-item">
        <a href="/Travels">Travels</a>
      </div>

      <div className="Navbar-item">
        <a href="/Contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
