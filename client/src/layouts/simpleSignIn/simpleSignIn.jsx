import './simpleSignIn.css'
import PaymentLink from "../../components/PaymentLink/PaymentLink"
import PayImg from '../../Assets/Pay.svg'
import WaveOne from "../../components/WaveOne/WaveOne"
import WaveTwo from "../../components/WaveTwo/WaveTwo"
// import { Link } from 'react-router-dom'

const simpleSignIn = () => {
    return (
        <div className="SimpleSignIn">
            <nav>
                <section id="Logo">
                    <a href="/">
                        <img src="../Assets/Icon.ico" alt="" />
                        <p id="TypingLogo">Aguas Cartagena</p>
                    </a>
                </section>
                <section id="RedirectOptions">
                    <a href="/MinState" className="ButtonGradientTwo">Ingresar
                    </a>
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
