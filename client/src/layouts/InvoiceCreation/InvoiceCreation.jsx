import React, {Fragment} from 'react'
import './InvoiceCreation.css'
import InvCreation from '../../components/InvCreation/InvCreation'
import WaveOne from '../../components/WaveOne/WaveOne';
import WaveTwo from '../../components/WaveTwo/WaveTwo';

const InvoiceCreation = () => {
    return ( 
        <Fragment> 
            <div className="InvoiceCreation">
                <WaveOne></WaveOne>
                <WaveTwo></WaveTwo>
                <InvCreation/>
            </div>
        </Fragment>
    );
}

export default InvoiceCreation;