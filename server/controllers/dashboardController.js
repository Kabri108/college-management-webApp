// controllers/dashboardController.js
import User from "../models/User.js";
import Department from "../models/Department.js";
import Subject from "../models/Subject.js";
import Assignment from "../models/Assignment.js";
import Notice from "../models/Notice.js";
import Attendance from "../models/Attendance.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: "student" });
    const totalTeachers = await User.countDocuments({ role: "teacher" });
    const totalDepartments = await Department.countDocuments();
    const totalSubjects = await Subject.countDocuments();
    const totalAssignments = await Assignment.countDocuments();
    const totalNotices = await Notice.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayAttendance = await Attendance.countDocuments({
      date: { $gte: today },
    });

    res.json({
      students: totalStudents,
      teachers: totalTeachers,
      departments: totalDepartments,
      subjects: totalSubjects,
      assignments: totalAssignments,
      notices: totalNotices,
      todayAttendance,
    });
  } catch (error) {
    res.status(500).json({ message: "Dashboard fetch error", error: error.message });
  }
};
