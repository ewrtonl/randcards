import { useNavigate } from "react-router-dom";
import "./GameMode.css";
import { Link } from "react-router-dom";
import {
  FlyingSaucer,
  Television,
  Shuffle,
  HouseLine,
  GlobeHemisphereWest,
  PersonArmsSpread,
} from "@phosphor-icons/react";

export default function GameMode() {
  const navigate = useNavigate();

  function handleShuffle() {
    const random = Math.floor(Math.random() * 4) + 1;
    switch (random) {
      case 1: return navigate("/personcard");
      case 2: return navigate("/thingcard");
      case 3: return navigate("/placecard");
      case 4: return navigate("/moviecard");
    }
  }

  return (
    <div className="gameModeContainer">
      <Link to={"/"} className="homeBtn">
        <HouseLine size={32} />
      </Link>

      <div className="gameMode">
        <Link to={"/personcard"} className="link">
          <button className="btnOne">
          <PersonArmsSpread size={28} /> pessoa
          </button>
        </Link>

        <Link to={"/thingcard"} className="link">
          <button className="btnTwo">
          <FlyingSaucer size={30} /> coisa
          </button>
        </Link>

        <Link to={"/placecard"} className="link">
          <button className="btnThree">
          <GlobeHemisphereWest size={30} /> lugar
          </button>
        </Link>

        <Link to={"/moviecard"} className="link">
          <button className="btnFour">
          <Television size={30} /> filme & tv
          </button>
        </Link>

        <button className="btnFive" onClick={handleShuffle}>
        ​<Shuffle size={30} /> aleatório
        </button>
      </div>
    </div>
  );
}
