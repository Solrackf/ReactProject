import './UserSignUp.css'
// import { Link } from 'react-router-dom'
import IntUserReg from '../../components/IntUserReg/IntUserReg'
import imgSignUp from '../../Assets/SignUp.svg'
import WaveOne from '../../components/WaveOne/WaveOne'
import WaveTwo from '../../components/WaveTwo/WaveTwo'

const UserSignUp = () => {
    return (
        <div id="UserSignUp">
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
                    <a href="/SignIn" className="ButtonGradientTwo">Ingresar
                    </a>
                </section>
            </nav>
            <img src={imgSignUp} alt="" id="SignUpImg" />
            <IntUserReg></IntUserReg>
        </div>
    )
}

export default UserSignUp
