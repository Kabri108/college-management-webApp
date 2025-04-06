// routes/feedbackRoutes.js
import express from "express";
import { submitFeedback, getAllFeedbacks } from "../controllers/feedbackController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, submitFeedback);
router.get("/", protect, adminOnly, getAllFeedbacks);

export default router;
