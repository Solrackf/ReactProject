import  mongoose  from "mongoose";

const UsersSchema = mongoose.Schema({
    UserId: Number,
    IdNumber: Number,
    UserName: String,
    UserPhone: Number,
    UserEmail: String,
    UserPassword: String,
    Rol: String,
})

const Users = mongoose.model('Users', UsersSchema)

export default Users