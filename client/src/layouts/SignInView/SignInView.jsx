import './SignIn.css'
import WaveOne from "../../components/WaveOne/WaveOne"
import WaveTwo from "../../components/WaveTwo/WaveTwo"
import SignIn from '../../components/SignIn/SignIn'
import SignIngImg from '../../Assets/SignIn.svg'
// import { Link } from 'react-router-dom'

const SignInView = () => {
    return (
        <div id="SignIn">
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
                </section>
            </nav>
            <WaveOne/>
            <WaveTwo/>
            <SignIn/>
            <img src={SignIngImg} alt="" id="SignIngImg"/>
        </div>
    )
}

export default SignInView
