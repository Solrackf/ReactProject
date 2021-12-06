import React, {Fragment} from 'react'
import WaveTwo from '../../WavesTwo.svg'    
import WaveThree from '../../WavesThree.svg'
import InvCreation from '../../components/InvCreation/InvCreation'

const InvoiceCreation = () => {
    return ( 
        <Fragment>
            <img src={WaveTwo} id="WaveTwo"/>     
            <img src={WaveThree} id="WaveThree"/>       
            <div>
                <InvCreation/>
            </div>
        </Fragment>
     );
}
 
export default InvoiceCreation;