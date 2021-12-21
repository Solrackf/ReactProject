import express from 'express';
import mongoose from 'mongoose';

import Estates from '../models/Estates.js';

const router = express.Router();

export const getEstate = async (req,res)=>{
    try {
        const estate = await Estates.find();

        console.log(estate);

        res.status(200).json(estate);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
};

export const createEstate = async (req, res) => {
    const { Owner, EstateDirection, Neighborhood, Stratum } = req.body;

    const newEstate = new Estates({ Owner, EstateDirection, Neighborhood, Stratum })

    try {
        await newEstate.save();

        res.status(201).json(newEstate);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEstate = async (req, res)=>{
    const { id } = req.params;
    const { Owner, EstateDirection, Neighborhood, Stratum } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Este predio no existe');
    
    const updatedEstate = { Owner, EstateDirection, Neighborhood, Stratum, _id: id }

    await Estates.findByIdAndUpdate(id, updatedEstate, { new:true} );

    res.json(updatedEstate)
}

export const deleteEstate = async (req, res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Este usuario no existe');
    
    await Estates.findByIdAndRemove(id);

    res.json({ message: 'Usuario eliminado exitosamente' })
}

export default router;