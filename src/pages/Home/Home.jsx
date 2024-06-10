import './Home.css'
import logo from '../../assets/logo.svg'
import github from '../../assets/github-mark-white.svg'

export default function Home() {

  return (
    <div className='home'>
        
      <img className='logo' src={logo} alt="" />

      <div className='buttons-main'>
        <button>iniciar</button>
        <button>como jogar</button>
      </div>

      <div className='footer'>

        <a href="https://github.com/ewrtonl" target='_blank'>
            <img src={github} alt="" />
        </a>

        <div className='lang'>
            <p>🌎</p>
            <p>Portuguese</p>
        </div>
      </div>
      
    </div>
  )
}