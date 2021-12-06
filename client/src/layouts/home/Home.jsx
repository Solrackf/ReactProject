import './home.css'
import WaveOne from '../../components/WaveOne/WaveOne'
import WaveTwo from '../../components/WaveTwo/WaveTwo'


export default function Home(props){
    return (
        <div className="Home">
            <WaveOne></WaveOne>
            <WaveTwo></WaveTwo>
            <section id="principalTitles">
                <h1>Las Aguas 
                    <span className="LittleTitle"><br/>Del Caribe</span>
                </h1>
                <div>
                    <a href="">
                        Pagar Facturas
                    </a>
                    <a href=""></a>
                </div>
            </section>
        </div>
    )
}