import './InvoicesStatus.css'
import Edit from "../../edit.png"
import Visible from "../../visible.png"
import Delete from "../../delete.png"

export default function InvoicesStatus(props) {
    return (
        <div className="Settings-Subsidios-invoices">
            <div className="container-settings-subsidios-invoices2">
                <p className="title-user-management-invoices">FACTURAS</p>
                <button className="btn-create-tax">Crear</button>
            </div>
            <div className="container-settings-subsidios-invoices">
                <div className="info-user-management-invoices">
                    <span className="title-user-management-invoices">Ref:##########</span>
                    <span className="title-user-management-invoices">Predio No: 1</span>
                    <div>
                        <label>Estado: </label>
                        <select name="" id="" className="input_estado-invoices" >
                            <option selected value=" "></option>
                            <option value="1">En mora</option>
                            <option value="2">Pendiente</option>
                            <option value="2">No genera pago</option>

                        </select>
                    </div>
                </div>
                <div className="icons-user-management-invoices">
                    <button className="btn-user-management-invoices"><img className="icon-user-management-invoices" src={Visible} alt="" id="Delete" /></button>
                    <button className="btn-user-management-invoices"><img className="icon-user-management-invoices" src={Edit} alt="" id="Delete" /></button>
                    <button className="btn-user-management-invoices"><img className="icon-user-management-invoices" src={Delete} alt="" id="Delete" /></button>
                </div>
            </div>
        </div>
    )
}