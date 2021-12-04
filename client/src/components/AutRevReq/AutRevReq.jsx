import './AutRevReq.css'

export default function MeasureSetting(props){
    return (
        <div className="authorization">
            <span>¿Desea autorizar la Solicitud de Revisión 0000000001?</span>
            <div>
                <button>Si</button>
                <button>No</button>
            </div>
        </div>
    )
}