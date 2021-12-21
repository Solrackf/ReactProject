import Express from "express";
import { getEstate, createEstate, updateEstate, deleteEstate } from "../controllers/estate.js";

const router = Express.Router();

// CRUD Usuarios
router.get('/Estates', getEstate);
router.post('/newEstate', createEstate);
router.patch('/:id', updateEstate);
router.delete('/:id', deleteEstate);

export default router;