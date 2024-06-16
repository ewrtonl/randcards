import "./CardPlacePage.css";
import dataPlace from "../../cards/Place";
import { CaretLeft, CrownSimple, Axe } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardPlacePage() {
  const randomNumber = Math.floor(Math.random() * dataPlace.length);

  console.log(randomNumber);
  console.log(dataPlace[randomNumber].answer);

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? "even-tip-person" : "odd-tip-person"}
          >
            <span className="tip-index">{index + 1} </span> {tip}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Link to={"/gamemode"}>
        <button className="backButton">
          <CaretLeft size={18} />
          <p>voltar</p>
        </button>
      </Link>

      <div className="cardPlaceContainer">
        {dataPlace[randomNumber].answer && (
          <>
            <h4>LUGAR</h4>
            <h2>
              {dataPlace[randomNumber].answer}{" "}
              <span className="suportAnswer">
                {dataPlace[randomNumber].suport}
              </span>
            </h2>

            <div className="tipsBox">
              <TipsList tips={dataPlace[randomNumber].tips} />
            </div>
          </>
        )}

        {dataPlace[randomNumber].power && (
          <div className="cardPower">
            <div>
              <CrownSimple size={32} />
              <h4>CARD ESPECIAL</h4>
            </div>
            
            <h3>{dataPlace[randomNumber].power}</h3>
            <p>{dataPlace[randomNumber].powerInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
