import Express from "express";
import { getPosts } from "../controllers/post";

const router = Express.Router()



router.get('/',getPosts)

export default router