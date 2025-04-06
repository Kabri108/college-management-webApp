// routes/resultRoutes.js
import express from "express";
import { generateResultPDF } from "../controllers/resultController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/generate/:studentId", protect, generateResultPDF);

export default router;
