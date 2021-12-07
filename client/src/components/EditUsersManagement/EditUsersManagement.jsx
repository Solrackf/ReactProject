import './EditUsersManagement.css'

export default function EditUsersManagement(props){
    return (
        <div className="container-edit-users-management">
            <span className="title-edit-users-management">Edición de usuario</span>
            <form action="" method="post" className="container-form-edit-users-management">
                <div className="form-edit-users-management">
                    <div>
                        <label className="label-edit-users-management">Nombre completo</label>
                        <input className="input-edit-users-management" type="text" value="John Doe"/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">Número de identificación</label>
                        <input className="input-edit-users-management" type="text" value="1234567890"/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">Teléfono</label>
                        <input className="input-edit-users-management" type="text" value="3214567890"/>
                    </div>
                    <div>
                        <label className="label-edit-users-management">Correo electrónico</label>
                        <input className="input-edit-users-management" type="text" value="johndoe@gmail.com"/>
                    </div>
                </div>
                <input type="submit" value="Guardar cambios" className="btn-edit-users-management"/>
            </form>
        </div>
    )
}
