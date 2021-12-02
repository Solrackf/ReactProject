import './PredioRegister.css'

export default function PaymentLink(props){
    return (
        <div className="container">
            <span className="title">Registro de Predio</span>
            <span className="subtitle">Ingresa los datos</span>
            <form action="" method="post" className="containerForm">
                <div className="containerForm2">
                    <div>
                        <label className="label">Nombre completo del propietario</label>
                        <input className="input" type="text" placeholder="Ej: Julanito de Tal"/>
                    </div>
                    <div>
                        <label className="label">Número de identificación</label>
                        <input className="input" type="text" placeholder="Ej: 1234567890"/>
                    </div>
                    <div>
                        <label className="label">Dirección del predio</label>
                        <input className="input" type="text" placeholder="Ej: Carrera 1 Nro. 23-45"/>
                    </div>
                    <div>
                        <label className="label">Estrato económico</label>
                        <select name="" id="" className="input" >
                            <option selected value=" ">Selecciona el estrato</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Barrio</label>
                        <select name="" id="" className="input">
                            <option selected value=" ">Seleccione el barrio</option>
                            <option value="El Laguito">El Laguito</option>
                            <option value="Getsemaní">Getsemaní</option>
                            <option value="Cerro de la Popa">Cerro de la Popa</option>
                            <option value="Espinal">Espinal</option>
                            <option value="Canapote">Canapote</option>
                            <option value="Calamares">Calamares</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Ciudad</label>
                        <select name="" id="" className="input">
                            <option selected value=" ">Seleccione la ciudad</option>
                            <option value="Cartagena">Cartagena</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Departamento</label>
                        <select name="" id="" className="input">
                            <option selected value=" ">Seleccione el departamento</option>
                            <option value="Bolívar">Bolívar</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">País</label>
                        <select name="" id="" className="input">
                            <option selected value=" ">Seleccione el país</option>
                            <option value="Colombia">Colombia</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Registrar predio" className="btnRegistro"/>
            </form>
        </div>
    )
}
