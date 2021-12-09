import {Fragment} from 'react'
import AsideBar from '../../components/AsideBar/AsideBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import UserInfo from '../../components/UserInfo/UserInfo'
import WaveOne from '../../components/WaveOne/WaveOne'
import WaveTwo from '../../components/WaveTwo/WaveTwo'
import './InternalUserDashboard.css'

const internalUser = () => {
    return ( 
        <Fragment>
            <div className="principal-state-container">
                <WaveOne/>
                <WaveTwo/>
                <SearchBar/>
                <AsideBar/>
                    <div className="invoice-container">
                        <UserInfo/>
                    </div>
            </div>
            
        </Fragment>
    );
}
export default internalUser;