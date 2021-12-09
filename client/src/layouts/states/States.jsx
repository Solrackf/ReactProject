import React, {Fragment} from 'react'
import AsideBar from '../../components/AsideBar/AsideBar'
import UserLogData from '../../components/UserLogData/UserLogData'
import States from './States.css'

const State = () => {
    return ( 
        <Fragment>
            <div className="principal-state-container">
                <AsideBar/>
                <UserLogData/>
            </div>
            
        </Fragment>
    );
}
export default State;