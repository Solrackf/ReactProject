import React, {Fragment} from 'react';
import "./UserInfo.css"
import profilePicture from "../../image-asset.jpg"
function userInfo() {/* 
    const invoice = document.getElementById('pdf-invoice'); */
    
    return (
        <Fragment>
            <div className="user-container">
                <div className="user-info">
                    <div>
                        <img src={profilePicture} width= "100px"/>
                        <ul>
                            <li><h3>Rober Galarga</h3></li>
                            <li>Cédula: 123451145</li>
                            <li>Teléfono: 3150000000</li>
                            <li>Dirección: Calle falsa 123</li>
                            <li>Email: robergalarga@gmail.com</li>
                        </ul>
                    </div>
                    <button className="btn-delete">Eliminar</button>
                </div>
                <div className="invoice">{/* 
                    <input type="file" name="pdf-invoice" id="pdf-invoice"/> */}                    
                    <embed className="embed" src="../../assets/factura-prueba.pdf" type="application/pdf" width="900" height="400"/>

                </div>
            </div>
        </Fragment>
    );
}
 
export default userInfo;