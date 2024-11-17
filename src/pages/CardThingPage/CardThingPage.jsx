import { useState, useEffect } from "react";
import "./CardThingPage.css";
import dataThing from "../../cards/Thing";
import { CaretLeft, CrownSimple, ArrowUpLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardThingPage() {
  const [clickedTipIndices, setClickedTipIndices] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * dataThing.length));
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

  const Suport = ({ suport }) => {
    return (
      <div className="suportAnswer">
        {suport.map((suport, index) => (
          <span key={index}>{suport}</span>
        ))}
      </div>
    );
  };

  /*const TipsLista = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li
            key={index}
            className={`${
              index % 2 === 0 ? "even-tip-thing" : "odd-tip-thing"
            } ${clickedTipIndices.includes(index) ? "clicked-tip" : ""}`}
            onClick={() => handleTipClick(index)}
          >
            <span className="tip-index">{index + 1} </span> {tip}
          </li>
        ))}
      </ul>
    );
  }; */

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li
            key={index}
            className={`${
              index % 2 === 0 ? "even-tip-thing" : "odd-tip-thing"
            } ${clickedTipIndices.includes(index) ? "clicked-tip" : ""}`}
            onClick={() => handleTipClick(index)}
          >
            <span className="tip-index">{index + 1}</span>
            {clickedTipIndices.includes(index) && ` ${tip}`}
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

      <div className="cardThingContainer">
        {dataThing[randomNumber].answer && (
          <>
            <h4>COISA</h4>

            <div className="cardThingAnswer">
              <h2>{dataThing[randomNumber].answer}{" "} </h2>

              {dataThing[randomNumber].suport && (
                  <Suport suport={dataThing[randomNumber].suport} />
                )}
            </div>

            <div className="tipsBox">
              <TipsList tips={dataThing[randomNumber].tips} />
            </div>
          </>
        )}

        {dataThing[randomNumber].power && (
          <div className="cardPower">
            <div>
              <CrownSimple size={32} />
            </div>

            <h3>{dataThing[randomNumber].power}</h3>
            <p>{dataThing[randomNumber].powerInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
