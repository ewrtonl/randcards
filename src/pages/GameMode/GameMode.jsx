import { useNavigate } from "react-router-dom";
import "./GameMode.css";
import { Link } from "react-router-dom";
import {
  FlyingSaucer,
  Television,
  Shuffle,
  HouseLine,
  Island,
  Person,
} from "@phosphor-icons/react";

export default function GameMode() {
  const navigate = useNavigate();

  function handleShuffle() {
    const random = Math.floor(Math.random() * 4) + 1;
    if (random === 1) {
      navigate("/personcard");
    } else if (random === 2) {
      navigate("/thingcard");
    } else if (random === 3) {
      navigate("/placecard");
    } else if (random === 4) {
      navigate("/moviecard");
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
            pessoa <Person size={28} />
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
            filme & tv <Television size={30} />
          </button>
        </Link>

        <button className="btnFive" onClick={handleShuffle}>
          aleatório ​<Shuffle size={30} />
          ​​​️​
        </button>
      </div>
    </div>
  );
}
