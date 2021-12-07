import './UsersManagement.css'
import Edit from "../../edit.png"
import Visible from "../../visible.png"
import Delete from "../../delete.png"

export default function UsersManagement(props){
    return (
        <div className="user-management">
            <div className="container-user-management">
                <div className="info-user-management">
                    <span className="title-user-management">John Doe</span>
                    <span className="subtitle-user-management">ID: 1234567890</span>
                </div>
                <div className="icons-user-management">
                    <button className="btn-user-management"><img className="icon-user-management" src={Edit} alt="" id="Delete"/></button>
                    <button className="btn-user-management"><img className="icon-user-management" src={Visible} alt="" id="Delete"/></button>
                    <button className="btn-user-management"><img className="icon-user-management" src={Delete} alt="" id="Delete"/></button>
                </div>
            </div>
        </div>
    )
}