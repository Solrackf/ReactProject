import './InfoRevReq.css'
import AutRevReq from '../AutRevReq/AutRevReq'
import YesRevReq from '../YesRevReq/YesRevReq'
import NoRevReq from '../NoRevReq/NoRevReq'

export default function MeasureSetting(props){
    return (
        <div className="container">
            <div className="container-info">
                <p><span className="subtitle">Número de Solicitud: </span><span className="text">0000000001</span></p>
                <p><span className="subtitle">Propietario: </span><span className="text">Julanito de Tal</span></p>
                <p><span className="subtitle">Número de identificación: </span><span className="text">1234567890</span></p>

                <p><span className="subtitle">Dirección del Predio: </span><span className="text">Carrera 1 Nro. 23 - 40 B/Ni idea</span></p>
                <p><span className="subtitle">Ciudad: </span><span className="text">Cartagena, Colombia</span></p>
                <p><span className="subtitle">Estrato Socioeconómico: </span><span className="text">1</span></p>
            </div>
            <div className="container-motivo">
                <span className="subtitle">Motivo:</span>
                <span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit a diam tincidunt ultricies quis blandit nisi. Vivamus consectetur egestas ante sed finibus. Ut sit amet fermentum erat. Integer aliquam vehicula aliquam. Donec posuere urna et est posuere dapibus. Phasellus non ex a tortor.</span>
            </div>
            <div>
                <AutRevReq/>

                {/* Si la respuesta es afirmativa: YesRevReq
                Si la repuesta es negativa: NoRevReq */}
            </div>
        </div>
    )
}