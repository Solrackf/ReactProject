import './UserSignUp.css'
import { Link } from 'react-router-dom'
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
            <img src={imgSignUp} alt="" id="SignUpImg" />
            <IntUserReg></IntUserReg>
        </div>
    )
}

export default UserSignUp
