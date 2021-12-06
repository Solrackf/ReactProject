import React, {Fragment, useState} from 'react'
import './SearchBar.css'

const SearchBar = () => {
    const [toggle, setToggle] = useState(true);
    const toggleSwitch = () =>{
        toggle ? setToggle(false) : setToggle(true);
    }   
    
    let btnClear = document.getElementById('searched');

    let clear = () =>{
        console.log(btnClear.value);
    }
    return ( 
        <Fragment>
            <div className="search-container">

                <div className={toggle ? 'search' : 'search active'}>
                    <div className="icon" onClick={toggleSwitch}></div>
                    <div className="input">
                        <input type="text" placeholder="Buscar" id="searched"/>
                        <span className="clear"></span>
                    </div>
                    
                </div>

            </div>
        </Fragment>
     );
}
 
export default SearchBar;