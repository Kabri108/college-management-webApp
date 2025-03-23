import express from "express";
import {
  createEnrollment,
  getEnrollments,
  getEnrollmentById,
  updateEnrollmentGrade,
  deleteEnrollment,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", createEnrollment); // Create an Enrollment
router.get("/", getEnrollments); // Get all Enrollments
router.get("/:id", getEnrollmentById); // Get Enrollment by ID
router.put("/:id", updateEnrollmentGrade); // Update Enrollment Grade
router.delete("/:id", deleteEnrollment); // Delete Enrollment

export default router;
