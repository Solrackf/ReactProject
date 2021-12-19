import express from 'express';
import mongoose from 'mongoose';

import User from '../models/User.js';

const router = express.Router();

export const getUsers = async (req,res)=>{
    try {
        const user = await User.find();

        console.log(user);

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
};

export const createUser = async (req,res)=>{
    const newUser = new User({ name:req.body.name, identification:req.body.identification, phone:req.body.phone, email:req.body.email, password:req.body.password, rol:'Usuario' })
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error)

    }
}

export const updateUser = async (req, res)=>{
    const { id } = req.params;
    const { name, identification, phone, email, password } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Este usuario no existe');
    
    const updatedUser = { name, identification, phone, email, password, _id: id }

    await User.findByIdAndUpdate(id, updatedUser, { new:true} );

    res.json(updatedUser)
}

export default router;