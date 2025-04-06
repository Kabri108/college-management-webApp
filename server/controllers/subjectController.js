// controllers/subjectController.js
import Subject from "../models/Subject.js";
import User from "../models/User.js";

// Create subject
export const createSubject = async (req, res) => {
  const { name, code, department, teacher } = req.body;

  try {
    const existing = await Subject.findOne({ code });
    if (existing) {
      return res.status(400).json({ message: "Subject code already exists" });
    }

    const subject = await Subject.create({ name, code, department, teacher });
    res.status(201).json({ message: "Subject created", subject });
  } catch (error) {
    res.status(500).json({ message: "Error creating subject", error: error.message });
  }
};

// Get all subjects
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("teacher", "name email");
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subjects", error: error.message });
  }
};

// Get subject by ID
export const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id).populate("teacher", "name email");
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subject", error: error.message });
  }
};

// Update subject
export const updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    subject.name = req.body.name || subject.name;
    subject.code = req.body.code || subject.code;
    subject.department = req.body.department || subject.department;
    subject.teacher = req.body.teacher || subject.teacher;

    const updated = await subject.save();
    res.json({ message: "Subject updated", updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating subject", error: error.message });
  }
};

// Delete subject
export const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    await subject.remove();
    res.json({ message: "Subject deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting subject", error: error.message });
  }
};
