import express from "express";
import {
  createExam,
  getExams,
  getExamById,
  updateExam,
  deleteExam,
} from "../controllers/examController.js";

const router = express.Router();

router.post("/", createExam); // Create an Exam
router.get("/", getExams); // Get all Exams
router.get("/:id", getExamById); // Get Exam by ID
router.put("/:id", updateExam); // Update Exam
router.delete("/:id", deleteExam); // Delete Exam

export default router;
