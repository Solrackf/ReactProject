import WO from '../../Assets/WaveOne/WO1.svg'
import WO2 from '../../Assets/WaveOne/WO2.svg'

export default function WaveOne(){
    return(
        <div id="WaveOne">
            <img src={WO} alt="" id="WO"/>
            <img src={WO2} alt="" id="WO2"/>
        </div>
    )
}