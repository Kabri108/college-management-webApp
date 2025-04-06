// routes/dashboardRoutes.js
import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", protect, adminOnly, getDashboardStats);

export default router;
