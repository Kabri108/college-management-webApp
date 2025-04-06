// controllers/teacherController.js
import User from "../models/User.js";

// Add a new teacher
export const addTeacher = async (req, res) => {
  const { name, email, password, department } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    const teacher = await User.create({
      name,
      email,
      password,
      role: "teacher",
      department,
    });

    res.status(201).json({ message: "Teacher added", teacher });
  } catch (error) {
    res.status(500).json({ message: "Error adding teacher", error: error.message });
  }
};

// Get all teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: "teacher" }).select("-password");
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers", error: error.message });
  }
};

// Get single teacher
export const getTeacherById = async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.role !== "teacher") {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teacher", error: error.message });
  }
};

// Update teacher
export const updateTeacher = async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.role !== "teacher") {
      return res.status(404).json({ message: "Teacher not found" });
    }

    teacher.name = req.body.name || teacher.name;
    teacher.email = req.body.email || teacher.email;
    teacher.department = req.body.department || teacher.department;

    const updated = await teacher.save();
    res.json({ message: "Teacher updated", updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating teacher", error: error.message });
  }
};

// Delete teacher
export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher || teacher.role !== "teacher") {
      return res.status(404).json({ message: "Teacher not found" });
    }

    await teacher.remove();
    res.json({ message: "Teacher deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting teacher", error: error.message });
  }
};
