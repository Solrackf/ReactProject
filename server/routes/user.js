import Express from "express";
import { createUser, getUsers } from "../controllers/user.js";

const router = Express.Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;