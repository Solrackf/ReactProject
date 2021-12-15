import './SignIn.css'
import WaveOne from "../../components/WaveOne/WaveOne"
import WaveTwo from "../../components/WaveTwo/WaveTwo"
import SignIn from '../../components/SignIn/SignIn'
import SignIngImg from '../../Assets/SignIn.svg'
import { Link } from 'react-router-dom'

const SignInView = () => {
    return (
        <div id="SignIn">
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
