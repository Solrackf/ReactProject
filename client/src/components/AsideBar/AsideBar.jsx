import React, {Fragment} from 'react';
import AsideBar from './AsideBar.css';

const asideBar = () => {
    return ( 
        <Fragment>
            <div className="aside-container">
                <div className ="subtitle-container">
                    <h4 className="subtitle">Hola</h4>
                    <h4 className="subtitle-name">Juan Paz</h4>
                </div>
                    <button className="search-button">Buscar</button>
            </div>
        </Fragment>
     );
}
 
export default asideBar;