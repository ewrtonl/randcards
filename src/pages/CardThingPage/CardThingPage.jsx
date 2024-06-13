import './CardThingPage.css'
import dataThing from '../../cards/Thing';
import { CaretLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom';

export default function CardThingPage() {

  const randomNumber = Math.floor(Math.random() * dataThing.length);
  
  console.log(randomNumber)
  console.log("tamanho: " + dataThing.length)
  console.log(dataThing[randomNumber].answer)

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li key={index} className={index % 2 === 0 ? 'even-tip-thing' : 'odd-tip-thing'}>
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

      <div className='cardThingContainer'>
        <h4>diga aos jogadores que sou uma COISA</h4>

        <h2>{dataThing[randomNumber].answer}</h2>

        <div className='tipsBox'>
        <TipsList tips={dataThing[randomNumber].tips} />
        </div>
      </div>

    </div>
  )
}