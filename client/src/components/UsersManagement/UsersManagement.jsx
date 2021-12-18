import { useSelector } from 'react-redux';

import './UsersManagement.css'
import Edit from "../../edit.png"
// import Visible from "../../visible.png"
import Delete from "../../delete.png"
import { updatedUser } from '../../actions/users';
import { useDispatch } from 'react-redux';


export default function UsersManagement({ user }){
    const users = useSelector((state) => state.users);
    return (
        <div className="user-management">
            {users.map((user) => (
            <div className="container-user-management">
                <div className="info-user-management">
                    <span className="title-user-management">{user.name}</span>
                    <span className="subtitle-user-management">ID: {user.identification}</span>
                    <span className="subtitle-user-management">Teléfono: {user.phone}</span>
                    <span className="subtitle-user-management">Email: {user.email}</span>
                </div>
                <div className="icons-user-management">
                    <button className="btn-user-management"><img className="icon-user-management" src={Edit} alt="" id="Edit"/></button>
                    {/* <button className="btn-user-management"><img className="icon-user-management" src={Visible} alt="" id="Visible"/></button> */}
                    <button className="btn-user-management"><img className="icon-user-management" src={Delete} alt="" id="Delete"/></button>
                </div>
            </div>
            ))}
        </div>
    )
}