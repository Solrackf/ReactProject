import './PaymentLink.css'

export default function PaymentLink(props){
    return (
        <div className="container">
            <span className="title">Pago De Factura</span>
            <input className="reference" type="textarea" placeholder="Ingrese Referencia de Pago"/>
            <a href="" className="search">Consultar Factura</a>
            <span className="text">¿Tienes Una Cuenta?</span>
            <a href="" className="login">Ingresar</a>
        </div>
    )
}