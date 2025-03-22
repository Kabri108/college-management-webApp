import Exam from "../models/Exam.js";

// ✅ Create Exam
export const createExam = async (req, res) => {
  try {
    const { course, examDate, duration, maxMarks } = req.body;
    const exam = await Exam.create({ course, examDate, duration, maxMarks });
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get all Exams
export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate("course");
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Exam by ID
export const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id).populate("course");
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Exam
export const updateExam = async (req, res) => {
  try {
    const { examDate, duration, maxMarks } = req.body;
    const exam = await Exam.findByIdAndUpdate(
      req.params.id,
      { examDate, duration, maxMarks },
      { new: true }
    );
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Exam
export const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.status(200).json({ message: "Exam deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
