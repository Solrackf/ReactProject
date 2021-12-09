import React, {Fragment} from 'react';
import AsideBar from './AsideBar.css';

const asideBar = () => {
    return ( 
        <Fragment>
            <div className="aside-container">
                <div className ="subtitle-container">
                    <h4 className="subtitle">Hola</h4>
                    <p className="subtitle-name">Juan Paz</p>
                </div>
                <button className="search-button">Buscar</button>
            </div>
        </Fragment>
    );
}
export default asideBar;