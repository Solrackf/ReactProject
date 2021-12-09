import React, {Fragment} from 'react';
import "./UserInfo.css"
import profilePicture from "../../image-asset.png"
function userInfo() {
    
    return (
        <Fragment>
            <div className="user-container">
                <div className="user-info">
                    <div>
                        <img src={profilePicture}/>
                        <ul>
                            <li>Rober Galarga</li>
                            <li>Cédula: 123451145</li>
                            <li>Teléfono: 3150000000</li>
                            <li>Dirección: Calle falsa 123</li>
                            <li>Email: robergalarga@gmail.com</li>
                        </ul>
                    </div>
                    <button className="btn-delete">Eliminar</button>
                </div>
                <div className="invoice">                
                    <embed className="embed" src="../../assets/factura-prueba.pdf" type="application/pdf" width="100%" height="100%"/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default userInfo;