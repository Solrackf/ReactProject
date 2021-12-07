import './EditUsersManagement.css';

export default function EditUsersManagement(props){
    return (
        <div className="edit-users-management">
            <span>Edición de usuario</span>
            <form action="" className="form-edit-users-management">
                <div className="items-edit-users-management">
                    <div className="item-edit-users-management"><label>Nombre completo</label><input type="text" value="John Doe"/></div>
                    <div className="item-edit-users-management"><label>Número de identificación</label><input type="text" value="1234567890" readOnly/></div>
                    <div className="item-edit-users-management"><label>Teléfono</label><input type="text" value="3214567890"/></div>
                    <div className="item-edit-users-management"><label>Correo electrónico</label><input type="email" value="johndoe@gmail.com"/></div>
                </div>
                <input type="submit" value="Guardar cambios" className="save-edit-users-management"/>
            </form>
        </div>
    )
}
