import express from "express"
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../controllers/studentControllers.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

// Optional: Add protect middleware for role-based protection
router.get("/", protect, getAllStudents);
router.get("/:id", protect, getStudentById);
router.post("/", protect, createStudent);
router.put("/:id", protect, updateStudent);
router.delete("/:id", protect, deleteStudent);

export default router;
