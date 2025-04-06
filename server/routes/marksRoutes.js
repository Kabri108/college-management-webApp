// routes/marksRoutes.js
import express from "express";

import {
  enterMarks,
  getStudentResults,
  getSubjectResults,
} from "../controllers/marksController.js";
import { protect } from "../middleware/authMiddleware.js";
import { teacherOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, teacherOnly, enterMarks);
router.get("/myresults", protect, getStudentResults);
router.get("/subject/:subjectId", protect, teacherOnly, getSubjectResults);

export default router;
