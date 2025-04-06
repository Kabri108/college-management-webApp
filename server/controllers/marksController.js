// controllers/marksController.js
import Marks from "../models/Marks.js";

export const enterMarks = async (req, res) => {
  const { studentId, subjectId, marks, maxMarks, examDate } = req.body;
  try {
    const existingMarks = await Marks.findOne({ student: studentId, subject: subjectId, examDate });
    if (existingMarks) {
      return res.status(400).json({ message: "Marks already entered for this exam." });
    }

    const newMarks = new Marks({
      student: studentId,
      subject: subjectId,
      marks,
      maxMarks,
      examDate,
    });
    await newMarks.save();
    res.status(201).json({ message: "Marks entered successfully", newMarks });
  } catch (error) {
    res.status(400).json({ message: "Error entering marks", error: error.message });
  }
};

export const getStudentResults = async (req, res) => {
  try {
    const results = await Marks.find({ student: req.user._id }).populate("subject");
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch results", error: error.message });
  }
};

export const getSubjectResults = async (req, res) => {
  const { subjectId } = req.params;
  try {
    const results = await Marks.find({ subject: subjectId }).populate("student", "name email");
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch subject results", error: error.message });
  }
};
