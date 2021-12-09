import React, {Fragment} from 'react'
import AsideBar from '../../components/AsideBar/AsideBar'
import UserLogData from '../../components/UserLogData/UserLogData'
// import WaveTwo from '../../WavesTwo.svg'    
// import WaveThree from '../../WavesThree.svg'
import States from './States.css'

const State = () => {
    return ( 
        <Fragment>
            {/* <img src={WaveTwo} id="WaveTwo"/>      */}
            <div className="principal-state-container">
                <AsideBar/>
                <UserLogData/>
            </div>
            {/* <img src={WaveThree} id="WaveThree"/>        */}
            
        </Fragment>
    );
}
export default State;