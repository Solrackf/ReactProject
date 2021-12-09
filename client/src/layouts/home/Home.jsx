import './home.css'
import WaveOne from '../../components/WaveOne/WaveOne'
import WaveTwo from '../../components/WaveTwo/WaveTwo'
import { Link } from 'react-router-dom'


export default function Home(props){
    return (
        <div className="Home">
            <WaveOne></WaveOne>
            <WaveTwo></WaveTwo>
            <nav>
                <section id="Logo">
                    <Link to="/">
                        <img src="../Assets/Icon.ico" alt="" />
                        <p id="TypingLogo">Aguas Cartagena</p>
                    </Link>
                </section>
                <section id="RedirectOptions">
                    <Link to="/SignUp">Registrarse
                    </Link>
                    <Link to="/" className="ButtonGradientTwo">Ingresar
                    </Link>
                </section>
            </nav>
            <section id="principalTitles">
                <h1>Las Aguas 
                    <span className="LittleTitle"><br/>Del Caribe</span>
                </h1>
                <div className="TitlesButtons">
                    <Link to="/simpleSignIn" className="ButtonGradient">
                        Pagar Facturas
                    </Link>
                    <Link to="/ReqRev">
                    Solicitar revisión
                    </Link>
                </div>
            </section>
        </div>
    )
}