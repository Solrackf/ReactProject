import './PaymentLink.css'
// import { Link } from 'react-router-dom'

export default function PaymentLink(){
    return (
        <div className="container-PaymentLink">
            <p className="title">Pago De Factura</p>
            <input className="reference" type="text" placeholder="Ingrese Referencia de Pago"/>
            <a href="/MinState" className="search__payment">Consultar Factura</a>
            <div>
                <p className="text">¿Tienes Una Cuenta?</p>
                <a href="/" className='login'>Ingresar</a>
                {/* <Link to="/" className="login">Ingresar</Link> */}
            </div>
        </div>
    )
}