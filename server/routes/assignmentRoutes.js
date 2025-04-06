// routes/assignmentRoutes.js
import express from "express";
import upload from "../middleware/upload.js";
import { uploadAssignment, getAllAssignments } from "../controllers/assignmentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, upload.single("file"), uploadAssignment);
router.get("/", protect, getAllAssignments);

export default router;
