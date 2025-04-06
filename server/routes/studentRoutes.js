// routes/studentRoutes.js
import express from "express";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Optional: Add protect middleware for role-based protection
router.get("/", protect, getAllStudents);
router.get("/:id", protect, getStudentById);
router.post("/", protect, createStudent);
router.put("/:id", protect, updateStudent);
router.delete("/:id", protect, deleteStudent);

export default router;
