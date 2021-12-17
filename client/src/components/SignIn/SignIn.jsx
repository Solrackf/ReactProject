import './SignIn.css'
import Logo from "../../Assets/Icon.ico"
// import { Link } from 'react-router-dom'

export default function SignIn(props){
    return (
        <div className="containerSignIn">
            <div className="contSignIn">
                <span className="subtitleSignIn">Bienvenido a</span>
                <div className="logoSignIn">
                    <img src={ Logo } alt="" />
                    <span>Aguas Cartagena</span>
                </div>
            </div>
            <form action="" method="post" className="formSignIn">
                <div>
                    <label className='labelSignIn'>Usuario</label>
                    <input className='inputSignIn' type="text" />
                </div>
                <div>
                    <label className='labelSignIn'>Contraseña</label>
                    <input className='inputSignIn' type="password" name="" id="" />
                </div>
                <input type="submit" value="Iniciar Sesión" className='btnSignIn'/>
                {/* <Link to="/InternalUserDashboard" className='btnSignIn'>Iniciar Sesión</Link> */}
            </form>
            <div className="contSignIn">
                <span className='textSignIn'>¿No tienes una cuenta?</span>
                <a href="/SignUp">Registrarse</a>
                {/* <Link to="/SignUp">Registrarse</Link> */}
            </div>
        </div>
    )
}
