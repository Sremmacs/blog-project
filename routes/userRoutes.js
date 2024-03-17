import express from "express";
const router = express.Router();
import{ registerUser } from "../controllers/usercontrollers";

router.post('/register, registerUser');

export default router