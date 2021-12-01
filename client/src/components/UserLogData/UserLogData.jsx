import React, {Fragment} from 'react'
import UserLogData from './UserLogData.css'
const userLogData = () => {
    return ( 
        <Fragment>
            <div className="states-container">
                <div className="state">
                    <h4>Predio 1</h4>
                    <p>Dirección</p>
                    <p>Calle falsa #123</p>
                    <h4>Estado</h4>
                    <p>Pagado</p>
                </div>
                <div className="state">
                    <h4>Predio 2</h4>
                    <p>Dirección</p>
                    <p>Calle falsa #123</p>
                    <h4>Estado</h4>
                    <p>Pagado</p>
                </div>
                <div className="state">
                    <h4>Predio 3</h4>
                    <p>Dirección</p>
                    <p>Calle falsa #123</p>
                    <h4>Estado</h4>
                    <p>Mochado por impago</p>
                </div>
                <div className="state">
                    <h4>Predio 4</h4>
                    <p>Dirección</p>
                    <p>Calle falsa #123</p>
                    <h4>Estado</h4>
                    <p>Vencido</p>
                </div>
            </div>
        </Fragment>
     );
}
 
export default userLogData;