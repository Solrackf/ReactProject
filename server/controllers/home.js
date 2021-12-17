import Users from '../models/Users.js'

export const getHome = async (req,res)=>{
    try {
        const user = await Users.find()
        console.log(user)

        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const signUp = async (req,res) =>{
    const users = req.body
    const newUser = new Users(users)


    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message:error.message})
    }
}