// server.js
import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import marksRoutes from "./routes/marksRoutes.js";





dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/marks", marksRoutes);
app.use("/api/results", resultRoutes);


// To serve static uploaded files

app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));


const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
