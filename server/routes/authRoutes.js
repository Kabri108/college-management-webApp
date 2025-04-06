// routes/authRoutes.js
import express from "express";
import { loginUser, registerUser } from "../middleware/authController";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
