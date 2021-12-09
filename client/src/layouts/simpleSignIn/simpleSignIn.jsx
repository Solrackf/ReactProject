import './simpleSignIn.css'
import PaymentLink from "../../components/PaymentLink/PaymentLink"
import PayImg from '../../Assets/Pay.svg'
import WaveOne from "../../components/WaveOne/WaveOne"
import WaveTwo from "../../components/WaveTwo/WaveTwo"
import { Link } from 'react-router-dom'

const simpleSignIn = () => {
    return (
        <div className="SimpleSignIn">
            <nav>
                <section id="Logo">
                    <Link to="/">
                        <img src="../Assets/Icon.ico" alt="" />
                        <p id="TypingLogo">Aguas Cartagena</p>
                    </Link>
                </section>
                <section id="RedirectOptions">
                    <Link to="/" className="ButtonGradientTwo">Ingresar
                    </Link>
                </section>
            </nav>
            <WaveOne></WaveOne>
            <WaveTwo></WaveTwo>
            <img src={PayImg} alt="" id="PayImg"/>
            <PaymentLink></PaymentLink>
        </div>
    )
}

export default simpleSignIn
