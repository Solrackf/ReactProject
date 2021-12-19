import Express from "express";
import { createUser, getUsers, updateUser } from "../controllers/user.js";

const router = Express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);

export default router;