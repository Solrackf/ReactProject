import React, { useState } from 'react';
import './IntUserReg.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users'

// import { Link } from 'react-router-dom'
export default function IntUserReg(){
    const [ userData, setUserData ] = useState({
        name: '', identification: '', phone:'', email:'', password:'', rol: '',
    });

    const clear = () => {
        setUserData({ name: '', identification: '', phone: '', Email: '', password: '' });
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createUser(userData));
        clear()
    }

    return (
        <div className="container-int-user-reg">
            <p className="title-int-user-reg">Regístrate</p>
            <p className="subtitle-int-user-reg">Ingresa tus datos</p>
            <form className="container-form-int-user-reg" method="POST" action='/' onSubmit={handleSubmit}>
                <div className="form-int-user-reg">
                    <div>
                        <label className="label-int-user-reg">Nombre completo</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: John Doe" name="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Número de identificación</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 0123456789" name='identification'  value={userData.identification} onChange={(e) => setUserData({ ...userData, identification: e.target.value})}/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Teléfono</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 3214567890" name="phone" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value})}/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Correo electrónico</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: johndoe@gmail.com" name='email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value})}/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Contraseña</label>
                        <input className="input-int-user-reg" type="password"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Confirmar contraseña</label>
                        <input className="input-int-user-reg" type="password" name='password' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value})}/>
                        <input type="hidden" name='rol' value='Usuario' onChange={(e) => setUserData({ ...userData, rol: e.target.value})} />
                    </div>
                </div>
                <button type="submit" className="btn-int-user-reg">Crear cuenta</button>
                {/* <Link className="btn-int-user-reg" to="/">Crear Cuenta</Link> */}
            </form>
        </div>
    )
}
