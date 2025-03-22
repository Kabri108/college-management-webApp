import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Import cookie-parser
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import enrollmentRoutes from './routes/enrollemntRoutes.js'
import examRoutes from './routes/examRoutes.js'
import noticeRoutes from './routes/noticeRoutes.js'
import resultRoutes from './routes/resultRoutes.js'
import attendanceRoutes from './routes/attendanceRoutes.js'
import feeRoutes from './routes/paymentRoutes.js'



dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Add cookie parser middleware

// Connect to database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/notice", noticeRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/fees", feeRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("🎓 College Management System API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}`));
