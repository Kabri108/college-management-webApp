// routes/dashboardRoutes.js
import express from "express";;
import { getDashboardStats } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, adminOnly, getDashboardStats);

export default router;
