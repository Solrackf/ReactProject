import Express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/user.js";

const router = Express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;