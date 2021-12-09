import './SettingsSubsidios.css'
import Edit from "../../edit.png"
import Visible from "../../visible.png"
import Delete from "../../delete.png"

export default function SettingsSubsidios(props) {
    return (
        <div className="Settings-Subsidios">
            <div className="container-settings-subsidios2">
                <p className="title-user-management-subsidios">IMPUESTOS</p>
                <button className="btn-create-tax">Crear</button>
            </div>
            <div className="container-settings-subsidios">
                <div className="info-user-management-subsidios">
                    <span className="title-user-management-subsidios">Nombre del impuesto</span>
                    <span className="title-user-management-subsidios">Estrato: 1</span>
                    <span className="title-user-management-subsidios">Valor:</span>
                </div>
                <div className="icons-user-management">
                    <button className="btn-user-management-subsidios"><img className="icon-user-management-subsidios" src={Edit} alt="" id="Delete" /></button>
                    <button className="btn-user-management-subsidios"><img className="icon-user-management-subsidios" src={Delete} alt="" id="Delete" /></button>
                </div>
            </div>
        </div>
    )
}