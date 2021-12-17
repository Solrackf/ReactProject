import Express from "express";
import { getHome, signUp } from '../controllers/home.js'

const router = Express.Router()

router.get('/', getHome)
router.post('/', signUp)

export default router