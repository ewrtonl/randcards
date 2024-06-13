import "./GameMode.css";
import { Link } from "react-router-dom";
import {
  FlyingSaucer,
  Person,
  GlobeHemisphereWest,
  Television,
  Shuffle,
  HouseLine,
  Smiley,
  Island,
} from "@phosphor-icons/react";

export default function GameMode() {
  return (
    <div className="gameModeContainer">

      <Link to={"/"} className="homeBtn">
        <HouseLine size={32} />
      </Link>

      <div className="gameMode">
        <Link to={"/personcard"} className="link">
          <button className="btnOne">
            pessoa <Smiley size={30} />
          </button>
        </Link>

        <Link to={"/thingcard"} className="link">
          <button className="btnTwo">
            coisa <FlyingSaucer size={30} />
          </button>
        </Link>

        <Link to={"/placecard"} className="link">
          <button className="btnThree">
            lugar <Island size={30} />
          </button>
        </Link>

        <Link to={"/moviecard"} className="link">
          <button className="btnFour">
            filme e tv <Television size={30} />
          </button>
        </Link>

        <button className="btnFive">
          aleatório ​<Shuffle size={30} />
          ​​​️​
        </button>
      </div>
    </div>
  );
}
