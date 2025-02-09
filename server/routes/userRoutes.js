import express from "express";
import { login, signup } from "../controller/User.js";
import verifyAuth from "../middleware/authMiddleware.js";

const router=express.Router();


router.post("/register",signup);
router.post("/login",login);




export default router;