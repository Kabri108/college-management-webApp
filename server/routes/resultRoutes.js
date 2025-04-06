// routes/resultRoutes.js
import express from "express";
import { protect } from "../middleware/auth.js";
import { generateResultPDF } from "../controllers/resultController.js";

const router = express.Router();

router.get("/generate/:studentId", protect, generateResultPDF);

export default router;
