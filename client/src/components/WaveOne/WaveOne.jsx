import './WaveOne.css'
import WO from '../../Assets/WaveOne/WO1.svg'
import WO2 from '../../Assets/WaveOne/WO2.svg'

export default function WaveOne(){
    return(
        <div id="WaveOne">
            <img src={WO} alt="" id="w-o"/>
            <img src={WO2} alt="" id="w-o2"/>
        </div>
    )
}