import './IntUserReg.css'

export default function IntUserReg(){
    return (
        <div className="container-int-user-reg">
            <p className="title-int-user-reg">Regístrate</p>
            <p className="subtitle-int-user-reg">Ingresa tus datos</p>
            <form action="" method="post" className="container-form-int-user-reg">
                <div className="form-int-user-reg">
                    <div>
                        <label className="label-int-user-reg">Nombre completo</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: John Doe"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Número de identificación</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 0123456789"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Teléfono</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 3214567890"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Correo electrónico</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: johndoe@gmail.com"/>
                    </div>
                </div>
                <input type="submit" value="Crear cuenta" className="btn-int-user-reg"/>
            </form>
        </div>
    )
}
