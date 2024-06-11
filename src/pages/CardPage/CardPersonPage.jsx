import './CardPersonPage.css'
import dataPerson from '../../cards/Person'

export default function CardPersonPage() {

  const randomNumber = Math.floor(Math.random() * dataPerson.length);
  
  console.log(randomNumber)
  console.log(dataPerson[randomNumber].answer)

  const TipsList = ({ tips }) => {
    return (
      <ul>
        {tips.map((tip, index) => (
          <li key={index} className={index % 2 === 0 ? 'even-tip' : 'odd-tip'}>
            <span className="tip-index">{index + 1} </span> {tip}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>

      <div className='cardPersonContainer'>
        <h4>diga aos jogadores que sou uma PESSOA</h4>

        <h2>{dataPerson[randomNumber].answer}</h2>

        <div className='tipsBox'>
        <TipsList tips={dataPerson[randomNumber].tips} />
        </div>
      </div>

    </div>
  )
}