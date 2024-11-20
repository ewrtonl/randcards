import { useState, useEffect } from "react";
import "./CardPersonPage.css";
import dataPerson from "../../cards/Person";
import { CaretLeft, CrownSimple, ArrowUpLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function CardPersonPage() {
  const [clickedTipIndices, setClickedTipIndices] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const num1 = Math.floor(Math.random() * dataPerson.length);
    const num2 = Math.floor(Math.random() * dataPerson.length);
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

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li
            key={index}
            className={`${index % 2 === 0 ? "even-tip" : "odd-tip"} ${
              clickedTipIndices.includes(index) ? "clicked-tip" : ""
            }`}
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

      <div className="cardPersonContainer">
        {dataPerson[randomNumber].answer && (
          <>
            <h4>PESSOA</h4>

            <div className="cardPersonAnswer">
              <h2>{dataPerson[randomNumber].answer} </h2>

              {dataPerson[randomNumber].suport && (
                <Suport suport={dataPerson[randomNumber].suport} />
              )}
            </div>
            
            <div className="tipsBox">
              <TipsList tips={dataPerson[randomNumber].tips} />
            </div>
          </>
        )}

        {dataPerson[randomNumber].power && (
          <div className="cardPower">
            <div>
              <CrownSimple size={32} />
            </div>

            <h3>{dataPerson[randomNumber].power}</h3>
            <p>{dataPerson[randomNumber].powerInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
