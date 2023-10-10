import { Router } from "express";
import { profile, signIn, signUp } from '../controllers/auth.controller'
import {verifyToken} from '../middlewares/auth.middleware'


const router = Router();



router.post('/auth/signin', signIn);
router.post('/auth/signup', signUp);
router.post('/auth/profile', verifyToken, profile);

export default router;