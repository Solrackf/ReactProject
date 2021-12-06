import React, {Fragment} from 'react'
import "./InvCreation.css"
const InvCreation = () => {
    return ( 
        <Fragment>
            <div className="principal">
                <div className="inv-container">
                    <h3>Creación de Factura</h3>
                    <form action="">
                        <label for="numPredio">N° de predio</label>
                        <input id="numPredio" type="text" />

                        <label for="periodoFactura">Periodo de factura</label>
                        <input id="periodoFactura" type="text" />

                        <label for="consumoTotal">Consumo total</label>
                        <input id="consumoTotal" type="text" />

                        <label for="fechaLectura">Fecha de lectura</label>
                        <input id="fechaLectura" type="text" />

                        <label for="fechaOportuna">Fecha oportuna de pago</label>
                        <input id="fechaOportuna" type="text" />

                        <label for="observaciones">Observaciones</label>
                        <input id="observaciones" type="text" />

                        <input type="submit" id="btnEnviar" value="CREAR" />
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default InvCreation;