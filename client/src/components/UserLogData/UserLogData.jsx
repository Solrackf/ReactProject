import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

import Edit from "../../edit.png"
import Delete from "../../delete.png"

import { useDispatch } from 'react-redux';
import { deleteEstate } from '../../actions/estates';

import './UserLogData.css'

const UserLogData = ({ setCurrentId }) => {
    const estates = useSelector((state) => state.estates);
    const dispatch = useDispatch();

    return ( 
        <Fragment>
            <div className="states-container">
                {estates.map((estate) =>(
                <div className="estate">
                    <h4>Predio</h4>
                    <p>{estate.EstateDirection}</p>
                    <p>{estate.Neighborhood}</p>
                    <p>{estate.Stratum}</p>
                    <h4>Estado</h4>
                    <p>Pagado</p>
                    <div className="iconsEstates">
                        <button className="btnEstates" onClick={() => {setCurrentId(estate._id)}}><img className="iconEstates" src={Edit} alt="" id="Edit"/></button>
                        <button className="btnEstates" onClick={() => dispatch(deleteEstate(estate._id))}><img className="iconEstates" src={Delete} alt="" id="Delete"/></button>
                    </div>
                </div>
                ))}
            </div>
        </Fragment>
    );
}

export default UserLogData;