import Attendance from "../models/Attendance.js";

// Mark Attendance
export const markAttendance = async (req, res) => {
  try {
    const { student, course, status } = req.body;
    const attendance = await Attendance.create({ student, course, status });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Attendance
export const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("student course");
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
