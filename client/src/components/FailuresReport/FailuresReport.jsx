import './FailuresReport.css'

export default function FailuresReport(props){
    return (
        <div className="container_Failures">
            <span className="title_Failures">Reporte de fallo</span>
            <span className="subtitle_Failures">Ingresa los datos</span>
            <form action="" method="post" className="containerForm_Failures">
                <div className="containerForm2_Failures">
                    <div>
                        <label className="label_Failures">Fecha</label>
                        <input className="input_Failures" type="date"/>
                    </div>
                    <div>
                        <label className="label_Failures">Número de predio</label>
                        <input className="input_Failures" type="text" placeholder="Ej: 1"/>
                    </div>
                    <div>
                        <label className="label_Failures">Barrio</label>
                        <select name="" id="" className="input_Failures">
                            <option selected value=" ">Seleccione el barrio</option>
                            <option value="El Laguito">El Laguito</option>
                            <option value="Getsemaní">Getsemaní</option>
                            <option value="Cerro de la Popa">Cerro de la Popa</option>
                            <option value="Espinal">Espinal</option>
                            <option value="Canapote">Canapote</option>
                            <option value="Calamares">Calamares</option>
                        </select>
                    </div>
                    <div>
                        <label className="label_Failures">Dirección del predio</label>
                        <input className="input_Failures" type="text" placeholder="Ej: Carrera 1 Nro. 23-45"/>
                    </div>
                    <div>
                        <label className="label_Failures">Descripción</label>
                        <input className="input_reporte" type="textarea" placeholder="Descripcion"/>
                    </div>
                </div>
                <input type="submit" value="Enviar" className="btnRegistro_Failures"/>
            </form>
        </div>
    )
}
