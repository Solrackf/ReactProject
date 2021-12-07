import React, {Fragment} from 'react'
import AsideBar from '../../components/AsideBar/AsideBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import UserInfo from '../../components/UserInfo/UserInfo'
import WaveTwo from '../../WavesTwo.svg'    
import WaveThree from '../../WavesThree.svg'
import './InternalUserDashboard.css'
import UserLogData from '../../components/UserLogData/UserLogData'

const internalUser = () => {
    return ( 
        <Fragment>
            <img src={WaveTwo} id="WaveTwo"/>     
            <img src={WaveThree} id="WaveThree"/>       
            <div className="principal-state-container">
                    <AsideBar/>
                <div className="invoice-container">
                    {/* <UserLogData/> */}
                    <SearchBar/>
                    <UserInfo/>
                </div>
            </div>
            
        </Fragment>
    );
}
 
export default internalUser;