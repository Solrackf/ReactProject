import './YesRevReq.css'

export default function MeasureSetting(props){
    return (
        <div className="yes">
            <span>Por favor asigne fecha y hora para la revisón</span>
            <form action="" className="form-yes">
                <div className="form-yes-2">
                <label>Fecha<input type="date" className="datetime"/></label>
                <label>Hora<input type="time" className="datetime"/></label>
                </div>
                <input type="submit" className="send" value="Agendar"/>
            </form>
        </div>
    )
}