import './WaveTwo.css'
import WT1 from '../../Assets/WaveTwo/WT1.svg'
import WT2 from '../../Assets/WaveTwo/WT2.svg'
import WT3 from '../../Assets/WaveTwo/WT3.svg'
import WT4 from '../../Assets/WaveTwo/WT4.svg'

const WaveTwo = ()=>{
    return(
        <div id="WaveTwo">
            <img src={WT1} id="WT1" alt="" srcset="" />
            <img src={WT2} id="WT2" alt="" srcset="" />
            <img src={WT3} id="WT3" alt="" srcset="" />
            <img src={WT4} id="WT4" alt="" srcset="" />
        </div>
    )
}
export default WaveTwo