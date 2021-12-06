import './NoRevReq.css'

export default function MeasureSetting(props){
    return (
    <div className="no">
        <span>Por favor indique el motivo de la negación</span>
        <form action="" className="form-no">
            <textarea name="" id="" cols="50" rows="5" className="motivo"></textarea>
            <input type="submit" className="send" value="Enviar"/>
        </form>
    </div>
    )
}