import express from 'express';
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

import User from '../models/User.js';

const router = express.Router();

export const signIn = async (req, res) => {
    const { identification, password } = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ identification });
  
      if (!oldUser) return res.status(404).json({ message: "Este usuario no existe" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Datos no validos" });
    
      res.status(200).json({ result: oldUser });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  

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
    const { name, identification, phone, email, password, rol } = req.body;

    try {
        const oldUser = await User.findOne({ identification });

        if (oldUser) return res.status(400).json({ message: "Este usuraio ya existe"});

        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = User.create({ name, identification, phone, email, password:hashPassword, rol });

        res.status(201).json({ newUser });
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

export const deleteUser = async (req, res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Este usuario no existe');
    
    await User.findByIdAndRemove(id);

    res.json({ message: 'Usuario eliminado exitosamente' })
}

export default router;