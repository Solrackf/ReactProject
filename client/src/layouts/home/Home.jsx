import './home.css'
import WaveOne from '../../components/WaveOne/WaveOne'
import WaveTwo from '../../components/WaveTwo/WaveTwo'
// import { Link } from 'react-router-dom'

export default function Home(props){
    return (
        <div className="Home">
            <WaveOne></WaveOne>
            <WaveTwo></WaveTwo>
            <nav>
                <section id="Logo">
                    <a href="/">
                        <img src="../Assets/Icon.ico" alt="" />
                        <p id="TypingLogo">Aguas Cartagena</p>
                    </a>
                </section>
                <section id="RedirectOptions">
                    <a href="/SignUp">Registrarse
                    </a>
                    <a href="/SignIn" className="ButtonGradientTwo">Ingresar
                    </a>
                </section>
            </nav>
            <section id="principalTitles">
                <h1>Las Aguas 
                    <span className="LittleTitle"><br/>Del Caribe</span>
                </h1>
                <div className="TitlesButtons">
                    <a href="/simpleSignIn" className="ButtonGradient">
                        Pagar Facturas
                    </a>
                    <a href="/ReqRev">
                    Solicitar revisión
                    </a>
                </div>
            </section>
        </div>
    )
}