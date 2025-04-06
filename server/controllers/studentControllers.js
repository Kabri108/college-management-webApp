// controllers/studentController.js
import User from "../models/User.js";

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error: error.message });
  }
};

// Get single student
export const getStudentById = async (req, res) => {
  try {
    const student = await User.findById(req.params.id).select("-password");
    if (!student || student.role !== "student") {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student", error: error.message });
  }
};

// Create new student
export const createStudent = async (req, res) => {
  const { name, email, password, rollNumber, department } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Student already exists" });

    const student = await User.create({
      name,
      email,
      password,
      role: "student",
      rollNumber,
      department,
    });

    res.status(201).json({ message: "Student created", id: student._id });
  } catch (error) {
    res.status(500).json({ message: "Error creating student", error: error.message });
  }
};

// Update student
export const updateStudent = async (req, res) => {
  try {
    const student = await User.findById(req.params.id);
    if (!student || student.role !== "student") {
      return res.status(404).json({ message: "Student not found" });
    }

    const { name, email, rollNumber, department } = req.body;
    if (name) student.name = name;
    if (email) student.email = email;
    if (rollNumber) student.rollNumber = rollNumber;
    if (department) student.department = department;

    await student.save();
    res.json({ message: "Student updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error: error.message });
  }
};

// Delete student
export const deleteStudent = async (req, res) => {
  try {
    const student = await User.findById(req.params.id);
    if (!student || student.role !== "student") {
      return res.status(404).json({ message: "Student not found" });
    }

    await student.deleteOne();
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error: error.message });
  }
};
