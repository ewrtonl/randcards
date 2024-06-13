import './CardPlacePage.css'
import dataPerson from '../../cards/Person'
import { CaretLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom';

export default function CardPlacePage() {

  const randomNumber = Math.floor(Math.random() * dataPerson.length);
  
  console.log(randomNumber)
  console.log(dataPerson[randomNumber].answer)

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li key={index} className={index % 2 === 0 ? 'even-tip-person' : 'odd-tip-person'}>
            <span className="tip-index">{index + 1} </span> {tip}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>

      <Link to={"/gamemode"}>
        <button className='backButton'>
          <CaretLeft size={18} />
          <p>voltar</p>
        </button>
      </Link>

      <div className='cardPlaceContainer'>
        <h4>diga aos jogadores que sou um LUGAR</h4>

        <h2>{dataPerson[randomNumber].answer}</h2>

        <div className='tipsBox'>
        <TipsList tips={dataPerson[randomNumber].tips} />
        </div>
      </div>

    </div>
  )
}