// routes/teacherRoutes.js
import express from "express";
import {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, addTeacher);
router.get("/", protect, getAllTeachers);
router.get("/:id", protect, getTeacherById);
router.put("/:id", protect, updateTeacher);
router.delete("/:id", protect, deleteTeacher);

export default router;
