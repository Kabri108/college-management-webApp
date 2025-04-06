// routes/leaveRoutes.js
import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { applyLeave, getAllLeaves, updateLeaveStatus } from "../controllers/leaveController.js";

const router = express.Router();

router.post("/", protect, applyLeave);
router.get("/", protect, adminOnly, getAllLeaves);
router.put("/:id/status", protect, adminOnly, updateLeaveStatus);

export default router;
