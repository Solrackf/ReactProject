import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import AsideBar from '../../components/AsideBar/AsideBar'
import UserLogData from '../../components/UserLogData/UserLogData'
import EditEstate from '../../components/EditEstate/EditEstate'

import States from './States.css'

import { getEstate } from '../../actions/estates';

const State = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEstate());
    }, [currentId, dispatch]);

    return ( 
        <Fragment>
            <div className="principal-state-container">
                <AsideBar/>
                <UserLogData setCurrentId={setCurrentId}/>
                <EditEstate currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
        </Fragment>
    );
}
export default State;