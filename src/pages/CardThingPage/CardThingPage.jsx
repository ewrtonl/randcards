import { useState, useEffect } from "react";
import "./CardThingPage.css";
import dataThing from "../../cards/Thing";
import { CrownSimple, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardThingPage() {
  const [clickedTipIndices, setClickedTipIndices] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const num1 = Math.floor(Math.random() * dataThing.length);
    const num2 = Math.floor(Math.random() * dataThing.length);
    const num3 = Math.floor(Math.random() * 4) + 1;
  
    const finalResult = num3 === 1 || num3 === 3 ? Math.min(num1, num2) : Math.max(num1, num2);
  
    setRandomNumber(finalResult);
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
          <X size={26} />
        </button>
      </Link>

      <div className="cardThingContainer">
        {dataThing[randomNumber].answer && (
          <>
            <h4>COISA</h4>

            <div className="cardThingAnswer">
              <h2>{dataThing[randomNumber].answer} </h2>

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
