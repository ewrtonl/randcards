import { useState, useEffect } from "react";
import "./CardPlacePage.css";
import dataPlace from "../../cards/Place";
import { CaretLeft, CrownSimple, ArrowUpLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardPlacePage() {
  const [clickedTipIndices, setClickedTipIndices] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * dataPlace.length));
  }, []);

  if (randomNumber === null) {
    return null;
  }

  const handleTipClick = (index) => {
    setClickedTipIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li
            key={index}
            className={`${
              index % 2 === 0 ? "even-tip-place" : "odd-tip-place"
            } ${clickedTipIndices.includes(index) ? "clicked-tip" : ""}`}
            onClick={() => handleTipClick(index)}
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
          <ArrowUpLeft size={26} />
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
