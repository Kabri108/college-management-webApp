// routes/leaveRoutes.js
import express from "express";

import { applyLeave, getAllLeaves, updateLeaveStatus } from "../controllers/leaveController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, applyLeave);
router.get("/", protect, adminOnly, getAllLeaves);
router.put("/:id/status", protect, adminOnly, updateLeaveStatus);

export default router;
