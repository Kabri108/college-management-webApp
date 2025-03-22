import express from "express";
import {
  createResult,
  getResults,
  getResultById,
  updateResult,
  deleteResult,
} from "../controllers/resultController.js";

const router = express.Router();

router.post("/", createResult); // Create a Result
router.get("/", getResults); // Get all Results
router.get("/:id", getResultById); // Get Result by ID
router.put("/:id", updateResult); // Update Result
router.delete("/:id", deleteResult); // Delete Result

export default router;
