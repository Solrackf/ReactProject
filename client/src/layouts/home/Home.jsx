import './home.css'
import WaveOne from '../../WaveOne.svg'
import WaveTwo from '../../WavesTwo.svg'    
import AsideBar from '../../components/AsideBar/AsideBar'
import UserLogData from '../../components/UserLogData/UserLogData';

export default function Home(props){
    return (
        <div className="container">{/* 
            <img src={WaveOne} alt="" id="WaveOne"/>
            <img src={WaveTwo} alt="" id="WaveTwo"/> */}
            <AsideBar/>
            <UserLogData/>
            {/* <nav>
                <ul>
                    <li><a href="#"><img src="" alt=""/></a></li>
                    <li>Elemento002</li>
                    <li>Elemento003</li>
                </ul>
            </nav> */}

        </div>
    )
}