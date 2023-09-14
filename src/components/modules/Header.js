import tnsLogo from "../../assets/tns.svg";
import "../style.css";
import Modules from "../Modules";
import { Link } from "react-router-dom";
import useWindowDimensions from "../useWindowDimensions";

export default function Header() {
  const { width } = useWindowDimensions();
  return width > 950 ? (
    <div className="header backgroundColor">
      <div className="headerGroup">
        <Link to={"/tnsauto"}>
          <img
            src={tnsLogo}
            alt="TNS logo"
            style={{ width: "5rem", paddingRight: "1rem" }}
          />
        </Link>
        <div className="title">
          <h1
            style={{ marginBottom: "5%", fontSize: "40px", color: "#1b73bc" }}
          >
            TNS Auto Collision
          </h1>
        </div>
      </div>
      <Modules />
    </div>
  ) : (
    <div className="header backgroundColor">
      <div className="headerGroup">
        <Link to={"/tnsauto"}>
          <img
            src={tnsLogo}
            alt="TNS logo"
            style={{ width: "5rem", paddingRight: "1rem" }}
          />
        </Link>
        <div className="title">
          <h1
            style={{ marginBottom: "5%", fontSize: "40px", color: "#1b73bc" }}
          >
            TNS Auto Collision
          </h1>
        </div>
      </div>
      <Modules isButton={true} />
    </div>
  );
}