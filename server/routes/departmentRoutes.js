import express from "express";
import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "../controllers/departmentControllers.js"

const router = express.Router();

router.post("/", createDepartment); // Create a new department
router.get("/", getDepartments); // Get all departments
router.get("/:id", getDepartmentById); // Get a single department by ID
router.put("/:id", updateDepartment); // Update department details
router.delete("/:id", deleteDepartment); // Delete a department

export default router;
