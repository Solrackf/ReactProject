import './PaymentLink.css'
import { Link } from 'react-router-dom'

export default function PaymentLink(){
    return (
        <div className="container-PaymentLink">
            <p className="title">Pago De Factura</p>
            <input className="reference" type="text" placeholder="Ingrese Referencia de Pago"/>
            <Link to="/MinState" className="search__payment">Consultar Factura</Link>
            <div>
                <p className="text">¿Tienes Una Cuenta?</p>
                <Link to="/" className="login">Ingresar</Link>
            </div>
        </div>
    )
}