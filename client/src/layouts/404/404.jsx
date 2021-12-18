import './404.css'
import img404 from '../../Assets/404.svg'
// import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="Error404">
            <a href="/">
                <img src="../Assets/Icon.ico" alt="" />
                <p id="TypingLogo">Aguas Cartagena</p>
            </a>
            <h1>Página no encontrada</h1>
            <img src={img404} alt="" id="img404" />
        </div>
    )
}

export default Error404
