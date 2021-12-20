import './EditUsersManagement.css'

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../actions/users';

export default function EditUsersManagement({ currentId, setCurrentId }){
    const [ userData, setUserData ] = useState({
        name: '', identification: '', phone:'', email:'', password:'', rol: ''
    });
    const user = useSelector((state) => currentId ? state.users.find((identification) => identification._id === currentId) : null);

    useEffect(() => {
        if(user) setUserData(user);
    }, [user])

    const clear = () => {
        setCurrentId(0);
        setUserData({ name: '', identification: '', phone: '', email: '', password: '' });
    };
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateUser(currentId, userData));
        clear();
    }

    return (
        <div className="container-edit-users-management">
            <span className="title-edit-users-management">Edición de usuario</span>
            <form className="container-form-edit-users-management" onSubmit={handleSubmit}> 
                <div className="form-edit-users-management" >
                    <div>
                        <label className="label-edit-users-management">Nombre completo</label>
                        <input className="input-edit-users-management" type="text" name='name' value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })}/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">Número de identificación</label>
                        <input className="input-edit-users-management" type="text" name='identification' value={userData.identification} onChange={(e) => setUserData({ ...userData, identification: e.target.value })}/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">Teléfono</label>
                        <input className="input-edit-users-management" type="text" name='phone' value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })}/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">Correo electrónico</label>
                        <input className="input-edit-users-management" type="text" name='email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">contraseña</label>
                        <input className="input-edit-users-management" type="text" name='password' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/>
                    </div>
                </div>
                <input type="submit" value="Guardar cambios" className="btn-edit-users-management"/>
            </form>
        </div>
    )
}