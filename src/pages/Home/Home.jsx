import "./Home.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Globe, GithubLogo } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="" />

      <div className="buttons-main">
        <Link to={"/gamemode"}>
          <button>iniciar</button>
        </Link>

        <Link to={"/howtoplay"}>
          <button>como jogar</button>
        </Link>
      </div>

      <div className="footer">
        <a href="https://github.com/ewrtonl" target="_blank">
          <GithubLogo size={35} />
        </a>

        <div className="lang">
          <Globe size={22} />
          <p>Portuguese</p>
        </div>
      </div>
    </div>
  );
}
