// routes/feedbackRoutes.js
import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { submitFeedback, getAllFeedbacks } from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/", protect, submitFeedback);
router.get("/", protect, adminOnly, getAllFeedbacks);

export default router;
