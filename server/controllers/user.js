import express from 'express';

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

export default router;