import React, { useState, useEffect } from 'react';
import './EditEstate.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateEstate } from '../../actions/estates';

export default function PredioRegister({ currentId, setCurrentId }){
    const [ estateData, setEstateData ] = useState({
        Owner: '', EstateDirection: '', Neighborhood:'', Stratum:''
    });
    const estate = useSelector((state) => currentId ? state.estates.find((EstateDirection) => EstateDirection._id === currentId) : null);

    useEffect(() => {
        if(estate) setEstateData(estate);
    }, [estate])

    const clear = () => {
        setCurrentId(0);
        setEstateData({ Owner: '', EstateDirection: '', Neighborhood:'', Stratum:'' });
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateEstate(currentId, estateData));
        clear()
    }

    return (
        <div className="containerEstatesReg">
            <span className="titleEstatesReg">Edicion de Predio</span>
            <form onSubmit={handleSubmit} className="containerFormEstatesReg">
                <div className="containerForm2EstatesReg">
                    <div>
                        <label className="labelEstatesReg">Nro de identificación del propietario</label>
                        <input className="inputEstatesReg" type="text" placeholder="Ej: 1234567890" name="Owner" value={estateData.Owner} onChange={(e) => setEstateData({ ...estateData, Owner: e.target.value})}/>
                    </div>
                    <div>
                        <label className="labelEstatesReg">Dirección del predio</label>
                        <input className="inputEstatesReg" type="text" placeholder="Ej: Carrera 1 Nro. 23-45" name="EstateDirection" value={estateData.EstateDirection} onChange={(e) => setEstateData({ ...estateData, EstateDirection: e.target.value})}/>
                    </div>
                    <div>
                        <label className="labelEstatesReg">Barrio</label>
                        <input className="inputEstatesReg" type="text" placeholder="Ej: El Centro" name="Neighborhood" value={estateData.Neighborhood} onChange={(e) => setEstateData({ ...estateData, Neighborhood: e.target.value})}/>
                    </div>
                    <div>
                        <label className="labelEstatesReg">Estrato socioeconómico</label>
                        <select className="inputEstatesReg" name="Stratum" value={estateData.Stratum} onChange={(e) => setEstateData({ ...estateData, Stratum: e.target.value})}>
                            <option selected value=" " hidden>Selecciona el estrato</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Guardar cambios" className="btnRegistroEstatesReg"/>
            </form>
        </div>
    )
}
