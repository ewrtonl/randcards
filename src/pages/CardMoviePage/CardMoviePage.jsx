import { useState, useEffect } from "react";
import "./CardMoviePage.css";
import dataMovie from "../../cards/Movie";
import { CrownSimple, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardMoviePage() {
  const [clickedTipIndices, setClickedTipIndices] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const num1 = Math.floor(Math.random() * dataMovie.length);
    const num2 = Math.floor(Math.random() * dataMovie.length);
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
              index % 2 === 0 ? "even-tip-movie" : "odd-tip-movie"
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

      <div className="cardMovieContainer">
        {dataMovie[randomNumber].answer && (
          <>
            <h4>FILME & TV</h4>

            <div className="cardMovieAnswer">
              <h2>{dataMovie[randomNumber].answer}</h2>

              {dataMovie[randomNumber].suport && <Suport suport={dataMovie[randomNumber].suport} />}
            </div>

            <div className="tipsBox">
              <TipsList tips={dataMovie[randomNumber].tips} />
            </div>
          </>
        )}

        {dataMovie[randomNumber].power && (
          <div className="cardPower">
            <div>
              <CrownSimple size={32} />
            </div>

            <h3>{dataMovie[randomNumber].power}</h3>
            <p>{dataMovie[randomNumber].powerInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
