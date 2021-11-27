import './PaymentPanel.css'

export default function PaymentPanel(props){
    return (
        <div className="paycontainer">
            <div className="info">
                <ul>
                    <li>
                        <h2>Referencia De Pago</h2>
                        <p>3216549870</p>
                    </li>
                    <li>
                        <h2>Valor A Pagar</h2>
                    <p>$73.000</p>
                    </li>
                    <li>
                        <h2>Fecha Oportuna De Pago</h2>
                        <p>nov/24/2021</p>
                    </li>
                    <li>
                        <h2>Fecha De Pago</h2>
                        <p>nov/18/2021</p>
                    </li>
                </ul>
            </div>
            <div className="factura">
                <ul>
                    <li>
                        <h2>Correo Electrónico</h2>
                        <p>usuario@gmail.com</p>
                    </li>
                    <li>
                        <h2>Métodos De Pago</h2>
                        <p>EFECTY</p>
                        <p>PSE</p>
                    </li>
                    <li>
                        <button class="FormBtn">Pagar</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}