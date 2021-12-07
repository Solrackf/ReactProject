import './IntUserReg.css'

export default function IntUserReg(props){
    return (
        <div className="container-int-user-reg">
            <span className="title-int-user-reg">Regístrate</span>
            <span className="subtitle-int-user-reg">Ingresa tus datos</span>
            <form action="" method="post" className="container-form-int-user-reg">
                <div className="form-int-user-reg">
                    <div>
                        <label className="label-int-user-reg">Nombre completo</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: Julanito de Tal"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Número de identificación</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 1234567890"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Teléfono</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 3214567890"/>
                    </div>
                    <div>
                        <label className="label-int-user-reg">Correo electrónico</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: johndoe@gmail.com"/>
                    </div>
                    {/* <div>
                        <label className="label-int-user-reg">Nro de Predio relacionado</label>
                        <input className="input-int-user-reg" type="text" placeholder="Ej: 0000000001"/>
                    </div> */}
                </div>
                <input type="submit" value="Crear cuenta" className="btn-int-user-reg"/>
            </form>
        </div>
    )
}
