import Enrollment from "../models/Enrollment.js";

// ✅ Create Enrollment
export const createEnrollment = async (req, res) => {
  try {
    const { student, course, semester } = req.body;
    const enrollment = await Enrollment.create({ student, course, semester });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get all Enrollments
export const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate("student course");
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Enrollment by ID
export const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id).populate("student course");
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Enrollment Grade
export const updateEnrollmentGrade = async (req, res) => {
  try {
    const { grade } = req.body;
    const enrollment = await Enrollment.findByIdAndUpdate(req.params.id, { grade }, { new: true });
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Enrollment
export const deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
