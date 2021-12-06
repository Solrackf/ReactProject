import './MeasureSetting.css'

export default function MeasureSetting(props){
    return (
        <div className="container">
            <span className="title">Unidad de Medida</span>
            <span className="subtitle">Elige una opción</span>
            <div className="options">
                <label className="text"><input type="radio" name="unidad" value="cm3"/>cm³</label>
                <label className="text"><input type="radio" name="unidad" value="dm3"/>dm³</label>
                <label className="text"><input type="radio" name="unidad" value="m3"/>m³</label>
            </div> 
            <input type="submit" value="Guardar" className="btnSave"/>
        </div>
    )
}