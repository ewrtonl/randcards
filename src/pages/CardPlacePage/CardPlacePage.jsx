import { useState, useEffect } from "react";
import "./CardPlacePage.css";
import dataPlace from "../../cards/Place";
import { CrownSimple, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardPlacePage() {
  const [clickedTipIndices, setClickedTipIndices] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const num1 = Math.floor(Math.random() * dataPlace.length);
    const num2 = Math.floor(Math.random() * dataPlace.length);
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
    )
  }

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

      <div className="cardPlaceContainer">
        {dataPlace[randomNumber].answer && (
          <>
            <h4>LUGAR</h4>

            <div className="cardPlaceAnswer">
              <h2>{dataPlace[randomNumber].answer}</h2>

              {dataPlace[randomNumber].suport && <Suport suport={dataPlace[randomNumber].suport} />}
            </div>
            
            <div className="tipsBox">
              <TipsList tips={dataPlace[randomNumber].tips} />
            </div>
          </>
        )}

        {dataPlace[randomNumber].power && (
          <div className="cardPower">
            <div>
              <CrownSimple size={32} />
            </div>

            <h3>{dataPlace[randomNumber].power}</h3>
            <p>{dataPlace[randomNumber].powerInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
