import "../index.css";
import photo from "../images/FilipePenna.jpeg";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <div className="Header">
      <img src={photo} alt="Filipe Penna photo" className="Header-image" />

      <div className="Header-title">
        Filipe Penna Ceravolo Soares<br></br>
        {/* Current Path: {currentPath} */}
      </div>

      <SocialMedia />

      <p>
        <i>Site last update: 11/06/2023</i>
      </p>
    </div>
  );
}

export default Header;
