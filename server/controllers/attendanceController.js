// controllers/attendanceController.js
import Attendance from "../models/Attendance.js";
import User from "../models/User.js";

// Mark attendance
export const markAttendance = async (req, res) => {
  const { studentId, date, status, subject } = req.body;

  try {
    const student = await User.findById(studentId);
    if (!student || student.role !== "student") {
      return res.status(404).json({ message: "Student not found" });
    }

    const attendance = await Attendance.create({
      student: studentId,
      date,
      status,
      subject,
    });

    res.status(201).json({ message: "Attendance marked", attendance });
  } catch (error) {
    res.status(500).json({ message: "Error marking attendance", error: error.message });
  }
};

// Get all attendance for a student
export const getStudentAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.params.studentId }).sort({ date: -1 });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance", error: error.message });
  }
};

// Get attendance by date
export const getAttendanceByDate = async (req, res) => {
  const { date } = req.query;
  try {
    const attendance = await Attendance.find({ date: new Date(date) }).populate("student", "name rollNumber");
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance", error: error.message });
  }
};
