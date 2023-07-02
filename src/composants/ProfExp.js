import "../index.css";

function ProfExp(props) {
  return (
    <div className="ProfExp">
      <div style={{ width: "100px" }}>{props.Year}</div>
      <div style={{ width: "169px" }}>{props.Role}</div>
      <a
        href={props.CompanyLink}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        target="_blank"
      >
        <div
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={props.Logo}
            alt="Enterprise logo"
            className="ProfExp-logo"
          />
        </div>
        <div style={{ width: "280px" }}>{props.CompanyName}</div>
      </a>
      <div style={{ width: "150px" }}>{props.City}</div>
      <div
        style={{
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={props.CountryIcon}
          alt="Contry logo"
          className="ProfExp-icon"
        />
      </div>
    </div>
  );
}

export default ProfExp;
