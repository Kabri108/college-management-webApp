// routes/attendanceRoutes.js
import express from "express";
import {
  markAttendance,
  getStudentAttendance,
  getAttendanceByDate,
} from "../controllers/attendanceController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, markAttendance);
router.get("/student/:studentId", protect, getStudentAttendance);
router.get("/by-date", protect, getAttendanceByDate);

export default router;
