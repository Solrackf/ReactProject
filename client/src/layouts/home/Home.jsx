import './home.css'
import WaveOne from '../../WaveOne.svg'
import WaveTwo from '../../WavesTwo.svg'    
import AsideBar from '../../components/AsideBar/AsideBar'

export default function Home(props){
    return (
        <div className="container">
            <img src={WaveOne} alt="" id="WaveOne"/>
            <img src={WaveTwo} alt="" id="WaveTwo"/>
            <nav>
                <ul>
                    <li><a href="#"><img src="" alt=""/></a></li>
                    <li>Elemento002</li>
                    <li>Elemento003</li>
                </ul>
            </nav>
        </div>
    )
}