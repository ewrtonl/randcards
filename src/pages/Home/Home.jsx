import './Home.css'
import logo from '../../assets/logo.svg'
import github from '../../assets/github-mark-white.svg'
import { Link } from 'react-router-dom'
import { Globe } from '@phosphor-icons/react'

export default function Home() {

  return (
    <div className='home'>
        
      <img className='logo' src={logo} alt="" />

      <div className='buttons-main'>

        <Link to={"/gamemode"}>
        <button>iniciar</button>
        </Link>
        
        <button>como jogar</button>
      </div>

      <div className='footer'>

        <a href="https://github.com/ewrtonl" target='_blank'>
            <img src={github} alt="" />
        </a>

        <div className='lang'>
          <Globe size={22} />
          <p>Portuguese</p>
        </div>
      </div>
      
    </div>
  )
}