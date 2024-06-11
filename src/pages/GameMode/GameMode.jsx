import './GameMode.css'
import { Link } from 'react-router-dom'
import { FlyingSaucer, Person, GlobeHemisphereWest, Television, Shuffle } from "@phosphor-icons/react"

export default function GameMode() {

  return (
    <div className='gameModeContainer'>

      <div className='gameMode'>

        <Link to={"/personcard"} className='link'>
          <button>pessoa <Person size={30} />​</button>
        </Link>
        
        <button>coisa <FlyingSaucer size={30} /></button>

        <button>lugar <GlobeHemisphereWest size={30} />​</button>

        <button>filme e tv <Television size={30} /></button>

        <button>aleatório ​<Shuffle size={30} />​​​️​</button>
      </div>
  
    </div>
  )
}